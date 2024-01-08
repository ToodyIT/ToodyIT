import { Trans, useTranslation } from "next-i18next";
import { forwardRef } from "react";
import LayoutMain from "../components/Layout/LayoutMain";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { WebLine } from "../components/Webline/WebLine";
import { Title } from "../components/Title";
import { ContactsForm } from "../components/Contacts/ContactsForm";
import { SocialMedia } from "../components/SocialMedia/SocialMedia";
import { ContactsSocialMedia } from "../components/Contacts/ContactsSocialMedia";

const Contacts = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <LayoutMain
      ref={ref}
      metaTitle={t("Contacts")}
      metaDescription={t(
        "Leave your contact information and we'll get back to you to discuss your project or answer any questions you may have. Start the conversation today."
      )}
    >
      <WebLine innerClassName="flex-center flex flex-col">
        <Title type="h1">
          <Trans
            i18nKey="CONTACT<span>US</span>"
            components={{
              span: <span className="text-greyLight"></span>,
            }}
          />
        </Title>
        <ContactsForm />
        {/* <SocialMedia
          withText
          className="max-w-[700px] pt-8 justify-center mt-2"
        /> */}
        <ContactsSocialMedia />
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
