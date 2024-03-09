import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  variant?: "primary" | "primaryOutlined";
  size?: "sm" | "md" | "lg";
} & ComponentProps<"button">;

export const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  variant = "primary",
  size = "md",
  ...props
}) => {
  return (
    <button
      className={twMerge(
        "font-bold rounded-full w-fit tracking-wider",
        variant === "primary" && "bg-primary text-white",
        variant === "primaryOutlined" &&
          "bg-transparent border-2 border-primary text-primary",
        disabled && "bg-gray-500 pointer-events-none",
        size === "lg" && "h-12 vl:h-14 px-4 vl:px-6",
        size === "md" && "h-10 vl:h-12 px-4 vl:px-6",
        size === "sm" && "h-8 vl:h-10 px-2 vl:px-4",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
