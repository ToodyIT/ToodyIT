import { useTranslation } from "next-i18next";
import { ContactsForm } from "../Contacts/ContactsForm";
import { Eyebrow, Reveal } from "../Motion/Reveal";
import { WebLine } from "../Webline/WebLine";
import { COMPANY_EMAIL, PEOPLE } from "../../constants/people";

export const HomeContact: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 sm:py-28" id="contacts">
      <WebLine innerClassName="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Eyebrow>05 — {t("Contacts")}</Eyebrow>
          <h2 className="font-display text-fg text-3xl font-bold tracking-tight sm:text-5xl">
            {t("Write us")}
          </h2>
          <p className="text-muted mt-4 max-w-md">
            {t(
              "Tell us about your project. A website, a product, or a full custom build."
            )}
          </p>
          <div className="mt-8 space-y-4">
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
          </div>
          <a
            className="text-muted hover:text-fg mt-6 inline-block text-sm"
            href={`mailto:${COMPANY_EMAIL}`}
          >
            {COMPANY_EMAIL}
          </a>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="border-line bg-panel rounded-[1.8rem] border p-6 sm:p-8">
            <ContactsForm />
          </div>
        </Reveal>
      </WebLine>
    </section>
  );
};
