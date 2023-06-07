import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

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
    <div className="flex justify-between w-full items-center relative z-20 lg:hidden">
      <Image src="/img/toodyit-logo.png" alt="logo" width="80" height="50" />
      <div
        className="w-10 h-8 flex flex-col justify-between items-end"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        {BURGER_MENU_ITEMS_WIDTH.map((width, index) => (
          <motion.div
            key={index}
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
