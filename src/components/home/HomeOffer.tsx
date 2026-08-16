import { useTranslation } from "next-i18next";
import Link from "next/link";
import { TOODY_MENU_URL } from "../../constants/common";
import { Eyebrow, Reveal } from "../Motion/Reveal";
import { WebLine } from "../Webline/WebLine";

export const ServiceCards: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Reveal>
        <a
          className="group flex h-full flex-col rounded-[1.8rem] border border-brand/20 bg-gradient-to-br from-brand/12 to-transparent p-8"
          href={TOODY_MENU_URL}
          rel="noreferrer"
          target="_blank"
        >
          <p className="text-sm font-medium text-brand">{t("Own product")}</p>
          <h3 className="font-display text-fg mt-4 text-2xl font-bold sm:text-3xl">
            {t("ToodyMenu")}
          </h3>
          <p className="text-muted mt-3 flex-1 leading-7">
            {t(
              "Our own product. Digital menus for restaurants — more on the ToodyMenu website."
            )}
          </p>
          <span className="mt-8 text-sm font-semibold text-brand">
            {t("Open website")} →
          </span>
        </a>
      </Reveal>
      <Reveal delay={0.08}>
        <Link
          className="border-line from-glass to-transparent group flex h-full flex-col rounded-[1.8rem] border bg-gradient-to-br p-8"
          href="/contacts"
        >
          <p className="text-sm font-medium text-brand">{t("For clients")}</p>
          <h3 className="font-display text-fg mt-4 text-2xl font-bold sm:text-3xl">
            {t("Custom websites")}
          </h3>
          <p className="text-muted mt-3 flex-1 leading-7">
            {t(
              "Custom websites for any client and any request — or a full project from idea to launch."
            )}
          </p>
          <span className="mt-8 text-sm font-semibold text-brand">
            {t("Write us")} →
          </span>
        </Link>
      </Reveal>
    </div>
  );
};

export const HomeOffer: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-glass relative py-20 sm:py-28">
      <WebLine>
        <Reveal className="max-w-2xl">
          <Eyebrow>01 — {t("Services")}</Eyebrow>
          <h2 className="font-display text-fg text-3xl font-bold tracking-tight sm:text-5xl">
            {t("What we do")}
          </h2>
          <p className="text-muted mt-4 max-w-xl leading-7">
            {t(
              "We make our own products and also take on websites and full projects for clients."
            )}
          </p>
        </Reveal>
        <div className="mt-12">
          <ServiceCards />
        </div>
      </WebLine>
    </section>
  );
};
