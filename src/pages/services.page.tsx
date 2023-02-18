import { FC } from "react";
import LayoutMain from "../components/Layout/LayoutMain";

interface ServicesPageProps {}

const ServicesPage: FC<ServicesPageProps> = ({}) => {
  return (
    <LayoutMain>
      <div className="flex flex-col gap-7 pl-40">
        <h2 className="text-white text-3xl flex text-center  pt-8">
          <strong>РАЗРАБОТКА НОВОГО САЙТА</strong>
        </h2>
        <div className=" flex flex-col gap-4">
          <button className="bg-neutral-800 flex justify-start items-center w-2/5 h-16 pl-5 rounded-2xl">
            <div className="text-white flex text-xl">Обсуждение требований</div>
            <div className="text-primary flex" />
          </button>
          <button className="bg-neutral-800 flex justify-start items-center w-2/5 h-16 pl-5 rounded-2xl">
            <div className="text-white flex text-xl">Создание дизайна</div>
            <div className="text-primary flex" />
          </button>
          <button className="bg-neutral-800 flex justify-start items-center w-2/5 h-16 pl-5 rounded-2xl">
            <div className="text-white flex text-xl">Наполнение материалом</div>
            <div className="text-primary flex" />
          </button>
          <button className="bg-neutral-800 flex justify-start items-center w-2/5 h-16 pl-5 rounded-2xl">
            <div className="text-white flex text-xl">Разработка сайта</div>
            <div className="text-primary flex" />
          </button>
          <button className="bg-neutral-800 flex justify-start items-center w-2/5 h-16 pl-5 rounded-2xl">
            <div className="text-white flex text-xl">Добавление аналитики</div>
            <div className="text-primary flex" />
          </button>
          <button className="bg-neutral-800 flex justify-start items-center w-2/5 h-16 pl-5 rounded-2xl">
            <div className="text-white flex text-xl">Тестировка сайта</div>
            <div className="text-primary flex" />
          </button>
          <button className="bg-neutral-800 flex justify-start items-center w-2/5 h-16 pl-5 rounded-2xl">
            <div className="text-white flex text-xl">Выпуск сайта</div>
            <div className="text-primary flex" />
          </button>
        </div>
      </div>
    </LayoutMain>
  );
};

export default ServicesPage;
