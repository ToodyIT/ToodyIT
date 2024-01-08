import { forwardRef } from "react";
import LayoutMain from "../components/Layout/LayoutMain";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { WebLine } from "../components/Webline/WebLine";
import { Title } from "../components/Title";
import Image from "next/image";
import { useServicesInfo } from "../hooks/useServicesInfo";
import Link from "next/link";

const Services = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const { servicesType } = useServicesInfo();

  return (
    <LayoutMain
      ref={ref}
      metaDescription={t(
        "Here you will find services that our team offers you to realize with us. Development of websites, online stores and any web projects at your request!"
      )}
      metaTitle={t("Services")}
    >
      <WebLine>
        <Title type="h1">{t("SERVICES")}</Title>

        <Title type="h2" className="">
          {t("What are you planning to order?")}
        </Title>
        <div className="gap-5 vl:flex-row vl:gap-10 flex-col flex">
          {servicesType.map((service) => (
            <div className="flex-col flex" key={service.title}>
              <Link
                href={service.link}
                className="group  cursor-pointer shadow-lg overflow-hidden relative vl:gap-7 gap-3 flex-col flex-center flex vl:text-5xl text-4xl bg-secondary transition vl:h-96 font-semibold w-full h-64 rounded-3xl"
              >
                <div className="bg-[#148720] z-10 h-96 w-0 absolute left-0 group-hover:w-full transition-width "></div>
                {service.icon}
                <div className="z-10">{service.title}</div>
                <Image
                  src={service.image}
                  alt=""
                  fill
                  quality={20}
                  blurDataURL="/img/imageEshopsBlur.jpg"
                  placeholder="blur"
                  className="rounded-xl object-cover text-[0px]"
                />
              </Link>
              <div className="flex flex-col">
                <Title type="h3" className="text-primary">
                  {service.subTitle}
                </Title>
                <span className="vl:text-xl">
                  <Trans i18nKey={service.description} />
                </span>
              </div>
            </div>
          ))}
        </div>
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

export default Services;
