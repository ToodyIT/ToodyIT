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
      .join(", ");

    return `${t("My wants:")} ${addedServicesMessage}`;
  };
  return (
    <>
      <WebLine
        innerClassName="justify-between flex w-full "
        className="border-line bg-nav sticky top-16 z-30 border-y py-4 backdrop-blur-xl sm:top-[4.5rem]"
      >
        <div className="flex gap-5 flex-center">
          <Link
            href="/services"
            className="border-line hidden rounded-full border p-2 transition hover:border-brand vl:flex"
          >
            <ArrowIcon className="size-5 rotate-90" />
          </Link>
          <span className="flex items-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white vl:px-6 vl:text-lg">
            {getSumPrice()} {t("CZK")}
          </span>
        </div>

        <div className="flex gap-3 items-center">
          <button
            onClick={() => setAddedServices(basicServices)}
            type="reset"
            className="border-line rounded-full border px-3 py-1 text-sm vl:px-5"
          >
            <div>
              <span>{t("Reset")}</span>
            </div>
          </button>
          <button
            onClick={() => setIsContactPopupOpen(true)}
            type="submit"
            className="flex items-center gap-2 rounded-full bg-brand p-2 text-sm font-semibold text-white vl:px-6"
          >
            <div className="hidden vl:flex">{t("Sent to us")}</div>

            <SendIcon className="w-7 " />
          </button>
        </div>
      </WebLine>
      <WebLine className="py-6">
        <Title type="h3">{t("Mandatory")}</Title>
        <ul className="flex flex-col vl:grid vl:grid-cols-4 gap-4">
          {basicServices.map((basicService) => (
            <li key={basicService.title}>
              <ServiceMenuItem
                service={basicService}
                addedServices={addedServices}
                setAddedServices={setAddedServices}
              />
            </li>
          ))}
        </ul>
      </WebLine>
      <WebLine>
        <Title type="h3">{t("Additional")}</Title>
        <ul className="flex flex-col vl:grid vl:grid-cols-4 gap-4">
          {additionalServices.map((additionalService) => (
            <li key={additionalService.title}>
              <ServiceMenuItem
                service={additionalService}
                addedServices={addedServices}
                setAddedServices={setAddedServices}
              />
            </li>
          ))}
        </ul>
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
