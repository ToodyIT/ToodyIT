import { ReactNode, forwardRef, useRef } from "react";
import useModel from "../../hooks/useModel";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Navigation } from "../Navigation/Navigation";
import { Header } from "../Header/Header";

interface LayoutMainProps {
  children: ReactNode;
}

const LayoutMain = forwardRef<HTMLDivElement, LayoutMainProps>(
  ({ children }, ref) => {
    const circleModelRef = useRef<HTMLCanvasElement>(null);
    const router = useRouter();
    useModel(circleModelRef, { x: 2, y: 0, z: 7 });

    return (
      <motion.div
        initial={{ y: router.query.direction === "top" ? "-100%" : "100%" }}
        ref={ref}
        animate={{ y: 0 }}
        exit={{ y: router.query.direction === "top" ? "100%" : "-100%" }}
        key="our-work"
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div>
          <div
            className="bg-neutral-900 w-full h-screen flex flex-col lg:flex-row overflow-hidden relative pl-6 gap-6 lg:gap-16 py-10 px-5"
            id="innerElement"
          >
            <Navigation />
            {children}
          </div>
          {/* <motion.div
        initial={{ rotate: 180 }}
        animate={{ rotate: 0 }}
        exit={{ rotate: 180 }}
        key="services"
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      > */}
          <canvas
            ref={circleModelRef}
            className="w-full h-full top-0 absolute !bg-transparent pointer-events-none"
            id="ring"
          />
          {/* </motion.div> */}
        </div>
      </motion.div>
    );
  }
);

export default LayoutMain;
