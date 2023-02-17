import { FC } from "react";
import LayoutMain from "../Layout/LayoutMain";

const OurWork: FC = () => {
  return (
    <LayoutMain>
      <div className="flex flex-col gap-7 pl-40">
        <h2 className="text-white text-3xl flex text-center  pt-8">
          <strong>ПОСЛЕДНИИ РАБОТЫ</strong>
        </h2>
        <div className="flex flex-col gap-7">
          <div className="flex flex-row gap-20">
            <button className="text-white bg-stone-800 items-center justify-center flex w-96 text-xl h-16 rounded-2xl">
              Maria Poljanzska
            </button>
            <button className="text-white bg-stone-800 items-center justify-center flex w-96  text-xl h-16 rounded-2xl">
              Marta Hnatojko
            </button>
          </div>
          <div className="flex flex-row">
            <button className="text-white bg-stone-800 items-center justify-center flex w-96  text-xl h-16 rounded-2xl">Ваш сайт</button>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default OurWork;
