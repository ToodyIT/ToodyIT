import { useTranslation } from "next-i18next";
import LayoutMain from "../components/Layout/LayoutMain";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { twJoin } from "tailwind-merge";
import Image from "next/image";
import { WebLine } from "../components/Webline/WebLine";
import { getOurWorks } from "./our-works.page";
import { Title } from "../components/Title";
import { BlurredDecoration } from "../components/BlurredDecoration/BlurredDecoration";
import { HomepageContact } from "../components/HomepageContact/HomepageContact";
import { HomepageIntro } from "../components/HomepageIntro/HomepageIntro";
import { HomepageServices } from "../components/HomepageServices/HomepageServices";

const HomePage: FC = () => {
  const { t } = useTranslation();
  const ourWorks = getOurWorks(t);

  return (
    <LayoutMain
      metaTitle={t("We develop websites for you, for any request")}
      metaDescription={t(
        "We develop unique websites and create all your IT needs"
      )}
    >
      <WebLine innerClassName="relative">
        <HomepageIntro />
        <Title type="h2">{t("Our Works")}</Title>
        <ul className="flex flex-col vl:flex-row gap-8 vl:gap-10 h-full">
          {ourWorks.slice(0, 2).map((work, index) => (
            <div
              key={work.link}
              className={twJoin(
                "flex flex-col group border-gray-200 border-[5px] dark:border-secondary bg-gray-200 dark:bg-secondary rounded-xl vl:w-1/2 overflow-hidden shadow-lg h-fit",
                index === 0 && "vl:mt-16"
              )}
            >
              <div
                className={twJoin(
                  "relative overflow-hidden rounded-lg from-primary/50 to-gray-200 dark:to-greyDark dark:from-primary",
                  index === 0 ? "bg-gradient-to-r" : "bg-gradient-to-l"
                )}
              >
                <BlurredDecoration
                  className={twJoin(
                    "top-0 transition opacity-0 !w-[300px] !h-[300px] duration-300 !bg-primary z-[0] group-hover:opacity-100",
                    index === 0 ? "right-0" : "left-0"
                  )}
                />
                <Image
                  src={work.desktopImagePath}
                  alt={work.alt}
                  placeholder="blur"
                  className={twJoin(
                    "rounded-3xl min-h-full group-hover:translate-y-6 duration-300",
                    index === 0
                      ? "translate-x-10 translate-y-14"
                      : "-translate-x-14 translate-y-10"
                  )}
                />
              </div>
              <div className="py-6 px-4 flex flex-col gap-2 bg-gray-200 dark:bg-secondary">
                <h4 className="text-xl font-semibold">{work.alt}</h4>
                <p className="text-greyLighter dark:text-gray-400">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </ul>
      </WebLine>
      <HomepageServices />
      <WebLine>
        <HomepageContact />
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

export default HomePage;
