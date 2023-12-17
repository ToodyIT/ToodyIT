import { motion } from "framer-motion";
import { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import Overlay from "../components/Overlay/Overlay";

import useWheelStopListener from "../hooks/useWheelStopListener";
import Link from "next/link";
import { Meta } from "../components/Meta/Meta";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useHomepageOpenSectionContext } from "../utils/HomepageOpenSectionContext";
import useScrollDirection from "../hooks/useScrollDirection";
import { gtag } from "ga-gtag";
import { Icon } from "../components/Icons/Icon";
import { Footer } from "../components/Footer/Footer";
import { ArrowIcon } from "../components/Icons/Icons";

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
      <div
        className="bg-grey w-full overflow-hidden flex flex-col relative"
        id="homepage-wrapper"
      >

        <div className="mx-auto flex flex-col h-full w-full">
          <motion.section
            initial={{ y: "-50%", x: "50%" }}
            animate={openedSection}
            variants={{
              footer: { y: -290 },
              main: { y: "-50%", x: "50%" },
              header: { y: "-50%", x: "50%" },
            }}
            className="absolute top-1/3 translate-x-1/2 -translate-y-1/2 right-1/4 z-20"
          >
            <Icon
              src={ArrowIcon}
              className="text-white size-32 vl:size-40 rotate-[250deg]"
            />
          </motion.section>
          <Overlay
            isOpen={openedSection !== "main"}
            onClose={() => setOpenedSection("main")}
            key="overlay"
          />
          <div className="flex flex-col h-full w-full z-10">
            <motion.section
              initial={{ y: "-50%" }}
              animate={openedSection}
              variants={{
                footer: { y: -290 },
                main: { y: "-50%" },
                header: { y: "-50%" },
              }}
              className="flex whitespace-nowrap gap-10 absolute top-1/2"
            >
              <div className="list">
                <div className="item">
                  <h1 className="text-7xl z-10 vl:text-9xl tracking-wider">
                    We are helping to grow your business
                  </h1>
                </div>
              </div>
              <div className="list">
                <div className="item">
                  <span className="text-7xl vl:text-9xl tracking-wider">
                    We are helping to grow your business
                  </span>
                </div>
              </div>
            </motion.section>
            <Link
              onClick={() => {
                gtag("event", "click_on_ring", { event_name: "click_on_ring" });
              }}
              href={{
                pathname: "/process",
                query: {
                  order: 1,
                },
              }}
              className="flex h-full w-full z-10 relative"
            />
          </div>
        </div>
        <Footer key="footer" />
      </div>
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
