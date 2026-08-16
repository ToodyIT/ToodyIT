import type { AppProps } from "next/app";
import "../styles/global.scss";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import NextI18nextConfig from "../../next-i18next.config";
import { useEffect } from "react";
import { GTM_ID } from "../constants/gtm";
import { Inter, Raleway } from "next/font/google";
import ga4 from "react-ga4";
import { GTMSendPageView } from "../utils/gtm";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "../theme";

const sans = Inter({
  subsets: ["latin-ext", "latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-sans",
});

const display = Raleway({
  subsets: ["latin-ext", "latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-display",
  weight: ["600", "700"],
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    ga4.initialize(GTM_ID);
    GTMSendPageView(router.asPath);
  }, [router.asPath]);

  return (
    <ThemeProvider>
      <div className={`${sans.variable} ${display.variable} font-sans`}>
        <Component {...pageProps} key={router.asPath} />
        <ToastContainer />
        <div className="absolute left-0 top-0 h-px w-px" id="portal" />
      </div>
    </ThemeProvider>
  );
};

export default appWithTranslation(App, NextI18nextConfig);
