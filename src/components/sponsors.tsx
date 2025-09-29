import React from 'react';

// This component expects a 'sponsors' prop.
// Example structure: [{ id: 1, type: 'Institutional', data: [{ id: 101, sponsor_name: 'Sponsor A', sponsor_image: { id: '...' } }] }]
const Sponsors = ({ sponsors = [] }) => {
  return (
    <div className="mt-5 ">
      <div className="container mx-auto">
        <div className="content">
          <h2 className="mb-5 font-bebas text-[#05b7c4] text-[26px] leading-[26px] tracking-wider xl:text-3xl xl:leading-[58px]">
            Parceiros Institucionais:
          </h2>
          {sponsors.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/80 font-museos500 text-lg">
                Novos parceiros serão anunciados em breve. Acompanhe nossas redes sociais!
              </p>
            </div>
          ) : (
            /* Outer loop for sponsor groups (e.g., Gold, Silver) */
            sponsors.map((sponsorGroup) => (
              <div key={sponsorGroup.id} className="flex flex-col">

                {/* Inner loop for individual sponsors within a group */}
                <ul className="flex flex-wrap items-start gap-12 mb-12">
                  {sponsorGroup.data.map((sponsor) => (
                    <li key={sponsor.id} className="flex flex-col gap-2 text-white">
                      <img
                        className="object-contain w-48 h-48"
                        src={`https://admin.srifestival.com.br/assets/${sponsor.sponsor_image.id}`}
                        alt={sponsor.sponsor_name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;