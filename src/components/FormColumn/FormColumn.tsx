import { FC, ReactNode } from "react";

type FormLineProps = {
  children: ReactNode;
};

export const FormLine: FC<FormLineProps> = ({ children }) => {
  return <div className="flex gap-12 w-full">{children}</div>;
};
