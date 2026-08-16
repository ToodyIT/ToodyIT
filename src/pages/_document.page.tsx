import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import Script from "next/script";

const THEME_BOOTSTRAP = `
(function(){
  try {
    var saved = localStorage.getItem('toodyit-theme');
    var theme = saved === 'light' || saved === 'dark'
      ? saved
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

const Document = ({ locale }: DocumentProps) => {
  return (
    <Html className="dark" data-theme="dark" lang={locale}>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
        <Script
          strategy="lazyOnload"
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/44d0af6cd902359de29ba189/script.js"
        />
        <Script
          id="gtm"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MHFCFRL3');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
