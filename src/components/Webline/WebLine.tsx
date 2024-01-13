import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type WebLineProps = ComponentProps<"div"> & {
  innerClassName?: string;
};

export const WebLine: FC<WebLineProps> = ({
  children,
  style,
  className,
  innerClassName,
}) => (
  <div className={twMerge(className)} style={style}>
    <div
      className={twMerge(
        "max-w-[1440px] h-full px-4 xl:mx-auto xl:w-full 3xl:px-0",
        innerClassName
      )}
    >
      {children}
    </div>
  </div>
);
