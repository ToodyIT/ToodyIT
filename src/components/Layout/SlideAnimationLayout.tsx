import { ReactNode, forwardRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import LayoutMain from "./LayoutMain";

interface SlideAnimationLayoutProps {
  children: ReactNode;
}

const SlideAnimationLayout = forwardRef<
  HTMLDivElement,
  SlideAnimationLayoutProps
>(({ children }, ref) => {
  const router = useRouter();

  return (
    <LayoutMain>
      <motion.div
        initial={{ y: router.query.direction === "top" ? "-100%" : "100%" }}
        ref={ref}
        animate={{ y: 0 }}
        exit={{ y: router.query.direction === "top" ? "100%" : "-100%" }}
        key="our-work"
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full"
      >
        {children}
      </motion.div>
    </LayoutMain>
  );
});

export default SlideAnimationLayout;
