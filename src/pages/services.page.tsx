import { FC } from "react";
import LayoutMain from "../components/Layout/LayoutMain";
import Image from "next/image";

interface ServicesPageProps {}

const ServicesPage: FC<ServicesPageProps> = ({}) => {
  return (
    <LayoutMain>
      <div className="flex flex-col gap-7 pl-40">
        <h2 className="text-white text-3xl flex text-center  pt-8">
          <strong>РАЗРАБОТКА НОВОГО САЙТА</strong>
        </h2>
        <div className=" flex flex-col gap-4 w-screen h-screen justify-between mb-36">
          <button className="bg-neutral-800 flex justify-between items-center w-2/3 h-full gap-4 pr-5 rounded-2xl">
            <Image
              src="/img/green-line.svg"
              alt="logo"
              width="12"
              height="79"
            />
            <div className="text-white flex text-xl">Обсуждение требований</div>
            <div className="text-primary flex" />
            <Image src="/img/Arrow.svg" alt="arrow" width="20" height="20" />
          </button>
          <button className="bg-neutral-800 flex justify-between items-center w-2/3 h-full gap-4 pr-5 rounded-2xl">
            <Image
              src="/img/green-line.svg"
              alt="logo"
              width="12"
              height="79"
            />
            <div className="text-white flex text-xl">Создание дизайна</div>
            <div className="text-primary flex" />
            <Image src="/img/Arrow.svg" alt="arrow" width="20" height="20" />
          </button>
          <button className="bg-neutral-800 flex justify-between items-center w-2/3 h-full gap-4 pr-5 rounded-2xl">
            <Image
              src="/img/green-line.svg"
              alt="logo"
              width="12"
              height="79"
            />
            <div className="text-white flex text-xl">Наполнение материалом</div>
            <div className="text-primary flex" />
            <Image src="/img/Arrow.svg" alt="arrow" width="20" height="20" />
          </button>
          <button className="bg-neutral-800 flex justify-between items-center w-2/3 h-full gap-4 pr-5 rounded-2xl">
            <Image
              src="/img/green-line.svg"
              alt="logo"
              width="12"
              height="79"
            />
            <div className="text-white flex text-xl">Разработка сайта</div>
            <div className="text-primary flex" />
            <Image src="/img/Arrow.svg" alt="arrow" width="20" height="20" />
          </button>
          <button className="bg-neutral-800 flex justify-between items-center w-2/3 h-full gap-4 pr-5 rounded-2xl">
            <Image
              src="/img/green-line.svg"
              alt="logo"
              width="12"
              height="79"
            />
            <div className="text-white flex text-xl">Добавление аналитики</div>
            <div className="text-primary flex" />
            <Image src="/img/Arrow.svg" alt="arrow" width="20" height="20" />
          </button>
          <button className="bg-neutral-800 flex justify-between items-center w-2/3 h-full gap-4 pr-5 rounded-2xl">
            <Image
              src="/img/green-line.svg"
              alt="logo"
              width="12"
              height="79"
            />
            <div className="text-white flex text-xl">Тестировка сайта</div>
            <div className="text-primary flex" />
            <Image src="/img/Arrow.svg" alt="arrow" width="20" height="20" />
          </button>
          <button className="bg-neutral-800 flex justify-between items-center w-2/3 h-full gap-4 pr-5 rounded-2xl">
            <Image
              src="/img/green-line.svg"
              alt="logo"
              width="12"
              height="79"
            />
            <div className="text-white flex text-xl">Выпуск сайта</div>
            <div className="text-primary flex" />
            <Image src="/img/Arrow.svg" alt="arrow" width="20" height="20" />
          </button>
        </div>
      </div>
    </LayoutMain>
  );
};

export default ServicesPage;
