import { RefObject, useEffect } from "react";
import generateRingModel, { DimensionValues } from "../utils/models/ring";

const useModel = (
  modelWrapperRef: RefObject<HTMLElement>,
  dimensionValues: DimensionValues
) => {
  useEffect(() => {
    if (!modelWrapperRef.current) return;

    const { renderer, camera, scene } = generateRingModel(
      modelWrapperRef.current,
      dimensionValues
    );

    const animateModel = () => {
      renderer.render(scene, camera);
    };

    animateModel();
    window.addEventListener("resize", animateModel, true);

    return () => {
      window.removeEventListener("resize", animateModel);
    };
  }, [modelWrapperRef.current]);
};

export default useModel;
