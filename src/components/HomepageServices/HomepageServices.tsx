import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useServicesInfo } from "../../hooks/useServicesInfo";
import { ServiceMenuItem } from "../ServicesMenu/ServiceMenuItem";
import { WebLine } from "../Webline/WebLine";

export const HomepageServices = () => {
  const { t } = useTranslation();
  const { websiteAdditionalServices, websiteBasicServices } = useServicesInfo();

  return (
    <WebLine
      innerClassName="max-w-[1920px]"
      className="dark:bg-secondary bg-greyLight mt-10 vl:mt-20"
    >
      <div className="flex py-10 flex-col vl:flex-row">
        <div className="flex flex-col max-w-3xl">
          <h3 className="text-4xl font-bold">
            {t("Website price calculator")}
          </h3>
          <span className="text-lg mt-4">
            {t(
              "In our calculator you can immediately see the approximate cost of the website; for detailed information and more specific prices, please contact us"
            )}
          </span>
          <Link
            href="services/website"
            className="text-primary mt-2 text-xl underline"
          >
            {t("Find out the cost of a website")}
          </Link>
        </div>
        <div className="flex pt-8 vl:pt-0 flex-col vl:gap-4 relative overflow-hidden">
          <div className="bg-gradient-to-r vl:w-48 w-20 dark:from-secondary from-greyLight absolute h-full"></div>
          <div className="bg-gradient-to-l vl:w-48 w-20 right-0 dark:from-secondary from-greyLight  absolute h-full"></div>
          <ul className="flex gap-5">
            {websiteAdditionalServices.map((basicService) => (
              <li className="min-w-[300px]" key={basicService.title}>
                <ServiceMenuItem
                  service={basicService}
                  addedServices={[]}
                  setAddedServices={() => {}}
                />
              </li>
            ))}
          </ul>
          <ul className="flex gap-5">
            {websiteBasicServices.map((basicService) => (
              <li className="min-w-[350px]" key={basicService.title}>
                <ServiceMenuItem
                  service={basicService}
                  addedServices={[]}
                  setAddedServices={() => {}}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </WebLine>
  );
};
