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
        "rounded-full bg-[#176E22] -z-[1] blur-3xl bg-opacity-20 h-[300px] w-[300px] vl:h-[500px] vl:w-[500px] absolute",
        className
      )}
    ></div>
  );
};

