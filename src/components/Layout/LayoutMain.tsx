import { ReactNode, useEffect, useState } from "react";
import { Meta } from "../Meta/Meta";
import nookies from "nookies";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { CallUsPopup } from "../CallUsPopup/CallUsPopup";
import { useTranslation } from "next-i18next";

interface LayoutMainProps {
  children: ReactNode;
  metaTitle: string;
  metaDescription: string;
}

const CALL_US_POPUP_COOKIE = "isCallUsPopupHasBeenOpened";

const LayoutMain: FC<LayoutMainProps> = ({
  children,
  metaTitle,
  metaDescription,
}) => {
  const { t } = useTranslation();
  const [isCallUsPopupOpen, setIsCallUsPopupOpen] = useState(false);

  useEffect(() => {
    const cookies = nookies.get();

    if (!(CALL_US_POPUP_COOKIE in cookies)) {
      setTimeout(() => {
        setIsCallUsPopupOpen(true);
      }, 10000);
    }
  }, []);

  return (
    <>
      <Meta metaTitle={metaTitle} metaDescription={metaDescription} />
      <div className="w-full">
        <div className="bg-none w-full flex min-h-screen flex-col items-center max-w-[100vw] overflow-y-visible overflow-x-hidden">
          <Header />
          <div className="w-full h-full mb-5 lg:mb-8 vl:mb-12">{children}</div>
          <Footer />
        </div>
      </div>
      {isCallUsPopupOpen && (
        <CallUsPopup
          onCloseCallback={() => {
            setIsCallUsPopupOpen(false);
            nookies.set(undefined, CALL_US_POPUP_COOKIE, "true");
          }}
        />
      )}
      <button
        className="fixed z-10 bottom-4 right-4 vl:bottom-8 vl:right-8 font-bold text-lg bg-teal-600 rounded-lg px-2 py-1 shadow-lg"
        onClick={() => setIsCallUsPopupOpen(true)}
      >
        {t("Get 10% discount")}
      </button>
    </>
  );
};

export default LayoutMain;
