import ThemeSwitch from "./ui/ThemeSwitch";
import { animate } from "framer-motion/dom";

const navLinks = [
  {
    title: "Home",
    href: "#hero",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Navigation = () => {
  return (
    <nav className="flex lg:flex-row-reverse gap-8 items-center">
      <ThemeSwitch />

      <input
        type="checkbox"
        role="button"
        aria-label="Display the menu"
        className="menu relative z-[9999] lg:hidden peer"
      />
      <ul
        className="flex gap-8 nav:flex-col nav:gap-16 nav:fixed nav:inset-[0_0_0_30%] nav:bg-secondary nav:px-16 nav:py-60 nav:opacity-0 nav:peer-checked:animate-open-nav nav:pointer-events-none nav:peer-checked:pointer-events-auto
     nav:peer-checked:origin-top origin-top nav:animate-close-nav"
      >
        {navLinks.map((link, i) => {
          // const delayClassName = delay[i];
          return (
            <li
              className="nav:opacity-0 nav:translate-y-8 nav:animate-slide-up"
              style={{ animationDelay: `${i * 150 + 350}ms` }}
            >
              <a
                href={link.href}
                data-scrolled="false"
                className="relative before:transition-transform before:duration-300 before:absolute before:w-full  before:rounded-sm before:-bottom-1 before:left:0 before:origin-right before:scale-x-0 before:h-1 before:bg-primary hover:before:origin-left hover:before:h-1 hover:before:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg data-[scrolled=true]:before:origin-left 
                data-[scrolled=true]:before:scale-x-100"
              >
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navigation;
