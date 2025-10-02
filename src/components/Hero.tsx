import React from 'react';
import Invitation from './Invitation';

const Hero: React.FC = () => {
  // Lógica do botão de inscrição
  const handleButtonClick = () => {
    window.open('https://forms.office.com/pages/responsepage.aspx?id=cYIpl9cbxUqTW4it3vY2zGmXMZhPMuVGt3o3ldp5851UN1RLSTdCVDZGQjhXWkZST0pWV0ZJTElTTS4u', '_blank');
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
        <div className="relative z-20 text-left ml-74 mt-26 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bebas uppercase tracking-normal text-white leading-18">
            O maior evento de <br />democratização da <br />inovação está chegando!
          </h1>
          <h2 className="font-bebas mt-4 text-8xl sm:text-6xl md:text-8xl font-medium text-cyan-300">
            21 e 22 de Outubro
          </h2>
          <div className="mt-8 inline-block">
            <span className="bg-[#E40088] text-white text-4xl sm:text-4xl font-bold font-bebas py-1 px-10 shadow-lg">
              2 DIAS DE EVENTO GRATUITO
            </span>
          </div>
          <img
            className="absolute z-30 top-150 right-[-156%] opacity-20 xl:top-[-100px] transform scale-180"
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