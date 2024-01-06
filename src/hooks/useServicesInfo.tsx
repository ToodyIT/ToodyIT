import { useTranslation } from "react-i18next";
import { ServiceType, ServiceWrapperType } from "../types/services";
import { CartIcon, WebIcon } from "../components/Icons/Icons";

export const useServicesInfo = () => {
  const { t } = useTranslation();

  const eShopBasicServices: ServiceType[] = [
    {
      title: t("+ 1 language"),
      price: 2500,
    },
    {
      title: t("+ Administration"),
      price: 15000,
    },

    {
      title: t("+ Order tracking"),
      price: 5000,
    },
    {
      title: t("+ 1 online payment"),
      price: 3000,
    },
    {
      title: t("+ 1 delivery method"),
      price: 3500,
    },
    {
      title: t("+ Registration form"),
      price: 12500,
    },
  ];

  const eShopAdditionalServices: ServiceType[] = [
    {
      title: t("+ Animation and effects"),
      price: 4500,
    },
    {
      title: t("+ Feedback form"),
      price: 3500,
    },
    {
      title: t("+ Search"),
      price: 7000,
    },
    {
      title: t("+ Rating and review system"),
      price: 7500,
    },
    {
      title: t("+ Map"),
      price: 2500,
    },
    {
      title: t("+ Support system"),
      price: 7500,
    },
    {
      title: t("+ Comments and discussion"),
      price: 10000,
    },
    {
      title: t("+ Subscription to new content"),
      price: 7500,
    },
    {
      title: t("+ Personal account"),
      price: 8500,
    },
    {
      title: t("+ Online chat"),
      price: 25000,
    },
    {
      title: t("+ Recommendations"),
      price: 7000,
    },
  ];

  const websiteBasicServices: ServiceType[] = [
    {
      title: t("+ 1 language"),
      price: 1000,
    },
  ];

  const websiteAdditionalServices: ServiceType[] = [
    {
      title: t("+ Animation and effects"),
      price: 2500,
    },
    {
      title: t("+ Administration"),
      price: 10000,
    },
    {
      title: t("+ Rating and review system"),
      price: 7500,
    },
    {
      title: t("+ Map"),
      price: 2500,
    },
    {
      title: t("+ Comments and discussion"),
      price: 10000,
    },
  ];

  const servicesType: ServiceWrapperType[] = [
    {
      image: "/img/imageEshops.jpg",
      title: t("E-SHOP"),
      icon: <CartIcon className="z-10 vl:size-24 size-20" />,
      subTitle: t("Experience"),
      description: t(
        "We <span>explore</span> with you an overview of the <span>most</span> significant things we have achieved for our customers in recent months."
      ),
      type: "e-shop",
    },
    {
      image: "/img/imageWebsite.jpg",
      title: t("WEBSITE"),
      icon: <WebIcon className="z-10 vl:size-28 size-20" />,
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
