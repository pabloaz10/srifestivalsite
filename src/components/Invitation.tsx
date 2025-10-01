import React from 'react';
import { useState, useEffect } from 'react';

const Invitation: React.FC = () => {

  const [isSticked, setIsSticked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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

  return (
    <section
      className="relative z-50 pt-28 pb-48 xl:pt-40 xl:pb-[26rem]"
      style={{
        backgroundImage: `url('/assets/bg.png')`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
      }}
    >
      <div className="text-white ">
        <div className="container mx-auto">
          <h2 className="pr-11 p-2 font-bebas text-[26px] leading-[26px] tracking-wider max-w-[648px] xl:pr-0 xl:text-[58px] xl:leading-[58px]">
            Você é nosso convidado para essa experiência exclusiva!
          </h2>
          <p className="mt-7 p-2 mb-9 font-museos500 text-xl leading-7 max-w-[900px] xl:text-[28px] xl:leading-[38px]">
            No SRI Festival, são 2 dias respirando ciência e tecnologia de forma acessível e democrática, para mostrar que a inovação é para todos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Invitation;