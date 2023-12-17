import { Input } from "../components/Input/Input";
import { FormLine } from "../components/FormColumn/FormColumn";
import { Textarea } from "../components/Textarea/Textarea";
import { Button } from "../components/Button/Button";
import { Trans, useTranslation } from "next-i18next";
import emailjs from "@emailjs/browser";
import { forwardRef, useEffect, useMemo, useState } from "react";
import LayoutMain from "../components/Layout/LayoutMain";
import { SocialMedia } from "../components/SocialMedia/SocialMedia";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { gtag } from "ga-gtag";
import { WebLine } from "../components/Webline/WebLine";
import { CheckmarkIcon } from "../components/Icons/Icons";
import { Title } from "../components/Title";

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PHONE_REGEX = /^\+?(420)? ?(\d{3}){1,4}( |-)?\d{3}( |-)?\d{3}$/;

const Contacts = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [shouldValidateEmail, setShouldValidateEmail] = useState(false);
  const [shouldValidatePhone, setShouldValidatePhone] = useState(false);
  const [shouldValidateFullName, setShouldValidateFullName] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

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

    setIsSubmittedSuccessfully(true);
    if (message.toLocaleLowerCase() !== "test") {
      gtag("event", "send_contact_form", { event_name: "send_contact_form" });
    }

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
    <LayoutMain
      ref={ref}
      metaTitle={t("Contacts")}
      metaDescription={t(
        "Contact us and share your information to get in touch with our team. We value your input and look forward to connecting with you. Leave your contact details, and we will reach out to discuss your project or answer any inquiries you may have. Start the conversation today."
      )}
    >
      <WebLine innerClassName="flex-center flex flex-col">
        <Title type="h1" className="vl:gap-12 gap-3 flex ">
          <Trans
            i18nKey="CONTACT<span>US</span>"
            components={{
              span: <span className="text-greyLight"></span>,
            }}
          />
        </Title>

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
              hasError={!!emailErrorMessage}
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
          <Button
            type="submit"
            className="flex self-center active:scale-[0.95] mt-4 items-center justify-center w-full max-w-[350px]"
          >
            {isSubmittedSuccessfully ? (
              <CheckmarkIcon className="size-8 text-white/" />
            ) : (
              t("Send message")
            )}
          </Button>
          <SocialMedia
            withText={false}
            className="max-w-[700px] justify-center mt-2"
          />
        </form>
      </WebLine>
    </LayoutMain>
  );
});

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};

export default Contacts;
