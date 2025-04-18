'use client';

import BitcoinPriceList from "./bitcoin/BitcoinPriceList";
import RecommendationsList from "./recommendations/RecommendationsList";
import AsiaNewsList from "./news/AsiaNewsList";
import IsraelNewsList from "./news/IsraelNewsList";
import GlobalNewsList from "./news/GlobalNewsList";
import DesktopNavbar from "./DesktopNavbar"; // 👈 Add this import


export default function DesktopHome() {
  return (
    <>
      <DesktopNavbar />
      <main className="min-h-screen px-3 py-16 space-y-20 bg-background text-foreground">
        {/* Title */}
        <h1 className="text-9xl pt-29 font-bold tracking-tight text-left uppercase">

          Signal Over Noise
        </h1>

        {/* Global News full-width */}
        <section>
          <GlobalNewsList />
        </section>

        {/* Asia & Israel side by side */}
        <section className="grid grid-cols-2 gap-10">
          <div>
            <AsiaNewsList />
          </div>
          <div>
            <IsraelNewsList />
          </div>
        </section>

        {/* Crypto Prices & AI Recommendations side by side */}
        <section className="grid grid-cols-2 gap-10">
          <div>
            <BitcoinPriceList />
          </div>
          <div>
            <RecommendationsList />
          </div>
        </section>
      </main>
    </>
  );
}
