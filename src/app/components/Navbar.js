'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-md transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'} lg:hidden`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-foreground">
          NewsBurst2
        </Link>

        <nav className="hidden md:flex gap-6 text-sm text-foreground font-medium">
          <Link href="/about" className="hover:underline underline-offset-4">About</Link>
          <Link href="/work" className="hover:underline underline-offset-4">Work</Link>
          <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
        </nav>

        <IconButton
          className="md:hidden text-foreground"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </IconButton>
      </div>

      {/* ✨ Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#0a0a0a',
            color: '#ffffff',
            width: '100%',
            maxWidth: 320,
            paddingTop: '2rem',
          },
        }}
      >
        <div className="flex flex-col h-full ">
          {/* Close Button */}
          <div className="flex justify-end mb-6 pb-6">
            <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close Menu" sx={{ color: '#ffffff' }}>
              <CloseIcon sx={{ color: '#ffffff', fontSize: '2rem' }} />
            </IconButton>
          </div>

          {/* Full-width lines + Links */}
          <nav className="flex flex-col text-left text-white">
            <div className="border-t border-white/90 w-full" />
            <Link
              href="/about"
              onClick={() => setDrawerOpen(false)}
              className="text-4xl tracking-tight font-medium lowercase py-5 px-4 flex items-center gap-3"
            >
              <span className="text-white text-4xl leading-none">▸</span> about
            </Link>

            <div className="border-t border-white/90 w-full" />
            <Link
              href="/work"
              onClick={() => setDrawerOpen(false)}
              className="text-4xl tracking-tight font-medium lowercase py-5 px-4 flex items-center gap-3"
            >
              <span className="text-white text-4xl leading-none">▸</span> work
            </Link>

            <div className="border-t border-white/90 w-full" />
            <Link
              href="/contact"
              onClick={() => setDrawerOpen(false)}
              className="text-4xl tracking-tight font-medium lowercase py-5 px-4 flex items-center gap-3"
            >
              <span className="text-white text-4xl leading-none">✱</span> contact
            </Link>

            <div className="border-t border-white/90 w-full" />
          </nav>
        </div>

      </Drawer>
    </header>
  );
}
