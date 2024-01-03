import { SocialMedia } from "../SocialMedia/SocialMedia";
import Development from "/public/img/posts/development.jpg";
import Duration from "/public/img/posts/duration.jpg";
import Price from "/public/img/posts/price.jpg";
import Adds from "/public/img/posts/adds.jpg";
import Link from "next/link";
import { gtag } from "ga-gtag";
import { twJoin } from "tailwind-merge";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Title } from "../Title";

const POSTS = [
  {
    img: Development,
    alt: "development",
    link: "https://www.instagram.com/p/Cs9ptleI59w/",
  },
  {
    img: Duration,
    alt: "duration",
    link: "https://www.instagram.com/p/CtQ9sbyoHsj/",
  },
  {
    img: Price,
    alt: "price",
    link: "https://www.instagram.com/p/Cs_AiX8IrjS/",
  },
  {
    img: Adds,
    alt: "adds",
    link: "https://www.instagram.com/p/CtMe918IusM/",
  },
];

export const ContactsSocialMedia: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col items-center mt-5">
      <SocialMedia withText className="max-w-[700px] justify-center mt-2" />
      <div className="w-full">
        <Title type="h3">{t("Read something from us")}</Title>
        <ul className="flex w-full justify-between gap-6">
          {POSTS.map((post, index) => (
            <li
              key={index}
              className={twJoin(
                "relative w-full h-fit aspect-square max-w-[250px] rounded-2xl overflow-hidden border-8 border-primary",
                index > 1 && "hidden lg:block"
              )}
            >
              <Link
                onClick={() => {
                  gtag("event", "click_on_footer_posts", {
                    event_name: "click_on_footer_posts",
                  });
                }}
                href={post.link}
                target="_blank"
              >
                <Image
                  fill
                  placeholder="blur"
                  src={post.img}
                  alt={`${post.alt} post`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
