import Head from "next/head";
import "normalize.css";
import { siteUrl } from "../content/url";
import "../styles/_app.scss";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${siteUrl}/rss.xml`}
          title="Sean's Site's RSS Feed"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
