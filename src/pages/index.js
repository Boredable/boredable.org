import Head from "next/head";
import FloatingIcosahedron from "../components/FloatingIcosahedron";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Boredable.org</title>
        <meta
          name="description"
          content="Building a simple, stress-free social platform that fosters creativity, genuine connections, and reinvests in its community for a better digital experience."
        />
        <meta property="og:title" content="Boredable" />
        <meta
          property="og:description"
          content="Building a simple, stress-free social platform that fosters creativity, genuine connections, and reinvests in its community for a better digital experience."
        />
        <meta property="og:image" content="/images/og_preview.jpg" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <Header />
      <div className="relative h-full">
        <FloatingIcosahedron />
      </div>

      <footer className="site-footer">
        <div className="container-wide px-8">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-bold text-wide text-xs"
            href="https://boredable.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Copyright © Boredable.org 2025
          </a>
        </div>
      </footer>
    </>
  );
}
