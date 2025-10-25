import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Tailwind CDN: inject config then load script before React hydrates */}
      <Script id='tailwind-config' strategy='beforeInteractive'>
        {`window.tailwind = { config: { theme: { extend: { colors: { brand: '#0b5', brandDark: '#013' } } } } }`}
      </Script>
      <Script src='https://cdn.tailwindcss.com' strategy='beforeInteractive' />

      <Head>
        <link rel='icon' href='/favicon.svg' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#0b5' />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
