import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = {
  children: ReactNode;
  type: "h1" | "h2" | "h3";
  id?: string;
};

export const Title: FC<TitleProps> = ({ children, type, id, className }) => {
  if (type === "h1") {
    return (
      <h1
        className={twMerge(
          "font-display text-fg mb-6 mt-4 max-w-[16ch] text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl",
          className
        )}
      >
        {children}
      </h1>
    );
  }

  if (type === "h2") {
    return (
      <h2
        id={id}
        className={twMerge(
          "font-display text-fg mb-4 mt-6 text-3xl font-bold tracking-tight sm:text-5xl",
          className
        )}
      >
        {children}
      </h2>
    );
  }

  return (
    <h3
      id={id}
      className={twMerge(
        "font-display text-fg mb-3 mt-5 text-xl font-semibold sm:text-2xl",
        className
      )}
    >
      {children}
    </h3>
  );
};
