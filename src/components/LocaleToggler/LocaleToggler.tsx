import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { twJoin } from "tailwind-merge";

export const LocaleToggler: FC = () => {
  const router = useRouter();

  return (
    <div className="flex gap-2.5">
      {router.locales?.map((locale) => (
        <Link
          key={locale}
          href="/"
          locale={locale}
          className={twJoin(
            "text-lg",
            router.locale === locale && "text-primary"
          )}
        >
          {locale === "cs" ? "CZ" : locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};
