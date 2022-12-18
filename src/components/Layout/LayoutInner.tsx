import { FC, ReactNode } from "react";

interface LayoutInnerProps {
  children: ReactNode;
}

const LayoutInner: FC<LayoutInnerProps> = ({ children }) => {
  return <div className="mx-auto px-32 h-full flex flex-col">{children}</div>;
};

export default LayoutInner;
