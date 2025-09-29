import React from 'react';

const Organizers = ({ organizers = [] }) => {
  return (
    <div className="pb-25 bg-green-500">
      <div className="container mx-auto">
        <div className="content">
          <h2 className="mb-5 font-bebas text-[#05b7c4] text-[26px] leading-[26px] tracking-wider xl:text-3xl xl:leading-[58px]">
            Realização:
          </h2>
          {organizers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/80 font-museos500 text-lg">
                Informações sobre a organização do evento serão divulgadas em breve!
              </p>
            </div>
          ) : (
            <div className="space-y-16">
              {(() => {
                const groupedOrganizers = organizers.reduce((acc, organizer) => {
                  const type = organizer.type || 'Outros';
                  if (!acc[type]) {
                    acc[type] = [];
                  }
                  acc[type].push(organizer);
                  return acc;
                }, {});
                return Object.entries(groupedOrganizers).map(([type, organizerList]) => (
                  <div key={type} className="flex flex-col">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                      {(organizerList as any[]).map((organizer) => (
                        <li key={organizer.id} className="flex flex-col items-center text-center text-white backdrop-blur-sm rounded-lg p-6 transition-all duration-300">
                          <div className="w-32 h-32 mb-4 flex items-center justify-center  rounded-lg overflow-hidden">
                            <img
                              className="object-contain w-full h-full p-2"
                              src={organizer.logo.id}
                              alt={organizer.logo.title || organizer.name}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          </div>
                          <h4 className="font-bebas text-xl mb-2 text-[#0CE8F6]">
                            {organizer.name}
                          </h4>
                        </li>
                      ))}
                    </ul>
                  </div>
                ));
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Organizers;