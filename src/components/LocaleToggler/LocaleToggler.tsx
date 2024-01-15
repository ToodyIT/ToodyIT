import Link from "next/link";
import { useRouter } from "next/router";
import { twJoin, twMerge } from "tailwind-merge";

export const LocaleToggler: FC = ({ className }) => {
  const router = useRouter();

  return (
    <div className={twMerge("flex gap-2.5", className)}>
      {router.locales?.map((locale) => (
        <Link
          key={locale}
          href={router.asPath}
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
