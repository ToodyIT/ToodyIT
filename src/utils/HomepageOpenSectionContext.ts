import { Dispatch, SetStateAction, createContext, useContext } from "react";

export type HomepageOpenedSectionType = "header" | "main" | "footer";

export type HomepageOpenSectionContextType = {
  openedSection: HomepageOpenedSectionType;
  setOpenedSection: Dispatch<SetStateAction<HomepageOpenedSectionType>>;
};

export const HomepageOpenSectionContext =
  createContext<HomepageOpenSectionContextType>({
    openedSection: "main",
    setOpenedSection: () => {},
  });

export const useHomepageOpenSectionContext = () => {
  return useContext(HomepageOpenSectionContext);
};
