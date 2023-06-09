import { FC } from "react";
import { Icon } from "../Icons/Icon";
import Link from "next/link";
import { IconName } from "../Icons/IconsMap";

type SocialMediaType = {
  link: string;
  text: string;
  icon: IconName;
};

const SOCIAL_MEDIA: SocialMediaType[] = [
  {
    link: "",
    text: "@toodyit",
    icon: "Instagram",
  },
  {
    link: "",
    text: "@toodyit",
    icon: "Email",
  },
  {
    link: "",
    text: "@toodyit",
    icon: "Phone",
  },
];

type SocialMediaProps = {
  withText?: boolean;
};

export const SocialMedia: FC<SocialMediaProps> = ({ withText = true }) => {
  return (
    <div className="flex gap-6 max-w-[500px] justify-between w-full">
      {SOCIAL_MEDIA.map((media, index) => (
        <Link key={index} className="flex gap-3 items-center" href={media.link}>
          <div className="size-9 bg-primary flex rounded-full flex-center">
            <Icon icon={media.icon} className="w-5 h-5" />
          </div>
          {withText && media.text}
        </Link>
      ))}
    </div>
  );
};
