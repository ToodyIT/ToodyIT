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

export const HEADER_HEIGHT = 88;

export const NAVIGATION_ITEMS = [
  {
    title: "About Us",
    link: "/about-us",
    icon: <AboutUsIcon className="size-6" />,
    order: 1,
  },
  {
    title: "Our Works",
    link: "/our-works",
    icon: <OurWorksIcon className="size-6" />,
    order: 2,
  },
  {
    title: "Our Team",
    link: "/our-team",
    icon: <OurTeamIcon className="size-6" />,
    order: 3,
  },
  {
    title: "Services",
    link: "/services",
    icon: <ServiceBellIcon className="size-6" />,
    order: 4,
  },
  {
    title: "Contacts",
    link: "/contacts",
    icon: <ContactsIcon className="size-6" />,
    order: 5,
  },
];

export const Header: FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <>
      <WebLine className="w-full bg-secondary backdrop-blur-xl relative z-50">
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
          <button
            className="vl:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon className="text-white size-10" />
          </button>
          <motion.nav
            className={twJoin(
              "items-center flex bg-neutral-700",
              "absolute z-10 top-[88px] px-5 left-0 flex-col w-full py-5 rounded-br-lg",
              "vl:static vl:flex-row vl:!translate-x-0 vl:bg-transparent vl:w-3/4 xl:w-2/3 vl:h-full vl:justify-center vl:gap-4 vl:p-0"
            )}
            animate={isMobileMenuOpen ? "open" : "closed"}
            initial={false}
            variants={{
              open: {
                x: "0",
              },
              closed: {
                x: "-100%",
              },
            }}
          >
            {NAVIGATION_ITEMS.map((section) => (
              <Link
                key={section.title}
                href={{
                  pathname: section.link,
                  query: getLinkQueries(section.order),
                }}
                as={{
                  pathname: section.link,
                  query: { order: section.order },
                }}
                onClick={closeMobileMenu}
                className={twJoin(
                  "flex w-full border-b border-greyLight py-2 last:border-none font-medium last:!pb-0 gap-3 items-center",
                  "vl:border-none vl:p-0",
                  router.asPath.includes(section.link) && "text-primary"
                )}
              >
                {section.icon && section.icon}
                {section.title}
              </Link>
            ))}
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
