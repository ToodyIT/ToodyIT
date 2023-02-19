import { FC, ReactNode } from "react";
import Link from "next/link";

const SECTIONS = [
  {
    title: "Return",
    link: "/return",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Our work",
    link: "/our-work",
  },
  {
    title: "About us",
    link: "/about-us",
  },
  {
    title: "Our workers",
    link: "/our-workers",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

interface LayoutMainProps {
  children: ReactNode;
}

const LayoutMain: FC<LayoutMainProps> = ({ children }) => {
  return (
    <div className="bg-neutral-900 w-full h-screen flex flex-row overflow-hidden relative pl-6">
      <div className="flex flex-col items-center h-full gap-32 justify-center">
        {SECTIONS.map((section) => (
          <Link
            key={section.title}
            href={section.link}
            className="text-white text-xl [writing-mode:vertical-lr] [text-orientation:mixed] rotate-180"
          >
            {section.title}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
};

export default LayoutMain;
