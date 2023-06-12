import type { AppProps } from "next/app";
import "../styles/global.scss";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import NextI18nextConfig from "../../next-i18next.config";
import { RingModel } from "../components/RingModel/RingModel";
import Head from "next/head";
import {
  HomepageOpenSectionContext,
  HomepageOpenedSectionType,
} from "../utils/HomepageOpenSectionContext";
import { useState } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [openedSection, setOpenedSection] =
    useState<HomepageOpenedSectionType>("main");

  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JLQGWF292W"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JLQGWF292W');`,
          }}
        />
      </Head>
      <HomepageOpenSectionContext.Provider
        value={{ openedSection, setOpenedSection }}
      >
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
