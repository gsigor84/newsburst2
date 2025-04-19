'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-12 py-20 space-y-16">
      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">
        About Us
      </h1>

      {/* Description */}
      <div className="max-w-3xl space-y-6 text-lg opacity-90 leading-relaxed">
        <p>
          NewsBurst2 is a modern news platform built for dynamic delivery,
          insightful analysis, and a design-first experience. Inspired by
          the bold aesthetic of Atoll Digital, we combine visual excellence
          with meaningful data to deliver clarity in a noisy digital world.
        </p>
        <p>
          We focus on crypto sentiment, market trends, and global developments
          with curated layouts for both mobile and desktop audiences.
        </p>
        <p>
          Built with <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and
          a deep love for design systems, this project reflects our commitment
          to seamless UX and sharp detail.
        </p>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/contact"
          className="inline-block px-6 py-3 border border-white text-white uppercase tracking-widest text-sm rounded hover:bg-white hover:text-black transition-all duration-200"
        >
          contact us
        </Link>
        <Link
          href="/"
          className="inline-block px-6 py-3 border border-white text-white uppercase tracking-widest text-sm rounded hover:bg-white hover:text-black transition-all duration-200"
        >
          back to home
        </Link>
      </div>
    </main>
  );
}
