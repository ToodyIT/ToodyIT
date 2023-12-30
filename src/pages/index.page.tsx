import { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";

import useWheelStopListener from "../hooks/useWheelStopListener";
import { Meta } from "../components/Meta/Meta";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useHomepageOpenSectionContext } from "../utils/HomepageOpenSectionContext";
import useScrollDirection from "../hooks/useScrollDirection";

const HomePage: NextPage = () => {
  const { t } = useTranslation();
  const isStoppedScrolling = useWheelStopListener();
  const { openedSection, setOpenedSection } = useHomepageOpenSectionContext();
  const scrollDirection = useScrollDirection();
  useEffect(() => {
    if (!isStoppedScrolling) return;
  });

  return (
    <>
      <Meta
        metaTitle={t(
          "Welcome to ToodyIT - Your Destination for Exceptional Web Solutions"
        )}
        metaDescription={t(
          "Discover ToodyIT, a leading web solutions provider specializing in tailored websites to meet your unique needs. Our expert team delivers innovative designs, seamless development, and strategic solutions for your online success."
        )}
      />
    </>
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
