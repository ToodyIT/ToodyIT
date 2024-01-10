import { FC } from "react";
import { useTranslation } from "next-i18next";

export const Footer: FC = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="mt-auto w-full flex h-10 sticky bottom-0 items-center rounded-t-2xl bg-greyLight dark:bg-secondary font-bold flex-center vl:rounded-none">
      Toody <span className="text-primary">IT</span>
    </footer>
  );
};