'use client';

import { useEffect, useState } from 'react';

export default function BitcoinPriceList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/bitcoin')
      .then((res) => res.json())
      .then((json) => {
        if (Array.isArray(json)) {
          setData(json);
        } else {
          throw new Error('Invalid response format');
        }
      })
      .catch((err) => {
        console.error('Failed to fetch bitcoin prices:', err);
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
      <h2 className="text-2xl lg:text-6xl font-semibold mb-8 tracking-tight text-foreground uppercase">
        Crypto
      </h2>

      <ul className="space-y-4">
        {data.map((coin) => (
          <li
            key={coin.symbol}
            className="flex justify-between items-center border-b border-black/90 pb-3"
          >
            <span className="font-medium text-foreground">{coin.symbol}</span>
            <div className="text-right">
              <div className="text-foreground">{formatPrice(coin.price_usd)}</div>
              <div
                className={`text-sm ${coin.change_24h < 0 ? 'text-red-500' : 'text-green-500'
                  }`}
              >
                {coin.change_24h.toFixed(2)}%
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
