import { useTranslation } from "next-i18next";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useMemo, useState } from "react";
import { PHONE_REGEX } from "../CallUsPopup/CallUsPopup";
import { GTMSendEvent } from "../../utils/gtm";
import { CheckmarkIcon } from "../Icons/Icons";
import { showSuccessMessage } from "../../utils/toasts";
import emailjs from "@emailjs/browser";

export const HomepageContact: FC = () => {
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
    showSuccessMessage(t("Successfully sent"));

    setIsSubmittedSuccessfully(true);

    GTMSendEvent("send_phone_form");
  };

  return (
    <div
      id="contacts"
      className="w-full rounded-xl mt-10 vl:mt-20 items-center px-5 py-8 justify-between dark:bg-secondary bg-greyLight flex flex-col vl:flex-row"
    >
      <div className="flex gap-4 item flex-col">
        <h3 className="text-4xl font-bold">{t("Connect with us")}</h3>
        <span className="text-lg">
          {t("Leave your phone number so we can contact you")}
        </span>
      </div>
      <form onSubmit={onSubmit} className="flex-col mt-4 vl:mt-0 flex gap-2">
        <label className="font-semibold text-lg" htmlFor="phone">
          {t("Phone number")}
        </label>
        <div className="flex gap-4">
          <Input
            value={phone}
            id="phone"
            type="tel"
            name="phone"
            className="rounded-lg h-12 vl:h-14"
            wrapperClassName="min-w-[200px] lg:min-w-[300px] w-full"
            onChange={(e) => setPhone(e.target.value)}
            onBlur={() => setShouldValidatePhone(true)}
            placeholder={t("Your phone number")}
            hasError={!!phoneErrorMessage}
            errorMessage={phoneErrorMessage}
            autoComplete="tel"
            onKeyPress={(e) => {
              if (new RegExp(/[ ]/).test(e.key)) {
                e.preventDefault();
              }
            }}
          />
          <Button
            size="lg"
            disabled={!!getPhoneErrorMessage() || phone === ""}
            type="submit"
            className="flex vl:px-10 mb-auto self-center rounded-lg active:scale-[0.95] items-center transition justify-center w-full max-w-[150px]"
          >
            {isSubmittedSuccessfully ? (
              <CheckmarkIcon className="size-8 text-white/" />
            ) : (
              t("Send")
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};
