import React from 'react';
import type { Partner } from '../../types';

interface PartnersProps {
  title: string;
  partners: Partner[];
}

const Partners: React.FC<PartnersProps> = ({ title, partners }) => {
  return (
    <section className="py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold uppercase text-gray-400 tracking-wider">
          {title}
        </h2>
        <div className="mt-10">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-10 sm:gap-x-12 lg:gap-x-16">
            {partners.map((partner) => (
              <div key={partner.name} className="flex justify-center">
                <img
                  className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 brightness-200 hover:brightness-100 transition-all duration-300"
                  src={partner.logoUrl}
                  alt={partner.name}
                  width={158}
                  height={48}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;