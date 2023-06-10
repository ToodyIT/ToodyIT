import { forwardRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SlideAnimationLayout from "../components/Layout/SlideAnimationLayout";
import { useTranslation } from "react-i18next";
import { TFunction } from "next-i18next";

const getOurTeam = (t: TFunction) => {
  return [
    {
      imagePath: "vasyl-polyanskyy.png",
      name: t("VASYL POLYANSKYY"),
      position: t("PROJECT MANAGER"),
    },
    {
      imagePath: "vasyl-polyanskyy.png",
      name: t("IVAN HODYNCHUK"),
      position: t("DEVELOPER"),
    },
    {
      imagePath: "vasyl-polyanskyy.png",
      name: t("RADIM NOVOTNÝ"),
      position: t("TRANSLATOR"),
    },
    {
      imagePath: "vasyl-polyanskyy.png",
      name: t("ANDRIY KOSAREV"),
      position: t("DESIGNER"),
    },
    {
      imagePath: "vasyl-polyanskyy.png",
      name: t("JAKUB DVOŘÁČEK"),
      position: t("DEVELOPER"),
    },
  ];
};
const OurTeamPage = forwardRef<HTMLDivElement>((_, ref) => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });
  const { t } = useTranslation();
  const ourTeam = getOurTeam(t);

  return (
    <SlideAnimationLayout ref={ref}>
      <div className="flex flex-col gap-7 -mr-5">
        <h2 className="text-white font-bold text-3xl flex text-center">
          {t("OUR TEAM")}
        </h2>
        <div
          className="relative max-h-[600px] h-full w-full cursor-pointer overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex gap-7 lg:gap-14 h-full">
            {ourTeam.map((team) => (
              <div
                className="h-auto lg:flex-none flex flex-col rounded-3xl bg-grey-800 flex-[0_0_80%]"
                key={team.name}
              >
                <div className="p-5 flex gap-5 flex-col">
                  <div className="relative h-[350px] w-[277px] lg:h-[400px] lg:w-[327px] ">
                    <Image
                      src={`/img/our-team/${team.imagePath}`}
                      alt="image"
                      fill
                      className="rounded-t-3xl"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-primary">{team.name}</span>
                    <span>{team.position}</span>
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

export default OurTeamPage;
