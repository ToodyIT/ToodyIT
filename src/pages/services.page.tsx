import { forwardRef, useState } from "react";
import LayoutMain from "../components/Layout/LayoutMain";
import { TFunction, Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { CartIcon, PlusIcon } from "../components/Icons/Icons";
import { WebLine } from "../components/Webline/WebLine";
import { Title } from "../components/Title";
import Image from "next/image";
import ServicesMenu from "../components/ServicesMenu/ServicesMenu";

const getEshopBasic = (t: TFunction) => [
  {
    title: t("E-SHOP"),
    price: 1000,
    icon: <PlusIcon className="size-6" />,
  },
  {
    title: t("WEBSITE"),
    price: 1000,
    icon: <PlusIcon className="size-6" />,
  },
];

const getEshopAdditional = (t: TFunction) => [
  {
    title: t("E-SHOP"),
    price: 1000,
    icon: <PlusIcon className="size-6" />,
  },
  {
    title: t("WEBSITE"),
    price: 1000,
    icon: <PlusIcon className="size-6" />,
  },
];

const getWebsiteBasic = (t: TFunction) => [
  {
    title: t("E-SHOP"),
    price: 1000,
    icon: <PlusIcon className="size-6" />,
  },
  {
    title: t("WEBSITE"),
    price: 1000,
    icon: <PlusIcon className="size-6" />,
  },
];

const getWebsiteAdditional = (t: TFunction) => [
  {
    title: t("E-SHOP"),
    price: 1000,
    icon: <PlusIcon className="size-6" />,
  },
  {
    title: t("WEBSITE"),
    price: 1000,
    icon: <PlusIcon className="size-6" />,
  },
];

const getServices = (t: TFunction) => [
  {
    image: "/img/imageEshops.jpg",
    title: t("E-SHOP"),
    subTitle: t("Experience"),
    description: t(
      "We <span>explore</span> with you an overview of the <span>most</span> significant things we have achieved for our customers in recent months."
    ),
    type: "e-shop" as const,
  },
  {
    image: "/img/imageWebsite.jpg",
    title: t("WEBSITE"),
    subTitle: t("Experience"),
    description: t(
      "We <span>explore</span> with you an overview of the <span>most</span> significant things we have achieved for our customers in recent months."
    ),
    type: "website" as const,
  },
];


const Services = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const services = getServices(t);
  const [visibleSection, setVisibleSection] = useState<
    "e-shop" | "website" | "services"
  >("services");

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
          basicServices={getEshopBasic(t)}
          additionalServices={getEshopAdditional(t)}
        />
      )}
      {visibleSection === "website" && (
        <ServicesMenu
          setVisibleSection={setVisibleSection}
          basicServices={getWebsiteBasic(t)}
          additionalServices={getWebsiteAdditional(t)}
        />
      )}
      {visibleSection === "services" && (
        <WebLine>
          <Title type="h2" className="">
            {t("What are you planning to order?")}
          </Title>
          <div className="flex-center gap-5 vl:flex-row vl:gap-10 flex-col flex">
            {services.map((service) => (
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
