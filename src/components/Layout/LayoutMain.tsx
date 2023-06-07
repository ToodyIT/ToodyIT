import { ReactNode, forwardRef, useRef } from "react";
import Link from "next/link";
import useModel from "../../hooks/useModel";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { twJoin } from "tailwind-merge";

const SECTIONS = [
  {
    title: "Services",
    link: "/services",
    order: 1,
  },
  {
    title: "Our Work",
    link: "/our-work",
    order: 2,
  },
  {
    title: "About Us",
    link: "/about-us",
    order: 3,
  },
  {
    title: "Our Team",
    link: "/our-team",
    order: 4,
  },
  {
    title: "Contacts",
    link: "/contacts",
    order: 5,
  },
];

interface LayoutMainProps {
  children: ReactNode;
}

const LayoutMain = forwardRef<HTMLDivElement, LayoutMainProps>(
  ({ children }, ref) => {
    const circleModelRef = useRef<HTMLCanvasElement>(null);
    const router = useRouter();
    useModel(circleModelRef, { x: 2, y: 0, z: 7 });

    const getLinkQueries = (order: number) => {
      if (!Array.isArray(router.query.order) && router.query.order) {
        return {
          order,
          direction: parseFloat(router.query.order) > order ? "top" : "bottom",
        };
      }

      return {
        order,
      };
    };

    return (
      <motion.div
        initial={{ y: router.query.direction === "top" ? "-100%" : "100%" }}
        ref={ref}
        animate={{ y: 0 }}
        exit={{ y: router.query.direction === "top" ? "100%" : "-100%" }}
        key="our-work"
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div id="circleModelWrapper">
          <div
            className="bg-neutral-900 w-full h-screen flex flex-row overflow-hidden relative pl-6 gap-16 py-10"
            id="innerElement"
          >
            <div className="flex flex-col items-center justify-between h-4/5 m-auto">
              {SECTIONS.map((section) => (
                <Link
                  key={section.title}
                  href={{
                    pathname: section.link,
                    query: getLinkQueries(section.order),
                  }}
                  as={section.link}
                  className={twJoin(
                    "text-white text-xl [writing-mode:vertical-lr] [text-orientation:mixed] rotate-180 whitespace-nowrap",
                    router.asPath.includes(section.link) && "text-primary"
                  )}
                >
                  {section.title}
                </Link>
              ))}
            </div>
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
