import { forwardRef } from "react";
import SlideAnimationLayout from "../components/Layout/SlideAnimationLayout";
import Image from "next/image";

const AboutUsPage = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <SlideAnimationLayout ref={ref}>
      <div className="flex flex-col gap-6 lg:gap-10">
        <h2 className="text-white text-4xl flex text-center">
          <strong>О НАС</strong>
        </h2>
        <div className="flex flex-col gap-8 lg:gap-20 max-w-[800px] relative">
          <div className="flex flex-col text-white gap-3 lg:pl-10">
            <strong className="text-3xl">Our mission</strong>
            <span className="text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
              Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
              lacus, fermentum arcu.
              <br />
              <br />
              Vulputate pellentesque proin facilisis dignissim gravida sed
              faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
              nisl, in quis nulla tellus suscipit id. Semper velit odio cras
              pretium tristique habitant. Elit eu penatibus congue orci turpis.
              Enim diam id.
            </span>
          </div>
          <Image
            className="lg:absolute lg:top-[200px] lg:translate-x-1/2 w-4/5 flex self-end max-w-[402px]"
            src="/img/planet.png"
            alt="planet"
            width="402"
            height="402"
          />
          <div className="flex flex-col text-white gap-3 lg:pl-10">
            <strong className="text-3xl">Our story</strong>
            <span className="text-xl relative">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
              Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
              lacus, fermentum arcu.
            </span>
          </div>
        </div>
      </div>
    </SlideAnimationLayout>
  );
});

export default AboutUsPage;
