import { useEffect, useRef } from "react";

const useScrollDirection = () => {
  const previousScrollPosRef = useRef(0);
  const scrollDirectionRef = useRef<"up" | "down" | "">("");

  useEffect(() => {
    const getScrollPos = (): number => {
      return window.pageYOffset || document.documentElement.scrollTop;
    };

    const handleWheel = (event: WheelEvent): void => {
      const delta = event.deltaY;

      if (delta < 0) {
        scrollDirectionRef.current = "up";
      } else if (delta > 0) {
        scrollDirectionRef.current = "down";
      }

      previousScrollPosRef.current = getScrollPos();
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return scrollDirectionRef.current;
};

export default useScrollDirection;
