import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex justify-between items-center py-8">
      <Image src="/img/toodyit-logo.svg" alt="logo" width="153" height="41" />
      <div className="flex gap-2.5">
        <Link href="/" className="text-white text-xl">
          CZ
        </Link>
        <Link href="/" className="text-white text-xl">
          EN
        </Link>
        <Link href="/" className="text-primary text-xl">
          RU
        </Link>
      </div>
    </div>
  );
};

export default Header;
