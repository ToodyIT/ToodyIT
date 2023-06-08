import { FC, ReactNode, useRef } from "react";
import useModel from "../../hooks/useModel";
import { Navigation } from "../Navigation/Navigation";

interface LayoutMainProps {
  children: ReactNode;
}

const LayoutMain: FC<LayoutMainProps> = ({ children }) => {
  const circleModelRef = useRef<HTMLCanvasElement>(null);
  useModel(circleModelRef, { x: 2, y: 0, z: 7 });

  return (
    <div className="w-full">
      <div
        className="bg-neutral-900 w-full lg:h-screen flex flex-col lg:flex-row lg:overflow-hidden relative gap-4 lg:gap-16 lg:py-10 px-5 pb-4"
        id="innerElement"
      >
        <Navigation />
        {children}
      </div>
      {/* <motion.div
        initial={{ rotate: 180 }}
        animate={{ rotate: 0 }}
        exit={{ rotate: 180 }}
        key="services"
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      > */}
      <canvas
        ref={circleModelRef}
        className="w-full h-full top-0 absolute !bg-transparent pointer-events-none"
        id="ring"
      />
      {/* </motion.div> */}
    </div>
  );
};

export default LayoutMain;
