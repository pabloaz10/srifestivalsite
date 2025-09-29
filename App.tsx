import React, { useState, useEffect } from 'react';
import mockDataService from './src/mock/mockDataService';

import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import LineUp from './src/components/LineUp';
import Organizers from './src/components/Organizers';

// 2. TYPESCRIPT INTERFACES FOR YOUR DATA
interface Sponsor {
  id: string;
  sponsor_name: string;
  sponsor_image: { id: string; title: string };
  sponsor_type: { id: string; sponsor_type_name: string };
}
interface SponsorType {
  id: string;
  sponsor_type_name: string;
}
interface GroupedSponsor {
  type: SponsorType;
  data: Sponsor[];
}
interface LineUpItem {
  id: string;
  name: string;
  time: string;
  date: string;
  pic?: string;
  bio?: string;
  title?: string;
  link?: string;
  status: string;
}
interface DayLineup {
  id: string;
  date_event: string;
  lineUp: LineUpItem[];
}
interface Organizer {
  id: string;
  name: string;
  description: string;
  logo: { id: string; title: string };
  website: string;
  type: string;
  status: string;
}


const groupBySponsorType = (types: SponsorType[], sponsors: Sponsor[]): GroupedSponsor[] => {
  return types.map((type) => {
    const filtered = sponsors.filter((sponsor) =>
      sponsor.sponsor_type.sponsor_type_name === type.sponsor_type_name
    );
    return { type, data: [...filtered] };
  });
};

const orderByTime = (arr: LineUpItem[]) =>
  [...arr].sort((a, b) => a.time.localeCompare(b.time));

// The Main App Component
const App = () => {
  // 4. STATE MANAGEMENT
  const [lineup, setLineup] = useState<DayLineup[]>([]);
  const [sponsors, setSponsors] = useState<GroupedSponsor[]>([]);
  const [organizers, setOrganizers] = useState<Organizer[]>([]);
  const [filteredLineup, setFilteredLineup] = useState<LineUpItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 5. DATA FETCHING WITH MOCK DATA
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        console.log('� Carregando dados mockados do SRI Festival...');

        // Use mock data service instead of API calls
        const { lineup, sponsors, sponsorTypes, organizers } = await mockDataService.getAllData();

        // Process sponsors
        if (sponsors && Array.isArray(sponsors) && sponsorTypes && Array.isArray(sponsorTypes)) {
          const groupedSponsors = groupBySponsorType(sponsorTypes, sponsors);
          setSponsors(groupedSponsors);
        }

        // Process lineup
        if (lineup && Array.isArray(lineup)) {
          const dataLineup = orderByTime(lineup);
          const filtered = lineup.filter((item: LineUpItem) =>
            item.status === 'published' || item.status === 'draft'
          );
          setFilteredLineup(filtered);

          // Group lineup by date
          const lineupByDate = dataLineup.reduce((acc: { [key: string]: LineUpItem[] }, item: LineUpItem) => {
            if (!acc[item.date]) {
              acc[item.date] = [];
            }
            acc[item.date].push(item);
            return acc;
          }, {});

          const finalLineup: DayLineup[] = Object.entries(lineupByDate).map(([date, items], index) => ({
            id: `day-${index}`,
            date_event: date,
            lineUp: orderByTime(items)
          }));

          setLineup(finalLineup);
        }

        // Process organizers
        if (organizers && Array.isArray(organizers)) {
          setOrganizers(organizers);
        }

        console.log('✅ Dados mockados carregados com sucesso!');

      } catch (err) {
        console.error('❌ Erro ao carregar dados mockados:', err);

        // Even if there's an error, set empty data to allow the app to load
        setSponsors([]);
        setLineup([]);
        setOrganizers([]);
        setFilteredLineup([]);
        setError(`Erro temporário ao carregar dados. Modo offline ativo.`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);  // 6. RENDER LOGIC
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto"></div>
          <p className="text-white text-xl mt-4">Carregando dados do SRI Festival...</p>
        </div>
      </div>
    );
  }

  // Render app even with errors, just show a warning banner
  const showErrorBanner = error && error.includes('indisponíveis');

  return (
    <div className="page relative">
      {showErrorBanner && (
        <div className="bg-yellow-500 text-black px-4 py-2 text-center text-sm font-medium">
          ⚠️ {error} - O site está funcionando em modo offline.
        </div>
      )}
      <Header />
      <Hero />
      <About />
      <LineUp data={lineup} sponsors={sponsors} filteredLineup={filteredLineup} />
      <Organizers organizers={organizers} />
    </div>
  );
};

export default App;