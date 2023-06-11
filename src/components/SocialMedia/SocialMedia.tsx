import { FC } from "react";
import { Icon } from "../Icons/Icon";
import Link from "next/link";
import { IconName } from "../Icons/IconsMap";
import { twMerge } from "tailwind-merge";

type SocialMediaType = {
  link: string;
  text: string;
  icon: IconName;
};

const SOCIAL_MEDIA: SocialMediaType[] = [
  {
    link: "mail:",
    text: "toody-it@toody-it.com",
    icon: "Email",
  },
  {
    link: "",
    text: "@toodyit",
    icon: "Instagram",
  },
  {
    link: "tel:+420773011578",
    text: "+420 773 011 578",
    icon: "Phone",
  },
];

type SocialMediaProps = {
  withText?: boolean;
  className?: string;
};

export const SocialMedia: FC<SocialMediaProps> = ({
  withText = true,
  className,
}) => {
  return (
    <div className={twMerge("flex gap-5 justify-center w-full", className)}>
      {SOCIAL_MEDIA.map((media, index) => (
        <Link
          key={index}
          className="flex gap-3 items-center active:scale-[0.95] transition"
          href={media.link}
        >
          <div className="size-9 bg-primary flex rounded-full flex-center">
            <Icon icon={media.icon} className="w-5 h-5" />
          </div>
          <div className="hidden lg:block">{withText && media.text}</div>
        </Link>
      ))}
    </div>
  );
};
