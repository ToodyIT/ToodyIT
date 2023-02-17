import { FC, ReactNode } from "react";
import Link from "next/link";

interface LayoutMainProps {
  children: ReactNode;
}

const LayoutMain: FC<LayoutMainProps> = ({ children }) => {
  return (
    <div className="bg-neutral-900 w-full h-screen flex flex-col overflow-hidden relative">
      {children}
      <div className="justify-between flex flex-col h-screen items-start py-10">
        <Link href="/" className="text-white text-xl rotate-90">
          Return
        </Link>
        <Link href="/" className="text-primary text-xl rotate-90">
          Services
        </Link>
        <Link href="/" className="text-white text-xl rotate-90">
          Our work
        </Link>
        <Link href="/" className="text-white text-xl rotate-90">
          About us
        </Link>
        <Link href="/" className="text-white text-xl rotate-90">
          Our workers
        </Link>
        <Link href="/" className="text-white text-xl rotate-90">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default LayoutMain;
