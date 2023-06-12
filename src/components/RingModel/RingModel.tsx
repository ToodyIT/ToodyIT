import { FC, memo, useMemo, useRef } from "react";
import useModel from "../../hooks/useModel";
import { useRouter } from "next/router";
import { isServer } from "../../utils/isServer";
import { useHomepageOpenSectionContext } from "../../utils/HomepageOpenSectionContext";
import { motion } from "framer-motion";

export const RingModel: FC = memo(() => {
  const router = useRouter();
  const initialRoute = useMemo(() => router.asPath, []);
  const { openedSection } = useHomepageOpenSectionContext();

  const canvasElementRef = useRef<HTMLCanvasElement | null>(null);
  const getZoom = () => {
    if (isServer()) return;
    const windowWidth = window.innerWidth;
    const fovMin = 1.5; // Minimum FOV value
    const fovMax = 4.5; // Maximum FOV value
    const windowWidthMin = 700; // Minimum window width
    const windowWidthMax = 1500; // Maximum window width
    const fov =
      fovMin +
      ((windowWidth - windowWidthMin) / (windowWidthMax - windowWidthMin)) *
        (fovMax - fovMin);

    return fov;
  };

  useModel(canvasElementRef, {
    x: initialRoute === "/" ? 0 : 2,
    y: 0,
    z: initialRoute === "/" ? 30 : getZoom(),
  });

  return (
    <motion.canvas
      initial={{ y: 0 }}
      animate={openedSection}
      variants={{
        footer: { y: -200 },
        main: { y: 0 },
        header: { y: 140 },
      }}
      ref={canvasElementRef}
      id="ring"
      className="w-full h-full top-0 absolute !bg-transparent pointer-events-none"
    />
  );
});
