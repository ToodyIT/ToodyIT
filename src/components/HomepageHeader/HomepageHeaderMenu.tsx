import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { LocaleToggler } from "../LocaleToggler/LocaleToggler";
import { NAVIGATION_ITEMS } from "../Navigation/Navigation";

const headerLinkTwClass =
  "border-primary border-[3px] lg:w-[200px] block rounded-lg py-0.5 text-xl text-center";

const HomepageHeaderMenu: FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: "-100%" }}
      exit={{ y: "-100%" }}
      className="h-52 bg-neutral-800 w-full absolute top-0 left-0 z-20 lg:py-6 lg:px-10 px-5 py-3 flex justify-center"
    >
      <div className="flex justify-between max-w-7xl w-full h-full items-center flex-wrap gap-3">
        <div className="flex flex-col gap-2 max-w-[48%] sm:max-w-[200px] w-full">
          <Link href="/" className={headerLinkTwClass}>
            {t("Welcome")}
          </Link>
          {NAVIGATION_ITEMS.slice(0, 2).map((item) => (
            <Link
              key={item.order}
              href={{
                pathname: item.link,
                query: { order: item.order },
              }}
              className={headerLinkTwClass}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-between items-center h-full order-last lg:order-none w-screen lg:w-auto">
          <Image
            width="183"
            height="115"
            src="/img/toodyit-logo.png"
            alt="toodyit logo"
            className="hidden lg:block"
          />
          <LocaleToggler />
        </div>
        <div className="flex flex-col gap-2 max-w-[48%] sm:max-w-[200px] w-full">
          {NAVIGATION_ITEMS.slice(2).map((item) => (
            <Link
              key={item.order}
              href={{
                pathname: item.link,
                query: { order: item.order },
              }}
              className={headerLinkTwClass}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HomepageHeaderMenu;
