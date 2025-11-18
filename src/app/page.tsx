'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode
    const checkDarkMode = () => {
      const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(darkMode);
    };

    checkDarkMode();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <main className="relative w-screen h-screen bg-white dark:bg-black overflow-hidden">
      <div className="flex flex-col items-center justify-center h-screen p-4">
        {/* Logo - Centered */}
        <div className="mb-12">
          <Image
            src={isDarkMode ? '/fivefivefivewhite_bar-8.png' : '/fivefivefiveblack_bar-8.png'}
            alt="555 Logo"
            width={240}
            height={80}
            priority
          />
        </div>

        {/* Text Content - Below Logo */}
        <div className="text-black dark:text-white text-center max-w-md space-y-4">
          <p className="text-sm leading-relaxed font-light">
            FiveFiveFive is a studio that produces creative transformation by exploring and interacting with ideas, people, and spaces.
          </p>
          <p className="text-sm leading-relaxed font-light">
            The studio creates environments for meaningful interaction, where collaboration and experimentation foster transformation.
          </p>
          <p className="text-sm leading-relaxed font-light">
            Through their work, they bridge the gap between vision and reality, crafting experiences that inspire change.
          </p>
          <div className="flex flex-col items-center gap-2 mt-6 text-sm font-light">
            <a
              href="https://luma.com/fivefivefive?k=c&period=past"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black/60 dark:hover:text-white/60 transition-colors"
            >
              Events
            </a>
            <a
              href="https://www.instagram.com/fivefivefive_studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black/60 dark:hover:text-white/60 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://x.com/555studio_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black/60 dark:hover:text-white/60 transition-colors"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
