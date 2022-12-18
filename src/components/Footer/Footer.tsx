import { FC } from "react";
import { motion } from "framer-motion";

const Footer: FC = () => {
  return (
    <motion.footer
      animate={{ y: 0 }}
      initial={{ y: "100%" }}
      exit={{ y: "100%" }}
      className="h-52 bg-white absolute bottom-0 z-20 left-0 w-full"
    ></motion.footer>
  );
};

export default Footer;
