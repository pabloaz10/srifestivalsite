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
        className="relative bg-blue-600/50 min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `url('/src/assets/bg-speakers.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: 0.5 }}></div>

        <div className="relative z-10 text-left max-w-4xl ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            O maior evento de democratização da inovação está chegando!
          </h1>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-300">
            21 e 22 de Outubro
          </h2>
          <div className="mt-8 inline-block">
            <span className="bg-[#E40088] text-white text-lg sm:text-xl font-bold py-3 px-8 rounded-full shadow-lg">
              2 DIAS DE EVENTO GRATUITO
            </span>
          </div>
          <img
            className="absolute z-[-1] top-48 right-[-78%] opacity-20 transition-all duration-75 xl:top-0"
            src={'/src/assets/svg/map.svg'}
            alt="Map SVG - SRI"
          />
          <div className="mt-8 hidden">
            <button
              onClick={handleButtonClick}
              className="bg-[#0CE8F6] text-black text-xl font-bold py-4 px-8 rounded-full hover:bg-cyan-300 transition-colors shadow-lg"
            >
              Inscreva-se
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-[-2] bg-blue-600">
          <video muted autoPlay loop className="w-full h-full object-cover opacity-90">
            <source src={'/src/assets/mp4/video.mp4'} type="video/mp4" />
          </video>
        </div>
      </section>
      <Invitation />
    </>
  );
};

export default Hero;