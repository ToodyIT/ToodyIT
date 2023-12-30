import { useTranslation } from "next-i18next";
import { WebLine } from "../Webline/WebLine";
import { Title } from "../Title";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { ArrowIcon } from "../Icons/Icons";

type ServicesMenuProps = {
  basicServices: { title: string; price: number; icon: ReactNode }[];
  additionalServices: { title: string; price: number; icon: ReactNode }[];
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
  const [addedServices, setAddedServices] = useState<
    {
      price: number;
      id: string;
    }[]
  >([]);

  const sumPrice =
    addedServices.length !== 0
      ? addedServices.reduce(
          (accumulator, currentValue) => accumulator + currentValue.price,
          0
        )
      : 0;

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
            {sumPrice}
          </span>
        </div>
        <div className="">
          <Title type="h3">{t("Basic")}</Title>
          <div className="flex flex-col vl:grid vl:grid-cols-4 gap-4">
            {basicServices.map((basic) => (
              <>
                <div className="flex rounded-2xl justify-between items-center border bg-secondary text-lg p-2 pl-3 vl:pl-4">
                  <div className="flex flex-col ">
                    <span className="font-medium">{basic.title}</span>
                    <span className="font-semibold">{basic.price}</span>
                  </div>
                  <button
                    disabled={addedServices.some((service) => {
                      if (service.id === basic.title) {
                        return true;
                      }

                      return false;
                    })}
                    onClick={() =>
                      setAddedServices([
                        ...addedServices,
                        { id: basic.title, price: basic.price },
                      ])
                    }
                    className="border rounded-full hover:bg-white  transition size-8 flex flex-center mr-2"
                  >
                    {basic.icon}
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </WebLine>
      <WebLine>
        <Title type="h3">{t("Additional")}</Title>
        <div className="flex flex-col vl:grid vl:grid-cols-4 gap-4">
          {additionalServices.map((additional) => (
            <>
              <div className="flex rounded-2xl justify-between items-center border bg-secondary text-lg p-2 pl-3 vl:pl-4">
                <div className="flex flex-col ">
                  <span className="font-medium">{additional.title}</span>
                  <span className="font-semibold">{additional.price}</span>
                </div>
                <button
                  disabled={addedServices.some((service) => {
                    if (service.id === additional.title) {
                      return true;
                    }

                    return false;
                  })}
                  onClick={() =>
                    setAddedServices([
                      ...addedServices,
                      { id: additional.title, price: additional.price },
                    ])
                  }
                  className="border rounded-full hover:bg-white transition size-8 flex flex-center mr-2"
                >
                  {additional.icon}
                </button>
              </div>
            </>
          ))}
        </div>
      </WebLine>
    </>
  );
};

export default ServicesMenu;
