'use client';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-12 py-20 space-y-16">
      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">
        Our Work
      </h1>

      {/* Project Summary */}
      <div className="max-w-3xl space-y-6 text-lg opacity-90 leading-relaxed">
        <p>
          NewsBurst2 is more than a news site — it's a bold experiment in
          information design. Every section is optimized for visual clarity and high signal-to-noise ratio.
        </p>
        <p>
          Our layout system adjusts between mobile and desktop to keep content highly legible. We integrate
          live data, sentiment tracking, and API-driven headlines from multiple sources.
        </p>
        <p>
          This project uses cutting-edge tools like <strong>Next.js 13+</strong>, <strong>Tailwind CSS</strong>, <strong>MongoDB</strong>,
          and <strong>Material UI</strong> to deliver a fluid, high-performance user experience.
        </p>
      </div>

      {/* Call to Action */}
      <div className="flex gap-4">
        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 border border-white text-white uppercase tracking-widest text-sm rounded hover:bg-white hover:text-black transition-all duration-200"
        >
          back home
        </a>
        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 border border-white text-white uppercase tracking-widest text-sm rounded hover:bg-white hover:text-black transition-all duration-200"
        >
          contact
        </a>
      </div>
    </main>
  );
}
