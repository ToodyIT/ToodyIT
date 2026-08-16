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
        "mx-auto h-full w-full max-w-[1180px] px-5 sm:px-8",
        innerClassName
      )}
    >
      {children}
    </div>
  </div>
);
