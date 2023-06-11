import { NextRouter, useRouter } from "next/router";
import { useEffect, useRef } from "react";

export const usePreviousRouter = () => {
  const router = useRouter();
  const previousRouterRef = useRef<null | NextRouter>(null);

  useEffect(() => {
    previousRouterRef.current = router;
    const handleRouteChangeComplete = () => {
      previousRouterRef.current = router;
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  return previousRouterRef.current;
};
