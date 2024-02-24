import { Trans, useTranslation } from "next-i18next";
import LayoutMain from "../components/Layout/LayoutMain";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { WebLine } from "../components/Webline/WebLine";
import { Title } from "../components/Title";
import { ContactsForm } from "../components/Contacts/ContactsForm";
import { ContactsSocialMedia } from "../components/Contacts/ContactsSocialMedia";
import { BlurredDecoration } from "../components/BlurredDecoration/BlurredDecoration";

const Contacts: FC<HTMLDivElement> = () => {
  const { t } = useTranslation();

  return (
    <LayoutMain
      metaTitle={t("Contacts")}
      metaDescription={t(
        "Leave your contact information and we'll get back to you to discuss your project or answer any questions you may have. Start the conversation today."
      )}
    >
      <WebLine innerClassName="flex-center flex flex-col">
        <BlurredDecoration className="vl:h-[700px] vl:w-[700px]" />
        <BlurredDecoration className="right-48 -bottom-5" />
        <Title type="h1">
          <Trans
            i18nKey="CONTACT<span>US</span>"
            components={{
              span: (
                <span className="dark:text-greyLight text-greyLighter"></span>
              ),
            }}
          />
        </Title>
        <ContactsForm />
        <ContactsSocialMedia />
      </WebLine>
    </LayoutMain>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};

export default Contacts;
