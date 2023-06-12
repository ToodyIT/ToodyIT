import { FC } from "react";
import { twMerge } from "tailwind-merge";

type BlurredDecorationProps = {
  className?: string;
};

export const BlurredDecoration: FC<BlurredDecorationProps> = ({
  className,
}) => {
  return (
    <div
      className={twMerge(
        "rounded-full bg-[#176E22] blur-3xl bg-opacity-20 z-0 h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] absolute",
        className
      )}
    ></div>
  );
};
