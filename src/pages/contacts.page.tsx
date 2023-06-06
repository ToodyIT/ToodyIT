import { NextPage } from "next";
import LayoutMain from "../components/Layout/LayoutMain";
import { Input } from "../components/Input/Input";
import { FormLine } from "../components/FormColumn/FormColumn";
import { Textarea } from "../components/Textarea/Textarea";
import { Button } from "../components/Button/Button";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { forwardRef, useMemo, useState } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PHONE_REGEX = /^\+?(420)? ?(\d{3}){1,4}( |-)?\d{3}( |-)?\d{3}$/;

const Contacts: NextPage = ({}, ref) => {
  const { t } = useTranslation();
  const [shouldValidateEmail, setShouldValidateEmail] = useState(false);
  const [shouldValidatePhone, setShouldValidatePhone] = useState(false);
  const [shouldValidateFullName, setShouldValidateFullName] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const getEmailErrorMessage = () => {
    if (email === undefined || !shouldValidateEmail) {
      return null;
    }

    if (email === "") {
      return t("Email  required field");
    }

    if (!EMAIL_REGEX.test(email)) {
      return t("Email  invalid");
    }

    return null;
  };

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

  const emailErrorMessage = useMemo(() => {
    return getEmailErrorMessage();
  }, [email, shouldValidateEmail]);

  const phoneErrorMessage = useMemo(() => {
    return getPhoneErrorMessage();
  }, [phone, shouldValidatePhone]);

  const getIsFormValid = () => {
    let hasInvalidFields = false;
    const isEmailValid = getEmailErrorMessage();
    const isPhoneValid = getPhoneErrorMessage();
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

    emailjs.send(
      "service_wpxiwwr",
      "template_jiplvcb",
      templateParams,
      "SwwxDOa6Jx-pezWyi"
    );
  };

  return (
    <LayoutMain ref={ref}>
      <div className="flex flex-col gap-14 w-full pl-40">
        <h1 className="text-white text-3xl flex text-center pt-8">
          {t("Contacts")}
        </h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-12 w-full max-w-[800px]"
        >
          <FormLine>
            <Input
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
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setShouldValidateEmail(true)}
              hasError={!!emailErrorMessage}
              errorMessage={emailErrorMessage}
              placeholder={t("Your email")}
              autoComplete="email"
              label={t("Email")}
            />
          </FormLine>
          <FormLine>
            <Input
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
          <Button type="submit">{t("Send message")}</Button>
        </form>
      </div>
    </LayoutMain>
  );
};
export default forwardRef(Contacts);
