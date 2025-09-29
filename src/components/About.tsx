import React from 'react';

const About: React.FC = () => {
  return (
    <div id="event" className="relative overflow-x-hidden pb-16 xl:pt-4 xl:pb-16">
      <div className="text-white">
        <div className="container mx-auto">
          <h2 className="font-bebas text-[26px] leading-[26px] p-2 tracking-wider max-w-[648px] xl:text-[58px] xl:leading-[58px]">
            O Evento
          </h2>
          <p className="mt-7 mb-9 font-museos500 text-xl leading-7 p-2 max-w-[700px] xl:text-[28px] xl:leading-[38px]">
            Mais do que um evento, o FESTIVAL DA INOVAÇÃO. Acessível e democrático, com
            atrações que vão desde o público diretamente interessado, até estudantes,
            empreendedores, investidores, futuristas, gestores públicos, pesquisadores,
            educadores, crianças, adolescentes, jovens e toda família. Para que tudo isso se
            concretize precisamos de parceiros que compartilham das nossas crenças e com
            o propósito de contribuir com nosso ecossistema de inovação.
          </p>

          <div className="mt-12 xl:mt-24">
            <span className="block mb-3 ml-16 w-max font-bebas text-xl tracking-widest text-[#0CE8F6] xl:text-2xl">
              Local de realização
              <span className="inline-block w-4 h-0.5 ml-0.5 bg-[#0CE8F6] animate-pulse ease-in" />
            </span>
            <a
              className="flex items-center gap-5"
              href="https://maps.app.goo.gl/pHi8zooFAF1nEnxp7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={'/assets/svg/place-map-pin.svg'} alt="Ponto de Localização no Google Maps" />
              <span className="ml-0.5 pr-10 text-xl xl:pr-0 xl:text-2xl">
                Villa do Farol, Cianorte - PR
              </span>
            </a>
          </div>
          <img
            className="hidden absolute w-[28%] mt-[-580px] right-[8rem] xl:block before:content-[''] before:absolute before:z-10 before:block before:w-full before:h-full before:rounded-full before:border-r-2 before:border-b-2 before:border-red-500"
            src={'/assets/svg/sri-logo.svg'}
            alt="Sri Logo"
            width="auto"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;