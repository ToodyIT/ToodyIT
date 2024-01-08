import { forwardRef } from "react";
import LayoutMain from "../../components/Layout/LayoutMain";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { WebLine } from "../../components/Webline/WebLine";
import { Title } from "../../components/Title";
import { useServicesInfo } from "../../hooks/useServicesInfo";
import { ServicesMenu } from "../../components/ServicesMenu/ServicesMenu";

const Eshop = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const { eShopAdditionalServices, eShopBasicServices, servicesType } =
    useServicesInfo();

  return (
    <LayoutMain
      ref={ref}
      metaDescription="We have created a configurator with which you can select the services you need and also immediately see the approximate cost of your project!"
      metaTitle={t("E-Shop")}
    >
      <WebLine>
        <Title type="h1">
          <Trans
            i18nKey="OUR<span>SERVICES</span>"
            components={{
              span: <span className="text-greyLight"></span>,
            }}
          />
        </Title>
        <span className="my-4 flex text-primary vl:text-xl">
          {t(
            "All prices are indicative, the site can be customized to suit your needs. For detailed information contact us!"
          )}
        </span>
      </WebLine>
      <ServicesMenu
        basicServices={eShopBasicServices}
        additionalServices={eShopAdditionalServices}
        description={
          <div className="flex flex-col">
            <Title type="h3" className="text-primary">
              {servicesType[0].subTitle}
            </Title>
            <span className="vl:text-xl">
              <Trans i18nKey={servicesType[0].description} />
            </span>
          </div>
        }
      />
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

export default Eshop;
