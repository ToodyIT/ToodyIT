import { MouseEventHandler, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import { Portal } from "../Portal/Portal";
import { motion } from "framer-motion";
import Overlay from "../Overlay/Overlay";
import { twMerge } from "tailwind-merge";
import { CloseIcon } from "../Icons/Icons";

type PopupProps = {
  onCloseCallback: () => void;
  hideCloseButton?: boolean;
  innerContentClassName?: string;
  title?: string | null;
  variant?: "wide" | "narrow";
};

const TEST_IDENTIFIER = "layout-popup";

export const Popup: FC<PopupProps> = ({
  onCloseCallback,
  children,
  hideCloseButton,
  className,
  innerContentClassName,
  title,
  variant = "narrow",
}) => {
  const { t } = useTranslation();
  const onEscapeButtonPressHandler = useRef((event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      onCloseCallback();
    }
  }).current;

  useEffect(() => {
    document.addEventListener("keydown", onEscapeButtonPressHandler);

    return () =>
      document.removeEventListener("keydown", onEscapeButtonPressHandler);
  }, []);

  const onClickCloseActionHandler: MouseEventHandler<HTMLElement> = () => {
    onCloseCallback();
  };

  return (
    <Portal>
      <motion.div key="popup">
        <Overlay isOpen onClose={onClickCloseActionHandler} />
        <div
          aria-modal
          data-testid={TEST_IDENTIFIER}
          role="dialog"
          className={twMerge(
            "fixed left-1/2 top-1/2 z-[70] flex max-h-[94vh] min-w-[320px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[1.8rem] border border-line bg-panel shadow-2xl md:min-w-[500px]",
            variant === "wide" && "w-11/12 md:max-w-[1200px]",
            variant === "narrow" &&
              " lg:w-[700px] vl:w-[840px] xl:max-w-screen-xl",
            className
          )}
        >
          <div
            className={twMerge(
              "z-above mb-4 flex justify-between items-center p-6 pb-0"
            )}
          >
            <span className="font-display w-[calc(100%-46px)] text-2xl font-bold">
              {title}
            </span>
            {!hideCloseButton && (
              <button
                aria-label={t("Close")}
                className="border-line flex h-10 w-10 items-center justify-center rounded-full border"
                onClick={onClickCloseActionHandler}
              >
                <CloseIcon className="h-3 w-3" />
              </button>
            )}
          </div>
          <div
            className={twMerge(
              "max-h-full overflow-auto p-6",
              innerContentClassName
            )}
          >
            {children}
          </div>
        </div>
      </motion.div>
    </Portal>
  );
};
