import { useEffect, useState } from "react";

const useWheelStopListener = (timeout = 200) => {
  const [isStoppedScrolling, setIsStoppedScrolling] = useState(false);

  let handle: null | NodeJS.Timeout = null;

  const onTouchMove = () => {
    if (handle) {
      setIsStoppedScrolling(false);
      clearTimeout(handle);
    }
    handle = setTimeout(() => setIsStoppedScrolling(true), timeout);
  };

  useEffect(() => {
    window.addEventListener("touchmove", onTouchMove);
    return () => {
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return isStoppedScrolling;
};

export default useWheelStopListener;
