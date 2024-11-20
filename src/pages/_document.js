import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GoogleAnalytics gaId="G-L8HH1QQNH6" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
