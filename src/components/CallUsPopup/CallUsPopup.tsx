import { useTranslation } from "next-i18next";
import { Input } from "../Input/Input";
import { Popup } from "../Popup/Popup";
import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../Button/Button";
import { CheckmarkIcon } from "../Icons/Icons";
import { GTMSendEvent } from "../../utils/gtm";
import { showSuccessMessage } from "../../utils/toasts";

type CallUsPopupProps = {
  onCloseCallback: () => void;
};

export const PHONE_REGEX = /^\+?(420)? ?(\d{3}){1,4}( |-)?\d{3}( |-)?\d{3}$/;

export const CallUsPopup: FC<CallUsPopupProps> = ({ onCloseCallback }) => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [shouldValidatePhone, setShouldValidatePhone] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [countOfSentForms, setCountOfSentForms] = useState(0);

  const getPhoneErrorMessage = () => {
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

    if (countOfSentForms < 3) {
      // emailjs.send(
      //   "service_wpxiwwr",
      //   "template_yi8fpd5",
      //   templateParams,
      //   "SwwxDOa6Jx-pezWyi"
      // );
    }
    showSuccessMessage(t("Successfully sent"), "call-us-form");

    setIsSubmittedSuccessfully(true);

    GTMSendEvent("send_phone_form");

    setCountOfSentForms((prev) => prev + 1);
    onCloseCallback();
  };

  return (
    <Popup
      onCloseCallback={onCloseCallback}
      title={t("Let's discuss your future website and get a 10% discount")}
      innerContentClassName="flex flex-col items-center pt-1"
      className="!max-w-[770px]"
    >
      <div className="flex flex-col gap-2 items-center">
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
          hasError={!!phoneErrorMessage && shouldValidatePhone}
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
          size="lg"
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
