import { forwardRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SlideAnimationLayout from "../components/Layout/SlideAnimationLayout";

const OUR_WORKS = [
  {
    imagePath: "maria-poljanszska.png",
    name: "BUSINESS CARD",
    title: "Хороший сайт для развития самого себя",
    description:
      "Сделали сайт быстро и не дорого, добавили все что хотел клиент, дизайн не сложный и уникален.",
    customer: "MARIA POLJANSZKA",
    date: "ДЕКАБЕРЬ 16, 2023",
  },
  {
    imagePath: "maria-poljanszska.png",
    name: "BUSINESS CARD",
    title: "Хороший сайт для развития самого себя",
    description:
      "Сделали сайт быстро и не дорого, добавили все что хотел клиент, дизайн не сложный и уникален.",
    customer: "MARTA HNATOJKO",
    date: "НОЯБРЬ 21, 2022",
  },
  {
    imagePath: "maria-poljanszska.png",
    name: "WORK SITE",
    title: "Хороший сайт для развития самого себя",
    description:
      "Сделали сайт быстро и не дорого, добавили все что хотел клиент, дизайн не сложный и уникален.",
    customer: "SALON KRASY KWHITE",
    date: "АПРЕЛЬ 24, 2023",
  },
];
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
          <div className="flex flex-row gap-20 h-full ">
            {OUR_WORKS.map((work) => (
              <div
                className="h-5/6 w-[300px] lg:w-[382px] flex flex-col rounded-3xl bg-grey-800"
                key={work.title}
              >
                <Image
                  src={`/img/our-works/${work.imagePath}`}
                  alt="image"
                  width="382"
                  height="215"
                  className="rounded-t-3xl"
                />
                <div className="bg-primary w-36 h-9 flex rounded-3xl pt-1 -translate-y-1/2 ml-9 justify-center">
                  {work.name}
                </div>
                <div className="flex flex-col px-6 pb-6 gap-7">
                  <span className="font-bold">{work.title}</span>
                  <span>{work.description}</span>
                  <div className="bg-primary w-full h-[1px]" />
                  <div className="flex flex-col">
                    <span className="font-bold">{work.customer}</span>
                    <span>{work.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideAnimationLayout>
  );
});

export default OurWorkPage;
