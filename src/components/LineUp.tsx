import React from 'react';
import { format, parse } from 'date-fns';

// Import all child components
import { EventCard } from './EventCard';
import Sponsors from './sponsors';
import Emphasis from './Emphasis';

// Import mock data
import mockPeriods from '../mock/periods';

// Import assets

// Props: data, sponsors, filteredLineup
const LineUp = ({ data = [], sponsors = [], filteredLineup = [] }) => {

  // Helper function to format date
  const formatDate = (dateStr) => `Dia ${format(parse(dateStr, 'yyyy-MM-dd', new Date()), 'dd/MM')}`;

  // Function to get period based on time
  const getPeriod = (timeStr) => {
    const hour = parseInt(timeStr.split(':')[0]);
    if (hour >= 6 && hour < 12) return 'manha';
    if (hour >= 12 && hour < 18) return 'tarde';
    return 'noite';
  };

  // Function to get period name and title from mock data
  const getPeriodInfo = (period, events, date) => {
    // Default fallback values
    const defaultPeriodNames = {
      manha: 'Manhã',
      tarde: 'Tarde',
      noite: 'Noite'
    };

    // Get period info from mock data or use defaults
    const periodData = mockPeriods[date]?.[period];

    if (periodData) {
      return {
        name: periodData.name,
        title: `${periodData.name} - ${periodData.title}`
      };
    }

    // Fallback: create titles based on events in the period
    const eventTitles = events
      .filter(event => event.status === 'atracao' || event.status === 'destaque')
      .map(event => event.name)
      .slice(0, 3) // Limit to 3 events for title
      .join(', ');

    const title = eventTitles
      ? `${defaultPeriodNames[period]} - ${eventTitles}`
      : defaultPeriodNames[period];

    return {
      name: defaultPeriodNames[period],
      title: title
    };
  };

  // Function to get status priority (lower number = higher priority)
  const getStatusPriority = (status) => {
    const priorities = {
      'abertura': 1,   // Highest priority - Opening events
      'atracao': 2,    // Second priority - Attractions  
      'palestra': 3,   // Third priority - Lectures
      'destaque': 4,   // Fourth priority - Featured speakers
      'evento': 5      // Lowest priority - General events
    };
    return priorities[status] || 6; // Default priority for unknown status
  };

  // Function to group events by period
  const groupEventsByPeriod = (events) => {
    const periods = { manha: [], tarde: [], noite: [] };

    events.forEach(event => {
      const period = getPeriod(event.time);
      periods[period].push(event);
    });

    // Sort events within each period by status priority first, then by time
    Object.keys(periods).forEach(period => {
      periods[period].sort((a, b) => {
        // First sort by status priority
        const priorityA = getStatusPriority(a.status);
        const priorityB = getStatusPriority(b.status);

        if (priorityA !== priorityB) {
          return priorityA - priorityB; // Lower number = higher priority
        }

        // If same priority, sort by time
        return a.time.localeCompare(b.time);
      });
    });

    return periods;
  };

  return (
    <div className="pb-32" style={{ background: `url('/assets/bg-speakers.png') top center no-repeat` }} id="programacao">

      <Emphasis filteredLineup={filteredLineup} data={data} bgImage={'/assets/bg-speakers.png'} />

      <div className="content">
        <div className="container mx-auto">
          <h2 className="font-bebas text-[26px] leading-[26px] tracking-wider text-white xl:text-[58px] xl:leading-[58px]">
            Programação
          </h2>
          <p className="mt-7 mb-9 max-w-[850px] font-museos500 text-xl leading-7 text-white xl:text-[28px] xl:leading-[38px]">
            Respire ciência e tecnologia numa programação fantástica! Confira o line-up desse grande evento, atrações para todos e de todas as idades!
          </p>

          <div className="mt-24 flex flex-col items-center gap-4">
            {/* Show message when no data is available */}
            {data.length === 0 ? (
              <div className="w-full max-w-2xl rounded-xl bg-white/10 backdrop-blur-sm p-8 text-center">
                <h3 className="font-bebas text-2xl text-white mb-4">Programação em Breve</h3>
                <p className="text-white/80 font-museos500">
                  A programação completa do evento será disponibilizada em breve.
                  Fique ligado nas nossas redes sociais para as últimas novidades!
                </p>
              </div>
            ) : (
              /* Map over each day's data */
              data.map((day) => {
                const periodGroups = groupEventsByPeriod(day.lineUp);

                return (
                  <div key={day.id} className="w-full rounded-xl">
                    {/* Day Header */}
                    <h1 className="sticky top-16 z-30 mx-auto w-max bg-white px-6 py-2 text-center font-bebas text-3xl font-bold text-black xl:mx-0 xl:ml-12 xl:text-left shadow-lg">
                      {formatDate(day.date_event)}
                    </h1>

                    {/* Period Groups */}
                    {Object.entries(periodGroups).map(([period, events]) => {
                      if (events.length === 0) return null;

                      const periodInfo = getPeriodInfo(period, events, day.date_event);

                      return (
                        <div key={period} className="mb-8">

                          <div className="mx-auto mt-3 w-max xl:mx-0 xl:ml-12 mb-4 ">
                            <h2 className=" text-[#37e3f0] bg-clip-text  font-bebas text-2xl font-bold xl:text-3xl">
                              {periodInfo.title}
                            </h2>
                          </div>

                          {/* Events in this period */}
                          {events.map((event, index) => (
                            <EventCard
                              key={event.id}
                              event={event}
                              isFirst={index === 0}
                              isLast={index === events.length - 1}
                            />
                          ))}
                        </div>
                      );
                    })}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      <Sponsors sponsors={sponsors} />
      {/* <Footer /> */}
    </div>
  );
};

export default LineUp;