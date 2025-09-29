import React from 'react';

// Props: time, pic, name, title
const CardEmphasis = ({ time, pic, name, title }) => {
  // O 'data' do Vue foi convertido para constantes e funções dentro do componente.
  const defaultPic = 'https://admin.srifestival.com.br/assets/7d15d99b-37f9-4430-85e6-5e7c73cebd9c?fit=cover&width=106&height=106';

  // O 'filter' do Vue foi convertido para uma função helper.
  const formatTimeForDisplay = (timeStr) => {
    // Retorna a hora formatada, ex: "14h00" a partir de "14:00:00"
    if (!timeStr) return '';
    return `${timeStr.slice(0, 2)}h00`;
  };

  return (
    // A classe 'group' é adicionada aqui para habilitar os seletores 'group-hover' nos elementos filhos.
    <div className="relative flex flex-col items-center justify-center text-center rounded-xl shadow-md transition-all duration-200 group hover:shadow-xl hover:scale-105">

      {/* Container da Imagem */}
      <div className="relative w-full h-full">
        <img
          className="object-cover w-full h-full transition-all duration-200"
          // Renderização condicional para a imagem
          src={pic ? `https://admin.srifestival.com.br/assets/${pic}?fit=cover&width=300&height=300` : defaultPic}
          alt={`Palestrante - ${name}`}
        />

        {/* Overlay de Texto (visível por padrão, some no hover) */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center text-white p-2 sm:p-4 text-center bg-opacity-50 
                       transition-opacity duration-300 ease-in-out group-hover:opacity-0"
          style={{ paddingTop: '58%' }}> {/* Usando style para padding exato */}
          <span
            className="sm:text-xl md:text-2xl font-bold uppercase tracking-wider mb-1 leading-none 
                       [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]">
            {name}
          </span>
          {/* Renderiza o título apenas se ele existir */}
          {title && (
            <p className="mt-1 sm:mt-2 text-xs sm:text-base md:text-lg font-semibold text-gray-200 leading-tight 
                          [text-shadow:1px_1px_3px_rgba(0,0,0,0.6)]">
              {title}
            </p>
          )}
        </div>
      </div>

      {/* Overlay de Informações (invisível por padrão, aparece no hover) */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 
                     text-white p-4 sm:p-5 md:p-6 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <div>
          <h1 className="text-2xl font-bold mb-1 leading-none [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]">
            {name}
          </h1>
          {title && <p className="text-lg font-semibold text-gray-200 leading-tight">{title}</p>}
          <br />
          <h3>Hora da Palestra</h3>
          {time && <p className="description">{formatTimeForDisplay(time)}</p>}
        </div>
      </div>
    </div>
  );
};

export default CardEmphasis;