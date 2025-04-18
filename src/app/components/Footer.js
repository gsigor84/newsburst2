// src/app/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/30 text-sm font-medium tracking-tight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Column 1 - Main Links */}
          <div className="space-y-3 uppercase text-[13px] tracking-wide">
            <a href="/about" className="flex items-center justify-between border-t border-white/20 pt-3 hover:underline">
              ABOUT <span className="text-xs">↗</span>
            </a>
            <a href="/work" className="flex items-center justify-between border-t border-white/20 pt-3 hover:underline">
              WORK <span className="text-xs">↗</span>
            </a>
            <a href="/contact" className="flex items-center justify-between border-t border-white/20 pt-3 hover:underline">
              CONTACT <span className="text-xs">↗</span>
            </a>
          </div>

          {/* Column 2 - Info */}
          <div className="flex flex-col justify-center sm:items-center md:items-start text-white/70 text-xs pt-4 sm:pt-0">
            <p>NEWSBURST2 © {new Date().getFullYear()}</p>
            <p className="mt-1">ALL RIGHTS RESERVED</p>
          </div>

          {/* Column 3 - External */}
          <div className="space-y-3 uppercase text-[13px] tracking-wide">
            <a
              href="https://github.com/gsigor84"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-t border-white/20 pt-3 hover:underline"
            >
              GITHUB <span className="text-xs">↗</span>
            </a>
            <a
              href="https://atolldigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-t border-white/20 pt-3 hover:underline"
            >
              INSPIRATION <span className="text-xs">↗</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
