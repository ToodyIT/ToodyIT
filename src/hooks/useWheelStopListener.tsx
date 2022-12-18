import { useEffect, useState } from "react";

const useWheelStopListener = (timeout = 200) => {
  const [isStoppedScrolling, setIsStoppedScrolling] = useState<boolean>(false);

  let handle: null | NodeJS.Timeout = null;

  const onScroll = function () {
    if (handle) {
      setIsStoppedScrolling(false);
      clearTimeout(handle);
    }
    handle = setTimeout(() => setIsStoppedScrolling(true), timeout);
  };

  useEffect(() => {
    window.addEventListener("wheel", onScroll);
    return function () {
      window.removeEventListener("wheel", onScroll);
    };
  }, []);

  return isStoppedScrolling;
};

export default useWheelStopListener;
