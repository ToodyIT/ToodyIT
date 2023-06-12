import { FC, ReactNode } from "react";

type FormLineProps = {
  children: ReactNode;
};

export const FormLine: FC<FormLineProps> = ({ children }) => {
  return (
    <div className="flex gap-7 lg:gap-12 w-full flex-col lg:flex-row">{children}</div>
  );
};
