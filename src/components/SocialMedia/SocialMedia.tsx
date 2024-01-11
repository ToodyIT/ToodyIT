import { FC, ReactNode } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { gtag } from "ga-gtag";
import { EmailIcon, InstagramIcon, PhoneIcon } from "../Icons/Icons";

type SocialMediaType = {
  link: string;
  text: string;
  icon: ReactNode;
  eventName: string;
};

const SOCIAL_MEDIA: SocialMediaType[] = [
  {
    link: "mail:toody-it@toody-it.com",
    text: "toody-it@toody-it.com",
    icon: <EmailIcon className="size-5" />,
    eventName: "click_on_email",
  },
  {
    link: "https://www.instagram.com/toodyit/",
    text: "@toodyit",
    icon: <InstagramIcon className="size-5" />,
    eventName: "click_on_instagram",
  },
  {
    link: "tel:+420773011578",
    text: "+420 773 011 578",
    icon: <PhoneIcon className="size-4" />,
    eventName: "click_on_phone",
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
          onClick={() =>
            gtag("event", media.eventName, { event_name: media.eventName })
          }
          key={index}
          className="flex gap-3 items-center active:scale-[0.95] transition"
          href={media.link}
          target="_blank"
        >
          <div className="size-9 bg-primary flex rounded-full flex-center">
            {media.icon}
          </div>
          <div className="hidden lg:block font-medium">
            {withText && media.text}
          </div>
        </Link>
      ))}
    </div>
  );
};
