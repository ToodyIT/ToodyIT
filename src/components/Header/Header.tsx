import { FC, useEffect, useState } from "react";
import { WebLine } from "../Webline/WebLine";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { twJoin } from "tailwind-merge";
import { useRouter } from "next/router";
import { LocaleToggler } from "../LocaleToggler/LocaleToggler";
import { TFunction, useTranslation } from "next-i18next";
import Head from "next/head";
import { BASE_URL } from "../../constants/common";
import { Logo } from "../Motion/Reveal";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { Button } from "../Button/Button";

export const HEADER_HEIGHT = 72;

export const getNavigationItems = (t: TFunction) => [
  { title: t("Our Works"), link: "/our-works" },
  { title: t("Services"), link: "/services" },
  { title: t("Our Team"), link: "/our-team" },
  { title: t("About Us"), link: "/about-us" },
  { title: t("Contacts"), link: "/contacts" },
];

export const Header: FC = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const items = getNavigationItems(t);
  const [path] = router.asPath.split("?");

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router]);

  return (
    <>
      <Head>
        <script
          key="logo-metadata"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: BASE_URL,
              logo: "/img/toodyit-logo.png",
            }),
          }}
        />
      </Head>
      <header className="border-line bg-nav fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
        <WebLine innerClassName="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
          <Logo />
          <nav className="text-muted hidden items-center gap-7 text-sm vl:flex">
            {items.map((item) => (
              <Link
                className={twJoin(
                  "transition-colors hover:text-fg",
                  path === item.link && "text-fg"
                )}
                href={item.link}
                key={item.link}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 vl:flex">
            <ThemeToggle />
            <LocaleToggler />
            <Button tagName="a" href="/contacts">
              {t("Start a project")}
            </Button>
          </div>
          <div className="flex items-center gap-2 vl:hidden">
            <ThemeToggle />
            <button
              aria-label={open ? t("Close menu") : t("Open menu")}
              className="border-line flex h-10 w-10 items-center justify-center rounded-full border"
              type="button"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={twJoin(
                    "bg-fg block h-px w-4 transition",
                    open && "translate-y-1 rotate-45"
                  )}
                />
                <span
                  className={twJoin(
                    "bg-fg block h-px w-4 transition",
                    open && "-translate-y-1.5 -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </WebLine>
        <AnimatePresence>
          {open && (
            <motion.div
              animate={{ opacity: 1, height: "auto" }}
              className="border-line bg-nav overflow-hidden border-t vl:hidden"
              exit={{ opacity: 0, height: 0 }}
              initial={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col gap-4 px-5 py-5">
                {items.map((item) => (
                  <Link
                    className="text-fg/80"
                    href={item.link}
                    key={item.link}
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <LocaleToggler />
                <Button
                  tagName="a"
                  href="/contacts"
                  onClick={() => setOpen(false)}
                >
                  {t("Start a project")}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
