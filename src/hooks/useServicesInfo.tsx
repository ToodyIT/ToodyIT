import { useTranslation } from "react-i18next";
import { ServiceType, ServiceWrapperType } from "../types/services";

export const useServicesInfo = () => {
  const { t } = useTranslation();

  const eShopBasicServices: ServiceType[] = [
    {
      title: t("E-SHOP"),
      price: 1000,
    },
    {
      title: t("WEBSITE"),
      price: 1000,
    },
  ];

  const eShopAdditionalServices: ServiceType[] = [
    {
      title: t("E-SHOP"),
      price: 1000,
    },
    {
      title: t("WEBSITE"),
      price: 1000,
    },
  ];

  const websiteBasicServices: ServiceType[] = [
    {
      title: t("E-SHOP"),
      price: 1000,
    },
    {
      title: t("WEBSITE"),
      price: 1000,
    },
  ];

  const websiteAdditionalServices: ServiceType[] = [
    {
      title: t("E-SHOPa"),
      price: 1000,
    },
    {
      title: t("WEBSITEa"),
      price: 1000,
    },
  ];

  const servicesType: ServiceWrapperType[] = [
    {
      image: "/img/imageEshops.jpg",
      title: t("E-SHOP"),
      subTitle: t("Experience"),
      description: t(
        "We <span>explore</span> with you an overview of the <span>most</span> significant things we have achieved for our customers in recent months."
      ),
      type: "e-shop",
    },
    {
      image: "/img/imageWebsite.jpg",
      title: t("WEBSITE"),
      subTitle: t("Experience"),
      description: t(
        "We <span>explore</span> with you an overview of the <span>most</span> significant things we have achieved for our customers in recent months."
      ),
      type: "website",
    },
  ];

  return {
    eShopBasicServices,
    eShopAdditionalServices,
    websiteAdditionalServices,
    websiteBasicServices,
    servicesType,
  };
};
