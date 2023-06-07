import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay: FC<OverlayProps> = ({ onClose, isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="absolute z-10 bottom-0 top-0 left-0 right-0 bg-opacity-50 bg-black cursor-pointer opacity-0"
        key="modal"
        initial={{ opacity: 0, backdropFilter: "blur(0)" }}
        animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
        exit={{ opacity: 0, backdropFilter: "blur(0)" }}
        onClick={onClose}
        //   transition={{ duration: 2000 }}
      ></motion.div>
    </AnimatePresence>
  );
};

export default Overlay;
