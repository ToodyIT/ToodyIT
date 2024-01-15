import { FC, useEffect, useState } from "react";
import { WebLine } from "../Webline/WebLine";
import { motion } from "framer-motion";
import { gtag } from "ga-gtag";
import Link from "next/link";
import { twJoin } from "tailwind-merge";
import { useRouter } from "next/router";
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

export const Header: FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [urlWithoutQueryParams] = router.asPath.split("?");
  const getLinkQueries = (order: number) => {
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    gtag("event", "click_on_navigation_link", {
      event_name: "click_on_navigation_link",
    });
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
              "vl:static vl:flex-row vl:!translate-x-0 vl:bg-transparent vl:w-4/5 exl:w-2/3 vl:h-full vl:justify-center vl:gap-4 vl:p-0"
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
                  query: getLinkQueries(section.order),
                }}
                as={{
                  pathname: section.link,
                }}
                onClick={closeMobileMenu}
                className={twJoin(
                  "flex w-full border-b border-greyLight py-2 last:border-none font-medium last:!pb-0 gap-3 items-center",
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
