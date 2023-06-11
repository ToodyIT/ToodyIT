import { forwardRef, useState } from "react";
import Image from "next/image";
import SlideAnimationLayout from "../components/Layout/SlideAnimationLayout";
import { twJoin } from "tailwind-merge";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TFunction } from "next-i18next";

const getServices = (t: TFunction) => {
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
const ServicesPage = forwardRef<HTMLDivElement>((_, ref) => {
  const [openedServiceId, setOpenedServiceId] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useTranslation();
  const services = getServices(t);

  const toggleOpenedServiceId = (serviceId: string) => {
    if (isAnimating) return;

    if (openedServiceId !== serviceId) {
      return setOpenedServiceId(serviceId);
    }

    setOpenedServiceId(null);
  };

  return (
    <SlideAnimationLayout
      ref={ref}
      metaTitle={t("Services")}
      metaDescription={t(
        "Experience seamless website development from start to finish. Our services include requirements discussion, design creation, content filling, site development, analytics integration, thorough testing, and a successful site release. Trust us for professional and efficient website development."
      )}
    >
      <div className="flex flex-col gap-7">
        <h1 className="text-white text-3xl flex font-bold text-center">
          {t("DEVELOPMENT OF A NEW SITE")}
        </h1>
        <ul className="flex flex-col gap-4 w-full lg:h-screen">
          {services.map((service) => (
            <li className="flex flex-col items-end max-w-3xl" key={service.id}>
              <div
                className={twJoin(
                  "bg-neutral-800 flex items-center gap-4 w-full rounded-xl max-h-20 overflow-hidden cursor-pointer",
                  "before:content-[''] before:h-full before:w-4 before:bg-red-300 before:bg-gradient-to-b before:from-neutral-800 before:to-primary"
                )}
                onClick={() => toggleOpenedServiceId(service.id)}
              >
                <div className="p-5 flex justify-between w-full">
                  <h2 className="text-white text-xl">{service.title}</h2>
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
                  "max-w-[90%] bg-neutral-600 mr-4 rounded-b-2xl overflow-hidden"
                )}
              >
                <p className="block m-4 mt-2">{service.description}</p>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </SlideAnimationLayout>
  );
});

// export const getStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// };

export default ServicesPage;
