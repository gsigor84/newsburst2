'use client';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-12 py-20 space-y-16">
      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">
        Contact
      </h1>

      {/* Description */}
      <div className="max-w-3xl space-y-6 text-lg opacity-90 leading-relaxed">
        <p>
          Have a question, collaboration idea, or just want to say hi?
          We're always open to new conversations and connections.
        </p>
        <p>
          Drop us a message using your favorite channel. We’ll get back
          to you as soon as we can.
        </p>
      </div>

      {/* Contact Options */}
      <div className="space-y-4 text-lg">
        <p>
          Email:{" "}
          <a
            href="mailto:hello@newsburst2.com"
            className="underline underline-offset-4 hover:text-gray-300"
          >
            hello@newsburst2.com
          </a>
        </p>
        <p>
          Website:{" "}
          <a
            href="https://newsburst2.com"
            className="underline underline-offset-4 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            newsburst2.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/gsigor84"
            className="underline underline-offset-4 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/gsigor84
          </a>
        </p>
      </div>

      {/* Back Home Button */}
      <div className="pt-6">
        <a
          href="/"
          className="inline-block px-6 py-3 border border-white text-white uppercase tracking-widest text-sm rounded hover:bg-white hover:text-black transition-all duration-200"
        >
          back home
        </a>
      </div>
    </main>
  );
}
