import type { AppProps } from "next/app";
import "../styles/global.scss";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import NextI18nextConfig from "../../next-i18next.config";
import { RingModel } from "../components/RingModel/RingModel";
import {
  HomepageOpenSectionContext,
  HomepageOpenedSectionType,
} from "../utils/HomepageOpenSectionContext";
import { useEffect, useState } from "react";
import { GTM_ID } from "../constants/gtm";
import { install } from "ga-gtag";
import { Overpass } from "next/font/google";

const poppins = Overpass({
  subsets: ["latin-ext", "cyrillic", "latin"],
  weight: ["400", "600", "500", "700"],
  variable: "--font-overpass",
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [openedSection, setOpenedSection] =
    useState<HomepageOpenedSectionType>("main");

  useEffect(() => {
    install(GTM_ID);
  }, []);
  return (
    <>
      <HomepageOpenSectionContext.Provider
        value={{ openedSection, setOpenedSection }}
      >
        <style jsx global>{`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}</style>
        <main>
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </main>
        <RingModel />
      </HomepageOpenSectionContext.Provider>
    </>
  );
};

export default appWithTranslation(App, NextI18nextConfig);
