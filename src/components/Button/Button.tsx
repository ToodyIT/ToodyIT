import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button">;

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        "bg-primary rounded-full w-fit px-8 uppercase font-medium tracking-wider h-16",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
