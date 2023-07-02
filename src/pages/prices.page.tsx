import { forwardRef } from "react";
import LayoutMain from "../components/Layout/LayoutMain";
import { useTranslation } from "react-i18next";
import { TFunction } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

const getPrices = (t: TFunction) => [
  {
    title: t("eShop - 50 000Kč"),
    prices: [
      t("Base"),
      t("Product filling"),
      t("Shopping cart"),
      t("1x delivery method"),
      t("1x payment method"),
      t("Information about the return of the product"),
      t("Notification of which product and who bought it"),
      t("Category creation"),
    ],
  },
  {
    title: t("Catalog - 30 000Kč"),
    prices: [
      t("Base"),
      t("Information about the product"),
      t("Category creation"),
      t("Information about the product"),
      t("The possibility to turn it into an eShop in the future"),
    ],
  },
  {
    title: t("Website - 15 000Kč"),
    prices: [t("Base"), t("Gallery creation")],
  },
];
const Prices = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const prices = getPrices(t);

  return (
    <LayoutMain ref={ref} metaDescription="" metaTitle={t("Prices")}>
      <div className="flex flex-col gap-7 -mr-5 max-w-[700px] vl:max-w-[950px] pr-5">
        <h1 className="text-white font-bold text-4xl flex text-center">
          {t("PRICES")}
        </h1>
        <div className="h-full w-full gap-8 flex flex-col">
          <p className="bg-neutral-800 rounded-lg p-4">
            База: Дизайн сайта, 1 язык, разработка сайта, домен, хостинг, SEO
            оптимизация, добавление аналитики, цены на услуги, силки на
            социальние сети, контактная информация
          </p>
          <div className="flex justify-between gap-8 lg:gap-5 flex-col lg:flex-row">
            {prices.map((priceBlock) => (
              <p
                className="bg-neutral-800 rounded-lg p-4 flex flex-col gap-3 h-fit"
                key={priceBlock.title}
              >
                <h2>{priceBlock.title}</h2>
                <ul className="flex gap-3 flex-col">
                  {priceBlock.prices.map((price) => (
                    <li
                      key={price}
                      className="before:w-2 before:h-2 before:bg-primary before:rounded-full before:content-[''] before:block flex items-center gap-2 leading-none"
                    >
                      {price}
                    </li>
                  ))}
                </ul>
              </p>
            ))}
          </div>
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

export default Prices;
