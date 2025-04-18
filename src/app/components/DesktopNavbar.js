'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DesktopNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`hidden lg:block fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-[#ededed] text-black border-black/10' : 'bg-[#0a0a0a] text-white border-white/10'
        } border-y`}
    >
      <div className="flex justify-between items-center h-[64px]">
        {/* Left Section: Logo + Nav Links */}
        <div className="flex items-center">
          {/* Logo */}
          <div
            className={`text-3xl font-bold tracking-tight px-6 border-r transition-colors duration-300 ${scrolled ? 'border-black/20' : 'border-white/20'
              }`}
          >
            NewsBurst2
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-10 pl-8 text-lg font-medium lowercase">
            <Link
              href="/about"
              className="flex items-center gap-2 hover:opacity-100 opacity-80"
            >
              <span className="text-lg">{scrolled ? '▸' : '▸'}</span> about
            </Link>
            <Link
              href="/work"
              className="flex items-center gap-2 hover:opacity-100 opacity-80"
            >
              <span className="text-lg">{scrolled ? '▸' : '▸'}</span> work
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:opacity-100 opacity-80"
            >
              <span className="text-lg">{scrolled ? '✱' : '✱'}</span> contact
            </Link>
          </nav>
        </div>

        {/* Right Section: Year */}
        <div
          className={`text-sm font-medium px-6 border-l transition-colors duration-300 ${scrolled ? 'border-black/20' : 'border-white/20'
            } opacity-90`}
        >
          2025
        </div>
      </div>
    </header>
  );
}
