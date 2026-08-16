import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { getOurWorks } from "../../pages/our-works.page";
import { Eyebrow, Reveal } from "../Motion/Reveal";
import { WebLine } from "../Webline/WebLine";

export const HomeWorks: FC = () => {
  const { t } = useTranslation();
  const works = getOurWorks(t).slice(0, 3);

  return (
    <section className="relative py-20 sm:py-28" id="works">
      <WebLine>
        <Reveal className="mb-8 flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>02 — {t("Our Works")}</Eyebrow>
            <h2 className="font-display text-fg text-3xl font-bold tracking-tight sm:text-5xl">
              {t("Selected work")}
            </h2>
          </div>
          <Link
            className="text-muted hover:text-fg hidden text-sm sm:inline"
            href="/our-works"
          >
            {t("All works")} →
          </Link>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {works.map((work, index) => (
            <Reveal delay={index * 0.04} key={work.link}>
              <a
                className="border-line bg-panel group block overflow-hidden rounded-[1.2rem] border transition-colors hover:border-brand/30"
                href={work.link}
                rel="noreferrer"
                target="_blank"
              >
                <div className="relative h-28 overflow-hidden sm:h-36">
                  <Image
                    alt={work.alt}
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                    fill
                    placeholder="blur"
                    sizes="240px"
                    src={work.desktopImagePath}
                  />
                </div>
                <div className="p-3">
                  <p className="text-muted text-[11px] font-semibold">
                    0{index + 1}
                  </p>
                  <h3 className="font-display text-fg mt-1 truncate text-sm font-semibold">
                    {work.alt}
                  </h3>
                </div>
              </a>
            </Reveal>
          ))}
          <Reveal delay={0.12}>
            <Link
              className="border-line bg-glass flex h-full min-h-[10rem] flex-col justify-between rounded-[1.2rem] border p-4 transition-colors hover:border-brand/30"
              href="/our-works"
            >
              <p className="text-muted text-[11px] font-semibold">04+</p>
              <div>
                <h3 className="font-display text-fg text-sm font-semibold">
                  {t("And others")}
                </h3>
                <p className="text-muted mt-1 text-xs leading-5">
                  {t("More projects on the works page.")}
                </p>
                <span className="mt-3 inline-block text-xs font-semibold text-brand">
                  {t("All works")} →
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </WebLine>
    </section>
  );
};
