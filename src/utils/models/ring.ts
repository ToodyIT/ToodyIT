import {
  AmbientLight,
  Color,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  PointLightHelper,
  Scene,
  TorusGeometry,
  WebGLRenderer,
} from "three";

const generateRingModel = (circleModelWrapper: HTMLElement) => {
  const scene = new Scene();

  const camera = new PerspectiveCamera(
    60,
    circleModelWrapper.offsetWidth / circleModelWrapper.offsetHeight,
    0.5,
    1000
  );
  camera.position.setZ(30);

  const renderer = new WebGLRenderer({
    canvas: circleModelWrapper,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(
    circleModelWrapper.offsetWidth,
    circleModelWrapper.offsetHeight
  );

  const geometry = new TorusGeometry(10, 3.2, 16, 100);
  const material = new MeshStandardMaterial({
    color: 0x1c401f,
  });
  const ring = new Mesh(geometry, material);
  scene.background = null;
  const pointLight = new PointLight(0xffffff, 1.5);
  const ambientLight = new AmbientLight(0xffffff);
  pointLight.position.set(12, 12, 15);

  scene.add(pointLight, ambientLight, ring);
  scene.background = new Color(0x141414);

  return { ring, scene, renderer, camera };
};

export default generateRingModel;
