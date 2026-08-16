import { useTranslation } from "next-i18next";
import { WebLine } from "../Webline/WebLine";

export const HomeMarquee: FC = () => {
  const { t } = useTranslation();
  const items = [
    t("3 years"),
    t("Prague"),
    t("ToodyMenu"),
    t("Custom websites"),
    t("Full projects"),
  ];

  return (
    <div className="border-line border-y py-6">
      <WebLine innerClassName="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted text-xs font-semibold uppercase tracking-[0.22em]">
          ToodyIT · {t("IT company")}
        </p>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="border-line bg-glass text-fg rounded-full border px-3 py-1.5 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </WebLine>
    </div>
  );
};
