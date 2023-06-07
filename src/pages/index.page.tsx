import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeaderMenu from "../components/Header/HeaderMenu";
import Overlay from "../components/Overlay/Overlay";
import Pagination, {
  PaginationItemProps,
} from "../components/Pagination/Pagination";
import useModel from "../hooks/useModel";
import useWheelStopListener from "../hooks/useWheelStopListener";
import Link from "next/link";

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
  useModel(circleModelRef, { x: 0, y: 0, z: 30 });
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
    <motion.div
      initial={{ scale: 5 }}
      animate={{ scale: 1 }}
      exit={{ scale: 5 }}
      key="homepage"
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <div className="bg-neutral-900 w-full h-screen flex flex-col overflow-hidden relative">
        <AnimatePresence>
          {activeSection === "header" && <HeaderMenu key="header" />}
          <Overlay
            isOpen={activeSection !== "main"}
            onClose={() => setActiveSection("main")}
            key="overlay"
          />
          <div className="mx-auto px-32 h-full flex flex-col">
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
              <Link
                href={{
                  pathname: "/services",
                  query: {
                    order: 1,
                  },
                }}
                className="h-full flex flex-col"
              >
                <canvas
                  ref={circleModelRef}
                  className="w-full h-full relative"
                  id="ring"
                />
              </Link>
              <Pagination
                items={PAGINATION_ITEMS}
                setActiveState={setActiveSection}
                activeState={activeSection}
              />
            </motion.div>
          </div>
          {activeSection === "footer" && <Footer key="footer" />}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default HomePage;
