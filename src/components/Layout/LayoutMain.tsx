import { ReactNode, useEffect, useState } from "react";
import { Meta } from "../Meta/Meta";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

interface LayoutMainProps {
  children: ReactNode;
  metaTitle: string;
  metaDescription: string;
}

const LayoutMain: FC<LayoutMainProps> = ({
  children,
  metaTitle,
  metaDescription,
}) => {
  return (
    <>
      <Meta metaTitle={metaTitle} metaDescription={metaDescription} />
      <div className="text-fg relative min-h-screen overflow-x-hidden pt-16 sm:pt-[4.5rem]">
        <Header />
        <div className="relative w-full pb-20 lg:pb-0">{children}</div>
        <Footer />
        <StickyCta />
      </div>
    </>
  );
};

const StickyCta: FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [hidden, setHidden] = useState(false);
  const isHome = router.pathname === "/";

  useEffect(() => {
    const contact = document.getElementById("contacts");
    if (!contact) {
      setHidden(false);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, [router.asPath]);

  if (hidden) {
    return null;
  }

  return (
    <div className="border-line bg-nav fixed inset-x-0 bottom-0 z-40 border-t p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden">
      <a
        className="flex h-12 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white"
        href={isHome ? "#contacts" : "/contacts"}
      >
        {t("Start a project")}
      </a>
    </div>
  );
};

export default LayoutMain;
