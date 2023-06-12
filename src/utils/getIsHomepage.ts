export const getIsHomepage = (url: string, locale: string | undefined) => {
  if (locale === "cz" && url === "/") return true;
  if (locale === "en" && (url === "/en" || url === "/")) return true;
  if (locale === "ru" && (url === "/ru" || url === "/")) return true;

  return false;
};
