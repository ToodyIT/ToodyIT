import { forwardRef } from "react";
import SlideAnimationLayout from "../components/Layout/SlideAnimationLayout";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const AboutUsPage = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  return (
    <SlideAnimationLayout
      ref={ref}
      metaTitle={t("About Us")}
      metaDescription={t("")}
    >
      <div className="flex flex-col gap-6 lg:gap-10">
        <h1 className="text-white font-bold text-4xl flex text-center">
          {t("ABOUT US")}
        </h1>
        <div className="flex flex-col gap-8 lg:gap-14 max-w-[800px] relative">
          <div className="flex flex-col text-white gap-3 lg:pl-10">
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
            src="/img/planet.png"
            alt="planet"
            width="402"
            height="402"
          />
          <div className="flex flex-col text-white gap-3 lg:pl-10">
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
      </div>
    </SlideAnimationLayout>
  );
});

export default AboutUsPage;
