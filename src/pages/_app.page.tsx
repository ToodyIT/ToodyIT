import type { AppProps } from "next/app";
import "../styles/global.scss";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import LayoutMain from "../components/Layout/LayoutMain";
import { appWithTranslation } from "next-i18next";
import NextI18nextConfig from "../../next-i18next.config";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <main>
      {router.asPath === "/" ? (
        <AnimatePresence
          mode="popLayout"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      ) : (
        <LayoutMain>
          <AnimatePresence
            mode="popLayout"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </LayoutMain>
      )}
    </main>
  );
};

export default appWithTranslation(App, {
  i18n: NextI18nextConfig,
});
