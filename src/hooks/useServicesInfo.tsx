import { useTranslation } from "next-i18next";
import { ServiceType, ServiceWrapperType } from "../types/services";
import { CartIcon, WebIcon } from "../components/Icons/Icons";

export const useServicesInfo = () => {
  const { t } = useTranslation();

  // const eShopBasicServices: ServiceType[] = [
  //   {
  //     title: t("+ Administration"),
  //     price: 15000,
  //     keywords: [t("administration")],
  //   },

  //   {
  //     title: t("+ Order tracking"),
  //     price: 5000,
  //     keywords: [t("order")],
  //   },
  //   {
  //     title: t("+ Registration form"),
  //     price: 12500,
  //   },
  //   {
  //     title: t("Design"),
  //     price: 5000,
  //     keywords: [t("order")],
  //   },
  //   {
  //     title: t("language"),
  //     price: 2500,
  //     keywords: [t("translate")],
  //   },
  //   {
  //     title: t("Development"),
  //     price: 2500,
  //     keywords: [t("development")],
  //   },
  //   {
  //     title: t("Domain"),
  //     price: 2500,
  //   },
  //   {
  //     title: t("Hosting"),
  //     price: 2500,
  //   },
  //   {
  //     title: t("SEO optimization"),
  //     price: 2500,
  //   },
  //   {
  //     title: t("Contact information"),
  //     price: 2500,
  //   },
  //   {
  //     title: t("1x payment method"),
  //     price: 4500,
  //   },
  //   {
  //     title: t("1x delivery method"),
  //     price: 4500,
  //   },
  //   {
  //     title: t("Shopping cart"),
  //     price: 4500,
  //   },
  //   {
  //     title: t("Product filling"),
  //     price: 4500,
  //   },
  // ];

  // const eShopAdditionalServices: ServiceType[] = [
  //   {
  //     title: t("+ Animation and effects"),
  //     price: 4500,
  //   },
  //   {
  //     title: t("Category creation"),
  //     price: 4500,
  //   },
  //   {
  //     title: t("Notification of which product and who bought it"),
  //     price: 4500,
  //   },

  //   {
  //     title: t("Information about the return of the product"),
  //     price: 4500,
  //   },

  //   {
  //     title: t("+ Feedback form"),
  //     price: 3500,
  //   },
  //   {
  //     title: t("Adding analytics"),
  //     price: 3500,
  //   },
  //   {
  //     title: t("+ Search"),
  //     price: 7000,
  //     keywords: [t("search")],
  //   },
  //   {
  //     title: t("+ 1 language"),
  //     price: 2500,
  //     keywords: [t("translate")],
  //   },
  //   {
  //     title: t("Links to social networks"),
  //     price: 2500,
  //   },
  //   {
  //     title: t("+ Rating and review system"),
  //     price: 7500,
  //   },

  //   {
  //     title: t("+ Map"),
  //     price: 2500,
  //   },
  //   {
  //     title: t("+ Support system"),
  //     price: 7500,
  //   },
  //   {
  //     title: t("+ Comments and discussion"),
  //     price: 10000,
  //   },
  //   {
  //     title: t("+ Subscription to new content"),
  //     price: 7500,
  //   },
  //   {
  //     title: t("+ Personal account"),
  //     price: 8500,
  //   },
  //   {
  //     title: t("+ Online chat"),
  //     price: 25000,
  //   },
  //   {
  //     title: t("+ Recommendations"),
  //     price: 7000,
  //   },
  // ];

  const websiteBasicServices: ServiceType[] = [
    {
      title: t("Development"),
      price: 8000,
    },
    {
      title: t("Design"),
      price: 3500,
    },
    {
      title: t("Domain and hosting"),
      price: 750,
    },
    {
      title: t("+ 1 language"),
      price: 750,
    },
    {
      title: t("SEO optimization"),
      price: 2000,
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
      link: "/services/eshop",
      image: "/img/imageEshops.jpg",
      title: t("E-SHOP"),
      icon: <CartIcon className="z-10 vl:size-24 size-20" />,
      subTitle: t("Choose your path to creating an E-shop"),
      firstDescription: t(
        "The price configurator provides quotes for building through Shopify. If you don't find the service you need, contact us to discuss."
      ),
      description: t(
        "We also have the option to create an online store without Shopify, let's contact you for pricing and details!"
      ),
    },
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
    },
  ];

  return {
    // eShopBasicServices,
    // eShopAdditionalServices,
    websiteAdditionalServices,
    websiteBasicServices,
    servicesType,
  };
};
