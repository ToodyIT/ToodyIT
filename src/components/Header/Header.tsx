import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type HeaderProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BURGER_MENU_ITEMS_WIDTH = ["80%", "100%", "50%"];

export const Header: FC<HeaderProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  return (
    <div className="flex shadow-lg justify-between w-full items-center relative z-30 lg:hidden bg-neutral-900 px-5 py-4">
      <Link href="/">
        <Image src="/img/toodyit-logo.png" alt="logo" width="80" height="50" />
      </Link>
      <div
        className="w-10 h-8 flex flex-col justify-between items-end"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        {BURGER_MENU_ITEMS_WIDTH.map((width, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={isMobileMenuOpen ? "open" : "closed"}
            variants={{
              open: {
                width: "100%",
              },
              closed: {
                width,
              },
            }}
            transition={{
              type: "spring",
              duration: 0.5,
              bounce: 0.4,
            }}
            className="bg-white rounded-full h-[3px]"
          />
        ))}
      </div>
    </div>
  );
};
