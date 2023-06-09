import { FC, HTMLAttributes } from "react";
import { IconName, IconsMap } from "./IconsMap";
import { twMerge } from "tailwind-merge";

type IconProps = HTMLAttributes<HTMLElement> & {
  icon: IconName;
  width?: number;
  height?: number;
};

export const Icon: FC<IconProps> = ({ icon, className, ...props }) => (
  <i
    className={twMerge(
      "inline-flex w-[14px] text-center font-normal normal-case leading-none [&>svg]:h-full [&>svg]:w-full",
      className
    )}
    data-testid={`basic-icon-iconsvg-${icon}`}
    {...props}
  >
    {IconsMap[icon]}
  </i>
);
