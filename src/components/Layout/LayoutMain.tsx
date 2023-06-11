import { FC, ReactNode } from "react";
import { Navigation } from "../Navigation/Navigation";
import { Meta } from "../Meta/Meta";

interface LayoutMainProps {
  children: ReactNode;
  metaTitle: string;
  metaDescription: string;
}

const LayoutMain: FC<LayoutMainProps> = ({
  children,
  metaTitle,
  metaDescription,
}) => {
  return (
    <>
      <Meta metaTitle={metaTitle} metaDescription={metaDescription} />
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
        {/* <canvas
        ref={canvasElementRef}
        className="w-full h-full top-0 absolute !bg-transparent pointer-events-none"
        id="ring"
      /> */}
        {/* </motion.div> */}
      </div>
    </>
  );
};

export default LayoutMain;
