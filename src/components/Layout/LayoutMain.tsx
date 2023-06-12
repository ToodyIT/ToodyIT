import { ReactNode, forwardRef } from "react";
import { Navigation } from "../Navigation/Navigation";
import { Meta } from "../Meta/Meta";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface LayoutMainProps {
  children: ReactNode;
  metaTitle: string;
  metaDescription: string;
}

const LayoutMain = forwardRef<HTMLDivElement, LayoutMainProps>(
  ({ children, metaTitle, metaDescription }, ref) => {
    const router = useRouter();
    return (
      <>
        <Meta metaTitle={metaTitle} metaDescription={metaDescription} />
        <div className="w-full">
          <div className="bg-neutral-900 w-full flex min-h-screen flex-col lg:flex-row lg:overflow-hidden relative gap-4 lg:gap-10 pb-4">
            <Navigation />
            <motion.div
              initial={{
                y: router.query.direction === "top" ? "-150%" : "150%",
              }}
              ref={ref}
              animate={{ y: 0 }}
              exit={{
                y: router.query.direction === "top" ? "150%" : "-150%",
              }}
              key="our-works"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="px-5 w-full lg:py-10"
            >
              {children}
            </motion.div>
          </div>
        </div>
      </>
    );
  }
);

export default LayoutMain;
