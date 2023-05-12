import { FC } from "react";
import LayoutMain from "../components/Layout/LayoutMain";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface ServicesPageProps {}

const ServicesPage: FC<ServicesPageProps> = ({}) => {
  return (
    <LayoutMain>
      <div className="flex flex-col gap-7 pl-40">
        <h2 className="text-white text-3xl flex text-center pt-8">
          <strong>РАЗРАБОТКА НОВОГО САЙТА</strong>
        </h2>
        <div className=" flex flex-col gap-4 w-screen h-screen mb-36">
          <div className="bg-neutral-800 flex justify-between items-center w-2/3 h-[79] gap-4 pr-5 rounded-2xl">
            <div className="flex items-center gap-7">
              <Image
                src="/img/green-line.svg"
                alt="logo"
                width="12"
                height="79"
              />
              <div className="text-white flex text-xl">
                Обсуждение требований
              </div>
            </div>
            <div className="flex">
              <div className="text-primary flex" />
              <Image src="/img/Arrow.svg" alt="arrow" width="20" height="20" />
            </div>
          </div>
          <div className="bg-neutral-800 flex justify-between items-center w-2/3 h-[79] gap-4 pr-5 rounded-2xl">
            <div className="flex items-center gap-7">
              <Image
                src="/img/green-line.svg"
                alt="logo"
                width="12"
                height="79"
              />
              <div className="text-white flex text-xl">Создание дизайна</div>
            </div>
            <div className="flex">
              <div className="text-primary flex" />
              <Image src="/img/Arrow.svg" alt="arrow" width="20" height="20" />
            </div>
          </div>
          <div className="bg-neutral-800 flex justify-between items-center w-2/3 h-[79] gap-4 pr-5 rounded-2xl">
            <div className="flex items-center gap-7">
              <Image
                src="/img/green-line.svg"
                alt="logo"
                width="12"
                height="79"
              />
              <div className="text-white flex text-xl">
                Наполнение материалом
              </div>
            </div>
            <div className="flex">
              <div className="text-primary flex" />
              <Image src="/img/Arrow.svg" alt="arrow" width="20" height="20" />
            </div>
          </div>
          <div className="bg-neutral-800 flex justify-between items-center w-2/3 h-[79] gap-4 pr-5 rounded-2xl">
            <div className="flex items-center gap-7">
              <Image
                src="/img/green-line.svg"
                alt="logo"
                width="12"
                height="79"
              />
              <div className="text-white flex text-xl">Разработка сайта</div>
            </div>
            <div className="flex">
              <div className="text-primary flex" />
              <Image src="/img/Arrow.svg" alt="arrow" width="20" height="20" />
            </div>
          </div>
          <div className="bg-neutral-800 flex justify-between items-center w-2/3 h-[79] gap-4 pr-5 rounded-2xl">
            <div className="flex items-center gap-7">
              <Image
                src="/img/green-line.svg"
                alt="logo"
                width="12"
                height="79"
              />
              <div className="text-white flex text-xl">
                Добавление аналитики
              </div>
            </div>
            <div className="flex">
              <div className="text-primary flex" />
              <Image src="/img/Arrow.svg" alt="arrow" width="20" height="20" />
            </div>
          </div>
          <div className="bg-neutral-800 flex justify-between items-center w-2/3 h-[79] gap-4 pr-5 rounded-2xl">
            <div className="flex items-center gap-7">
              <Image
                src="/img/green-line.svg"
                alt="logo"
                width="12"
                height="79"
              />
              <div className="text-white flex text-xl">Тестировка сайта</div>
            </div>
            <div className="flex">
              <div className="text-primary flex" />
              <Image src="/img/Arrow.svg" alt="arrow" width="20" height="20" />
            </div>
          </div>
          <div className="bg-neutral-800 flex justify-between items-center w-2/3 h-[79] gap-4 pr-5 rounded-2xl">
            <div className="flex items-center gap-7">
              <Image
                src="/img/green-line.svg"
                alt="logo"
                width="12"
                height="79"
              />
              <div className="text-white flex text-xl">Выпуск сайта</div>
            </div>
            <div className="flex">
              <div className="text-primary flex" />
              <Image src="/img/Arrow.svg" alt="arrow" width="20" height="20" />
            </div>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default ServicesPage;
