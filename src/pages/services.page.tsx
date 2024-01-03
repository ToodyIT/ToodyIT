import { forwardRef, useState } from "react";
import LayoutMain from "../components/Layout/LayoutMain";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { CartIcon } from "../components/Icons/Icons";
import { WebLine } from "../components/Webline/WebLine";
import { Title } from "../components/Title";
import Image from "next/image";
import { ServiceKindType } from "../types/services";
import { useServicesInfo } from "../hooks/useServicesInfo";
import { ServicesMenu } from "../components/ServicesMenu/ServicesMenu";

const Services = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const {
    eShopAdditionalServices,
    eShopBasicServices,
    servicesType,
    websiteAdditionalServices,
    websiteBasicServices,
  } = useServicesInfo();
  const [visibleSection, setVisibleSection] =
    useState<ServiceKindType>("services");

  return (
    <LayoutMain ref={ref} metaDescription="" metaTitle={t("Services")}>
      <WebLine>
        <Title type="h1">
          <Trans
            i18nKey="OUR<span>SERVICES</span>"
            components={{
              span: <span className="text-greyLight"></span>,
            }}
          />
        </Title>
      </WebLine>
      {visibleSection === "e-shop" && (
        <ServicesMenu
          setVisibleSection={setVisibleSection}
          basicServices={eShopBasicServices}
          additionalServices={eShopAdditionalServices}
        />
      )}
      {visibleSection === "website" && (
        <ServicesMenu
          setVisibleSection={setVisibleSection}
          basicServices={websiteBasicServices}
          additionalServices={websiteAdditionalServices}
        />
      )}
      {visibleSection === "services" && (
        <WebLine>
          <Title type="h2" className="">
            {t("What are you planning to order?")}
          </Title>
          <div className="flex-center gap-5 vl:flex-row vl:gap-10 flex-col flex">
            {servicesType.map((service) => (
              <div className="flex-col flex" key={service.title}>
                <button
                  onClick={() => setVisibleSection(service.type)}
                  className="group  cursor-pointer shadow-lg overflow-hidden relative vl:gap-7 gap-3 flex-col flex-center flex vl:text-5xl text-4xl bg-secondary transition vl:h-96 font-semibold w-full h-64 rounded-3xl"
                >
                  <div className="bg-[#148720] z-10 h-96 w-0 absolute left-0 group-hover:w-full transition-width "></div>
                  <CartIcon className="z-10 vl:size-24 size-20" />
                  <div className="z-10">{service.title}</div>
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    quality={20}
                    blurDataURL="/img/imageEshopsBlur.jpg"
                    placeholder="blur"
                  />
                </button>
                <div className="flex flex-col">
                  <Title type="h2" className="text-primary">
                    {service.subTitle}
                  </Title>
                  <span className="vl:text-2xl">
                    <Trans
                      i18nKey={service.description}
                      components={{
                        span: <span className="text-primary"></span>,
                      }}
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </WebLine>
      )}
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

export default Services;
