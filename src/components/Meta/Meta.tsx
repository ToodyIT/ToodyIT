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
