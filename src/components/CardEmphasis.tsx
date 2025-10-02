import React from 'react';

const CardEmphasis = ({ time, pic, name, title, bio }) => {
  const defaultPic = '/assets/palestrantes/default-speaker.jpg';

  const formatTimeForDisplay = (timeStr) => {
    if (!timeStr) return '';
    return `${timeStr.slice(0, 2)}h00`;
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-center rounded-xl shadow-md transition-all duration-200 group hover:shadow-xl hover:scale-105">
      <div className="relative w-full h-full">
        <img
          className="object-cover w-full h-full transition-all duration-300 group-hover:opacity-60"
          src={pic || defaultPic}
          alt={`Palestrante - ${name}`}
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center text-white p-2 sm:p-4 text-center bg-opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
          style={{ paddingTop: '58%' }}>
          <span
            className="sm:text-xl md:text-2xl font-bold uppercase tracking-wider mb-1 leading-none [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]">
            {name}
          </span>
          {title && (
            <p className="mt-1 sm:mt-2 text-xs sm:text-base md:text-lg font-semibold text-gray-200 leading-tight [text-shadow:1px_1px_3px_rgba(0,0,0,0.6)]">
              {title}
            </p>
          )}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white p-4 sm:p-5 md:p-6 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <div className="absolute inset-0 bg-black bg-opacity-100 group-hover:opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-3 leading-none [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
            {name}
          </h1>
          {bio && <p className="text-lg font-semibold text-justify text-gray-200 leading-tight [text-shadow:1px_1px_3px_rgba(0,0,0,0.8)]">{bio}</p>}
          <br />
          {/* <h3 className="font-semibold [text-shadow:1px_1px_3px_rgba(0,0,0,0.8)]">Horario</h3>
          {time && <p className="description text-cyan-300 font-bold [text-shadow:1px_1px_3px_rgba(0,0,0,0.8)]">{formatTimeForDisplay(time)}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default CardEmphasis;