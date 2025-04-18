'use client';

import { useEffect, useState } from 'react';

export default function AsiaNewsList() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/news/asia')
      .then((res) => res.json())
      .then((json) => {
        if (Array.isArray(json)) {
          const sorted = [...json].sort((a, b) => b.timestamp - a.timestamp);
          setNews(sorted);
        } else {
          throw new Error('Invalid response format');
        }
      })
      .catch((err) => {
        console.error('Failed to fetch Asia news:', err);
        setError('Failed to load Asia news');
      });
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <section className="pt-10 pb-16 px-2 sm:px-2 md:px-2">
      <h2 className="text-2xl lg:text-6xl font-semibold mb-8 tracking-tight text-foreground uppercase">
        ASIA
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {news.map((item, index) => (
          <li key={index} className="overflow-hidden border-b border-black/90 pb-3">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-opacity hover:opacity-90"
            >
              <img
                src={item.image}
                alt={item.headline}
                className="w-full h-44 object-cover"
              />
              <div className="py-3">
                <h3 className="text-[18px] leading-[125%] tracking-[-0.01em] text-foreground font-medium">
                  {item.headline}
                </h3>
              </div>
            </a>
          </li>



        ))}
      </ul>

    </section>
  );
}
