import React, { useMemo } from 'react';
import { format, parse } from 'date-fns';
import CardEmphasis from './CardEmphasis';

const Emphasis = ({ filteredLineup = [], data = [], bgImage }) => {

  const formatTime = (timeStr) => format(parse(timeStr, 'HH:mm:ss', new Date()), 'HH:mm');
  const formatDate = (dateStr) => `Dia ${format(parse(dateStr, 'yyyy-MM-dd', new Date()), 'dd/MM')}`;

  const featuredSpeakers = useMemo(() => {
    return filteredLineup.filter(speaker => speaker.status === 'destaque');
  }, [filteredLineup]); return (
    <div
      id="line-up"
      className="pb-32"
      style={{
        background: bgImage ? `url(${bgImage}) top center no-repeat` : 'none'
      }}
    >
      <div className="content">
        <div className="container mx-auto flex flex-wrap justify-center gap-4 items-center">

          <h1 className="text-white pr-5 text-center font-bebas text-[38px] leading-[32px] tracking-wider max-w-[470px] xl:pr-0 xl:text-[80px] xl:leading-[80px]">
            <span>OS </span>
            <span className="font-bold text-pink-500">NOMES </span>
            <span>DO </span>
            <span className="font-bold text-green-500">SRI FESTIVAL </span>
            <span>2025</span>
          </h1>

          <div className="speakers flex justify-center w-full h-full">
            {featuredSpeakers.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-white/80 font-museos500 text-lg max-w-md">
                  Os palestrantes de destaque serão anunciados em breve!
                </p>
              </div>
            ) : (
              <div className="line-up-calendar grid grid-cols-2 gap-2 md:gap-10 xl:gap-10 items-center">
                {featuredSpeakers.map((item) => (
                  <CardEmphasis
                    key={item.id}
                    time={item.time}
                    pic={item.pic}
                    name={item.name}
                    title={item.title}
                    bio={item.bio}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emphasis;