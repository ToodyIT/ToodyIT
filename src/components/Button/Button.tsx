import { ComponentProps, FC } from "react";

type ButtonProps = {} & ComponentProps<"button">;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-primary rounded-full w-fit px-8 uppercase font-medium tracking-wider h-16"
      {...props}
    >
      {children}
    </button>
  );
};
