import localFont from "next/font/local";
import ParticlesBackground from "../components/ParticlesBackground";

// Import custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <div
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        {/* Particle Background */}
        <ParticlesBackground />

        {/* Main Content */}
        <div
          className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative z-10`}
        >
          <header className="flex flex-col gap-x-8 row-start-2 items-center text-center">
            {/* Title */}
            <h1 className="text-4xl font-black mb-1 text-center">
              boredable.org
            </h1>

            {/* Subtitle */}
            <p className="text-sm mb-8 text-center sm:text-left font-[family-name:var(--font-geist-mono)]"></p>
          </header>
        </div>
      </div>

      <main className="site-main pt-24">
        <div className="max-w-3xl border-t border-b py-20 mx-auto text-center border-slate-600">
          <p className="subtitle">Mission</p>
          <h2 className="font-black text-4xl">
            Building a simple, stress-free social platform that fosters
            creativity, genuine connections, and reinvests in its community for
            a better digital experience.
          </h2>
        </div>

        <div className="max-w-md mx-auto py-20 font-mono">
          <p className="mb-4">
            Boredable is a non-profit social media platform committed to
            building a simple, stress-free digital space that fosters creativity
            and genuine connections. Departing from the traditional VC-backed
            startup model, Boredable takes a user-first approach, prioritizing
            the well-being and authentic experiences of its community over
            profits. The platform offers tailored premium features designed for
            users seeking an enjoyable and passive online experience without the
            typical pressures of modern social media.
          </p>

          <p className="mb-4">
            Revenue generated from these premium features is directly reinvested
            into the platform, funding dedicated developers who continuously
            refine and enhance Boredable&apos;s offerings. This creates a
            sustainable cycle of growth and innovation, ensuring that users
            remain at the heart of every decision. By joining Boredable,
            you&apos;re embracing a movement that values simplicity,
            authenticity, and community-driven development for a better digital
            experience.
          </p>

          <p className="mb-4">
            Boredable is currently in testting with plans to launch in spring
            2025.
          </p>
        </div>
      </main>

      <footer className="site-footer row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm uppercase font-black">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://boredable.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright © Boredable.org
        </a>
      </footer>
    </>
  );
}
