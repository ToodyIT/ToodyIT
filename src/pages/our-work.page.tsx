import { forwardRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import SlideAnimationLayout from "../components/Layout/SlideAnimationLayout";

const OurWorkPage = forwardRef<HTMLDivElement>((_, ref) => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });

  return (
    <SlideAnimationLayout ref={ref}>
      <div className="flex flex-col gap-7">
        <h2 className="text-white text-3xl flex text-center">
          <strong>ПОСЛЕДНИИ РАБОТЫ</strong>
        </h2>
        <div
          className="relative max-h-[600px] h-full w-full cursor-pointer overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex flex-row gap-20 h-full">
            <div className="h-full w-[600px] bg-red-500"></div>
            <div className="h-full w-[600px] bg-red-500"></div>
            <div className="h-full w-[600px] bg-red-500"></div>
            <div className="h-full w-[600px] bg-red-500"></div>
          </div>
        </div>
      </div>
    </SlideAnimationLayout>
  );
});

export default OurWorkPage;
