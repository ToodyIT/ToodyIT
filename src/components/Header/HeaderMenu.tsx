import { FC } from "react";
import { motion } from "framer-motion";

const HeaderMenu: FC = () => {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: "-100%" }}
      exit={{ y: "-100%" }}
      className="h-52 bg-white w-full absolute top-0 left-0 z-20"
    ></motion.div>
  );
};

export default HeaderMenu;
