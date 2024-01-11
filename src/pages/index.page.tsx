import { GetStaticProps } from "next";
import { forwardRef, useState } from "react";
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

const getAboutUs = (t: TFunction) => {
  return [
    {
      image: "/img/imageTailoredApproach.jpg",
      icon: <AboutMobileIcon className="vl:size-24 size-16" />,
      title: t("Tailored Approach"),
      description: t(
        "We eschew standard configurators, offering personalized solutions for each client."
      ),
    },
    {
      image: "/img/imageSwiftExecution.jpg",
      icon: <AboutCloudIcon className="vl:size-24 size-16" />,
      title: t("Swift Execution"),
      description: t(
        "Our team responds promptly to tasks, ensuring high-speed project completion."
      ),
    },
    {
      image: "/img/imageVersatileDesign.jpg",
      icon: <AboutRecursiveIcon className="vl:size-24 size-16" />,
      title: t("Versatile Design"),
      description: t(
        " Specializing in crafting unique designs across various styles, accentuating the individuality of each project."
      ),
    },
    {
      image: "/img/imageInnovationsInWebDevelopment.jpg",
      icon: <AboutDatAnalysisIcon className="vl:size-24 size-16" />,
      title: t("Innovations in Web Development"),
      description: t(
        "We consistently integrate new technologies into the web development process, guaranteeing modern and highly effective solutions."
      ),
    },
    {
      image: "/img/imagePartnershipForSuccess.jpg",
      icon: <AboutDnsIcon className="vl:size-24 size-16" />,
      title: t("Partnership for Success"),
      description: t(
        "We value our partners and provide comprehensive support, collaborating to achieve common goals."
      ),
    },
    {
      image: "/img/imagePromotionAndAnalytics.jpg",
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
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <LayoutMain
      ref={ref}
      metaTitle={t("ToodyIT")}
      metaDescription={t(
        "Welcome to ToodyIT - Your Destination for Exceptional Web Solutions"
      )}
    >
      <WebLine innerClassName="flex flex-col">
        <BlurredDecoration className="vl:h-[700px] vl:w-[700px]" />
        <BlurredDecoration className="right-48 -bottom-0" />
        <Title type="h1">
          <Trans
            i18nKey="ABOUT<span>US</span>"
            components={{
              span: <span className="text-greyLight"></span>,
            }}
          />
        </Title>
        <Title type="h3" className="text-primary !mt-0">
          {t("Who we are?")}
        </Title>
        <p className="vl:text-xl vl:pb-10 pb-5">
          {t(
            "We are a young company passionate about IT technologies and website development. We have interesting offers for you, including our own reservation system. We specialize in creating online stores and websites of any size and industry - from personal portals to corporate web spaces. We are open to communication and ready to address your inquiries."
          )}
        </p>

        <ul className="vl:gap-7 gap-4 grid lg:grid-cols-2 vl:grid-cols-3">
          {usAbout.map((about, index) => (
            <li key={about.title} className="text-center gap-2 flex flex-col">
              <div
                className={twJoin(
                  "transition hover:scale-105 z-0 border dark:border-black/60  relative overflow-hidden font-semibold h-52 max-w-xl w-full flex-center flex flex-col items-center shadow-2xl  vl:text-xl text-center  p-7 rounded-xl",
                  !isExpanded && index > 1 ? "hidden vl:flex" : "flex"
                )}
              >
                <Image
                  src={about.image}
                  alt=""
                  fill
                  quality={20}
                  blurDataURL="/img/imageEshopsBlur.jpg"
                  placeholder="blur"
                  className="rounded-xl object-cover text-[0px]"
                />
                <div className="z-20"> {about.icon}</div>
                <h3 className="z-20"> {about.title}</h3>
                <div className="dark:bg-grey/80 bg-greyLight/80 absolute z-10 w-full left-0 right-0 h-52 rounded-xl"></div>
              </div>
              <p>{about.description}</p>
            </li>
          ))}
          {/* <Button
            className="mx-auto h-12 min-h-[48px] font-semibold vl:hidden"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? t("Hide") : t("Show more")}
          </Button> */}
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
