import * as Icons from "./Icons";

export const IconsMap = {
  Instagram: <Icons.Instagram />,
  Email: <Icons.Email />,
  Phone: <Icons.Phone />,
  Arrow: <Icons.Arrow />,
  Checkmark: <Icons.Checkmark />,
  DrawnArrow: <Icons.DrawnArrow />,
};

export type IconName = keyof typeof IconsMap;
