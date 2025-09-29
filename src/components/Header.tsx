
import React from 'react';

const Header: React.FC = () => {
  const menu = [
    { name: 'O Evento', url: '#about' },
    { name: 'Programação', url: '#schedule' }
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-30 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img src="https://www.srifestival.com.br/_nuxt/img/sri-logo.729abab.svg" alt="Sri Festival Logo" className="h-10" />
          </div>
          <nav className="hidden md:flex md:space-x-10">
            {menu.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-base font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
