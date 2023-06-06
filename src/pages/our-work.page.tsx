import { FC } from "react";
import LayoutMain from "../components/Layout/LayoutMain";
// import useEmblaCarousel from "embla-carousel-react/components/useEmblaCarousel";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

interface OurWorkPageProps {}

const OurWorkPage: FC<OurWorkPageProps> = ({}) => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });

  return (
    <motion.div
      // initial={{ rotate: 180 }}
      // animate={{ rotate: 0 }}
      // exit={{ rotate: 180 }}
      key="services"
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <LayoutMain>
        <div className="flex flex-col gap-7">
          <h2 className="text-white text-3xl flex text-center">
            <strong>ПОСЛЕДНИИ РАБОТЫ</strong>
          </h2>
          <div
            className="relative max-h-[600px] h-full w-full cursor-pointer overflow-hidden"
            ref={emblaRef}
          >
            <div className="flex flex-row gap-20 h-full">
              <div className="h-full w-[600px] bg-red-500"></div>
              <div className="h-full w-[600px] bg-red-500"></div>
              <div className="h-full w-[600px] bg-red-500"></div>
              <div className="h-full w-[600px] bg-red-500"></div>
            </div>
          </div>
        </div>
      </LayoutMain>
    </motion.div>
  );
};

export default OurWorkPage;
