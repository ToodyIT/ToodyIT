import { ReactNode } from "react";

export type ServiceType = {
  title: string;
  price: number;
};

export type ServiceKindType = "e-shop" | "website" | "services";

export type ServiceWrapperType = {
  title: string;
  subTitle: string;
  image: string;
  description: string;
  type: ServiceKindType;
  icon: ReactNode;
};
