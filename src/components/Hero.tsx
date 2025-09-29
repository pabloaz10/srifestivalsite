import React from 'react';
import Invitation from './Invitation';

const Hero: React.FC = () => {
  // Lógica do botão de inscrição
  const handleButtonClick = () => {
    window.open('https://forms.office.com/pages/responsepage.aspx?id=cYIpl9cbxUqTW4it3vY2zGmXMZhPMuVGt3o3ldp5851UN1RLSTdCVDZGQjhXWkZST0pWV0ZJTElTTS4u', '_blank');
  };

  return (
    <>
      <section
        className="relative bg-blue-400/50 min-h-screen flex items-center justify-start py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `url('/assets/bg-speakers.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: 0.5 }}></div>

        <div className="relative z-10 text-left ml-74 mt-26 max-w-3xl ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bebas uppercase tracking-normal text-white leading-18">
            O maior evento de <br />democratização da <br />inovação está chegando!
          </h1>
          <h2 className="font-bebas mt-4 text-8xl sm:text-6xl md:text-8xl font-medium text-cyan-300">
            21 e 22 de Outubro
          </h2>
          <div className="mt-8 inline-block">
            <span className="bg-[#E40088] text-white text-4xl sm:text-4xl font-bold font-bebas py-1 px-10  shadow-lg">
              2 DIAS DE EVENTO GRATUITO
            </span>
          </div>
          <img
            className="absolute z-[-3] top-150 right-[-156%] opacity-20 xl:top-[-100px] transform scale-180"
            src={'/assets/svg/map.svg'}
            alt="Map SVG - SRI"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-[-2] bg-blue-600">
          <video muted autoPlay loop className="w-full h-full object-cover opacity-90">
            <source src={'/assets/mp4/video.mp4'} type="video/mp4" />
          </video>
        </div>
      </section>
      <Invitation />
    </>
  );
};

export default Hero;