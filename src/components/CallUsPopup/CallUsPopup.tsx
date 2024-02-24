import { useTranslation } from "next-i18next";
import { Input } from "../Input/Input";
import { Popup } from "../Popup/Popup";
import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../Button/Button";
import { CheckmarkIcon } from "../Icons/Icons";
import { GTMSendEvent } from "../../utils/gtm";

type CallUsPopupProps = {
  onCloseCallback: () => void;
};

const PHONE_REGEX = /^\+?(420)? ?(\d{3}){1,4}( |-)?\d{3}( |-)?\d{3}$/;

export const CallUsPopup: FC<CallUsPopupProps> = ({ onCloseCallback }) => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [shouldValidatePhone, setShouldValidatePhone] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const getPhoneErrorMessage = () => {
    if (phone === undefined || !shouldValidatePhone) {
      return null;
    }

    if (phone === "") {
      return t("Phone  required field");
    }

    if (!PHONE_REGEX.test(phone)) {
      return t("Phone  invalid");
    }

    return null;
  };

  const phoneErrorMessage = useMemo(() => {
    return getPhoneErrorMessage();
  }, [phone, shouldValidatePhone]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (phoneErrorMessage) {
      return;
    }

    const templateParams = {
      phone,
    };

    emailjs.send(
      "service_wpxiwwr",
      "template_yi8fpd5",
      templateParams,
      "SwwxDOa6Jx-pezWyi"
    );

    setIsSubmittedSuccessfully(true);

    GTMSendEvent("send_phone_form");

    onCloseCallback();
  };

  return (
    <Popup
      onCloseCallback={onCloseCallback}
      title={t("Let's discuss your website and get 10% discount")}
      innerContentClassName="flex flex-col items-center pt-1"
      className="!max-w-[700px]"
    >
      <div className="flex flex-col gap-2 items-center">
        <a href="tel:+420773011578" className="text-primary font-bold text-2xl">
          +420 773 011 578
        </a>
        <span className="text-lg">{t("or let us call you back")}</span>
      </div>
      <form onSubmit={onSubmit} className="flex w-full items-center flex-col">
        <Input
          required
          value={phone}
          type="tel"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          onBlur={() => setShouldValidatePhone(true)}
          placeholder={t("Your phone number")}
          hasError={!!phoneErrorMessage}
          errorMessage={phoneErrorMessage}
          label={t("Phone")}
          autoComplete="tel"
          onKeyPress={(e) => {
            if (new RegExp(/[ ]/).test(e.key)) {
              e.preventDefault();
            }
          }}
        />
        <Button
          disabled={!!getPhoneErrorMessage()}
          type="submit"
          className="flex self-center active:scale-[0.95] mt-5 items-center justify-center w-full max-w-[350px] max-h-[56px]"
        >
          {isSubmittedSuccessfully ? (
            <CheckmarkIcon className="size-8 text-white/" />
          ) : (
            t("Send message")
          )}
        </Button>
      </form>
    </Popup>
  );
};
