import { WebLine } from "../Webline/WebLine";
import { Eyebrow, Reveal } from "../Motion/Reveal";

type PageHeroProps = {
  kicker: string;
  title: string;
  text?: string;
};

export const PageHero: FC<PageHeroProps> = ({ kicker, title, text }) => (
  <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-20">
    <WebLine>
      <Reveal>
        <Eyebrow>{kicker}</Eyebrow>
        <h1 className="font-display text-fg max-w-[16ch] text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {text && (
          <p className="text-muted mt-6 max-w-xl text-base leading-7 sm:text-lg">
            {text}
          </p>
        )}
      </Reveal>
    </WebLine>
  </section>
);
