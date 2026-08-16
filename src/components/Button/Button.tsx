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
    "inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-300",
    variant === "primary" &&
      "bg-brand text-white shadow-[0_12px_40px_rgba(26,176,48,0.28)] hover:-translate-y-0.5 hover:bg-[#22c43a]",
    variant === "primaryOutlined" &&
      "border-line bg-glass text-fg border backdrop-blur-sm hover:border-brand/40",
    disabled && "pointer-events-none translate-y-0 opacity-60",
    size === "lg" && "px-6 py-3 text-sm vl:px-7",
    size === "md" && "px-6 py-3 text-sm",
    size === "sm" && "px-4 py-2 text-xs"
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <button
      className={twMerge(
        getButtonClassName(variant, size, disabled),
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
