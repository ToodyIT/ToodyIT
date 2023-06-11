import { FC, memo, useMemo, useRef } from "react";
import useModel from "../../hooks/useModel";
import { useRouter } from "next/router";

export const RingModel: FC = memo(() => {
  const router = useRouter();
  const initialRoute = useMemo(() => router.asPath, []);

  const canvasElementRef = useRef<HTMLCanvasElement | null>(null);
  useModel(canvasElementRef, {
    x: initialRoute === "/" ? 0 : 2,
    y: 0,
    z: initialRoute === "/" ? 30 : 7,
  });

  return (
    <canvas
      ref={canvasElementRef}
      id="ring"
      className="w-full h-full top-0 absolute !bg-transparent pointer-events-none"
    />
  );
});
