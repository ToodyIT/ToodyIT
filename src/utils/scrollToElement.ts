import { HEADER_HEIGHT } from "../components/Header/Header";

export const scrollToElement = (
  element: Element | undefined | null,
  offset = 0
) => {
  if (element) {
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.pageYOffset - offset,
      behavior: "smooth",
    });
  }
};

export const scrollToSection = (
  e: React.MouseEvent,
  offset = 0,
  hash: string
) => {
  e.preventDefault();
  scrollToElement(document.querySelector(hash), HEADER_HEIGHT + offset);
};
