import { ReactNode } from "react";

export type ServiceType = {
  title: string;
  price: number;
};

export type ServiceKindType = "e-shop" | "website" | "services";

export type ServiceWrapperType = {
  link: string;
  title: string;
  status?: string | null;
  subTitle: string;
  image: string;
  description: string;
  firstDescription: string;
  icon: ReactNode;
  isDisabled: boolean;
};
