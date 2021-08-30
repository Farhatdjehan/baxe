import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-notifications/lib/notifications.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{`BAXE - The world’s most innovative digital gateway platform.`}</title>
        <link rel="icon" href="/favicon.ico/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon.ico/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon.ico/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon.ico/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon.ico/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon.ico/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon.ico/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon.ico/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon.ico/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon.ico/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.ico/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico/favicon-16x16.png" />
        <link rel="manifest" href="/favicon.ico/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon.ico/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:image" content="https://res.cloudinary.com/telecreativenow/image/upload/c_scale,q_60,w_951/v1625505271/BAXE/baxe-banner.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baxe.com" />
        <meta property="og:title" content="BAXE - The world’s most innovative digital gateway platform." />
        <meta property="og:description" content="BAXE is more than just a digital currency. It’s the gateway between traditional financial systems and the emerging digital economy." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WQVC9Z8');`}}></script>

      </Head>
      <Component {...pageProps} />
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQVC9Z8" height="0" width="0" style={{ display:'none', visibility: 'hidden' }}></iframe></noscript>
    </>
  )
}

export default MyApp
