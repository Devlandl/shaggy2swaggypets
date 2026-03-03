"use client";

import { useMemo } from "react";

interface Paw {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export default function PawParticles() {
  const paws: Paw[] = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: (i * 13.7 + 5) % 100,
      size: 16 + (i * 3.7) % 20,
      duration: 12 + (i * 2.3) % 10,
      delay: (i * 1.8) % 10,
    })),
  []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {paws.map((paw) => (
        <svg
          key={paw.id}
          className="paw-particle"
          style={{
            left: `${paw.left}%`,
            width: paw.size,
            height: paw.size,
            animationDuration: `${paw.duration}s`,
            animationDelay: `${paw.delay}s`,
          }}
          viewBox="0 0 64 64"
          fill="white"
        >
          {/* Paw pad */}
          <ellipse cx="32" cy="42" rx="14" ry="12" />
          {/* Toes */}
          <circle cx="18" cy="22" r="7" />
          <circle cx="32" cy="16" r="7" />
          <circle cx="46" cy="22" r="7" />
          <circle cx="11" cy="34" r="5.5" />
        </svg>
      ))}
    </div>
  );
}
