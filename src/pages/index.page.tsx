import { useTranslation } from "next-i18next";
import LayoutMain from "../components/Layout/LayoutMain";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { HomeHero } from "../components/home/HomeHero";
import { HomeMarquee } from "../components/home/HomeMarquee";
import { HomeWorks } from "../components/home/HomeWorks";
import { HomeOffer } from "../components/home/HomeOffer";
import { HomeProcess } from "../components/home/HomeProcess";
import { HomeTeam } from "../components/home/HomeTeam";
import { HomeContact } from "../components/home/HomeContact";

const HomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <LayoutMain
      metaTitle={t("ToodyIT — a Prague IT company")}
      metaDescription={t(
        "A Prague IT company. For 3 years we have been building our own products, websites and full projects for clients."
      )}
    >
      <HomeHero />
      <HomeMarquee />
      <HomeOffer />
      <HomeWorks />
      <HomeProcess />
      <HomeTeam />
      <HomeContact />
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

export default HomePage;
