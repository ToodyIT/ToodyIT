import { ReactNode, forwardRef } from "react";
import { Meta } from "../Meta/Meta";
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
          <div className="bg-none w-full flex min-h-screen flex-col items-center max-w-[100vw] overflow-y-visible overflow-x-hidden">
            <Header />
            <div
              // initial={{
              //   y: router.query.direction === "top" ? "-150%" : "150%",
              // }}
              // ref={ref}
              // animate={{ y: 0 }}
              // exit={{
              //   y: router.query.direction === "top" ? "150%" : "-150%",
              // }}
              // transition={{ duration: 0.6, ease: "easeInOut" }}
              key="our-works"
              className="w-full h-full mb-5 lg:mb-8 vl:mb-12"
            >
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
);

export default LayoutMain;
