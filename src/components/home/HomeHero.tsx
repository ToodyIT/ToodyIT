import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Button } from "../Button/Button";
import { Eyebrow, Reveal } from "../Motion/Reveal";
import { WebLine } from "../Webline/WebLine";

export const HomeHero: FC = () => {
  const { t } = useTranslation();
  const stats = [
    { value: t("3 years"), label: t("Since 2023") },
    { value: t("Prague"), label: t("IT company") },
    { value: t("ToodyMenu"), label: t("Own product") },
  ];

  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24">
      <WebLine innerClassName="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <Eyebrow>ToodyIT · {t("Prague")}</Eyebrow>
            <h1 className="font-display text-fg max-w-[16ch] text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {t("An IT company in Prague")}{" "}
              <span className="bg-gradient-to-r from-[#7dff8d] via-brand to-gold bg-clip-text text-transparent">
                {t("for 3 years.")}
              </span>
            </h1>
            <p className="text-muted mt-6 max-w-xl text-base leading-7 sm:text-lg">
              {t(
                "ToodyIT is a Prague IT company. For 3 years we have been building our own products and custom projects for clients. We make websites and full solutions on any request. Our product ToodyMenu has its own website."
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button tagName="a" href="/about-us">
                {t("About Us")}
              </Button>
              <Button tagName="a" href="/contacts" variant="primaryOutlined">
                {t("Start a project")}
              </Button>
            </div>
          </Reveal>
          <Reveal
            className="mt-12 grid max-w-lg grid-cols-3 gap-4"
            delay={0.15}
          >
            {stats.map((stat) => (
              <div className="border-line border-t pt-4" key={stat.label}>
                <p className="font-display text-fg text-lg font-bold sm:text-xl">
                  {stat.value}
                </p>
                <p className="text-muted mt-1 text-xs leading-4">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
        <Reveal delay={0.12}>
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute -inset-8 rounded-[2.4rem] bg-brand/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-brand/30 bg-gradient-to-br from-brand/16 to-panel p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {t("IT company")}
              </p>
              <p className="font-display text-fg mt-3 text-3xl font-bold">
                Toody<span className="text-brand">IT</span>
              </p>
              <p className="text-muted mt-2 text-sm leading-6">
                {t(
                  "A small studio in Prague. Own products, websites and full projects for clients."
                )}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-fg font-semibold">{t("3 years")}</p>
                  <p className="text-muted">{t("Since 2023")}</p>
                </div>
                <div>
                  <p className="text-fg font-semibold">ToodyIT s.r.o.</p>
                  <p className="text-muted">{t("Prague")}</p>
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link
                className="border-line bg-panel rounded-[1.2rem] border p-4 transition-colors hover:border-brand/30"
                href="/about-us"
              >
                <p className="text-muted text-xs">{t("About the company")}</p>
                <p className="font-display text-fg mt-1 text-sm font-semibold">
                  {t("Who we are?")}
                </p>
              </Link>
              <div className="border-line bg-panel rounded-[1.2rem] border p-4">
                <p className="text-muted text-xs">{t("Own product")}</p>
                <p className="font-display text-fg mt-1 text-sm font-semibold">
                  ToodyMenu
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </WebLine>
    </section>
  );
};
