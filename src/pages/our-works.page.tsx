import LayoutMain from "../components/Layout/LayoutMain";
import { TFunction, useTranslation } from "next-i18next";
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
import { PageHero } from "../components/PageHero/PageHero";
import { Reveal } from "../components/Motion/Reveal";

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
  const { t } = useTranslation();
  const ourWorks = getOurWorks(t);

  return (
    <LayoutMain
      metaTitle={t("Our Works")}
      metaDescription={t(
        "Client projects we built. We also have our own product, ToodyMenu."
      )}
    >
      <PageHero
        kicker={t("Our Works")}
        title={t("Selected work")}
        text={t(
          "Client projects we built. We also have our own product, ToodyMenu."
        )}
      />
      <WebLine innerClassName="grid gap-4 pb-20 md:grid-cols-2">
        {ourWorks.map((work, index) => (
          <Reveal delay={(index % 2) * 0.05} key={work.link}>
            <a
              className="border-line bg-panel group block overflow-hidden rounded-[1.4rem] border transition-colors hover:border-brand/30"
              href={work.link}
              rel="noreferrer"
              target="_blank"
            >
              <div className="relative h-64 overflow-hidden sm:h-80">
                <Image
                  alt={work.alt}
                  className="object-cover object-top transition duration-700 group-hover:scale-105"
                  fill
                  placeholder="blur"
                  src={work.desktopImagePath}
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-display text-fg text-lg font-semibold">
                    {work.alt}
                  </h2>
                  <span className="text-xs font-semibold text-brand">
                    0{index + 1}
                  </span>
                </div>
                {work.description && (
                  <p className="text-muted mt-2 text-sm leading-6">
                    {work.description}
                  </p>
                )}
              </div>
            </a>
          </Reveal>
        ))}
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
