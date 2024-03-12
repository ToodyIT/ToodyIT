import { useTranslation } from "next-i18next";
import { Button } from "../Button/Button";
import { Title } from "../Title";
import { StarIcon } from "../Icons/Icons";
import { scrollToSection } from "../../utils/scrollToElement";

export const HomepageIntro: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="z-[-1] -top-40 -right-10 rotate-[330deg] vl:w-[500px] vl:-top-72 vl:h-[800px] w-[300px] absolute h-[500px] bg-[conic-gradient(#109A20,#E4E4E4)] rounded-3xl"></div>
      <Title type="h1">{t("DEVELOPMENT OF CUSTOM WEBSITES")}</Title>
      <div className="flex gap-4 justify-between flex-col lg:flex-row-reverse">
        <div className="flex flex-col gap-4 vl:gap-6 xl:gap-8 w-full lg:items-end vl:mt-8">
          <div className="flex items-end gap-4 vl:gap-6 xl:gap-12">
            <div className="shadow-md px-3 dark:bg-gray-600 py-5 min-w-[160px] vl:min-w-[250px] flex items-center bg-greyLight rounded-xl gap-3 uppercase">
              <div className="bg-white dark:bg-secondary shadow-md rounded-full p-2">
                <div className="bg-primary rounded-full w-4 h-4"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold vl:text-lg">{t("14 Days")}</span>
                <span className="text-xs vl:text-sm font-medium">
                  {t("Duration of development")}
                </span>
              </div>
            </div>
            <div className="shadow-md text-white bg-secondary max-w-[300px] px-3 pb-5 pt-3 vl:px-5 rounded-xl flex flex-col w-full">
              <div className="self-end mb-2 flex gap-1.5 vl:gap-2">
                <div className="rounded-full w-2 h-2 vl:h-3 vl:w-3 bg-green-500"></div>
                <div className="rounded-full w-2 h-2 vl:h-3 vl:w-3 bg-yellow-500"></div>
                <div className="rounded-full w-2 h-2 vl:h-3 vl:w-3 bg-red-500"></div>
              </div>
              <span className="vl:text-lg">
                {t("Price of your website from")}
              </span>
              <span className="font-semibold vl:text-lg">{t("4 990 Kč")}</span>
            </div>
          </div>
          <div className="flex gap-4 vl:gap-10 xl:gap-16 xl:ml-4 items-start">
            <div className="p-3 vl:p-4 bg-gray-200 dark:bg-secondary shadow-md flex flex-col items-center rounded-xl font-medium">
              <div className="mb-2 vl:mb-3 vl:text-lg text-gray-700 dark:text-white text-center">
                {t("Statistics of satisfied clients")}
              </div>
              <div className="w-[130px] h-[130px] from-primary to-primary/10 dark:to-white/80 bg-gradient-to-tr shadow-sm rounded-full flex items-center justify-center">
                <div className="bg-gray-200 dark:bg-secondary dark:text-white w-[70px] h-[70px] rounded-full flex items-center justify-center font-semibold text-gray-600">
                  ({t("100%")})
                </div>
              </div>
            </div>
            <div className="p-3 vl:p-4 w-full max-w-[250px] xl:max-w-[300px] bg-gray-200 dark:bg-secondary shadow-md rounded-xl font-medium vl:mt-6">
              <div className="mb-2 text-gray-700 text-sm vl:text-base dark:text-white">
                {t("After developing the website, you can leave your feedback")}
              </div>
              <div className="bg-white w-full h-[160px] dark:bg-gray-600 text-left rounded-lg flex flex-col justify-center p-4">
                <div className="leading-5 font-semibold">
                  {t("Customer Reviews")}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                  ({t("for our works")})
                </div>
                <div className="flex gap-1 min-h-4 w-full">
                  <StarIcon className="w-5" />
                  <StarIcon className="w-5" />
                  <StarIcon className="w-5" />
                  <StarIcon className="w-5" />
                  <StarIcon className="w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vl:max-w-[50%] vl:min-w-[50%]">
          <Title
            type="h2"
            className="vl:text-[50px] vl:leading-[55px] xl:text-[70px] xl:leading-[75px]"
          >
            {t("Start developing your website")}
          </Title>
          <p className="text-base vl:text-xl mb-2 vl:mb-4 font-medium">
            {t("Leave your phone number or fill out the contact form")}
          </p>
          <div className="flex flex-col vl:flex-row gap-4">
            <Button
              size="md"
              tagName="a"
              href="#contacts"
              onClick={(e) => scrollToSection(e, 0, "#contacts")}
            >
              {t("Phone number")}
            </Button>
            <Button
              size="md"
              variant="primaryOutlined"
              tagName="a"
              href="/contacts"
            >
              {t("Contact form")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
