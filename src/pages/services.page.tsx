import { forwardRef } from "react";
import LayoutMain from "../components/Layout/LayoutMain";
import { useTranslation } from "react-i18next";
import { TFunction } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

const getServices = (t: TFunction) => [
  {
    title: t("+ 1 язык"),
    price: "750-2 500Kč",
  },
  {
    title: t("+ 1 онлайн оплата"),
    price: "3 000-6 000Kč",
  },
  {
    title: t("+ Анимация и визуальные эффекты"),
    price: "1 500-12 000Kč",
  },
  {
    title: t("+ Форма обратной связи"),
    price: "3 000-5 000Kč",
  },
  {
    title: t("+ Отслеживания заказов"),
    price: "5 000Kč",
  },
  {
    title: t("+ Администрация"),
    price: "10 000-30 000Kč",
  },
  {
    title: t("+ Поиск"),
    price: "7 000Kč",
  },
  {
    title: t("+ 1 способ доставки"),
    price: "3 000-6 000Kč",
  },
  {
    title: t("+ Система оценок и отзывов"),
    price: "7 500-10 000Kč",
  },
  {
    title: t("+ Форма регистрации"),
    price: "10 000-15 000Kč",
  },
  {
    title: t("+ Карта"),
    price: "2 500Kč",
  },
  {
    title: t("+ Система поддержки"),
    price: "5 000-10 000Kč",
  },
  {
    title: t("+ Комментарии и обсуждение"),
    price: "10 000Kč",
  },
  {
    title: t("+ Подписка на новый контент на сайте"),
    price: "7 500Kč",
  },
  {
    title: t("+ Личный кабинет"),
    price: "5 000-12 000Kč",
  },
  {
    title: t("+ Онлайн-чат "),
    price: "25 000Kč",
  },
  {
    title: t("+ Функция резервирование"),
    price: "1 500-10 000Kč",
  },
  {
    title: t("+ Рекомендации"),
    price: "7 000Kč",
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
