import { GetStaticProps } from "next";
import { forwardRef } from "react";
import { useTranslation, TFunction, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LayoutMain from "../components/Layout/LayoutMain";
import { WebLine } from "../components/Webline/WebLine";
import {
  AboutAnalysisIcon,
  AboutCloudIcon,
  AboutDatAnalysisIcon,
  AboutDnsIcon,
  AboutMobileIcon,
  AboutRecursiveIcon,
} from "../components/Icons/Icons";
import { Title } from "../components/Title";
import { twJoin } from "tailwind-merge";
import Image from "next/image";
import { BlurredDecoration } from "../components/BlurredDecoration/BlurredDecoration";
import illustration from "/public/img/illustration.png";

const getAboutUs = (t: TFunction) => {
  return [
    {
      image: "/img/about-us/imageTailoredApproach.jpg",
      icon: <AboutMobileIcon className="vl:size-24 size-16" />,
      title: t("Tailored Approach"),
      description: t(
        "We eschew standard configurators, offering personalized solutions for each client."
      ),
    },
    {
      image: "/img/about-us/imageSwiftExecution.jpg",
      icon: <AboutCloudIcon className="vl:size-24 size-16" />,
      title: t("Swift Execution"),
      description: t(
        "Our team responds promptly to tasks, ensuring high-speed project completion."
      ),
    },
    {
      image: "/img/about-us/imageVersatileDesign.jpg",
      icon: <AboutRecursiveIcon className="vl:size-24 size-16" />,
      title: t("Versatile Design"),
      description: t(
        " Specializing in crafting unique designs across various styles, accentuating the individuality of each project."
      ),
    },
    {
      image: "/img/about-us/imageInnovationsInWebDevelopment.jpg",
      icon: <AboutDatAnalysisIcon className="vl:size-24 size-16" />,
      title: t("Innovations in Web Development"),
      description: t(
        "We consistently integrate new technologies into the web development process, guaranteeing modern and highly effective solutions."
      ),
    },
    {
      image: "/img/about-us/imagePartnershipForSuccess.jpg",
      icon: <AboutDnsIcon className="vl:size-24 size-16" />,
      title: t("Partnership"),
      description: t(
        "We have partners who collaborate with us and provide all the support you need to achieve your success."
      ),
    },
    {
      image: "/img/about-us/imagePromotionAndAnalytics.jpg",
      icon: <AboutAnalysisIcon className="vl:size-24 size-16" />,
      title: t("Promotion and Analytics"),
      description: t(
        "Our company offers SEO and analytics services, ensuring website optimization for search engines and providing insights for online visibility and effectiveness."
      ),
    },
  ];
};

const HomePage = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const usAbout = getAboutUs(t);

  return (
    <LayoutMain
      ref={ref}
      metaTitle={t("We develop websites for you, for any request")}
      metaDescription={t(
        "We develop unique websites and create all your IT needs"
      )}
    >
      <WebLine innerClassName="flex flex-col">
        <div className="vl:absolute vl:z-[-1px] vl:right-0 xl:top-1/2 vl:-translate-y-1/2 hidden vl:flex vl:w-1/3 vl:aspect-square vl:top-1/3">
          <Image src={illustration} alt="illustration" fill />
        </div>
        <BlurredDecoration className="right-48 -bottom-0" />
        <Title type="h1" className="z-0">
          <Trans
            i18nKey="ABOUT<span>US</span>"
            components={{
              span: (
                <span className="dark:text-greyLight/50 text-greyLighter"></span>
              ),
            }}
          />
        </Title>
        <Title type="h2" className="text-primary z-0 !mt-0">
          {t("Who we are?")}
        </Title>
        <p className="vl:text-xl vl:max-w-5xl vl:pb-10 z-0 pb-5">
          {t(
            "We are a young company passionate about IT technologies and website development. We specialize in building websites of all sizes and industries, as well as online store development. We are open to communication and ready to address your inquiries."
          )}
        </p>

        <ul className="vl:gap-7 gap-6 grid lg:grid-cols-2 vl:grid-cols-3">
          {usAbout.map((about) => (
            <li key={about.title} className="text-center gap-2 flex flex-col">
              <div
                className={twJoin(
                  "transition hover:scale-105 z-0 border dark:border-black/60  relative overflow-hidden font-semibold h-52 max-w-xl w-full flex-center flex flex-col items-center shadow-2xl  vl:text-xl text-center  p-7 rounded-xl"
                )}
              >
                <Image
                  src={about.image}
                  alt="photo"
                  fill
                  quality={20}
                  className="rounded-xl object-cover text-[0px]"
                />
                <div className="z-20"> {about.icon}</div>
                <h3 className="z-20 bg-greyLight/80 p-2 dark:p-0 dark:bg-greyLight/0 rounded-md">
                  {" "}
                  {about.title}
                </h3>
                <div className="dark:bg-grey/80  absolute z-10 w-full left-0 right-0 h-52 rounded-xl"></div>
              </div>
              <p className="z-0">{about.description}</p>
            </li>
          ))}
        </ul>
      </WebLine>
    </LayoutMain>
  );
});

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};

export default HomePage;
