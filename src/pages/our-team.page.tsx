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
  const [emblaRef] = useEmblaCarousel({ align: "center", startIndex: 1 });
  const { t } = useTranslation();
  const ourTeam = getOurTeam(t);

  return (
    <LayoutMain
      ref={ref}
      metaTitle={t("Our Team")}
      metaDescription={t(
        "Meet our talented and dedicated team of professionals. Discover the expertise and passion that drives us to create exceptional websites. Learn about our diverse skills and experience, as well as our collaborative approach to delivering high-quality web solutions. Get to know the individuals behind our success."
      )}
    >
      <WebLine innerClassName="flex flex-col overflow-hidden vl:overflow-visible">
        <Title type="h1" className="vl:gap-12 gap-3 flex ">
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
              "Our team integrates taking into account how we want to communicate with customers. The goal is to be a partner with clearly defined processes associated with a high level of work quality and maximum reliability, but at the same time we want to represent the human element in the field of ICT services. Communication with us should be a pleasure for customers. And we are also recruiting new people to our team – experts in their fields with a passion for IT who want to transfer their enthusiasm to clients as well."
            )}
          </span>
          <Title type="h3" className=" text-primary text-right">
            {t("Experience, Competence, Reliability")}
          </Title>
          <span className="text-lg text-end">
            {t(
              "Solverita boasts an experienced team that has been formed through a combination of in-house IT specialists from the FWG Atlantiso group and the engagement of leading IT professionals and experts. The company can rely on the insights and knowledge of individuals who have been immersed in the IT field for a considerable period, continually enhancing their knowledge portfolios and skills in the realms of ICT services and IT products."
            )}
          </span>
        </div>
        <BlurredDecoration className="vl:h-[700px] vl:w-[700px]" />
        <BlurredDecoration className="vl:-right-96 vl:-bottom-96 -right-20 -bottom-full  vl:h-[700px] vl:w-[700px] " />

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
