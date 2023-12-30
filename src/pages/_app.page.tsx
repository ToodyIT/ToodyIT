import type { AppProps } from "next/app";
import "../styles/global.scss";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import NextI18nextConfig from "../../next-i18next.config";
import {
  HomepageOpenSectionContext,
  HomepageOpenedSectionType,
} from "../utils/HomepageOpenSectionContext";
import { useEffect, useState } from "react";
import { GTM_ID } from "../constants/gtm";
import { install } from "ga-gtag";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const poppins = Montserrat({
  subsets: ["latin-ext", "latin", "cyrillic"],
  weight: ["400", "600", "500", "700"],
  variable: "--font-poppins",
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
          <div className="z-50 top-0 animate-circle left-0 absolute h-screen w-screen overflow-hidden flex items-center justify-center">
            <div className="relative outline-[5000px] outline rounded-full outline-secondary w-1/2 max-h-screen max-w-[1440px] aspect-square">
              <Image src="/img/circle.png" fill alt="circle" />
            </div>
          </div>
        </main>
      </HomepageOpenSectionContext.Provider>
    </>
  );
};

export default appWithTranslation(App, NextI18nextConfig);
