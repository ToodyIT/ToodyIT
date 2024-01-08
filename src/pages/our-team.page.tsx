import { forwardRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import LayoutMain from "../components/Layout/LayoutMain";
import { useTranslation, TFunction, Trans } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import IvanHodynchukPhoto from "/public/img/our-team/ivan-hodynchuk.jpg";
import VasylPolyasnkyyPhoto from "/public/img/our-team/vasyl-polyanskyy.jpg";
import NatalieLysenkoPhoto from "/public/img/our-team/natalie-lysenko.jpg";
import AndriyKosarkoPhoto from "/public/img/our-team/andriy-kosarko.jpg";
import JakubDvoracekPhoto from "/public/img/our-team/jakub-dvoracek.jpg";
import { WebLine } from "../components/Webline/WebLine";
import { Title } from "../components/Title";

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
  const [emblaRef] = useEmblaCarousel({ align: "center", startIndex: 1 });
  const { t } = useTranslation();
  const ourTeam = getOurTeam(t);

  return (
    <LayoutMain
      ref={ref}
      metaTitle={t("Our Team")}
      metaDescription={t(
        "Meet our talented team of professionals. Who make it possible to create exclusive web projects. "
      )}
    >
      <WebLine innerClassName="flex flex-col overflow-hidden xl:overflow-visible">
        <Title type="h1">
          <Trans
            i18nKey="OUR<span>TEAM</span>"
            components={{
              span: <span className="text-greyLight"></span>,
            }}
          />
        </Title>

        <div className="flex">
          <div
            className="relative max-h-[600px] h-full w-full cursor-pointer "
            ref={emblaRef}
          >
            <ul className="flex gap-7 lg:gap-14  h-fit max-w-[317px]">
              {ourTeam.map((team) => (
                <li
                  className="h-auto lg:flex-none  z-10 flex flex-col rounded-3xl bg-secondary transition hover:scale-105 flex-[0_0_80%]"
                  key={team.name}
                >
                  <div className="p-5 flex gap-5 flex-col">
                    <div className="relative h-[250px] w-[215px] lg:h-[400px] lg:w-[327px] ">
                      <Image
                        src={team.imagePath}
                        alt={team.alt}
                        placeholder="blur"
                        className="rounded-3xl"
                      />
                    </div>
                    <div className="flex flex-col pt-2 gap-1">
                      <span className="text-primary">{team.name}</span>
                      <span>{team.position}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <Title type="h2" className="text-primary">
            {t("Professionalism")}
          </Title>
          <span className="text-lg max-w-5xl">
            {t(
              "Our team integrates taking into account how we want to communicate with customers. The goal is to be a partner with clearly defined processes associated with a high level of work quality and maximum reliability, but at the same time we want to represent the human element in the field of IT services. Communication with us should be a pleasure for customers."
            )}
          </span>
          <Title type="h3" className=" text-primary text-right">
            {t("Experience, Competence, Reliability")}
          </Title>
          <span className="text-lg text-end">
            {t(
              "ToodyIT boasts an experienced team that was formed by bringing together IT professionals. Professionals and experts.  The company can rely on the expertise of people who have been immersed in the IT field for a significant period of time, constantly improving their IT knowledge and skills."
            )}
          </span>
        </div>
        {/* <BlurredDecoration className="vl:h-[700px] vl:w-[700px]" />
        <BlurredDecoration className="vl:-right-96 vl:-bottom-96 -right-20 -bottom-full  vl:h-[700px] vl:w-[700px] " /> */}
      </WebLine>
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

export default OurTeamPage;
