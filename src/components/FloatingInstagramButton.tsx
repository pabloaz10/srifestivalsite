import React from 'react';

const FloatingInstagramButton: React.FC = () => {
  const handleInstagramClick = () => {
    // Substitua pelo link do Instagram do Sri Festival
    window.open('https://instagram.com/srifestival', '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleInstagramClick}
      className="fixed right-4 bottom-4 z-50 group transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
      aria-label="Siga-nos no Instagram"
    >
      {/* Container do botão com gradiente */}
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full opacity-0 group-hover:opacity-75 blur-sm transition-opacity duration-300"></div>

        {/* Logo do Instagram */}
        <div className="relative z-10 w-8 h-8 flex items-center justify-center">
          <img
            src="/assets/svg/InstagramLogo.svg"
            alt="Instagram"
            className="w-6 h-6 filter brightness-0 invert"
          />
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Siga-nos no Instagram
        {/* Seta do tooltip */}
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </div>
    </button>
  );
};

export default FloatingInstagramButton;