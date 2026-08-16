import { useTranslation } from "next-i18next";
import LayoutMain from "../components/Layout/LayoutMain";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { WebLine } from "../components/Webline/WebLine";
import { ContactsForm } from "../components/Contacts/ContactsForm";
import { ContactsSocialMedia } from "../components/Contacts/ContactsSocialMedia";
import { PageHero } from "../components/PageHero/PageHero";
import {
  COMPANY_ADDRESS,
  COMPANY_CIN,
  COMPANY_DATA_BOX,
  COMPANY_EMAIL,
  COMPANY_LEGAL_NAME,
  PEOPLE,
} from "../constants/people";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <LayoutMain
      metaTitle={t("Contacts")}
      metaDescription={t(
        "Tell us about your project. A website, a product, or a full custom build."
      )}
    >
      <PageHero
        kicker={t("Contacts")}
        title={t("Write us")}
        text={t(
          "Tell us about your project. A website, a product, or a full custom build."
        )}
      />
      <WebLine innerClassName="grid items-start gap-10 pb-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          {PEOPLE.map((person) => (
            <div key={person.tel}>
              <p className="text-fg text-sm">{person.name}</p>
              <a
                className="text-brand hover:text-fg"
                href={`tel:${person.tel}`}
              >
                {person.phone}
              </a>
            </div>
          ))}
          <a
            className="text-muted hover:text-fg inline-block"
            href={`mailto:${COMPANY_EMAIL}`}
          >
            {COMPANY_EMAIL}
          </a>
          <div className="border-line text-muted space-y-1 border-t pt-5 text-sm leading-6">
            <p className="text-fg">{COMPANY_LEGAL_NAME}</p>
            <p>
              {t("CIN")}: {COMPANY_CIN}
            </p>
            <p>{COMPANY_ADDRESS}</p>
            <p>
              {t("Data mailbox")}: {COMPANY_DATA_BOX}
            </p>
          </div>
        </div>
        <div className="border-line bg-panel rounded-[1.8rem] border p-6 sm:p-8">
          <ContactsForm />
        </div>
        <div className="border-line col-span-full border-t pt-12">
          <ContactsSocialMedia />
        </div>
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
