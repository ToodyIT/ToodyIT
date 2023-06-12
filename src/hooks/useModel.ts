import { RefObject, useEffect, useMemo } from "react";
import generateRingModel, { DimensionValues } from "../utils/models/ring";
import { useRouter } from "next/router";
import { usePreviousRouter } from "./usePreviousRouter";
import {
  ringZoomAnimation,
  ringRotateAnimation,
} from "../utils/models/ringAnimations";
import { isServer } from "../utils/isServer";

const useModel = (
  modelWrapperRef: RefObject<HTMLElement>,
  dimensionValues: DimensionValues
) => {
  const router = useRouter();
  const previousRouter = usePreviousRouter();

  const { ring, renderer, camera, scene, cameraGroup } = useMemo(() => {
    if (!isServer()) {
      return generateRingModel(
        document.querySelector("#ring")!,
        dimensionValues
      );
    }

    return {
      ring: null,
      renderer: null,
      camera: null,
      scene: null,
      cameraGroup: null,
    };
  }, [modelWrapperRef.current, isServer]);

  useEffect(() => {
    if (
      !modelWrapperRef.current ||
      !ring ||
      !renderer ||
      !camera ||
      !scene ||
      !cameraGroup
    )
      return;

    renderer.render(scene, camera);

    let animationId;
    const animateModel = (destinationOfRedirect: string) => {
      animationId = requestAnimationFrame(() => {
        animateModel(destinationOfRedirect);
      });

      if (!previousRouter) {
        cancelAnimationFrame(animationId);
        return;
      }

      if (previousRouter.asPath === "/" || destinationOfRedirect === "/") {
        ringZoomAnimation(destinationOfRedirect, camera, animationId);
      } else {
        ringRotateAnimation(cameraGroup, animationId, router, previousRouter);
      }

      renderer.render(scene, camera);
    };

    const handleRouteChangeComplete = (destinationOfRedirect: string) => {
      animateModel(destinationOfRedirect);
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [previousRouter, ring, renderer, camera, scene, cameraGroup, isServer]);
};

export default useModel;
