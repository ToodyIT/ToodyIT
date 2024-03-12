import { useTranslation } from "next-i18next";
import { ServiceType, ServiceWrapperType } from "../types/services";
import { WebIcon } from "../components/Icons/Icons";

export const useServicesInfo = () => {
  const { t } = useTranslation();

  const websiteBasicServices: ServiceType[] = [
    {
      title: t("Development"),
      price: 2500,
    },
    {
      title: t("Design"),
      price: 1000,
    },
    {
      title: t("Domain and hosting"),
      price: 500,
    },
    {
      title: t("1 language"),
      price: 500,
    },
    {
      title: t("SEO optimization"),
      price: 500,
    },
  ];

  const websiteAdditionalServices: ServiceType[] = [
    {
      title: t("Contact form"),
      price: 5000,
    },
    {
      title: t("+ 1 language"),
      price: 1500,
    },
    {
      title: t("Adding analytics"),
      price: 1500,
    },
    {
      title: t("Administration"),
      price: 10000,
    },
    {
      title: t("Rating and review system"),
      price: 7500,
    },
    {
      title: t("Map"),
      price: 1500,
    },
  ];

  const servicesType: ServiceWrapperType[] = [
    {
      link: "/services/website",
      image: "/img/imageWebsite.jpg",
      title: t("WEBSITE"),
      icon: <WebIcon className="z-10 vl:size-28 size-20" />,
      subTitle: t("Information"),
      firstDescription: t(
        "Our configurator provides the basic elements required to create a website, as well as the ability to select the additional services you need."
      ),
      description: t(
        "If you don't find the service you need in the configurator, you can always suggest your specific requirements and we will contact you to discuss your site."
      ),
      isDisabled: false,
    },
  ];

  return {
    websiteAdditionalServices,
    websiteBasicServices,
    servicesType,
  };
};
