export const isServer = (): boolean =>
  !(
    typeof window !== "undefined" &&
    typeof window.document === "object" &&
    typeof window.document.createElement === "function"
  );
