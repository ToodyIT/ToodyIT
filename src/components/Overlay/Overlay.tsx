import { FC, MouseEventHandler } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface OverlayProps {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLElement>;
}

const Overlay: FC<OverlayProps> = ({ onClose, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed z-20 inset-0 bg-opacity-50 bg-black cursor-pointer opacity-0"
          key="overlay"
          initial={{ opacity: 0, backdropFilter: "blur(0)" }}
          animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0)" }}
          onClick={onClose}
        />
      )}
    </AnimatePresence>
  );
};

export default Overlay;
