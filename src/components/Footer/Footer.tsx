import { FC } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { WebLine } from "../Webline/WebLine";
import Link from "next/link";
import Services from "../../pages/services.page";
import { Title } from "../Title";

export const Footer: FC = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="mt-auto w-full pt-8 flex bottom-0 rounded-t-2xl bg-greyLight dark:bg-secondary vl:rounded-none">
      <WebLine className="w-full" innerClassName="gap-7 flex flex-col">
        <Image src="/img/toodyit-logo.png" width="80" height="50" alt="logo" />
        <div className="flex gap-5 flex-col vl:flex-row vl:justify-between">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <Title type="h3" className="border-y py-3">
                {t("Usefull Link")}
              </Title>
              <div className="flex flex-col">
                <Link href="/">{t("About Us")}</Link>
                <Link href="/">{t("Our work")}</Link>
                <Link href="/">{t("Our Team")}</Link>
              </div>
            </div>
            <div className="flex flex-col">
              <Link href={Services}>
                <Title className="border-y py-3" type="h3">
                  {t("Services")}
                </Title>
              </Link>
              <div className="flex flex-col">
                <Link href="/">{t("WebSite")}</Link>
                <Link href="/">{t("E-Shop")}</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Link className="border-b" href={Services}>
              <Title type="h3">{t("Contact Us")}</Title>
            </Link>
            <div className="border rounded-xl text-center p-3">
              Ucnovska, praha 3
            </div>
            <div className="flex flex-col rounded-xl p-3 text-center border">
              <div>+3255 456 789</div>
              <div>mail@primarily.com</div>
            </div>
          </div>
          <div>
            <span>{t("Subscribe to the newsletter")}</span>
            <div className="transition hover:scale-105 z-0 border dark:border-black/60  relative overflow-hidden font-semibold h-52 max-w-xl w-full flex-center flex flex-col items-center shadow-2xl  vl:text-xl text-center  p-7 rounded-xl">
              <Image
                src="/img/imagePartnershipForSuccess.jpg"
                alt=""
                fill
                quality={20}
                blurDataURL="/img/imageEshopsBlur.jpg"
                placeholder="blur"
                className="rounded-xl object-cover text-[0px]"
              />
              <div className="bg-secondary"> </div>
              <div className="dark:bg-grey/80 bg-greyLight/80 absolute z-10 w-full left-0 right-0 h-52 rounded-xl"></div>
            </div>
          </div>
        </div>
        <span className="font-bold border-t py-4 items-center flex flex-center">
          Toody <span className="text-primary">IT</span>
        </span>
      </WebLine>
    </footer>
  );
};
