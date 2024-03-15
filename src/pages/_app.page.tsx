import type { AppProps } from "next/app";
import "../styles/global.scss";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import NextI18nextConfig from "../../next-i18next.config";
import { useEffect } from "react";
import { GTM_ID } from "../constants/gtm";
import { Montserrat } from "next/font/google";
import ga4 from "react-ga4";
import { GTMSendPageView } from "../utils/gtm";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const poppins = Montserrat({
  subsets: ["latin-ext", "latin", "cyrillic"],
  weight: ["400", "600", "500", "700"],
  variable: "--font-poppins",
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    ga4.initialize(GTM_ID);
    GTMSendPageView(router.asPath);
  }, [router.asPath]);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <main>
        <Component {...pageProps} key={router.asPath} />
        <ToastContainer />
        <div
          className="absolute left-0 top-0 z-maximumTop h-[1px] w-[1px]"
          id="portal"
        />
      </main>
    </>
  );
};

export default appWithTranslation(App, NextI18nextConfig);
