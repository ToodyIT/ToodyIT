import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button">;

export const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        "bg-primary font-bold rounded-full w-fit px-8 uppercase tracking-wider h-16 text-white",
        disabled && "bg-gray-500 pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
