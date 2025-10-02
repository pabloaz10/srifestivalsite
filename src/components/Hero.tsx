import React from 'react';
import Invitation from './Invitation';

const Hero: React.FC = () => {
  // Lógica do botão de inscrição
  const handleButtonClick = () => {
    window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=cYIpl9cbxUqTW4it3vY2zDPil7ZNfxhOsdONGXuqCUJUQVFJNVlLOENWNkhVSlc0VFJSTFdSOEJFSy4u ');
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-start py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover opacity-10"
          >
            <source src={'/assets/mp4/video.mp4'} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-[#193869] opacity-10 z-10"></div>
        <div className="relative z-20 text-left px-4 sm:px-6 lg:ml-74 lg:mt-26 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bebas uppercase tracking-normal text-white leading-tight sm:leading-tight md:leading-tight lg:leading-18">
            O maior evento de <br />democratização da <br />inovação está chegando!
          </h1>
          <h2 className="font-bebas mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-cyan-300">
            21 e 22 de Outubro
          </h2>
          <div className="mt-6 sm:mt-8 inline-block">
            <span className="bg-[#E40088] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-bebas py-2 px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 lg:px-10 shadow-lg">
              2 DIAS DE EVENTO GRATUITO
            </span>
          </div>
          <button
            onClick={handleButtonClick}
            className="bg-[#37e3f0] text-black flex mt-6 sm:mt-8 md:mt-10 text-lg sm:text-xl font-bold py-3 px-6 sm:py-4 sm:px-8 hover:bg-[#04f7ff] transition-colors cursor-pointer shadow-lg hover:scale-105 transform duration-200"
          >
            Inscreva-se
          </button>
          <img className="absolute z-30 top-150 right-[-156%] opacity-20 xl:top-[-100px] transform scale-180 hidden lg:block"
            src={'/assets/svg/map.svg'}
            alt="Map SVG - SRI"
          />
        </div>
      </section>
      <Invitation />
    </>
  );
};

export default Hero;