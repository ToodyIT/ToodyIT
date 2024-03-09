import Link from "next/link";
import { ComponentProps, FC } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { UrlObject } from "url";

type ButtonProps = {
  variant?: "primary" | "primaryOutlined";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
} & (
  | ({
      tagName?: "button";
      href?: never;
    } & ComponentProps<"button">)
  | ({
      tagName?: "a";
      href: UrlObject | string;
    } & ComponentProps<"a">)
);

const getButtonClassName = (
  variant: ButtonProps["variant"],
  size: ButtonProps["size"],
  disabled?: boolean
) =>
  twJoin(
    "font-bold rounded-full w-fit tracking-wider flex items-center",
    variant === "primary" && "bg-primary text-white",
    variant === "primaryOutlined" &&
      "bg-transparent border-2 border-primary text-primary",
    disabled && "bg-gray-500 pointer-events-none",
    size === "lg" && "h-12 vl:h-14 px-4 vl:px-6",
    size === "md" && "h-10 vl:h-12 px-4 vl:px-6",
    size === "sm" && "h-8 vl:h-10 px-2 vl:px-4"
  );

export const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  variant = "primary",
  size = "md",
  tagName,
  href,
  ...props
}) => {
  if (tagName === "a") {
    return (
      <Link
        href={href}
        className={twMerge(
          getButtonClassName(variant, size, disabled),
          className
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={twMerge(
        getButtonClassName(variant, size, disabled),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
