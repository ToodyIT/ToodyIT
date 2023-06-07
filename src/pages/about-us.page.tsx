import { forwardRef } from "react";
import LayoutMain from "../components/Layout/LayoutMain";
import Image from "next/image";

const AboutUsPage = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <LayoutMain ref={ref}>
      <div className="flex flex-col gap-10">
        <h2 className="text-white text-4xl flex text-center">
          <strong>О НАС</strong>
        </h2>
        <div className="flex flex-col gap-32 ">
          <div className="flex flex-col text-white gap-3 w-1/2 px-10">
            <strong className="text-3xl">Our mission</strong>
            <span className="text-xl">
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
          <div className="flex flex-col text-white gap-3 w-1/2 px-10">
            <strong className="text-3xl">Our story</strong>
            <span className="text-xl relative">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
              Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
              lacus, fermentum arcu.
              <Image
                className="absolute top-1/3 right-0 translate-x-2/3 -translate-y-1/3"
                src="/img/planet.png"
                alt="planet"
                width="502"
                height="485"
              />
            </span>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
});

export default AboutUsPage;
