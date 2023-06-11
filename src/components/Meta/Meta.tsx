import Head from "next/head";
import { FC } from "react";

type MetaProps = {
  metaTitle: string;
  metaDescription: string;
};

export const Meta: FC<MetaProps> = ({ metaTitle, metaDescription }) => {
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </Head>
  );
};
