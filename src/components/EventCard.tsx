import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { format, parse } from 'date-fns';

const formatTime = (timeStr) => format(parse(timeStr, 'HH:mm:ss', new Date()), 'HH:mm');

export const EventCard = ({ event, isFirst, isLast }) => {
  const [isSticky, setIsSticky] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const cardTop = cardRef.current.offsetTop;
        const cardHeight = cardRef.current.clientHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > cardTop - 64) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultPic = '/assets/palestrantes/default-speaker.jpg';

  return (
    <div
      ref={cardRef}
      className="my-2 flex w-full items-center px-4 py-4 transition-all duration-200 xl:px-12 relative"
    >
      <h3 className="text-2xl font-bebas tracking-wider text-white xl:text-3xl">
        {formatTime(event.time)}
      </h3>

      {/* Progress Pointer */}
      <div className="hidden w-36 items-center justify-center xl:flex">
        <span
          className="z-20 block rounded-full ring-1 ring-white transition-all duration-500"
          style={{
            width: isSticky ? '28px' : '14px',
            height: isSticky ? '28px' : '14px',
            background: isSticky ? '#0CE8F6' : '#FFFFFF',
          }}
        ></span>
        {/* Hide the progress bar on the last item */}
        {!isLast && (
          <div
            className="absolute top-2/4 z-10 mt-[8px] block w-0.5 bg-white transition-all duration-150"
            style={{ height: isSticky ? '0' : '105%' }}
          ></div>
        )}
      </div>

      <img
        className={`my-5 aspect-square max-h-[106px] max-w-[106px] rounded-full border-2 object-cover object-center transition-all xl:mr-14 ${isSticky ? 'border-pink-500 border-opacity-100 border-4 animate-pulse' : 'border-white border-opacity-40'
          }`}
        src={event.pic || defaultPic}
        alt={`Palestrante - ${event.name}`}
      />

      <div className="flex w-full flex-col items-center text-white xl:items-start">
        <span
          className="text-center font-museos700 text-xl xl:text-left xl:text-2xl"
          dangerouslySetInnerHTML={{ __html: event.name }}
        />
        {event.title && (
          <p className="mt-3 mb-4 max-w-[600px] text-center text-lg text-[#0CE8F6] xl:text-left xl:text-base">
            {event.title}
          </p>
        )}
      </div>
    </div>
  );
};