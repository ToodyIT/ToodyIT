import Link from "next/link";
import { FC } from "react";

type LocaleTogglerProps = {};

export const LocaleToggler: FC<LocaleTogglerProps> = ({}) => {
  return (
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
  );
};
