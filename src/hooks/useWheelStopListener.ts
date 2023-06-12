import { useEffect, useState } from "react";

const useWheelStopListener = (timeout = 200) => {
  const [isStoppedScrolling, setIsStoppedScrolling] = useState<boolean>(false);

  let handle: null | NodeJS.Timeout = null;

  const onScroll = () => {
    if (handle) {
      setIsStoppedScrolling(false);
      clearTimeout(handle);
    }
    handle = setTimeout(() => {
      setIsStoppedScrolling(true);
    }, timeout);
  };

  useEffect(() => {
    window.addEventListener("wheel", onScroll);
    window.addEventListener("touchmove", onScroll);
    return () => {
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("touchmove", onScroll);
    };
  }, []);

  return isStoppedScrolling;
};

export default useWheelStopListener;
