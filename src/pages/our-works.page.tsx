import { forwardRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import LayoutMain from "../components/Layout/LayoutMain";
import { useTranslation, TFunction } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { BlurredDecoration } from "../components/BlurredDecoration/BlurredDecoration";
import MariaPoljanszkaPhoto from "../../public/img/our-works/maria-poljanszka.png";
import MartaHnatojkoPhoto from "../../public/img/our-works/marta-hnatojko.png";
import SalonKrasyKwhitePhoto from "../../public/img/our-works/salon-krasy-kwhite.png";
import HulkAgencPhoto from "../../public/img/our-works/hulk-agenc.png";

const getOurWorks = (t: TFunction) => {
  return [
    {
      imagePath: HulkAgencPhoto,
      name: t("AGENCY SITE"),
      title: t("Sleek and innovative agency website - your gateway to success"),
      description: t(
        "We, the developers, proudly present a cutting-edge agency website blending contemporary design and technology for a seamless, engaging user experience."
      ),
      customer: "HULK AGENC",
      date: t("NOVEMBER 1, 2023"),
      alt: t("Hulk Agenc"),
    },
    // {
    //   imagePath: HulkAgencPhoto,
    //   name: t("WORK SITE"),
    //   title: t(
    //     "Cutting-Edge Building Company Website - Your Path to Quality Construction"
    //   ),
    //   description: t(
    //     "Explore our web development work for a top construction company, exemplifying quality and innovation. Elevate your online presence with our expertise."
    //   ),
    //   customer: "ECO TECH",
    //   date: t("NOVEMBER 1, 2023"),
    //   alt: t("Eco Tech"),
    // },
    {
      imagePath: MariaPoljanszkaPhoto,
      name: t("BUSINESS CARD"),
      title: t("Stylish and modern website for you"),
      description: t(
        "A website that catches attention at first glance and makes it easy to get in touch with you, representing you and your process at a high professional level."
      ),
      customer: "MARIA POLJANSZKA",
      date: t("DECEMBER 16, 2023"),
      alt: t("Maria Poljanszka"),
    },
    {
      imagePath: SalonKrasyKwhitePhoto,
      name: t("WORK SITE"),
      title: t(
        "Vibrant and luxurious beauty salon website - your path to the perfect look"
      ),
      description: t(
        "A website with excellent design invites clients on a unique journey to improvement, showcasing your beauty salon and its process at a high level of professionalism."
      ),
      customer: "SALON KRASY KWHITE",
      date: t("APRIL 24, 2023"),
      alt: t("Salon Krasy Kwhite"),
    },
    {
      imagePath: MartaHnatojkoPhoto,
      name: t("BUSINESS CARD"),
      title: t("Elegant and professional website reflecting your expertise"),
      description: t(
        "The website emphasizes your expertise and experience, making it a reliable and attractive source of information about you."
      ),
      customer: "MARTA HNATOJKO",
      date: t("NOVEMBER 21, 2022"),
      alt: t("Marta Hnatojko"),
    },
  ];
};
const OurWorksPage = forwardRef<HTMLDivElement>((_, ref) => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });
  const { t } = useTranslation();
  const ourWorks = getOurWorks(t);

  return (
    <LayoutMain
      ref={ref}
      metaTitle={t("Our Works")}
      metaDescription={t(
        "Discover our impressive portfolio of completed website projects. Explore a diverse range of websites we have designed and developed, showcasing our expertise in creating visually stunning and functional online experiences. Browse through our works and witness the quality and innovation we bring to every website we create."
      )}
    >
      <div className="flex flex-col gap-7 -mr-5">
        <h1 className="text-white font-bold text-4xl flex text-center">
          {t("RECENT WORKS")}
        </h1>
        <BlurredDecoration />

        <div className="flex">
          <div
            className="relative max-h-[600px] h-full w-full cursor-pointer overflow-hidden"
            ref={emblaRef}
          >
            <ul className="flex gap-7 lg:gap-14 h-full">
              {ourWorks.map((work) => (
                <li
                  className="h-auto max-w-[382px] flex flex-col rounded-3xl bg-grey-800 flex-[0_0_80%]"
                  key={work.title}
                >
                  <Image
                    src={work.imagePath}
                    alt={work.alt}
                    placeholder="blur"
                    className="rounded-t-3xl"
                  />
                  <div className="bg-primary w-36 h-9 flex rounded-3xl py-0.5 -translate-y-1/2 ml-9 justify-center">
                    {work.name}
                  </div>
                  <div className="flex flex-col px-6 pb-6 gap-7 h-full">
                    <h2 className="font-bold">{work.title}</h2>
                    <p>{work.description}</p>
                    <div className="bg-primary mt-auto w-full h-[1px]" />
                    <div className="flex flex-col">
                      <address className="font-bold">{work.customer}</address>
                      <time>{work.date}</time>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
});

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};

export default OurWorksPage;
