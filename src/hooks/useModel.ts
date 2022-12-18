import { RefObject, useEffect } from "react";
import generateRingModel from "../utils/models/ring";

const useModel = (modelWrapperRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!modelWrapperRef.current) return;

    const { renderer, camera, scene } = generateRingModel(
      modelWrapperRef.current
    );

    const animateModel = () => {
      renderer.render(scene, camera);
    };

    animateModel();
    window.addEventListener("resize", animateModel, true);

    return () => {
      window.removeEventListener("resize", animateModel, true);
    };
  }, [modelWrapperRef.current]);
};

export default useModel;
