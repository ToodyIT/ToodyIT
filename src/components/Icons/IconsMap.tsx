import * as Icons from "./Icons";

export const IconsMap = {
  Instagram: <Icons.Instagram />,
  Email: <Icons.Email />,
  Phone: <Icons.Phone />,
  Arrow: <Icons.Arrow />,
};

export type IconName = keyof typeof IconsMap;
