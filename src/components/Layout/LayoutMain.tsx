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
