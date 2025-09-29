
import React from 'react';

export const SriLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="0" y="30" fontFamily="Inter, sans-serif" fontSize="30" fontWeight="bold" fill="white">
      SRI
    </text>
    <text x="48" y="30" fontFamily="Inter, sans-serif" fontSize="30" fontWeight="normal" fill="white" opacity="0.8">
      FESTIVAL
    </text>
  </svg>
);
