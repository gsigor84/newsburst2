'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6 py-20 space-y-10 text-center">

      <h1 className="text-7xl font-bold uppercase tracking-tight">404</h1>

      <p className="text-lg opacity-80 max-w-xl leading-relaxed">
        Sorry, the page you're looking for doesn't exist. Let's get you back on track.
      </p>

      <Link
        href="/"
        className="px-6 py-3 border border-white text-white uppercase tracking-wider text-sm rounded hover:bg-white hover:text-black transition-all duration-200"
      >
        return home
      </Link>
    </main>
  );
}
