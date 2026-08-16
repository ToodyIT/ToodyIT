import { Dispatch, SetStateAction } from "react";
import { ServiceType } from "../../types/services";
import { MinusIcon, PlusIcon } from "../Icons/Icons";
import { useTranslation } from "next-i18next";
import { twJoin } from "tailwind-merge";

type ServiceMenuItemProps = {
  service: ServiceType;
  addedServices: ServiceType[];
  setAddedServices: Dispatch<SetStateAction<ServiceType[]>>;
};

export const ServiceMenuItem: FC<ServiceMenuItemProps> = ({
  service,
  addedServices,
  setAddedServices,
}) => {
  const { t } = useTranslation();

  const isAdded = addedServices.some((addedService) => {
    if (addedService.title === service.title) {
      return true;
    }

    return false;
  });

  const handleOnServiceClick = () => {
    if (isAdded) {
      const filteredAddedService = addedServices.filter(
        (addedService) => addedService.title !== service.title
      );
      setAddedServices(filteredAddedService);

      return;
    }

    setAddedServices([...addedServices, service]);
  };

  return (
    <div className="border-line bg-panel flex items-center justify-between rounded-[1.4rem] border p-3 pl-4">
      <div className="flex flex-col">
        <h4 className="font-medium">{service.title}</h4>
        <span>
          <span className="font-semibold">{service.price} </span>
          {t("CZK")}
        </span>
      </div>
      <button
        onClick={handleOnServiceClick}
        className={twJoin(
          "border-line mr-1 flex size-8 flex-center rounded-full border transition",
          isAdded ? "bg-brand text-white" : ""
        )}
      >
        {isAdded ? (
          <MinusIcon className="size-6" />
        ) : (
          <PlusIcon className="size-6" />
        )}
      </button>
    </div>
  );
};
