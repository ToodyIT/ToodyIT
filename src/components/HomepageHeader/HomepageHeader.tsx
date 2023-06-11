import Image from "next/image";
import { FC } from "react";
import { LocaleToggler } from "../LocaleToggler/LocaleToggler";

const HomepageHeader: FC = () => {
  return (
    <header className="flex justify-between items-center p-8 max-w-7xl mx-auto w-full">
      <Image src="/img/toodyit-logo.png" alt="logo" width="153" height="41" />
      <LocaleToggler />
    </header>
  );
};

export default HomepageHeader;
