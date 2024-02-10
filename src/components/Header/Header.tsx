import { FC, useEffect, useState } from "react";
import { WebLine } from "../Webline/WebLine";
import { motion } from "framer-motion";
import Link from "next/link";
import { twJoin } from "tailwind-merge";
import { NextRouter, useRouter } from "next/router";
import {
  AboutUsIcon,
  ContactsIcon,
  MenuIcon,
  OurTeamIcon,
  OurWorksIcon,
  ServiceBellIcon,
} from "../Icons/Icons";
import Overlay from "../Overlay/Overlay";
import Image from "next/image";
import { LocaleToggler } from "../LocaleToggler/LocaleToggler";
import { TFunction, useTranslation } from "next-i18next";
import Head from "next/head";
import { BASE_URL } from "../../constants/common";

export const HEADER_HEIGHT = 88;

export const getNavigationItems = (t: TFunction) => {
  return [
    {
      title: t("About Us"),
      link: "/",
      icon: <AboutUsIcon className="size-6" />,
      order: 1,
    },
    {
      title: t("Our Works"),
      link: "/our-works",
      icon: <OurWorksIcon className="size-6" />,
      order: 2,
    },
    {
      title: t("Our Team"),
      link: "/our-team",
      icon: <OurTeamIcon className="size-6" />,
      order: 3,
    },
    {
      title: t("Services"),
      link: "/services",
      icon: <ServiceBellIcon className="size-6" />,
      order: 4,
    },
    {
      title: t("Contacts"),
      link: "/contacts",
      icon: <ContactsIcon className="size-6" />,
      order: 5,
    },
  ];
};
export const getLinkQueries = (order: number, router: NextRouter) => {
  if (!Array.isArray(router.query.order) && router.query.order) {
    return {
      order,
      direction: parseFloat(router.query.order) > order ? "top" : "bottom",
    };
  }

  return {
    order,
  };
};

export const Header: FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [urlWithoutQueryParams] = router.asPath.split("?");

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const onRouteChangeStart = () => {
      setIsMobileMenuOpen(false);
    };

    router.events.on("routeChangeStart", onRouteChangeStart);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
    };
  }, [router]);
  const { t } = useTranslation();
  const navigationItems = getNavigationItems(t);

  return (
    <>
      <Head>
        <script
          key="logo-metadata"
          id="logo-metadata"
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
      <WebLine className="w-full dark:bg-secondary bg-greyLight backdrop-blur-xl relative z-50">
        <header
          style={{ height: HEADER_HEIGHT }}
          className="flex justify-between gap-20 w-full items-center"
        >
          <Link href="/">
            <Image
              src="/img/toodyit-logo.png"
              width="80"
              height="50"
              alt="logo"
            />
          </Link>
          <div className="vl:hidden flex items-center gap-4">
            <LocaleToggler />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <MenuIcon className="text-white size-10" />
            </button>
          </div>
          <motion.nav
            className={twJoin(
              "items-center flex bg-neutral-700",
              "absolute z-10 top-[88px] px-5 left-0 flex-col w-full py-5 rounded-br-lg",
              "vl:static vl:!opacity-100 vl:flex-row vl:!translate-x-0 vl:bg-transparent vl:w-4/5 exl:w-2/3 vl:h-full vl:gap-4 justify-between vl:p-0"
            )}
            animate={isMobileMenuOpen ? "open" : "closed"}
            initial={false}
            variants={{
              open: {
                opacity: 1,
                x: 0,
              },
              closed: {
                transitionEnd: {
                  opacity: 0,
                },
                x: "-100%",
              },
            }}
          >
            {navigationItems.map((section) => (
              <Link
                key={section.title}
                href={{
                  pathname: section.link,
                  query: getLinkQueries(section.order, router),
                }}
                as={{
                  pathname: section.link,
                }}
                onClick={closeMobileMenu}
                className={twJoin(
                  "w-full vl:w-fit flex border-b border-greyLight py-2 last:border-none font-medium last:!pb-0 gap-3 items-center",
                  "vl:border-none vl:p-0",
                  urlWithoutQueryParams === section.link &&
                    "text-primary pointer-events-none"
                )}
              >
                {section.icon && section.icon}
                {section.title}
              </Link>
            ))}
            <LocaleToggler className="mt-4 vl:mt-0" />
          </motion.nav>
        </header>
      </WebLine>
      <Overlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
