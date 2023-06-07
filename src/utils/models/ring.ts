import {
  AmbientLight,
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
  circleModelWrapper: HTMLElement,
  dimensionValues: DimensionValues
) => {
  const scene = new Scene();

  const camera = new PerspectiveCamera(
    60,
    circleModelWrapper.offsetWidth / circleModelWrapper.offsetHeight,
    0.5,
    1000
  );
  camera.position.setX(dimensionValues.x);
  camera.position.setY(dimensionValues.y);
  camera.position.setZ(dimensionValues.z);

  const renderer = new WebGLRenderer({
    canvas: circleModelWrapper,
    alpha: true,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(
    circleModelWrapper.offsetWidth,
    circleModelWrapper.offsetHeight
  );

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

  return { ring, scene, renderer, camera };
};

export default generateRingModel;
