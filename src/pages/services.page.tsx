import { forwardRef } from "react";
import Image from "next/image";
import SlideAnimationLayout from "../components/Layout/SlideAnimationLayout";

const SERVICES = [
  {
    title: "Обсуждение требований",
  },
  {
    title: "Создание дизайна",
  },
  {
    title: "Наполнение материалом",
  },
  {
    title: "Разработка сайта",
  },
  {
    title: "Добавление аналитики",
  },
  {
    title: "Тестировка сайта",
  },
  {
    title: "Выпуск сайта",
  },
];

const ServicesPage = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <SlideAnimationLayout ref={ref}>
      <div className="flex flex-col gap-7">
        <h2 className="text-white text-3xl flex text-center">
          <strong>РАЗРАБОТКА НОВОГО САЙТА</strong>
        </h2>
        <div className=" flex flex-col gap-4 w-screen h-screen mb-36">
          {SERVICES.map((section) => (
            <div
              className="bg-neutral-800 flex justify-between items-center w-2/3 h-[79] gap-4 pr-5 rounded-2xl"
              key={section.title}
            >
              <div className="flex items-center gap-7">
                <Image
                  src="/img/green-line.svg"
                  alt="logo"
                  width="12"
                  height="79"
                />
                <div className="text-white flex text-xl">{section.title}</div>
              </div>
              <div className="flex">
                <div className="text-primary flex" />
                <Image
                  src="/img/Arrow.svg"
                  alt="arrow"
                  width="20"
                  height="20"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideAnimationLayout>
  );
});

export default ServicesPage;
