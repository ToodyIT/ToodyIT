import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="bg-neutral-900 w-full h-screen">{children}</div>;
};

export default Layout;
