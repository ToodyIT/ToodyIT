import { FC } from "react";
import { motion } from "framer-motion";
import { NAVIGATION_ITEMS } from "../Navigation/Navigation";
import Link from "next/link";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

const POSTS = [
  {
    img: "development.jpg",
    alt: "development",
    link: "https://www.instagram.com/p/Cs9ptleI59w/",
  },
  {
    img: "duration.jpg",
    alt: "duration",
    link: "https://www.instagram.com/p/CtQ9sbyoHsj/",
  },
  {
    img: "price.jpg",
    alt: "price",
    link: "https://www.instagram.com/p/Cs_AiX8IrjS/",
  },
  {
    img: "adds.jpg",
    alt: "adds",
    link: "https://www.instagram.com/p/CtMe918IusM/",
  },
];

type FooterProps = {
  isOpen: boolean;
};

const Footer: FC<FooterProps> = ({ isOpen }) => {
  return (
    <motion.footer
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { y: "0" },
        closed: { y: "100%" },
      }}
      className="h-[350px] bg-neutral-800 absolute bottom-0 z-30 left-0 w-full flex flex-col gap-4 items-center px-8 py-4"
    >
      <div className="flex gap-4 lg:gap-10 max-w-2xl justify-between flex-wrap w-full">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.title}
            href={{
              pathname: item.link,
              query: { order: item.order },
            }}
            className="text-xl active:scale-[0.95] hover:text-gray-400 transition duration-200 ease-in-out"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-7 items-center max-w-6xl h-full w-full">
        {POSTS.map((post, index) => (
          <Link
            href={post.link}
            key={index}
            target="_blank"
            className={twJoin(
              "relative w-full h-fit aspect-square max-w-[180px] rounded-2xl overflow-hidden border-8 border-primary",
              index > 1 && "hidden lg:block"
            )}
          >
            <Image
              fill
              src={`/img/posts/${post.img}`}
              alt={`${post.alt} post`}
            />
          </Link>
        ))}
      </div>
      <SocialMedia />
    </motion.footer>
  );
};

export default Footer;
