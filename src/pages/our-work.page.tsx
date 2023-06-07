import { forwardRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SlideAnimationLayout from "../components/Layout/SlideAnimationLayout";
import { useTranslation } from "react-i18next";
import { TFunction } from "next-i18next";

const getOurWorks = (t: TFunction) => {
  return [
    {
      imagePath: "maria-poljanszska.png",
      name: t("BUSINESS CARD"),
      title: t("Stylish and modern website for you"),
      description: t(
        "A website that catches attention at first glance and makes it easy to get in touch with you, representing you and your services at a high professional level."
      ),
      customer: "MARIA POLJANSZKA",
      date: t("DECEMBER 16, 2023"),
    },
    {
      imagePath: "marta-hnatojko.png",
      name: t("BUSINESS CARD"),
      title: t("Elegant and professional website reflecting your expertise"),
      description: t(
        "The website emphasizes your expertise and experience, making it a reliable and attractive source of information about you."
      ),
      customer: "MARTA HNATOJKO",
      date: t("NOVEMBER 21, 2022"),
    },
    {
      imagePath: "salon-krasy-kwhite.png",
      name: t("WORK SITE"),
      title: t(
        "Vibrant and luxurious beauty salon website - your path to the perfect look"
      ),
      description: t(
        "A website with excellent design invites clients on a unique journey to improvement, showcasing your beauty salon and its services at a high level of professionalism."
      ),
      customer: "SALON KRASY KWHITE",
      date: t("APRIL 24, 2023"),
    },
  ];
};
const OurWorkPage = forwardRef<HTMLDivElement>((_, ref) => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });
  const { t } = useTranslation();
  const ourwork = getOurWorks(t);

  return (
    <SlideAnimationLayout ref={ref}>
      <div className="flex flex-col gap-7">
        <h2 className="text-white font-bold text-3xl flex text-center">
          {t("RECENT WORK")}
        </h2>
        <div
          className="relative max-h-[600px] h-full w-full cursor-pointer overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex flex-row gap-20 h-full ">
            {ourwork.map((work) => (
              <div
                className="h-auto w-[300px] lg:w-[382px] flex flex-col rounded-3xl bg-grey-800"
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
                <div className="flex flex-col px-6 pb-6 gap-7 h-full">
                  <span className="font-bold">{work.title}</span>
                  <span>{work.description}</span>
                  <div className="bg-primary mt-auto w-full h-[1px]" />
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
