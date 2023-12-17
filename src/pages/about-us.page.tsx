import { forwardRef, useState } from "react";
import LayoutMain from "../components/Layout/LayoutMain";
import { TFunction, Trans, useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { WebLine } from "../components/Webline/WebLine";
import {
  AboutAnalysisIcon,
  AboutCloudIcon,
  AboutDatAnalysisIcon,
  AboutMobileAppIcon,
  AboutMobileIcon,
  AboutPageAnalysisIcon,
} from "../components/Icons/Icons";
import { Title } from "../components/Title";
import { Button } from "../components/Button/Button";
import { twJoin } from "tailwind-merge";

const getAboutUs = (t: TFunction) => {
  return [
    {
      icon: <AboutMobileIcon className="vl:size-24 size-16" />,
      title: t("Comprehensive IT Service: IT Projects, Administration"),
    },
    {
      icon: <AboutAnalysisIcon className="vl:size-24 size-16" />,
      title: t("Expertise and the highest authority in the IT field"),
    },
    {
      icon: <AboutDatAnalysisIcon className="vl:size-24 size-16" />,
      title: t("A team of specialists with international experience"),
    },
    {
      icon: <AboutCloudIcon className="vl:size-24 size-16" />,
      title: t("Clearly defined quality procedures and standards"),
    },
    {
      icon: <AboutMobileAppIcon className="vl:size-24 size-16" />,
      title: t("Friendly attitude and quality customer care"),
    },
    {
      icon: <AboutPageAnalysisIcon className="vl:size-24 size-16" />,
      title: t("A willing approach and precise care for the customer's needs."),
    },
  ];
};

const AboutUsPage = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const usAbout = getAboutUs(t);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <LayoutMain
      ref={ref}
      metaTitle={t("Our Team")}
      metaDescription={t(
        "Meet our talented and dedicated team of professionals. Discover the expertise and passion that drives us to create exceptional websites. Learn about our diverse skills and experience, as well as our collaborative approach to delivering high-quality web solutions. Get to know the individuals behind our success."
      )}
    >
      <WebLine innerClassName="flex flex-col">
        <Title type="h1" className=" vl:gap-12 gap-3 flex ">
          <Trans
            i18nKey="ABOUT<span>US</span>"
            components={{
              span: <span className="text-greyLight"></span>,
            }}
          />
        </Title>

        <div className="vl:gap-7 gap-4 flex vl:grid vl:grid-cols-3 flex-col items-center">
          {usAbout.map((about, index) => (
            <div
              key={about.title}
              className={twJoin(
                "transition hover:scale-105 relative font-semibold bg-[#148720] flex-center flex flex-col items-center shadow-2xl  vl:text-xl text-center  p-7 rounded-xl",
                !isExpanded && index > 1 ? "hidden vl:flex" : "flex"
              )}
            >
              {about.icon}
              {about.title}
            </div>
          ))}
          <Button
            className="mx-auto h-12 min-h-[48px] font-semibold vl:hidden"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? t("Hide") : t("Show more")}
          </Button>
        </div>
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

export default AboutUsPage;
