import { useTranslation } from "next-i18next";
import { Eyebrow, Reveal } from "../Motion/Reveal";
import { WebLine } from "../Webline/WebLine";

export const HomeProcess: FC = () => {
  const { t } = useTranslation();
  const steps = [
    {
      title: t("Request"),
      text: t(
        "Tell us what you need — a website, a product, or a full custom project."
      ),
    },
    {
      title: t("Proposal"),
      text: t("We suggest the right path and a clear price."),
    },
    {
      title: t("Development"),
      text: t("We design and build until it is ready to use."),
    },
    {
      title: t("Launch"),
      text: t("We go live and stay available if you need us."),
    },
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <WebLine>
        <Reveal className="max-w-2xl">
          <Eyebrow>03 — {t("How we work")}</Eyebrow>
          <h2 className="font-display text-fg text-3xl font-bold tracking-tight sm:text-5xl">
            {t("From request to launch")}
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal delay={index * 0.05} key={step.title}>
              <li className="border-line bg-glass h-full rounded-[1.4rem] border p-5">
                <span className="font-display text-2xl font-bold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-fg mt-4 text-base font-semibold">
                  {step.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-6">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </WebLine>
    </section>
  );
};
