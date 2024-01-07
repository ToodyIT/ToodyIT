import { useTranslation } from "next-i18next";
import { WebLine } from "../Webline/WebLine";
import { Title } from "../Title";
import { Dispatch, SetStateAction, useState } from "react";
import { SendIcon } from "../Icons/Icons";
import { ServiceType } from "../../types/services";
import { ServiceMenuItem } from "./ServiceMenuItem";
import { Input } from "../Input/Input";
import { Popup } from "../Popup/Popup";
import { ContactsForm } from "../Contacts/ContactsForm";
import { AnimatePresence } from "framer-motion";

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
  const [addedServices, setAddedServices] =
    useState<ServiceType[]>(basicServices);
  const [searchQuery, setSearchQuery] = useState("");
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const getSumPrice = () => {
    if (!addedServices.length) {
      return 0;
    }
    return addedServices.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
  };
  console.log(isContactPopupOpen);
  const getDefaultMessageForContact = () => {
    const addedServicesMessage = addedServices
      .map((service) => service.title)
      .join("\n");

    return `${t("My wants:")} ${addedServicesMessage}`;
  };
  return (
    <>
      <WebLine className="bg-secondary/30 py-5 backdrop-blur-2xl">
        <div className="flex justify-between">
          {/* <div className="flex gap-5 flex-center">
            <button
              className="border p-2 rounded-full hover:bg-white hover:text-black transition"
              onClick={() => setVisibleSection("services")}
            >
              <ArrowIcon className="size-5 rotate-90" />
            </button>
            <span className="text-primary font-bold text-3xl">
              {t("E-SHOP")}
            </span>
          </div> */}
          <span className="bg-primary flex vl:text-2xl flex-center vl:px-7 px-3 py-2 rounded-full pl-5 font-bold">
            {getSumPrice()} {t("CZK")}
          </span>
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            wrapperClassName="max-w-[300px]"
            placeholder="Search..."
          />
          <div className="flex gap-3 items-center">
            <button
              onClick={() => setAddedServices(basicServices)}
              type="reset"
              className=" flex vl:text-lg border-2 flex-center vl:px-5 px-3 h-fit py-1 rounded-full font-bold"
            >
              {t("Reset")}
            </button>
            <button
              onClick={() => setIsContactPopupOpen(true)}
              type="submit"
              className="bg-primary gap-2 flex vl:text-2xl flex-center vl:px-7 px-3 py-2 rounded-full pl-5 font-bold"
            >
              {t("Sent to us")}
              <SendIcon className="w-7" />
            </button>
          </div>
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
      <AnimatePresence>
        {isContactPopupOpen && (
          <Popup
            title={t("Send us your wants") as string}
            onCloseCallback={() => setIsContactPopupOpen(false)}
          >
            <ContactsForm defaultMessage={getDefaultMessageForContact()} />
          </Popup>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesMenu;
