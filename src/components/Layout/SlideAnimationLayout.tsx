import { ReactNode, forwardRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import LayoutMain from "./LayoutMain";

interface SlideAnimationLayoutProps {
  children: ReactNode;
  metaTitle: string;
  metaDescription: string;
}

const SlideAnimationLayout = forwardRef<
  HTMLDivElement,
  SlideAnimationLayoutProps
>(({ children, metaTitle, metaDescription }, ref) => {
  const router = useRouter();

  return (
    <LayoutMain metaTitle={metaTitle} metaDescription={metaDescription}>
      <motion.div
        initial={{ y: router.query.direction === "top" ? "-100%" : "100%" }}
        ref={ref}
        animate={{ y: 0 }}
        exit={{ y: router.query.direction === "top" ? "100%" : "-100%" }}
        key="our-works"
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full"
      >
        {children}
      </motion.div>
    </LayoutMain>
  );
});

export default SlideAnimationLayout;
