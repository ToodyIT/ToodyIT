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
          "text-4xl vl:text-[60px] vl:leading-[70px] xl:!leading-[100px] xl:text-[100px] flex vl:gap-8 xl:gap-12 flex-wrap vl:flex-nowrap w-full gap-3 vl:mt-12 vl:mb-6 mt-8 mb-4 font-bold",
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
          "text-3xl vl:mt-8 vl:mb-4 mt-6 mb-3 font-semibold vl:text-5xl",
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
        "text-xl vl:mt-8 vl:mb-4 mt-6 mb-3 font-semibold vl:text-3xl",
        className
      )}
    >
      {children}
    </h3>
  );
};
