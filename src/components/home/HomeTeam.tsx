import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { getOurTeam } from "../../pages/our-team.page";
import { Eyebrow, Reveal } from "../Motion/Reveal";
import { WebLine } from "../Webline/WebLine";

export const HomeTeam: FC = () => {
  const { t } = useTranslation();
  const team = getOurTeam(t);

  return (
    <section className="bg-glass relative py-20 sm:py-28">
      <WebLine>
        <Reveal className="mb-12 flex items-end justify-between gap-6">
          <div>
            <Eyebrow>04 — {t("Our Team")}</Eyebrow>
            <h2 className="font-display text-fg text-3xl font-bold tracking-tight sm:text-5xl">
              {t("Our Team")}
            </h2>
          </div>
          <Link
            className="text-muted hover:text-fg hidden text-sm sm:inline"
            href="/our-team"
          >
            {t("Meet the team")} →
          </Link>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 vl:grid-cols-5">
          {team.map((person, index) => (
            <Reveal delay={index * 0.04} key={person.name}>
              <article className="border-line bg-panel overflow-hidden rounded-[1.4rem] border">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    alt={person.alt}
                    className="object-cover"
                    fill
                    placeholder="blur"
                    sizes="220px"
                    src={person.imagePath}
                  />
                </div>
                <div className="p-4">
                  <p className="font-display text-fg text-sm font-semibold">
                    {person.name}
                  </p>
                  <p className="text-muted mt-1 text-[11px] uppercase tracking-wide">
                    {person.position}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </WebLine>
    </section>
  );
};
