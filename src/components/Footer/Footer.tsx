import { FC } from "react";
import { useTranslation } from "next-i18next";
import { WebLine } from "../Webline/WebLine";
import { getNavigationItems } from "../Header/Header";
import Link from "next/link";
import { Logo } from "../Motion/Reveal";
import {
  COMPANY_ADDRESS,
  COMPANY_CIN,
  COMPANY_EMAIL,
  COMPANY_LEGAL_NAME,
  INSTAGRAM_URL,
} from "../../constants/people";

export const Footer: FC = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="border-line border-t py-10">
      <WebLine innerClassName="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Logo />
          <p className="text-muted mt-3 max-w-md text-sm">
            {t(
              "ToodyIT is a Prague IT company. For 3 years we have been building our own products and custom projects for clients. We make websites and full solutions on any request. Our product ToodyMenu has its own website."
            )}
          </p>
          <p className="text-muted mt-2 text-sm">{COMPANY_ADDRESS}</p>
        </div>
        <nav className="text-muted flex flex-col gap-2 text-sm">
          {getNavigationItems(t).map((item) => (
            <Link className="hover:text-fg" href={item.link} key={item.link}>
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="text-muted flex flex-col items-start gap-2 text-sm sm:items-end">
          <a className="hover:text-fg" href={`mailto:${COMPANY_EMAIL}`}>
            {COMPANY_EMAIL}
          </a>
          <p>{COMPANY_LEGAL_NAME}</p>
          <span>
            {t("CIN")}: {COMPANY_CIN}
          </span>
          <a href={INSTAGRAM_URL} rel="noreferrer" target="_blank">
            Instagram
          </a>
          <p>© {new Date().getFullYear()} ToodyIT</p>
        </div>
      </WebLine>
    </footer>
  );
};
