const navLinkEls = document.querySelectorAll(
  "#nav-link a",
) as NodeListOf<HTMLAnchorElement>;
const sectionEls = document.querySelectorAll("section");
const heroEl = document.querySelector("#hero img") as HTMLImageElement;
const headerEl = document.querySelector("header") as HTMLElement;
const headerBot = headerEl?.offsetHeight;
const heroTop = heroEl.offsetTop;

const intersectedHero = () => {
  if (
    window.scrollY >= heroTop - headerBot &&
    headerEl.dataset.scrolled === "false"
  )
    headerEl.dataset.scrolled = "true";
  if (
    window.scrollY <= heroTop - headerBot &&
    headerEl.dataset.scrolled === "true"
  )
    headerEl.dataset.scrolled = "false";
};

const intersectedSections = () => {
  sectionEls.forEach((sectionEl) => {
    if (
      window.scrollY >= sectionEl.offsetTop - 450 &&
      window.scrollY < sectionEl.offsetHeight + sectionEl.offsetTop
    )
      navLinkEls.forEach((navLinkEl) => {
        navLinkEl.dataset.scrolled = "false";
        if (navLinkEl.href.includes(sectionEl.id))
          navLinkEl.dataset.scrolled = "true";
      });
  });
};

export const handleIntersections = () => {
  intersectedHero();
  intersectedSections();
};

(() => handleIntersections())();

window.onscroll = () => {
  handleIntersections();
};
