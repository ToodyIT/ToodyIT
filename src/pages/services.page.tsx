import { forwardRef } from "react";
import LayoutMain from "../components/Layout/LayoutMain";
import { TFunction, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

const getServices = (t: TFunction) => [
  {
    title: t("+ 1 language"),
    price: "750-2,500Kč",
  },
  {
    title: t("+ 1 online payment"),
    price: "3,000-6,000Kč",
  },
  {
    title: t("+ Animation and effects"),
    price: "1,500-12,000Kč",
  },
  {
    title: t("+ Feedback form"),
    price: "3,000-5,000Kč",
  },
  {
    title: t("+ Order tracking"),
    price: "5,000Kč",
  },
  {
    title: t("+ Administration"),
    price: "10,000-30,000Kč",
  },
  {
    title: t("+ Search"),
    price: "7,000Kč",
  },
  {
    title: t("+ 1 delivery method"),
    price: "3,000-6,000Kč",
  },
  {
    title: t("+ Rating and review system"),
    price: "7,500-10,000Kč",
  },
  {
    title: t("+ Registration form"),
    price: "10,000-15,000Kč",
  },
  {
    title: t("+ Map"),
    price: "2,500Kč",
  },
  {
    title: t("+ Support system"),
    price: "5,000-10,000Kč",
  },
  {
    title: t("+ Comments and discussion"),
    price: "10,000Kč",
  },
  {
    title: t("+ Subscription to new content"),
    price: "7,500Kč",
  },
  {
    title: t("+ Personal account"),
    price: "5,000-12,000Kč",
  },
  {
    title: t("+ Online chat"),
    price: "25,000Kč",
  },
  {
    title: t("+ Reservation function"),
    price: "1,500-10,000Kč",
  },
  {
    title: t("+ Recommendations"),
    price: "7,000Kč",
  },
];
const Services = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const services = getServices(t);

  return (
    <LayoutMain ref={ref} metaDescription="" metaTitle={t("Services")}>
      <div className="flex flex-col gap-7 -mr-5 max-w-[700px] vl:max-w-[950px] pr-5">
        <h1 className="text-white font-bold text-4xl flex text-center">
          {t("SERVICES")}
        </h1>
        <div className="h-full w-full gap-8 grid grid-cols-1 lg:grid-cols-2 vl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.price}
              className="bg-neutral-800 text-lg justify-center text-center flex flex-col p-3 rounded-xl"
            >
              {service.title}
              <span className="text-primary text-center font-bold">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </div>
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
