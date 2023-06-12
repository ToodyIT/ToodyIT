import { forwardRef } from "react";
import SlideAnimationLayout from "../components/Layout/SlideAnimationLayout";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BlurredDecoration } from "../components/BlurredDecoration/BlurredDecoration";
import Planet from "/public/img/planet.png";

const AboutUsPage = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  return (
    <SlideAnimationLayout
      ref={ref}
      metaTitle={t("About Us")}
      metaDescription={t(
        "Learn about our company and our mission to provide exceptional web solutions. Discover our goal of delivering innovative and tailored websites that meet the unique needs of our clients. With our expertise and dedication, we aim to exceed expectations and establish long-lasting partnerships."
      )}
    >
      <BlurredDecoration className="lg:-left-64 lg:bottom-96" />
      <div className="flex flex-col gap-7 lg:gap-10">
        <h1 className="text-white font-bold text-4xl flex text-center">
          {t("ABOUT US")}
        </h1>
        <div className="flex flex-col gap-8 lg:gap-14 max-w-[800px] lg:h-screen relative">
          <div className="flex flex-col text-white gap-3">
            <h2 className="font-bold text-3xl">{t("Our mission")}</h2>
            <p className="text-base lg:text-base">
              {t(
                "Our mission as a custom website development company is to provide high-quality web solutions that help our clients bring their ideas to life and achieve success in the online space. We strive to create unique, intuitive, and functional websites that are not only visually appealing but also effectively serve the goals of our clients."
              )}
              <br />
              <br />
              {t(
                "We recognize that each client is unique and has specific needs. Therefore, we pay special attention to engaging with our clients to fully understand their business, objectives, and values. We build long-term partnerships based on trust, transparency, and collaboration."
              )}
              <br />
              <br />
              {t(
                "Our team consists of experienced and creative professionals who are proficient in modern web technologies and best practices. We continuously enhance our skills and stay up-to-date with the latest trends in the web industry to remain at the forefront of technological progress."
              )}
            </p>
          </div>
          <Image
            className="lg:absolute lg:top-[200px] lg:translate-x-1/2 w-4/5 flex self-end max-w-[402px]"
            src={Planet}
            alt="planet"
          />
          <div className="flex flex-col text-white gap-3 ">
            <h2 className="font-bold text-3xl">{t("Our goal")}</h2>
            <p className="text-base relative">
              {t(
                "Our goal is not only to create a website but also to help our clients succeed in the online world. We offer tailored solutions that meet the needs of each client and provide support and maintenance after the project's launch."
              )}
              <br />
              <br />
              {t(
                "We strive for consistent quality, innovation, and excellence in everything we do. Our mission is to assist our clients in standing out among competitors, creating appealing and effective websites that help them achieve their business objectives and succeed in the online realm."
              )}
            </p>
          </div>
        </div>
        <BlurredDecoration className="right-2 lg:bottom-1 -bottom-10" />
      </div>
    </SlideAnimationLayout>
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
