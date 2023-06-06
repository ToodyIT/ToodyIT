import { FC, ReactNode, useEffect, useRef } from "react";
import Link from "next/link";
import useModel from "../../hooks/useModel";
import { motion } from "framer-motion";

const SECTIONS = [
  {
    title: "Return",
    link: "/",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Our Work",
    link: "/our-work",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Our Team",
    link: "/our-team",
  },
  {
    title: "Contacts",
    link: "/contacts",
  },
];

interface LayoutMainProps {
  children: ReactNode;
}

const LayoutMain: FC<LayoutMainProps> = ({ children }) => {
  const circleModelRef = useRef<HTMLCanvasElement>(null);
  useModel(circleModelRef, { x: 2, y: 0, z: 7 });

  return (
    <div id="circleModelWrapper">
      <div
        className="bg-neutral-900 w-full h-screen flex flex-row overflow-hidden relative pl-6 gap-16 py-10"
        id="innerElement"
      >
        <div className="flex flex-col items-center justify-between h-4/5 m-auto">
          {SECTIONS.map((section) => (
            <Link
              key={section.title}
              href={section.link}
              className="text-white text-xl [writing-mode:vertical-lr] [text-orientation:mixed] rotate-180 whitespace-nowrap"
            >
              {section.title}
            </Link>
          ))}
        </div>
        {children}
      </div>
      <motion.div
        initial={{ rotate: 180 }}
        animate={{ rotate: 0 }}
        exit={{ rotate: 180 }}
        key="services"
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <canvas
          ref={circleModelRef}
          className="w-full h-full top-0 absolute !bg-transparent pointer-events-none"
          id="ring"
        />
      </motion.div>
    </div>
  );
};

export default LayoutMain;
