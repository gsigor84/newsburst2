'use client';

import { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function IsraelNewsList() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/news/israel')
      .then((res) => res.json())
      .then((json) => {
        if (Array.isArray(json)) {
          setNews(json);
        } else {
          throw new Error('Invalid response format');
        }
      })
      .catch((err) => {
        console.error('Failed to fetch Israel news:', err);
        setError('Failed to load Israel news');
      });
  }, []);

  const isLoading = news.length === 0;

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <section className="pt-1 lg:pt-6 px-2 sm:px-2 md:px-2">
      <h2 className="text-4xl lg:text-6xl font-semibold mb-8 tracking-tight text-foreground uppercase">
        ISRAEL
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {(isLoading ? Array.from({ length: 6 }) : news.slice(0, 6)).map((item, index) => {
          const { ref, inView } = useInView({
            threshold: 0.6,
            triggerOnce: false,
          });

          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

          return (
            <motion.li
              key={index}
              ref={ref}
              className={`overflow-hidden pb-2 rounded transition-all duration-500 ease-in-out ${isMobile && !inView
                  ? 'opacity-30 scale-90 blur-sm'
                  : 'opacity-100 scale-100 blur-none'
                }`}
            >
              {isLoading ? (
                <div>
                  <Skeleton variant="rectangular" height={176} className="w-full rounded-md" />
                  <Skeleton variant="text" height={28} className="mt-3 w-3/4" />
                </div>
              ) : (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-opacity hover:opacity-90"
                >
                  <img
                    src={item.image?.startsWith('http') ? item.image : '/placeholder.jpg'}
                    alt={item.headline}
                    className="w-full h-44 object-cover rounded-md"
                  />
                  <div className="py-3">
                    <h3 className="text-[18px] leading-[125%] tracking-[-0.01em] text-foreground font-bold md:font-medium">
                      {item.headline}
                    </h3>
                  </div>
                </a>
              )}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
