import { forwardRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SlideAnimationLayout from "../components/Layout/SlideAnimationLayout";
import { useTranslation, TFunction } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import IvanHodynchukPhoto from "/public/img/our-team/ivan-hodynchuk.jpg";
import VasylPolyasnkyyPhoto from "/public/img/our-team/vasyl-polyanskyy.jpg";
import NatalieLysenkoPhoto from "/public/img/our-team/natalie-lysenko.jpg";
import AndriyKosarkoPhoto from "/public/img/our-team/andriy-kosarko.jpg";
import JakubDvoracekPhoto from "/public/img/our-team/jakub-dvoracek.jpg";
import { BlurredDecoration } from "../components/BlurredDecoration/BlurredDecoration";

const getOurTeam = (t: TFunction) => {
  return [
    {
      imagePath: VasylPolyasnkyyPhoto,
      name: t("VASYL POLYANSKYY"),
      position: t("PROJECT MANAGER"),
      alt: t("Vasyl Polyanskyy"),
    },
    {
      imagePath: IvanHodynchukPhoto,
      name: t("IVAN HODYNCHUK"),
      position: t("DEVELOPER"),
      alt: t("Ivan Hodynchuk"),
    },
    {
      imagePath: NatalieLysenkoPhoto,
      name: t("NATALIE LISENKO"),
      position: t("DESIGNER"),
      alt: t("Natalie Lysenko"),
    },
    {
      imagePath: AndriyKosarkoPhoto,
      name: t("ANDRIY KOSAREV"),
      position: t("TRANSLATOR"),
      alt: t("Andriy Kosarko"),
    },
    {
      imagePath: JakubDvoracekPhoto,
      name: t("JAKUB DVOŘÁČEK"),
      position: t("DEVELOPER"),
      alt: t("Jakub Dvořáček"),
    },
  ];
};

const OurTeamPage = forwardRef<HTMLDivElement>((_, ref) => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });
  const { t } = useTranslation();
  const ourTeam = getOurTeam(t);

  return (
    <SlideAnimationLayout
      ref={ref}
      metaTitle={t("Our Team")}
      metaDescription={t(
        "Meet our talented and dedicated team of professionals. Discover the expertise and passion that drives us to create exceptional websites. Learn about our diverse skills and experience, as well as our collaborative approach to delivering high-quality web solutions. Get to know the individuals behind our success."
      )}
    >
      <div className="flex flex-col gap-7 -mr-5 h-screen">
        <h1 className="text-white font-bold text-4xl flex text-center">
          {t("OUR TEAM")}
        </h1>
        <BlurredDecoration />
        <div className="flex h-screen">
          <div
            className="relative max-h-[600px] h-full w-full cursor-pointer overflow-hidden"
            ref={emblaRef}
          >
            <ul className="flex gap-7 lg:gap-14 h-fit max-w-[317px]">
              {ourTeam.map((team) => (
                <li
                  className="h-auto lg:flex-none  z-10 flex flex-col rounded-3xl bg-grey-800 flex-[0_0_80%]"
                  key={team.name}
                >
                  <div className="p-5 flex gap-5 flex-col">
                    <div className="relative h-[350px] w-[277px] lg:h-[400px] lg:w-[327px] ">
                      <Image
                        src={team.imagePath}
                        alt={team.alt}
                        placeholder="blur"
                        className="rounded-3xl"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-primary">{team.name}</h2>
                      <span>{team.position}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SlideAnimationLayout>
  );
});

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};

export default OurTeamPage;
