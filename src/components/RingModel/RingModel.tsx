import { FC, memo, useMemo, useRef } from "react";
import useModel from "../../hooks/useModel";
import { useRouter } from "next/router";
import { isServer } from "../../utils/isServer";

export const RingModel: FC = memo(() => {
  const router = useRouter();
  const initialRoute = useMemo(() => router.asPath, []);

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
    <canvas
      ref={canvasElementRef}
      id="ring"
      className="w-full h-full top-0 absolute z-50 !bg-transparent pointer-events-none"
    />
    // className="w-full aspect-square max-w-[calc(100vw-40px)] left-1/2 -translate-x-1/2 top-[calc(50%+50px)] -translate-y-1/2 vl:max-w-[50vw] absolute !bg-transparent pointer-events-none"
  );
});
