import { FC } from "react";
import { motion } from "framer-motion";
import { NAVIGATION_ITEMS } from "../Navigation/Navigation";
import Link from "next/link";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import Image from "next/image";

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

const Footer: FC = () => {
  return (
    <motion.footer
      animate={{ y: 0 }}
      initial={{ y: "100%" }}
      exit={{ y: "100%" }}
      className="h-[350px] bg-neutral-800 absolute bottom-0 z-20 left-0 w-full flex flex-col gap-4 items-center px-8 py-4"
    >
      <div className="flex gap-10 justify-between max-w-[800px] flex-wrap w-full">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.title}
            href={{
              pathname: item.link,
              query: { order: item.order },
            }}
            as={item.link}
            className="text-xl"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex justify-between max-w-6xl h-full w-full">
        {POSTS.map((post, index) => (
          <Link
            href={post.link}
            key={index}
            target="_blank"
            className="relative h-full aspect-square rounded-2xl overflow-hidden border-8 border-primary"
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
