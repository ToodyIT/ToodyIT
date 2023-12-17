import { ReactNode, forwardRef } from "react";
import { Meta } from "../Meta/Meta";
import { motion } from "framer-motion";
import { useRouter } from "next/router";


import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";


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
          <div className="bg-grey w-full flex min-h-screen flex-col lg:overflow-hidden  items-center">
            <Header />
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
              className="w-full h-full"
            >
              {children}
            </motion.div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
);

export default LayoutMain;
