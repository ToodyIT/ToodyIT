import LayoutMain from "../components/Layout/LayoutMain";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { WebLine } from "../components/Webline/WebLine";
import { PageHero } from "../components/PageHero/PageHero";
import { ServiceCards } from "../components/home/HomeOffer";

const Services = () => {
  const { t } = useTranslation();

  return (
    <LayoutMain
      metaDescription={t(
        "A Prague IT company. For 3 years we have been building our own products, websites and full projects for clients."
      )}
      metaTitle={t("Services")}
    >
      <PageHero
        kicker={t("Services")}
        title={t("What we do")}
        text={t(
          "We make our own products and also take on websites and full projects for clients."
        )}
      />
      <WebLine innerClassName="pb-20">
        <ServiceCards />
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

export default Services;
