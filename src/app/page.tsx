import Image from 'next/image';
import Header from '@/components/Header';

export default function HomePage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brand/hero-scout.png"
            alt="Scouting on the pitch"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-28">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center rounded-full border bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
              Built for pro scouts
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
              Find your next star <span className="underline decoration-4 decoration-gray-900">player</span> with confidence
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              Playr blends advanced metrics and clean UX to surface talent fast—before anyone else.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/demo"
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-black transition shadow-sm"
              >
                Request Demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Comprehensive Profiles',
              desc: 'Per-90 metrics, career history, minutes thresholds, injury notes.',
            },
            {
              title: 'AI-Assisted Insights',
              desc: 'Summaries, comparisons, and fit rationales grounded in your data.',
            },
            {
              title: 'Collaborative Workflows',
              desc: 'Shortlists, notes, exports, and shareable views for your team.',
            },
          ].map((f) => (
            <article key={f.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-medium text-black">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Playr. All rights reserved.
        </div>
      </footer>
    </>
  );
}
