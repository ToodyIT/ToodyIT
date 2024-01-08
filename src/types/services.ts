import { ReactNode } from "react";

export type ServiceType = {
  title: string;
  price: number;
  keywords: string[];
};

export type ServiceKindType = "e-shop" | "website" | "services";

export type ServiceWrapperType = {
  link: string;
  title: string;
  subTitle: string;
  image: string;
  description: string;
  icon: ReactNode;
};
