import { motion } from "framer-motion";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import HomepageHeader from "../components/HomepageHeader/HomepageHeader";
import HomepageHeaderMenu from "../components/HomepageHeader/HomepageHeaderMenu";
import Overlay from "../components/Overlay/Overlay";
import Pagination, {
  PaginationItemProps,
} from "../components/Pagination/Pagination";
import useWheelStopListener from "../hooks/useWheelStopListener";
import Link from "next/link";
import { Meta } from "../components/Meta/Meta";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const PAGINATION_ITEMS: Array<PaginationItemProps> = [
  {
    id: "header",
    value: "header",
  },
  {
    id: "main",
    value: "main",
  },
  {
    id: "footer",
    value: "footer",
  },
];

const HomePage: NextPage = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<
    "header" | "main" | "footer"
  >("main");

  const isStoppedScrolling = useWheelStopListener();

  const handleWheel = (e: WheelEvent) => {
    if (!isStoppedScrolling) return;

    if (e.deltaY < 0) {
      if (activeSection === "footer") {
        setActiveSection("main");
      } else {
        setActiveSection("header");
      }
    } else if (e.deltaY > 0) {
      if (activeSection === "header") {
        setActiveSection("main");
      } else {
        setActiveSection("footer");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, true);

    return () => {
      window.removeEventListener("wheel", handleWheel, true);
    };
  }, [isStoppedScrolling]);

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
      <div className="bg-neutral-900 w-full h-screen overflow-hidden flex flex-col relative">
        {activeSection === "header" && <HomepageHeaderMenu key="header" />}
        <Overlay
          isOpen={activeSection !== "main"}
          onClose={() => setActiveSection("main")}
          key="overlay"
        />
        <div className="mx-auto flex flex-col h-full w-full">
          <HomepageHeader />
          <motion.div
            key="main"
            initial={{ y: 0 }}
            animate={{
              y:
                (activeSection === "footer" && -300) ||
                ((activeSection === "main" || activeSection === "header") && 0),
            }}
            className="flex flex-col h-full w-full z-20"
          >
            {/* <motion.span
                  initial={{ x: "0", y: "-15%" }}
                  animate={{ x: "-210%", y: "-15%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "linear",
                  }}
                  className="absolute top-1/2 text-[170px] whitespace-nowrap w-screen"
                >
                  WE ARE HELPING TO GROW BUSINESS
                </motion.span>
                <motion.span
                  initial={{ x: "210%", y: "-15%" }}
                  animate={{ x: "0", y: "-15%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "linear",
                  }}
                  className="absolute top-1/2 text-[170px] whitespace-nowrap w-screen"
                >
                  WE ARE HELPING TO GROW BUSINESS
                </motion.span> */}
            <Link
              href={{
                pathname: "/services",
                query: {
                  order: 1,
                },
              }}
              className="flex flex-col flex-center h-full w-full"
            >
              {/* <canvas
                  ref={canvasElementRef}
                  className="portrait:w-[calc(100vw-180px)] landscape:h-[calc(100vh-200px)] aspect-square relative max-w-7xl"
                /> */}
            </Link>
            <Pagination
              items={PAGINATION_ITEMS}
              setActiveState={setActiveSection}
              activeState={activeSection}
            />
          </motion.div>
        </div>
        {activeSection === "footer" && <Footer key="footer" />}
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default HomePage;
