import React, { useMemo } from 'react';
import { format, parse } from 'date-fns';

// 1. IMPORTAÇÃO DO COMPONENTE FILHO
// Assumindo que você terá um componente CardEmphasis.jsx
import CardEmphasis from './CardEmphasis';

// Props:
// - filteredLineup: Array de palestrantes para exibir.
// - data: Array de dados brutos do evento (usado para a lógica interna).
// - bgImage: URL da imagem de fundo (adicionado com base no seu CSS).
const Emphasis = ({ filteredLineup = [], data = [], bgImage }) => {

  // 2. CONVERSÃO DA LÓGICA
  // Funções de formatação (substituindo os 'filters' do Vue)
  const formatTime = (timeStr) => format(parse(timeStr, 'HH:mm:ss', new Date()), 'HH:mm');
  const formatDate = (dateStr) => `Dia ${format(parse(dateStr, 'yyyy-MM-dd', new Date()), 'dd/MM')}`;

  // 'computed' do Vue foi convertido para 'useMemo' para otimização.
  // Esta lógica existia no seu script mas não era usada no template.
  // Mantive a conversão para ser fiel ao código original.
  const filteredData = useMemo(() => {
    return data.filter(event => event.status === 'draft');
  }, [data]); // Recalcula apenas se a prop 'data' mudar.

  const groupedEvents = useMemo(() => {
    return filteredData.reduce((acc, event) => {
      const dateKey = event.date;
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(event);
      return acc;
    }, {});
  }, [filteredData]); // Recalcula apenas se 'filteredData' mudar.

  return (
    // O :style do Vue foi convertido para o objeto 'style' do React
    <div
      id="line-up"
      className="pb-32"
      style={{
        background: bgImage ? `url(${bgImage}) top center no-repeat` : 'none'
      }}
    >
      <div className="content">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">

          <h1 className="text-white pr-5 text-center font-bebas text-[38px] leading-[32px] tracking-wider max-w-[470px] xl:pr-0 xl:text-[80px] xl:leading-[80px]">
            <span>OS </span>
            <span className="font-bold text-pink-500">NOMES </span>
            <span>DO </span>
            <span className="font-bold text-green-500">SRI FESTIVAL </span>
            <span>2025</span>
          </h1>

          <div className="speakers flex justify-center w-full h-full">
            {filteredLineup.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-white/80 font-museos500 text-lg max-w-md">
                  Os palestrantes de destaque serão anunciados em breve!
                </p>
              </div>
            ) : (
              <div className="line-up-calendar grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {filteredLineup.map((item) => (
                  <CardEmphasis
                    key={item.id}
                    time={item.time}
                    pic={item.pic}
                    name={item.name}
                    title={item.title}
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