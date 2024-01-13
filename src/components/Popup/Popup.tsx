import { MouseEventHandler, useEffect, useRef } from "react";
import { Portal } from "../Portal/Portal";
import { m } from "framer-motion";
import Overlay from "../Overlay/Overlay";
import { twMerge } from "tailwind-merge";
import { CloseIcon } from "../Icons/Icons";

type PopupProps = {
  onCloseCallback: () => void;
  hideCloseButton?: boolean;
  innerContentClassName?: string;
  title?: string;
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
      <m.div
        key="popup"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
      >
        <Overlay isOpen onClose={onClickCloseActionHandler} />
        <div
          aria-modal
          data-testid={TEST_IDENTIFIER}
          role="dialog"
          className={twMerge(
            "fixed left-1/2 top-1/2 z-30 flex max-h-[94vh] min-w-[300px] -translate-x-1/2 -translate-y-1/2 cursor-auto flex-col rounded-lg bg-secondary shadow-2xl transition-opacity md:min-w-[500px]",
            variant === "wide" && "w-11/12 md:max-w-[1200px]",
            variant === "narrow" &&
              " lg:w-[700px] vl:w-[840px] xl:max-w-screen-xl",
            className
          )}
        >
          <div
            className={twMerge("z-above mb-4 flex justify-between p-6 pb-0")}
          >
            <span className="w-[calc(100%-46px)] text-2xl font-bold text-dark">
              {title}
            </span>
            {!hideCloseButton && (
              <button
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-0 text-xs text-white no-underline outline-none transition active:scale-95"
                onClick={onClickCloseActionHandler}
              >
                <CloseIcon className="h-3 w-3 text-white" />
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
      </m.div>
    </Portal>
  );
};
