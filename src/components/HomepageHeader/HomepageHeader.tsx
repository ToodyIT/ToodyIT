import Image from "next/image";
import { FC } from "react";
import { LocaleToggler } from "../LocaleToggler/LocaleToggler";
import { useHomepageOpenSectionContext } from "../../utils/HomepageOpenSectionContext";
import { twJoin } from "tailwind-merge";

const HomepageHeader: FC = () => {
  const { openedSection } = useHomepageOpenSectionContext();
  return (
    <header
      className={twJoin(
        "flex justify-between items-center p-8 max-w-7xl mx-auto w-full",
        openedSection === "main" && "z-10"
      )}
    >
      <Image src="/img/toodyit-logo.png" alt="logo" width="125" height="79" />
      <LocaleToggler />
    </header>
  );
};

export default HomepageHeader;
