import { forwardRef, useState } from "react";
import LayoutMain from "../components/Layout/LayoutMain";
import { twJoin } from "tailwind-merge";
import { motion } from "framer-motion";
import { TFunction, useTranslation } from "next-i18next";
import { Icon } from "../components/Icons/Icon";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import NextI18nextConfig from "../../next-i18next.config";
import { BlurredDecoration } from "../components/BlurredDecoration/BlurredDecoration";

const getProcess = (t: TFunction) => {
  return [
    {
      id: "discussion",
      title: t("Requirements discussion"),
      description: t(
        "At this stage, we meet with the client to discuss their needs, goals, and functional requirements for the website. This includes discussing the design, structure, functionality, integrations, and other features of the site."
      ),
    },
    {
      id: "design",
      title: t("Design creation"),
      description: t(
        "After gaining a thorough understanding of the client's requirements and branding, the web designer begins creating the website design. This involves developing page layouts, selecting a color scheme, fonts, graphics, and the overall look and feel of the site."
      ),
    },
    {
      id: "materials",
      title: t("Filling with material"),
      description: t(
        "At this stage, the client provides the necessary content to populate the website, including text, photos, videos, and other materials. The designer and developer work with this content to create cohesive and visually appealing website pages."
      ),
    },
    {
      id: "development",
      title: t("Site development"),
      description: t(
        "Based on the created design and provided content, the developer starts programming and building the website. We create web pages, implement functionality, add interactive elements, optimize the site for search engines, and enhance its overall performance."
      ),
    },
    {
      id: "analytics",
      title: t("Adding analytics"),
      description: t(
        "To track and analyze activity on the site, analytics code such as Google Analytics is added. This allows for obtaining information on traffic, user behavior, conversions, and other important metrics for further website optimization."
      ),
    },
    {
      id: "testing",
      title: t("Website testing"),
      description: t(
        "Before releasing the site into production, testing of its functionality, compatibility with different browsers and devices, page loading speed, and other aspects is conducted. This helps identify and address any potential errors and issues before the site becomes accessible to the public."
      ),
    },
    {
      id: "deploy",
      title: t("Site release"),
      description: t(
        "Once the site is successfully tested and ready for launch, it is deployed on a web server and made available to visitors. After the website is launched, it is important to continue its support and maintenance."
      ),
    },
  ];
};
const ProcessPage = forwardRef<HTMLDivElement>((_, ref) => {
  const [openedServiceId, setOpenedServiceId] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useTranslation();
  const process = getProcess(t);

  const toggleOpenedServiceId = (serviceId: string) => {
    if (isAnimating && window.innerWidth > 768) return;

    if (openedServiceId !== serviceId) {
      return setOpenedServiceId(serviceId);
    }

    setOpenedServiceId(null);
  };

  return (
    <LayoutMain
      ref={ref}
      metaTitle={t("Process")}
      metaDescription={t(
        "Website development from start to finish. Our process include a website for a salon, a business card website, a website for a cafe, a cheap website. Trust us with professional and efficient website development."
      )}
    >
      <div className="flex flex-col gap-7 ">
        <BlurredDecoration className="lg:top-1 top-7 left-1 lg:left-1" />
        <h1 className="text-white text-xl z-20 lg:text-4xl flex font-bold text-center">
          {t("DEVELOPMENT OF A NEW SITE")}
        </h1>
        <ul className="flex flex-col gap-4 w-full z-20">
          {process.map((service) => (
            <li className="flex flex-col items-end max-w-3xl" key={service.id}>
              <div
                className={twJoin(
                  "bg-neutral-800 flex items-center w-full rounded-xl max-h-16 overflow-hidden cursor-pointer",
                  "before:content-[''] before:h-16 before:block before:w-4 before:bg-gradient-to-b before:from-neutral-800 before:to-primary"
                )}
                onClick={() => toggleOpenedServiceId(service.id)}
              >
                <div className="p-5 flex justify-between w-full">
                  <h2 className="text-white text-xl">{service.title}</h2>
                  <Icon
                    icon="Arrow"
                    className={twJoin(
                      "w-5 h-7 text-primary transition",
                      openedServiceId === service.id ? "rotate-180" : "rotate-0"
                    )}
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
                onAnimationComplete={() => setIsAnimating(false)}
                onAnimationStart={() => setIsAnimating(true)}
                initial={false}
                key={service.title}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  duration: 0.7,
                }}
                className={twJoin(
                  "max-w-[90%] bg-neutral-600 mr-4 rounded-b-2xl overflow-hidden",
                  openedServiceId === service.id
                    ? "notLg:!h-auto"
                    : "notLg:!h-0"
                )}
              >
                <p className="block m-4 mt-2">{service.description}</p>
              </motion.div>
            </li>
          ))}
        </ul>
        <BlurredDecoration className="-right-5 bottom-5 hidden lg:block" />
      </div>
    </LayoutMain>
  );
});

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"], NextI18nextConfig)),
    },
  };
};

export default ProcessPage;
