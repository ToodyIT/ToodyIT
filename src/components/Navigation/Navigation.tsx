import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { twJoin } from "tailwind-merge";
import { Header } from "../Header/Header";
import { motion } from "framer-motion";
import Overlay from "../Overlay/Overlay";
import Image from "next/image";
import { useTranslation } from "react-i18next";

type NavigationProps = {};

export const NAVIGATION_ITEMS = [
  {
    title: "Services",
    link: "/services",
    order: 1,
  },
  {
    title: "Our Works",
    link: "/our-works",
    order: 2,
  },
  {
    title: "About Us",
    link: "/about-us",
    order: 3,
  },
  {
    title: "Our Team",
    link: "/our-team",
    order: 4,
  },
  {
    title: "Contacts",
    link: "/contacts",
    order: 5,
  },
];

export const Navigation: FC<NavigationProps> = ({}) => {
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
  };

  return (
    <div className="h-full">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div className="relative lg:flex items-center pt-3 h-full">
        <motion.nav
          className={twJoin(
            "flex-col z-20 rounded-3xl items-center justify-between my-auto lg:w-fit w-11/12 flex absolute bg-neutral-700 left-1/2 -translate-x-1/2 h-fit py-4",
            "lg:bg-transparent lg:left-0 lg:translate-x-0 lg:h-full lg:justify-center lg:gap-6 vl:gap-10 lg:p-0 lg:static lg:![clip-path:none]"
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
          <Link href="/" className="w-full lg:w-auto">
            <Image
              src="/img/arrow.svg"
              alt="arrow"
              width="20"
              height="20"
              className="hidden lg:block rotate-90"
            />
            <span className="block w-full py-2 text-xl text-center lg:hidden">
              {t("Home")}
            </span>
          </Link>
          {NAVIGATION_ITEMS.map((section) => (
            <Link
              key={section.title}
              href={{
                pathname: section.link,
                query: getLinkQueries(section.order),
              }}
              as={section.link}
              onClick={closeMobileMenu}
              className={twJoin(
                "text-white text-xl lg:[writing-mode:vertical-lr] lg:[text-orientation:mixed] lg:rotate-180 whitespace-nowrap py-2 w-full text-center",
                router.asPath.includes(section.link) && "text-primary"
              )}
            >
              {section.title}
            </Link>
          ))}
        </motion.nav>
      </div>
      <Overlay
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        key="mobile-menu-overlay"
      />
    </div>
  );
};
