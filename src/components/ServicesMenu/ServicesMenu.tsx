import { useTranslation } from "next-i18next";
import { WebLine } from "../Webline/WebLine";
import { Title } from "../Title";
import { ReactNode, useState } from "react";
import { ArrowIcon, SendIcon } from "../Icons/Icons";
import { ServiceType } from "../../types/services";
import { ServiceMenuItem } from "./ServiceMenuItem";
import { Popup } from "../Popup/Popup";
import { ContactsForm } from "../Contacts/ContactsForm";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

type ServicesMenuProps = {
  basicServices: ServiceType[];
  additionalServices: ServiceType[];
  description: ReactNode;
};

export const ServicesMenu: FC<ServicesMenuProps> = ({
  basicServices,
  additionalServices,
  description,
}) => {
  const { t } = useTranslation();
  const [addedServices, setAddedServices] =
    useState<ServiceType[]>(basicServices);
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
  const getDefaultMessageForContact = () => {
    const addedServicesMessage = addedServices
      .map((service) => service.title)
      .join("\n");

    return `${t("My wants:")} ${addedServicesMessage}`;
  };
  return (
    <>
      <WebLine
        innerClassName="justify-between flex w-full "
        className="sticky z-10 top-0 bg-secondary/30 py-5 backdrop-blur-2xl"
      >
        <div className="flex gap-5 flex-center">
          <Link
            href="/services"
            className="border p-2 hidden vl:flex rounded-full hover:bg-white hover:text-black transition"
          >
            <ArrowIcon className="size-5 rotate-90" />
          </Link>
          <span className="bg-primary flex vl:text-2xl flex-center vl:px-7 px-3 py-2 rounded-full pl-5 font-bold">
            {getSumPrice()} {t("CZK")}
          </span>
        </div>

        <div className="flex gap-3 items-center">
          <button
            onClick={() => setAddedServices(basicServices)}
            type="reset"
            className="flex vl:text-lg border-2 flex-center vl:px-5 px-3 h-fit py-1 rounded-full font-bold"
          >
            <div>
              <span>{t("Reset")}</span>
            </div>
          </button>
          <button
            onClick={() => setIsContactPopupOpen(true)}
            type="submit"
            className="bg-primary gap-2 flex vl:text-2xl flex-center vl:px-7 p-2 rounded-full vl:pl-5 font-bold"
          >
            <div className="hidden vl:flex">{t("Sent to us")}</div>

            <SendIcon className="w-7 " />
          </button>
        </div>
      </WebLine>
      <WebLine className="bg-secondary/30 py-5 backdrop-blur-2xl">
        <div>
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
        {description}
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
