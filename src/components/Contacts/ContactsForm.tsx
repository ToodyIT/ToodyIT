import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { FormLine } from "../FormColumn/FormColumn";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import { CheckmarkIcon } from "../Icons/Icons";
import { GTMSendEvent } from "../../utils/gtm";
import { showSuccessMessage } from "../../utils/toasts";
import emailjs from "@emailjs/browser";

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PHONE_REGEX = /^\+?(420)? ?(\d{3}){1,4}( |-)?\d{3}( |-)?\d{3}$/;

type ContactsFormProps = {
  defaultMessage?: string;
};

export const ContactsForm: FC<ContactsFormProps> = ({ defaultMessage }) => {
  const { t } = useTranslation();
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [shouldValidateEmail, setShouldValidateEmail] = useState(false);
  const [shouldValidatePhone, setShouldValidatePhone] = useState(false);
  const [shouldValidateFullName, setShouldValidateFullName] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(defaultMessage ?? "");
  const [countOfSentForms, setCountOfSentForms] = useState(0);

  const clearForm = () => {
    setFullName("");
    setCompany("");
    setPhone("");
    setMessage("");
    setEmail("");
    setShouldValidateEmail(false);
    setShouldValidatePhone(false);
    setShouldValidateFullName(false);
  };

  const getEmailErrorMessage = () => {
    if (email === "") {
      return t("Email  required field");
    }

    if (!EMAIL_REGEX.test(email)) {
      return t("Email  invalid");
    }

    return null;
  };

  const getPhoneErrorMessage = () => {
    if (phone === "") {
      return t("Phone  required field");
    }

    if (!PHONE_REGEX.test(phone)) {
      return t("Phone  invalid");
    }

    return null;
  };

  const emailErrorMessage = useMemo(() => {
    return getEmailErrorMessage();
  }, [email, shouldValidateEmail]);

  const phoneErrorMessage = useMemo(() => {
    return getPhoneErrorMessage();
  }, [phone, shouldValidatePhone]);

  const isEmailValid = getEmailErrorMessage();
  const isPhoneValid = getPhoneErrorMessage();

  const getIsFormValid = () => {
    let hasInvalidFields = false;
    const isFullNameValid = fullName !== "";
    if (!isEmailValid) {
      setShouldValidateEmail(true);
      hasInvalidFields = true;
    }

    if (!isPhoneValid) {
      setShouldValidatePhone(true);
      hasInvalidFields = true;
    }

    if (!isFullNameValid) {
      setShouldValidateFullName(true);
      hasInvalidFields = true;
    }

    return hasInvalidFields;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!getIsFormValid()) {
      return;
    }

    const templateParams = {
      name: fullName,
      email,
      company,
      phone,
      message,
    };
    if (countOfSentForms < 3) {
      emailjs.send(
        "service_wpxiwwr",
        "template_jiplvcb",
        templateParams,
        "SwwxDOa6Jx-pezWyi"
      );
    }
    showSuccessMessage(t("Successfully sent"), "contact-form");

    setIsSubmittedSuccessfully(true);
    if (message.toLocaleLowerCase() !== "test") {
      GTMSendEvent("send_contact_form");
    }
    setCountOfSentForms((prev) => prev + 1);
    clearForm();
  };

  useEffect(() => {
    let timeout: null | NodeJS.Timeout = null;
    if (isSubmittedSuccessfully) {
      timeout = setTimeout(() => {
        setIsSubmittedSuccessfully(false);
      }, 5000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isSubmittedSuccessfully]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col relative gap-7 max-w-[700px] w-full"
    >
      <FormLine>
        <Input
          required
          placeholder={t("Full name")}
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          onBlur={() => setShouldValidateFullName(true)}
          label={t("Full name")}
          autoComplete="name"
          hasError={shouldValidateFullName && fullName === ""}
          errorMessage={t("Full name is required field")}
        />
        <Input
          required
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setShouldValidateEmail(true)}
          hasError={!!emailErrorMessage && shouldValidateEmail}
          errorMessage={emailErrorMessage}
          placeholder={t("Your email")}
          autoComplete="email"
          label={t("Email")}
        />
      </FormLine>
      <FormLine>
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
        <Input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder={t("Name of company")}
          autoComplete="organization"
          name="organization"
          label={t("Company")}
        />
      </FormLine>
      <Textarea
        value={message}
        name="note"
        autoComplete="off"
        onChange={(e) => setMessage(e.target.value)}
        placeholder={t("Your message for us")}
        label={t("Message")}
      />
      <Button
        disabled={!!(getEmailErrorMessage() || getPhoneErrorMessage())}
        type="submit"
        size="lg"
        className="mt-4 w-full"
      >
        {isSubmittedSuccessfully ? (
          <CheckmarkIcon className="size-8 text-white/" />
        ) : (
          t("Send message")
        )}
      </Button>
    </form>
  );
};
