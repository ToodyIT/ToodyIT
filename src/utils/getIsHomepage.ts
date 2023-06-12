export const getIsHomepage = (url: string, locale: string | undefined) => {
  console.log(url,locale);
  if (locale === "cz" && url === "/") return true;
  if (locale === "en" && (url === "/en" || url === "/")) return true;
  if (locale === "ru" && (url === "/ru" || url === "/")) return true;

  return false;
};
