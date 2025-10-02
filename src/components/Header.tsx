
import React from 'react';

const Header: React.FC = () => {
  const menu = [
    { name: 'O evento', url: '#event' },
    { name: 'Programação', url: '#programacao' }
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-30 py-5 pt-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-5">
        <div className="flex justify-items-start items-center">
          <div className="flex-shrink-0">
            <img src="/assets/svg/sri-logo.svg" alt="Sri Festival Logo" className="h-30" />
          </div>
          <nav className="hidden md:flex md:space-x-10 mx-24 pt-8">
            {menu.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-base font-medium text-gray-300 hover:text-white pr-2 transition-colors"
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
