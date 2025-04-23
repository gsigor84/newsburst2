'use client';

import { useEffect, useState } from 'react';

export default function RecommendationsList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/recommendations')
      .then((res) => res.json())
      .then((json) => {
        if (Array.isArray(json)) {
          setData(json);
        } else {
          throw new Error('Invalid response format');
        }
      })
      .catch((err) => {
        console.error('Failed to fetch recommendations:', err);
        setError('Failed to load data');
      });
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

  const formatPrice = (num) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(num);

  return (
    <section className="pt-10 pb-16 px-2 sm:px-2 md:px-2">
      <h2 className="text-4xl lg:text-6xl font-semibold mb-8 tracking-tight text-foreground uppercase">
        AI RECOMMENDATIONS
      </h2>

      <ul className="space-y-4">
        {data.map((rec) => (
          <li
            key={rec.token}
            className="flex justify-between items-start border-b border-black/90 pb-3"
          >
            <span className="font-medium text-foreground">{rec.token}</span>
            <div className="text-right space-y-0.5">
              <div className="text-sm text-foreground">{formatPrice(rec.price_usd)}</div>
              <div
                className={`text-sm ${rec.change_24h < 0 ? 'text-red-500' : 'text-green-500'
                  }`}
              >
                {rec.change_24h.toFixed(2)}%
              </div>
              <div className="text-xs text-foreground/60">
                Hype: {rec.hype} | Fear: {rec.fear}
              </div>
              <div
                className={`inline-block text-xs font-semibold px-2 py-0.5 rounded ${rec.recommendation === 'BUY'
                  ? 'bg-green-500/10 text-green-600'
                  : rec.recommendation === 'SELL'
                    ? 'bg-red-500/10 text-red-600'
                    : 'bg-gray-400/10 text-gray-700'
                  }`}
              >
                {rec.recommendation}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
