import { GetStaticProps } from "next";
import { forwardRef, useState } from "react";
import { Meta } from "../components/Meta/Meta";
import { useTranslation, TFunction, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LayoutMain from "../components/Layout/LayoutMain";
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

const HomePage = forwardRef<HTMLDivElement>((_, ref) => {
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
      <Meta
        metaTitle={t(
          "Welcome to ToodyIT - Your Destination for Exceptional Web Solutions"
        )}
        metaDescription={t(
          "Discover ToodyIT, a leading web solutions provider specializing in tailored websites to meet your unique needs. Our expert team delivers innovative designs, seamless development, and strategic solutions for your online success."
        )}
      />
      <WebLine innerClassName="flex flex-col">
        <Title type="h1">
          <Trans
            i18nKey="ABOUT<span>US</span>"
            components={{
              span: <span className="text-greyLight"></span>,
            }}
          />
        </Title>
        <Title type="h3" className="text-primary">
          {t("Experience")}
        </Title>
        <span className="vl:text-xl vl:pb-10 pb-5">
          {t(
            "We explore with you an overview of the most significant things we have achieved for our We explore with you an overview of the most significant things we have achieved for our customers in recent months. We explore with you an overview of the most significant things we have achieved for our customers in recent months. customers in recent months."
          )}
        </span>

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
        <Title className="text-right text-primary" type="h3">
          {t("Experience")}
        </Title>
        <span className="text-right vl:text-xl">
          {t(
            "We explore with you an overview of the most significant things we have achieved for our We explore with you an overview of the most significant things we have achieved for our customers in recent months. We explore with you an overview of the most significant things we have achieved for our customers in recent months. customers in recent months."
          )}
        </span>
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
