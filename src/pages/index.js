import Head from "next/head";
import FloatingIcosahedron from "../components/FloatingIcosahedron";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Boredable.org</title>
        <meta name="description" content="Boredable.org" />
        <meta
          property="og:title"
          content="A new, boring social network for adults."
        />
        <meta
          property="og:description"
          content="A new, boring social network for adults."
        />
        <meta
          property="og:image"
          content="/images/og_preview.jpg"
        />
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
            Copyright © Boredable.org 2024
          </a>
        </div>
      </footer>
    </>
  );
}
