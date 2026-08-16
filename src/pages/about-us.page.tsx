import { GetStaticProps } from "next";
import { useTranslation, TFunction } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LayoutMain from "../components/Layout/LayoutMain";
import { WebLine } from "../components/Webline/WebLine";
import { PageHero } from "../components/PageHero/PageHero";
import { Reveal } from "../components/Motion/Reveal";

export const getAboutUs = (t: TFunction) => {
  return [
    {
      title: t("3 years"),
      description: t(
        "We have been working since 2023. A small Prague team with our own product and client projects."
      ),
    },
    {
      title: t("Prague"),
      description: t(
        "ToodyIT s.r.o. is based in Prague. We work with clients in Czechia and beyond."
      ),
    },
    {
      title: t("Own product"),
      description: t(
        "Our own product. Digital menus for restaurants — more on the ToodyMenu website."
      ),
    },
    {
      title: t("Custom websites"),
      description: t(
        "We build custom websites for any client and any request."
      ),
    },
    {
      title: t("Full projects"),
      description: t(
        "Need more than a site? We can design and build a complete product from idea to launch."
      ),
    },
    {
      title: t("Direct communication"),
      description: t(
        "You talk to the people who build. Short replies, clear next steps."
      ),
    },
  ];
};

const AboutUs = () => {
  const { t } = useTranslation();
  const usAbout = getAboutUs(t);

  return (
    <LayoutMain
      metaTitle={t("ToodyIT — a Prague IT company")}
      metaDescription={t(
        "A Prague IT company. For 3 years we have been building our own products, websites and full projects for clients."
      )}
    >
      <PageHero
        kicker={t("About Us")}
        title={t("Who we are?")}
        text={t(
          "ToodyIT is a Prague IT company. For 3 years we have been building our own products and custom projects for clients. We make websites and full solutions on any request. Our product ToodyMenu has its own website."
        )}
      />
      <WebLine innerClassName="pb-20">
        <div className="border-line bg-glass mt-4 grid gap-px overflow-hidden rounded-[1.6rem] border md:grid-cols-2 vl:grid-cols-3">
          {usAbout.map((about, index) => (
            <Reveal delay={index * 0.05} key={about.title}>
              <article className="bg-panel h-full p-7">
                <p className="mb-3 text-sm font-semibold text-brand">
                  0{index + 1}
                </p>
                <h2 className="font-display text-fg text-lg font-semibold">
                  {about.title}
                </h2>
                <p className="text-muted mt-2 text-sm leading-6">
                  {about.description}
                </p>
              </article>
            </Reveal>
          ))}
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

export default AboutUs;
