import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeaderMenu from "../components/Header/HeaderMenu";
import Layout from "../components/Layout/Layout";
import LayoutInner from "../components/Layout/LayoutInner";
import Overlay from "../components/Overlay/Overlay";
import Pagination, {
  PaginationItemProps,
} from "../components/Pagination/Pagination";
import useModel from "../hooks/useModel";
import useWheelStopListener from "../hooks/useWheelStopListener";

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
  const circleModelRef = useRef<HTMLCanvasElement>(null);
  useModel(circleModelRef);

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
    <Layout>
      <AnimatePresence>
        {activeSection === "header" && <HeaderMenu key="header" />}
        <Overlay
          isOpen={activeSection !== "main"}
          onClose={() => setActiveSection("main")}
          key="overlay"
        />
        <LayoutInner>
          <Header />
          <motion.div
            key="main"
            initial={{ y: 0 }}
            animate={{
              y:
                (activeSection === "header" && 208) ||
                (activeSection === "footer" && -208) ||
                (activeSection === "main" && 0),
            }}
            className="h-full flex flex-col"
          >
            <a href="/services" className="h-full flex flex-col">
              <canvas
                ref={circleModelRef}
                className="w-full h-full relative"
                id="ring"
              />
            </a>
            <Pagination
              items={PAGINATION_ITEMS}
              setActiveState={setActiveSection}
              activeState={activeSection}
            />
          </motion.div>
        </LayoutInner>
        {activeSection === "footer" && <Footer key="footer" />}
      </AnimatePresence>
    </Layout>
  );
};

export default HomePage;
