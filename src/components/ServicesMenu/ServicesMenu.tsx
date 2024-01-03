import { useTranslation } from "next-i18next";
import { WebLine } from "../Webline/WebLine";
import { Title } from "../Title";
import { Dispatch, SetStateAction, useState } from "react";
import { ArrowIcon } from "../Icons/Icons";
import { ServiceType } from "../../types/services";
import { ServiceMenuItem } from "./ServiceMenuItem";

type ServicesMenuProps = {
  basicServices: ServiceType[];
  additionalServices: ServiceType[];
  setVisibleSection: Dispatch<
    SetStateAction<"e-shop" | "website" | "services">
  >;
};

export const ServicesMenu: FC<ServicesMenuProps> = ({
  basicServices,
  additionalServices,
  setVisibleSection,
}) => {
  const { t } = useTranslation();
  const [addedServices, setAddedServices] = useState<ServiceType[]>([]);

  const getSumPrice = () => {
    if (!addedServices.length) {
      return 0;
    }
    return addedServices.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
  };

  return (
    <>
      <WebLine className="bg-secondary/30 py-5 backdrop-blur-2xl">
        <div className="flex justify-between ">
          <div className="flex gap-5 flex-center">
            <button
              className="border p-2 rounded-full hover:bg-white hover:text-black transition"
              onClick={() => setVisibleSection("services")}
            >
              <ArrowIcon className="size-5 rotate-90" />
            </button>
            <span className="text-primary font-bold text-3xl">
              {t("E-SHOP")}
            </span>
          </div>
          <span className="bg-primary flex vl:text-2xl flex-center vl:px-7 px-3 py-2 rounded-full pl-5 font-bold">
            {getSumPrice()} {t("CZK")}
          </span>
        </div>
        <div className="">
          <Title type="h3">{t("Basic")}</Title>
          <div className="flex flex-col vl:grid vl:grid-cols-4 gap-4">
            {basicServices.map((basicService) => (
              <ServiceMenuItem
                key={basicService.title}
                service={basicService}
                addedServices={addedServices}
                setAddedServices={setAddedServices}
              />
            ))}
          </div>
        </div>
      </WebLine>
      <WebLine>
        <Title type="h3">{t("Additional")}</Title>
        <div className="flex flex-col vl:grid vl:grid-cols-4 gap-4">
          {additionalServices.map((additionalService) => (
            <ServiceMenuItem
              key={additionalService.title}
              service={additionalService}
              addedServices={addedServices}
              setAddedServices={setAddedServices}
            />
          ))}
        </div>
      </WebLine>
    </>
  );
};

export default ServicesMenu;
