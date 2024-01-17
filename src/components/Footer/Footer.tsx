import { FC } from "react";
import { useTranslation } from "next-i18next";
import { WebLine } from "../Webline/WebLine";
import { getLinkQueries, getNavigationItems } from "../Header/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { twJoin } from "tailwind-merge";
import { EmailIcon, InstagramIcon, PhoneIcon } from "../Icons/Icons";

export const Footer: FC = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [urlWithoutQueryParams] = router.asPath.split("?");

  return (
    <footer className="mt-8 vl:mt-12 w-full flex rounded-t-2xl z-[1] bg-greyLight dark:bg-secondary vl:rounded-none">
      <WebLine
        className="w-full"
        innerClassName="py-4 vl:py-12 flex flex-col gap-8 items-center vl:flex-row-reverse"
      >
        <div className="flex flex-col w-full">
          <nav className="dark:border-white border-black border-b vl:flex-row flex-col flex justify-between pb-5 vl:pb-10">
            <ul className="flex flex-col gap-3 vl:flex-row vl:gap-10">
              {getNavigationItems(t).map((item) => (
                <li key={item.title}>
                  <Link
                    href={{
                      pathname: item.link,
                      query: getLinkQueries(item.order, router),
                    }}
                    as={{
                      pathname: item.link,
                    }}
                    className={twJoin(
                      "flex items-center gap-3 font-medium",
                      urlWithoutQueryParams === item.link &&
                        "text-primary pointer-events-none"
                    )}
                  >
                    {item.title}
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="gap-4 items-center flex pt-4 vl:pt-0 flex-row">
              <Link href="tel:+420773011578" target="_blank" rel="noreferrer">
                <PhoneIcon className="size-7" />
              </Link>
              <Link
                href="mail:toody-it@toody-it.com"
                target="_blank"
                rel="noreferrer"
              >
                <EmailIcon className="size-8" />
              </Link>
              <Link
                href="https://www.instagram.com/toodyit/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon className="size-6" />
              </Link>
            </div>
          </nav>

          <ul className="mt-5 grid grid-cols-1 gap-3 vl:grid-cols-5 vl:mt-10">
            <li className="flex flex-col gap-1">
              <span>{t("CIN")}</span>
              <div className="h-[1px] dark:bg-white bg-black w-16 vl:w-20" />
              <span className="font-semibold text-primary">094 59 584</span>
            </li>
            <li className="flex flex-col gap-1">
              <span>{t("Data box")}</span>
              <div className="h-[1px] dark:bg-white bg-black w-16 vl:w-20" />
              <span className="font-semibold text-primary">sdff5ge</span>
            </li>
            <li className="flex flex-col gap-1">
              <span>{t("Email")}</span>
              <div className="h-[1px] dark:bg-white bg-black w-16 vl:w-20" />
              <a
                href="mailto:toody-it@toody-it.com"
                className="font-semibold text-primary"
              >
                toody-it@toody-it.com
              </a>
            </li>
            <li className="flex flex-col gap-1">
              <span>{t("Number")}</span>
              <div className="h-[1px] dark:bg-white bg-black w-16 vl:w-20" />
              <a
                href="tel:+420773011578"
                className="font-semibold text-primary"
              >
                +420 773 011 578
              </a>
            </li>
            <li className="flex flex-col gap-1">
              <span>{t("Address")}</span>
              <div className="h-[1px] dark:bg-white bg-black w-16 vl:w-20" />
              <span className="font-semibold text-primary">
                Chvalská 718/10, Praha
              </span>
            </li>
          </ul>
        </div>
        <Link href="/">
          <Image
            src="/img/toodyit-logo.png"
            width="250"
            height="157"
            alt="logo"
          />
        </Link>
      </WebLine>
    </footer>
  );
};
