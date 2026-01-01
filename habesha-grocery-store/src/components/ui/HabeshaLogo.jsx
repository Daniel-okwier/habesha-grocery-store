import React from "react";

export default function HabeshaLogo({ size = 50 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-full shadow-lg"
    >
      {/* Outer Circle */}
      <circle cx="50" cy="50" r="48" fill="url(#grad)" stroke="#0F1F17" strokeWidth="2" />

      {/* Mesob-inspired weaving pattern */}
      <path
        d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z"
        fill="#C9A14A"
      />
      <path
        d="M50 20 L58 45 L80 50 L58 55 L50 80 L42 55 L20 50 L42 45 Z"
        fill="#A8342D"
      />

      {/* Gradient Definition */}
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#C9A14A" />
          <stop offset="50%" stopColor="#1F7A4D" />
          <stop offset="100%" stopColor="#A8342D" />
        </linearGradient>
      </defs>
    </svg>
  );
}
