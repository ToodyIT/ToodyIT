import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { WebLine } from "../Webline/WebLine";

import { motion } from "framer-motion";
import { gtag } from "ga-gtag";
import Link from "next/link";
import { twJoin } from "tailwind-merge";
import { useRouter } from "next/router";

export const HEADER_HEIGHT = 88;

export const NAVIGATION_ITEMS = [
  {
    title: "About Us",
    link: "/about-us",
    order: 1,
  },
  {
    title: "Our Works",
    link: "/our-works",
    order: 2,
  },
  {
    title: "Our Team",
    link: "/our-team",
    order: 3,
  },
  {
    title: "Services",
    link: "/services",
    order: 4,
  },
  {
    title: "Contacts",
    link: "/contacts",
    order: 5,
  },
];

export const Header: FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

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

  return (
    <WebLine className="overflow-hidden w-full bg-secondary/30 backdrop-blur-xl">
      <header
        style={{ height: HEADER_HEIGHT }}
        className="flex flex-row flex-center gap-20 w-full items-center"
      >
        <div className="font-bold">
          Toody<span className="text-primary">IT</span>
        </div>
        <div className="flex items-center">
          <motion.nav
            className={twJoin(
              "items-center flex bg-neutral-700",
              "lg:bg-transparent lg:h-full lg:justify-center lg:gap-3 vl:gap-4 lg:p-0 lg:![clip-path:none]"
            )}
            animate={isMobileMenuOpen ? "open" : "closed"}
            initial={false}
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
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
                  router.asPath.includes(section.link) && "text-primary"
                )}
              >
                {section.title}
              </Link>
            ))}
          </motion.nav>
        </div>
      </header>
    </WebLine>
  );
};
