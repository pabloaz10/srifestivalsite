import React from 'react';
const Navbar = ({ menu = [] }) => {
  return (
    <nav className="z-50 top-0">
      <div className="content flex items-center">
        <a href="/">
          <img
            className="h-[80px] xl:h-[120px]"
            src={'/assets/svg/sri-logo.svg'}
            alt="Sri Logo"
            width="auto"
            height="auto"
          />
        </a>

        <div className="flex flex-1 items-center justify-between pt-7">
          <ul className="hidden font-sans xl:flex items-center gap-12 ml-24">
            {menu.map((link) => (
              <li key={link.name}>
                <a href={link.url} className="cursor-pointer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="/inscreva-se" className="hidden xl:block bg-[#0CE8F6] xl:px-8 text-center pt-4 pb-3 font-bebas text-white text-[28px] leading-[28px] cursor-pointer">
            Inscreva-se
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;