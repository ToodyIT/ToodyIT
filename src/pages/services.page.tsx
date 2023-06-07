import { forwardRef, useState } from "react";
import Image from "next/image";
import SlideAnimationLayout from "../components/Layout/SlideAnimationLayout";
import { twJoin } from "tailwind-merge";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SERVICES = [
  {
    id: "discussion",
    title: "Обсуждение требований",
    description:
      "На этом этапе вы встречаетесь с клиентом, чтобы обсудить его потребности, цели и функциональные требования к сайту. Это включает в себя обсуждение дизайна, структуры, функциональности, интеграций и других особенностей сайта.",
  },
  {
    id: "design",
    title: "Создание дизайна",
    description:
      "На этом этапе вы встречаетесь с клиентом, чтобы обсудить его потребности, цели и функциональные требования к сайту. Это включает в себя обсуждение дизайна, структуры, функциональности, интеграций и других особенностей сайта.",
  },
  {
    id: "materials",
    title: "Наполнение материалом",
    description:
      "На этом этапе вы встречаетесь с клиентом, чтобы обсудить его потребности, цели и функциональные требования к сайту. Это включает в себя обсуждение дизайна, структуры, функциональности, интеграций и других особенностей сайта.",
  },
  {
    id: "development",
    title: "Разработка сайта",
    description:
      "На этом этапе вы встречаетесь с клиентом, чтобы обсудить его потребности, цели и функциональные требования к сайту. Это включает в себя обсуждение дизайна, структуры, функциональности, интеграций и других особенностей сайта.",
  },
  {
    id: "analytics",
    title: "Добавление аналитики",
    description:
      "На этом этапе вы встречаетесь с клиентом, чтобы обсудить его потребности, цели и функциональные требования к сайту. Это включает в себя обсуждение дизайна, структуры, функциональности, интеграций и других особенностей сайта.",
  },
  {
    id: "testing",
    title: "Тестировка сайта",
    description:
      "На этом этапе вы встречаетесь с клиентом, чтобы обсудить его потребности, цели и функциональные требования к сайту. Это включает в себя обсуждение дизайна, структуры, функциональности, интеграций и других особенностей сайта.",
  },
  {
    id: "deploy",
    title: "Выпуск сайта",
    description:
      "На этом этапе вы встречаетесь с клиентом, чтобы обсудить его потребности, цели и функциональные требования к сайту. Это включает в себя обсуждение дизайна, структуры, функциональности, интеграций и других особенностей сайта.",
  },
];

const ServicesPage = forwardRef<HTMLDivElement>((_, ref) => {
  const [openedServiceId, setOpenedServiceId] = useState(SERVICES[0].id);

  return (
    <SlideAnimationLayout ref={ref}>
      <div className="flex flex-col gap-7">
        <h2 className="text-white text-3xl flex text-center">
          <strong>РАЗРАБОТКА НОВОГО САЙТА</strong>
        </h2>
        <div className=" flex flex-col gap-4 w-screen h-screen mb-36">
          {SERVICES.map((service) => (
            <div className="flex flex-col items-end max-w-3xl" key={service.id}>
              <div
                className={twJoin(
                  "bg-neutral-800 flex items-center gap-4 w-full rounded-xl max-h-20 overflow-hidden cursor-pointer",
                  "before:content-[''] before:h-full before:w-4 before:bg-red-300 before:bg-gradient-to-b before:from-neutral-800 before:to-primary"
                )}
                onClick={() => setOpenedServiceId(service.id)}
              >
                <div className="p-5 flex justify-between w-full">
                  <div className="text-white text-xl">{service.title}</div>
                  <Image
                    src="/img/Arrow.svg"
                    alt="arrow"
                    width="20"
                    height="20"
                  />
                </div>
              </div>
              <motion.div
                id={openedServiceId === service.id ? "open" : "closed"}
                animate={openedServiceId === service.id ? "open" : "closed"}
                variants={{
                  closed: {
                    height: 0,
                  },
                  open: {
                    height: "auto",
                  },
                }}
                key={service.title}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  duration: 1,
                }}
                className={twJoin(
                  "w-[700px] bg-neutral-600 mr-4 rounded-b-2xl overflow-hidden"
                )}
              >
                <span className="block m-4 mt-2">{service.description}</span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </SlideAnimationLayout>
  );
});

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default ServicesPage;
