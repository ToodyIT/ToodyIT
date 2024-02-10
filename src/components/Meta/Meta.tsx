import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { BASE_URL } from "../../constants/common";

type MetaProps = {
  metaTitle: string;
  metaDescription: string;
};

export const Meta: FC<MetaProps> = ({ metaTitle, metaDescription }) => {
  const router = useRouter();

  const alternateLocales = router.locales!.filter(
    (locale) => locale !== router.locale
  );

  return (
    <Head>
      <title>{metaTitle}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#141414" />
      <meta name="robots" content="all" />
      <meta name="description" content={metaDescription} />
      {alternateLocales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${BASE_URL}/${locale}${router.asPath}`}
        />
      ))}
    </Head>
  );
};
