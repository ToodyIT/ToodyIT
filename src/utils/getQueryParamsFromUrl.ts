export const getQueryParamsFromUrl = (url: string) => {
  const urlSegments = url.split("?");
  const searchParams = new URLSearchParams(urlSegments[urlSegments.length - 1]);

  return searchParams;
};
