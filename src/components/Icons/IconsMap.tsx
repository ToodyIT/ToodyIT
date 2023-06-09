import * as Icons from "./Icons";

export const IconsMap = {
  Instagram: <Icons.Instagram />,
  Email: <Icons.Email />,
  Phone: <Icons.Phone />,
};

export type IconName = keyof typeof IconsMap;
