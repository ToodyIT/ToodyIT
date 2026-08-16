import Link from "next/link";
import { useRouter } from "next/router";
import { twJoin, twMerge } from "tailwind-merge";

export const LocaleToggler: FC = ({ className }) => {
  const router = useRouter();

  return (
    <div
      className={twMerge(
        "border-line bg-glass flex items-center gap-1 rounded-full border p-1",
        className
      )}
    >
      {router.locales?.map((locale) => (
        <Link
          key={locale}
          href={router.asPath}
          locale={locale}
          className={twJoin(
            "rounded-full px-2 py-1 text-[11px] font-semibold tracking-wide",
            router.locale === locale
              ? "bg-brand text-white"
              : "text-muted hover:text-fg"
          )}
        >
          {locale === "cs" ? "CZ" : locale === "uk" ? "UA" : locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};
