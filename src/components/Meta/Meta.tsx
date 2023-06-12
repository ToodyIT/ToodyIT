import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";

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
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#141414" />
      <meta name="robots" content="all" />
      <meta name="description" content={metaDescription} />
      {alternateLocales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`http://www.toody-it.com/${locale}${router.asPath}`}
        />
      ))}
    </Head>
  );
};
