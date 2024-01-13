import { forwardRef } from "react";
import LayoutMain from "../../components/Layout/LayoutMain";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { WebLine } from "../../components/Webline/WebLine";
import { Title } from "../../components/Title";
import { useServicesInfo } from "../../hooks/useServicesInfo";
import { ServicesMenu } from "../../components/ServicesMenu/ServicesMenu";

const Website = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const { servicesType, websiteAdditionalServices, websiteBasicServices } =
    useServicesInfo();

  return (
    <LayoutMain
      ref={ref}
      metaDescription={t(
        "We have created a configurator with which you can select the services you need and also immediately see the approximate cost of your project!"
      )}
      metaTitle={t("WebSite")}
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
        <p className="my-4 flex text-primary vl:text-xl">
          {t(
            "All prices are indicative, the site can be customized to suit your needs. For detailed information contact us!"
          )}
        </p>
      </WebLine>
      <ServicesMenu
        basicServices={websiteBasicServices}
        additionalServices={websiteAdditionalServices}
        description={
          <div className="flex flex-col">
            <Title type="h3" className="text-primary">
              {servicesType[1].subTitle}
            </Title>
            <div className="vl:text-xl flex flex-col gap-5">
              <p>
                <Trans i18nKey={servicesType[1].firstDescription} />
              </p>
              <p>
                <Trans i18nKey={servicesType[1].description} />
              </p>
            </div>
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

export default Website;
