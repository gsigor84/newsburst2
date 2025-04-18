'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="mb-6 opacity-70">Please try refreshing the page or contact support if it persists.</p>
      <button
        onClick={reset}
        className="px-4 py-2 text-sm font-medium bg-white text-black rounded hover:bg-gray-100 transition"
      >
        Try Again
      </button>
    </div>
  );
}
