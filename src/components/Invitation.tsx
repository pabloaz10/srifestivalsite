import React from 'react';
import { useState, useEffect } from 'react';

const Invitation: React.FC = () => {

  const url = 'https://forms.office.com/pages/responsepage.aspx?id=cYIpl9cbxUqTW4it3vY2zGmXMZhPMuVGt3o3ldp5851UN1RLSTdCVDZGQjhXWkZST0pWV0ZJTElTTS4u';

  const [isSticked, setIsSticked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Define o botão como "stiked" após rolar 100 pixels para baixo.
      if (window.scrollY > 100) {
        setIsSticked(true);
      } else {
        setIsSticked(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const actionButtonClasses = `
    block w-full text-center pt-4 pb-3 text-white font-bebas text-[28px] leading-[28px] 
    fixed bottom-0 left-0 transition-all duration-200 bg-[#0CE8F6]
    xl:w-max xl:px-8 xl:static
    ${isSticked ? 'xl:fixed xl:top-1.5 xl:right-1.5 xl:max-h-14' : ''}
  `;

  return (
    // Seção principal com imagem de fundo via 'style'
    <section
      className="z-50 pt-28 pb-48 xl:pt-40 xl:pb-[26rem]"
      style={{
        backgroundImage: `url('/src/assets/bg.png')`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
      }}
    >
      <div className="text-white">
        <div className="container mx-auto">

          {/* Título da Seção */}
          <h2 className="pr-11 p-2 font-bebas text-[26px] leading-[26px] tracking-wider max-w-[648px] xl:pr-0 xl:text-[58px] xl:leading-[58px]">
            Você é nosso convidado para essa experiência exclusiva!
          </h2>

          {/* Parágrafo de descrição */}
          <p className="mt-7 p-2 mb-9 font-museos500 text-xl leading-7 max-w-[900px] xl:text-[28px] xl:leading-[38px]">
            No SRI Festival, são 2 dias respirando ciência e tecnologia de forma acessível e democrática, para mostrar que a inovação é para todos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Invitation;