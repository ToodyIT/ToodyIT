import { SocialMedia } from "../SocialMedia/SocialMedia";
import Development from "/public/img/posts/development.jpg";
import Duration from "/public/img/posts/duration.jpg";
import Price from "/public/img/posts/price.jpg";
import Adds from "/public/img/posts/adds.jpg";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const POSTS = [
  {
    img: Development,
    link: "https://www.instagram.com/p/Cs9ptleI59w/",
  },
  {
    img: Duration,
    link: "https://www.instagram.com/p/CtQ9sbyoHsj/",
  },
  {
    img: Price,
    link: "https://www.instagram.com/p/Cs_AiX8IrjS/",
  },
  {
    img: Adds,
    link: "https://www.instagram.com/p/CtMe918IusM/",
  },
];

export const ContactsSocialMedia: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <SocialMedia withText className="justify-start" />
      <h3 className="font-display text-fg mt-10 text-2xl font-semibold">{t("Read something from us")}</h3>
      <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {POSTS.map((post) => (
          <li key={post.link} className="relative aspect-square overflow-hidden rounded-[1.4rem]">
            <Link href={post.link} target="_blank" rel="noreferrer">
              <Image
                fill
                placeholder="blur"
                src={post.img}
                alt={t("Read something from us")}
                className="object-cover"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
