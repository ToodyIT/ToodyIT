import { forwardRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import LayoutMain from "../components/Layout/LayoutMain";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import MariaPoljanszkaPhoto from "../../public/img/our-works/maria-poljanszka.png";
import MariaPoljanszkaPhotoMobile from "../../public/img/our-works/maria-poljanszkaMobile.png";
import MartaHnatojkoPhoto from "../../public/img/our-works/marta-hnatojko.png";
import MartaHnatojkoPhotoMobile from "../../public/img/our-works/marta-hnatojkoMobile.png";
import SalonKrasyKwhitePhoto from "../../public/img/our-works/salon-krasy-kwhite.png";
import SalonKrasyKwhitePhotoMobile from "../../public/img/our-works/salon-krasy-kwhiteMobile.png";
import HulkAgencPhoto from "../../public/img/our-works/hulk-agenc.png";
import EcoTechPhoto from "../../public/img/our-works/eco-tech.png";
import EcoTechPhotoMobile from "../../public/img/our-works/eco-techMobile.png";
import HulkAgencPhotoMobile from "../../public/img/our-works/hulk-agencMobile.png";

import { WebLine } from "../components/Webline/WebLine";
import Image from "next/image";
import Planet from "/public/img/planet.png";
import { Title } from "../components/Title";
import { LinkIcon } from "../components/Icons/Icons";
import { BlurredDecoration } from "../components/BlurredDecoration/BlurredDecoration";

const OUR_WORKS = [
  {
    desktopImagePath: HulkAgencPhoto,
    mobileImagePath: HulkAgencPhotoMobile,
    link: "https://www.hulkagenc.com/",
    alt: "Hulk Agenc",
  },
  {
    desktopImagePath: EcoTechPhoto,
    mobileImagePath: EcoTechPhotoMobile,
    link: "https://www.eco-tech.cz/",
    alt: "Eco Tech",
  },
  {
    desktopImagePath: MariaPoljanszkaPhoto,
    mobileImagePath: MariaPoljanszkaPhotoMobile,
    link: "https://www.maria-poljanszka.com/",
    alt: "Maria Poljanszka",
  },
  {
    desktopImagePath: SalonKrasyKwhitePhoto,
    mobileImagePath: SalonKrasyKwhitePhotoMobile,
    link: "https://salon-krasy-kwhite.com/",
    alt: "Salon Krasy Kwhite",
  },
  {
    desktopImagePath: MartaHnatojkoPhoto,
    mobileImagePath: MartaHnatojkoPhotoMobile,
    link: "https://www.marta-hnatojko.com/",
    alt: "Marta Hnatojko",
  },
];

const OurWorksPage = forwardRef<HTMLDivElement>((_, ref) => {
  const [emblaRef] = useEmblaCarousel({ align: "center", startIndex: 1 });
  const { t } = useTranslation();
  const ourWorks = OUR_WORKS;

  return (
    <LayoutMain
      ref={ref}
      metaTitle={t("Our Works")}
      metaDescription={t(
        "Discover our impressive portfolio of completed website projects. Explore a diverse range of websites we have designed and developed, showcasing our expertise in creating visually stunning and functional online experiences. Browse through our works and witness the quality and innovation we bring to every website we create."
      )}
    >
      <WebLine innerClassName="overflow-hidden relative vl:overflow-visible flex flex-col">
        <Title type="h1">
          <Trans
            i18nKey="OUR<span>WORKS</span>"
            components={{
              span: <span className="text-greyLight"></span>,
            }}
          />
        </Title>
        <div
          className=" max-h-[700px] vl:max-h-[600px] flex flex-col gap-10 h-full w-full cursor-pointer"
          ref={emblaRef}
        >
          <ul className="flex gap-8 vl:gap-10 h-full">
            {ourWorks.map((work) => (
              <li
                className="h-80 relative vl:h-auto max-w-[200px] vl:max-w-[600px] border border-greyLight flex flex-col rounded-3xl bg-grey-800 flex-[0_0_80%]"
                key={work.link}
              >
                <Image
                  src={work.desktopImagePath}
                  alt={work.alt}
                  placeholder="blur"
                  className="rounded-3xl min-h-full hidden vl:block"
                />
                <Image
                  src={work.mobileImagePath}
                  alt={work.alt}
                  placeholder="blur"
                  className="rounded-3xl min-h-full vl:hidden object-cover object-top"
                />
                <a
                  className="absolute bg-secondary active:scale-95 hover:bg-grey transition rounded-full border-greyLight border right-2 bottom-2 p-2 vl:p-3"
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkIcon className="vl:size-7 size-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex  vl:flex-row flex-col">
          <div className="flex  flex-col">
            <Title type="h2" className="text-primary">
              {t("Experience")}
            </Title>
            <span className="vl:text-xl">
              <Trans
                i18nKey="We <span>explore</span> with you an overview of the <span>most</span> significant things we have achieved ew of the <span>most</span> significant things we have achieved for our customers in recent mon ew of the <span>most</span> significant things we have achieved for our customers in recent mon ew of the <span>most</span> significant things we have achieved for our customers in recent mon for our customers in recent months."
                components={{ span: <span className="text-primary"></span> }}
              />
            </span>
          </div>

          <Image
            className="w-4/5 flex vl:max-w-[402px] pt-6 vl:pt-12 self-end max-w-[302px]"
            src={Planet}
            alt="planet"
          />
        </div>

        <BlurredDecoration className="vl:h-[700px] vl:w-[700px]" />
      </WebLine>
      <BlurredDecoration className="vl:-right-80 vl:-bottom-64 -right-20 -bottom-20 vl:h-[600px] vl:w-[600px] " />
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
