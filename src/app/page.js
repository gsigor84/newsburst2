'use client';

import { useState, useEffect } from 'react';
import BitcoinPriceList from "./components/bitcoin/BitcoinPriceList";
import RecommendationsList from "./components/recommendations/RecommendationsList";
import AsiaNewsList from "./components/news/AsiaNewsList";
import IsraelNewsList from "./components/news/IsraelNewsList";
import GlobalNewsList from "./components/news/GlobalNewsList";
import DesktopHome from "./components/DesktopHome";
import useMediaQuery from "./hooks/useMediaQuery";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading delay or wait for all fetches if needed
    const timeout = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timeout);
  }, []);

  if (isDesktop) return <DesktopHome />;

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <span className="text-xl font-medium animate-pulse">Loading NewsBurst2...</span>
      </main>
    );
  }

  return (
    <main className="min-h-screen mt-9 px-2 sm:px-4 py-10 space-y-16 bg-background text-foreground">
      <h1 className="text-4xl pt-29  font-bold tracking-tight text-center">
        Signal Over Noise
      </h1>

      <section>
        <GlobalNewsList />
      </section>
      <section>
        <AsiaNewsList />
      </section>
      <section>
        <IsraelNewsList />
      </section>
      <section>
        <BitcoinPriceList />
      </section>
      <section>
        <RecommendationsList />
      </section>
    </main>
  );
}
