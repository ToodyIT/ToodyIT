import { NextRouter } from "next/router";
import { Group, PerspectiveCamera } from "three";
import { getQueryParamsFromUrl } from "../getQueryParamsFromUrl";

export const ringZoomAnimation = (
  destinationOfRedirect: string,
  previousRouter: NextRouter,
  camera: PerspectiveCamera,
  animationId: number,
  zoom: number
) => {
  if (destinationOfRedirect === "/") {
    if (camera.position.z < 30) {
      camera.position.z += 0.35;
    }

    if (camera.position.x > 0) {
      camera.position.x -= 0.05;
    }
  } else {
    if (camera.position.z > zoom) {
      camera.position.z -= 0.35;
    }

    if (camera.position.x < 2) {
      camera.position.x += 0.05;
    }
  }

  if (destinationOfRedirect === "/") {
    if (camera.position.z >= 30 && camera.position.x <= 0) {
      cancelAnimationFrame(animationId);
    }
  } else {
    if (camera.position.z <= zoom && camera.position.x >= 2) {
      cancelAnimationFrame(animationId);
    }
  }
};

let cameraGroupRotationZ = 0;

export const ringRotateAnimation = (
  cameraGroup: Group,
  animationId: number,
  currentRouter: NextRouter,
  previousRouter: NextRouter
) => {
  const previousOrderQuery = getQueryParamsFromUrl(previousRouter?.asPath).get(
    "order"
  );
  const currentOrderQuery = getQueryParamsFromUrl(currentRouter?.asPath).get(
    "order"
  );

  if (previousOrderQuery === null || currentOrderQuery === null) {
    cancelAnimationFrame(animationId);
    return;
  }
  const previousOrderQueryValue = parseFloat(previousOrderQuery);
  const currentOrderQueryValue = parseFloat(currentOrderQuery);

  if (previousOrderQueryValue > currentOrderQueryValue) {
    if (cameraGroup.rotation.z < cameraGroupRotationZ + 5) {
      cameraGroup.rotation.z += 0.03;
    } else {
      cameraGroupRotationZ += 5;

      cancelAnimationFrame(animationId);
    }
  } else {
    if (cameraGroup.rotation.z > cameraGroupRotationZ - 5) {
      cameraGroup.rotation.z -= 0.03;
    } else {
      cameraGroupRotationZ -= 5;
      cancelAnimationFrame(animationId);
    }
  }
};
