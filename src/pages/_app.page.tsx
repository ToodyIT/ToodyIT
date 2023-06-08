import type { AppProps } from "next/app";
import "../styles/global.scss";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import NextI18nextConfig from "../../next-i18next.config";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <main>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </main>
  );
};

export default appWithTranslation(App, {
  i18n: NextI18nextConfig,
});
