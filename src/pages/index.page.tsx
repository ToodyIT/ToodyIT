import { NextPage } from "next";
import { useEffect, useRef } from "react";
import Layout from "../components/Layout/Layout";
import generateRingModel from "../utils/models/ring";

const HomePage: NextPage = () => {
  const circleModelRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!circleModelRef.current) return;

    const { renderer, camera, scene } = generateRingModel(
      circleModelRef.current
    );

    const animateModel = () => {
      renderer.render(scene, camera);
    };

    animateModel();
    window.addEventListener("resize", animateModel, true);

    return () => {
      window.removeEventListener("resize", animateModel, true);
    };
  }, [circleModelRef.current]);

  return (
    <Layout>
      <canvas ref={circleModelRef} className="w-full h-full" />
    </Layout>
  );
};

export default HomePage;
