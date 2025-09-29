import React from 'react';

const Schedule: React.FC = () => {
  return (
    <section
      id="schedule"
      className="py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#10052B]/90"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]" style={{ backgroundImage: `url('/assets/bg-schedule.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: 0.15 }}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Programação</h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Inovação, ciência e tecnologia numa programação fantástica! Confira o line-up desse grande evento, atrações para todos e de todas as idades!
          </p>
        </div>
        <div className="mt-16 text-left">
          <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-cyan-300 uppercase leading-none filter drop-shadow-lg">
            Os nomes do <br />
            SRI Festival <br />
            2024
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Schedule;