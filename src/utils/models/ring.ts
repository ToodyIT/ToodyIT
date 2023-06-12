import {
  AmbientLight,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  TorusGeometry,
  WebGLRenderer,
} from "three";

const RING_COLOR = 0x1c401f;

export type DimensionValues = {
  y: number;
  x: number;
  z: number;
};

const generateRingModel = (
  canvasElementRef: HTMLElement,
  dimensionValues: DimensionValues
) => {
  const scene = new Scene();
  const windowWidth = window.innerWidth;
  const fovMin = 105; // Minimum FOV value
  const fovMax = 60; // Maximum FOV value
  const windowWidthMin = 360; // Minimum window width
  const windowWidthMax = 2000; // Maximum window width

  // Calculate the interpolated FOV value
  const fov =
    fovMin +
    ((windowWidth - windowWidthMin) / (windowWidthMax - windowWidthMin)) *
      (fovMax - fovMin);

  const camera = new PerspectiveCamera(
    fov,
    canvasElementRef.offsetWidth / canvasElementRef.offsetHeight,
    0.5,
    1000
  );
  camera.position.setX(dimensionValues.x);
  camera.position.setY(dimensionValues.y);
  camera.position.setZ(dimensionValues.z);

  const renderer = new WebGLRenderer({
    canvas: canvasElementRef,
    alpha: true,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvasElementRef.offsetWidth, canvasElementRef.offsetHeight);

  const geometry = new TorusGeometry(12.2, 4.4, 16, 100);
  const material = new MeshStandardMaterial({
    color: RING_COLOR,
  });
  const ring = new Mesh(geometry, material);

  scene.background = null;
  const pointLight = new PointLight(0xffffff, 1.5);
  const ambientLight = new AmbientLight(0xffffff);
  pointLight.position.set(12, 12, 15);

  scene.add(pointLight, ambientLight, ring);
  scene.background = null;
  renderer.setClearColor(0x000000, 0);

  const cameraGroup = new Group();
  cameraGroup.add(camera);
  scene.add(cameraGroup);

  return { ring, scene, renderer, camera, cameraGroup };
};

export default generateRingModel;
