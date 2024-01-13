import { useRef } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  destinationForPortal?: HTMLElement | null | Element;
};

export const Portal: FC<PortalProps> = ({ destinationForPortal, children }) => {
  const portalElementRef = useRef(
    destinationForPortal ?? document.getElementById("portal")
  );

  if (portalElementRef.current === null) {
    return null;
  }

  return createPortal(children, portalElementRef.current);
};
