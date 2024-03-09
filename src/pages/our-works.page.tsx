import useEmblaCarousel from "embla-carousel-react";
import LayoutMain from "../components/Layout/LayoutMain";
import { TFunction, Trans, useTranslation } from "next-i18next";
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
import AmatiDentalPhoto from "../../public/img/our-works/amati-dental.png";
import AmatiDentalPhotoMobile from "../../public/img/our-works/amati-dentalMobile.png";

import { WebLine } from "../components/Webline/WebLine";
import Image from "next/image";
import Planet from "/public/img/planet.png";
import { Title } from "../components/Title";
import { LinkIcon } from "../components/Icons/Icons";
import { BlurredDecoration } from "../components/BlurredDecoration/BlurredDecoration";

export const getOurWorks = (t: TFunction) => {
  return [
    {
      desktopImagePath: HulkAgencPhoto,
      mobileImagePath: HulkAgencPhotoMobile,
      link: "https://www.hulkagenc.com/",
      alt: "Hulk Agenc",
      description: t(
        "Hulk Agenc - a modern job search platform with dynamic design. Check out our portfolio to bring your ideas to life."
      ),
    },
    {
      desktopImagePath: EcoTechPhoto,
      mobileImagePath: EcoTechPhotoMobile,
      link: "https://www.eco-tech.cz/",
      alt: "Eco Tech",
      description: t(
        "EcoTech is our recent project for a construction and engineering solutions company. The site features company info and services."
      ),
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
    {
      desktopImagePath: AmatiDentalPhoto,
      mobileImagePath: AmatiDentalPhotoMobile,
      link: "https://amatidental.cz/",
      alt: "Amati Dental Clinic",
    },
  ];
};

const OurWorksPage = () => {
  const [emblaRef] = useEmblaCarousel({ align: "center", startIndex: 2 });
  const { t } = useTranslation();
  const ourWorks = getOurWorks(t);

  return (
    <LayoutMain
      metaTitle={t("Our Works")}
      metaDescription={t(
        "Discover our impressive portfolio of completed web projects. Explore the variety of websites we have designed and developed, showcasing our expertise in creating visually stunning and functional online resources. Browse through our work and see the quality and innovation we bring to every website we create."
      )}
    >
      <WebLine innerClassName="relative flex flex-col">
        <Title type="h1">
          <Trans
            i18nKey="OUR<span>WORKS</span>"
            components={{
              span: (
                <span className="text-greyLighter dark:text-greyLight/50"></span>
              ),
            }}
          />
        </Title>
        <div
          className="max-h-[700px] vl:max-h-[600px] flex flex-col gap-10 h-full w-full cursor-pointer"
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
                  className="absolute dark:bg-secondary bg-greyLight active:scale-95 hover:bg-grey transition rounded-full border-greyLight border right-2 bottom-2 p-2 vl:p-3"
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkIcon className="vl:size-7 size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex  vl:flex-row flex-col">
          <div className="flex  flex-col">
            <Title type="h2" className="text-primary">
              {t("Immersion in the world of our projects")}
            </Title>
            <div className=" gap-6  flex flex-col vl:text-xl">
              <p>
                {t(
                  "Let us introduce you to some of our successful projects. We take pride in the results of our work and strive to ensure that each project reflects our commitment to quality and innovation."
                )}{" "}
              </p>

              <p className="max-w-3xl">
                {t(
                  "Explore our portfolio to see the variety of our work. We are ready to realize your ideas and make your project unique and successful."
                )}{" "}
              </p>
            </div>
          </div>

          <Image
            className="w-4/5 flex vl:max-w-[402px] pt-6 vl:pt-12 self-end max-w-[302px]"
            src={Planet}
            alt="planet"
          />
        </div>

        <BlurredDecoration className="vl:h-[700px] vl:w-[700px]" />
        <BlurredDecoration className="right-48 -bottom-5" />
      </WebLine>
    </LayoutMain>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};

export default OurWorksPage;
