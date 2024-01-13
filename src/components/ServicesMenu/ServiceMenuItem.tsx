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
    <div className="flex rounded-2xl justify-between items-center border dark:bg-secondary bg-greyLight text-base vl:Etext-lg p-2 pl-3 vl:pl-4">
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
          "border rounded-full hover:bg-white hover:text-secondary transition size-8 flex flex-center mr-2",
          isAdded ? "bg-primary" : "bg-none"
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
