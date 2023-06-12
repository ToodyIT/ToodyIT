export const getIsHomepage = (url: string, locale: string | undefined) => {
  const [urlWithoutQueryParams] = url.split("?");

  if (locale === "cz" && urlWithoutQueryParams === "/") return true;
  if (
    locale === "en" &&
    (urlWithoutQueryParams === "/en" || urlWithoutQueryParams === "/")
  )
    return true;
  if (
    locale === "ru" &&
    (urlWithoutQueryParams === "/ru" || urlWithoutQueryParams === "/")
  )
    return true;

  return false;
};
