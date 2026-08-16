import Image from "next/image";
import LayoutMain from "../components/Layout/LayoutMain";
import { useTranslation, TFunction } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import IvanHodynchukPhoto from "/public/img/our-team/ivan-hodynchuk.jpg";
import VasylPolyasnkyyPhoto from "/public/img/our-team/vasyl-polyanskyy.jpg";
import NatalieLysenkoPhoto from "/public/img/our-team/natalie-lysenko.jpg";
import AndriyKosarkoPhoto from "/public/img/our-team/andriy-kosarko.jpg";
import JakubDvoracekPhoto from "/public/img/our-team/jakub-dvoracek.jpg";
import { WebLine } from "../components/Webline/WebLine";
import { PageHero } from "../components/PageHero/PageHero";
import { Reveal } from "../components/Motion/Reveal";

export const getOurTeam = (t: TFunction) => {
  return [
    {
      imagePath: IvanHodynchukPhoto,
      name: t("IVAN HODYNCHUK"),
      position: t("DEVELOPER"),
      alt: t("Ivan Hodynchuk"),
    },
    {
      imagePath: VasylPolyasnkyyPhoto,
      name: t("FELIX KINGSLEY"),
      position: t("PROJECT MANAGER"),
      alt: t("Felix Kingsley"),
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

const OurTeamPage = () => {
  const { t } = useTranslation();
  const ourTeam = getOurTeam(t);

  return (
    <LayoutMain
      metaTitle={t("Our Team")}
      metaDescription={t(
        "A small Prague team. For 3 years we have been building products and projects for clients."
      )}
    >
      <PageHero
        kicker={t("Our Team")}
        title={t("Our Team")}
        text={t(
          "A small Prague team. For 3 years we have been building products and projects for clients."
        )}
      />
      <WebLine innerClassName="pb-20">
        <div className="grid gap-4 py-4 sm:grid-cols-2 vl:grid-cols-3">
          {ourTeam.map((team, index) => (
            <Reveal delay={index * 0.05} key={team.name}>
              <article className="border-line bg-panel overflow-hidden rounded-[1.4rem] border">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={team.imagePath}
                    alt={team.alt}
                    placeholder="blur"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="font-display text-fg font-semibold">
                    {team.name}
                  </p>
                  <p className="text-muted mt-1 text-xs uppercase tracking-wide">
                    {team.position}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="border-line mt-10 border-t py-12">
          <h2 className="font-display text-fg max-w-2xl text-3xl font-bold sm:text-5xl">
            ToodyIT
          </h2>
          <p className="text-muted mt-6 max-w-2xl leading-7">
            {t(
              "A small Prague team. For 3 years we have been building products and projects for clients."
            )}
          </p>
        </div>
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

export default OurTeamPage;
