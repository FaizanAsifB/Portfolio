import useOnScroll from "@/hooks/useOnScroll";
import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ui/ThemeSwitch";

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
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const currentSection = useOnScroll();
  console.log(currentSection);

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            scope.current,
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          [scope.current, { transform: "translateX(100%)" }, { at: "-0.1" }],
        ];

    animate(menuAnimations);
  }, [isOpen]);

  return (
    <nav className="flex lg:flex-row-reverse gap-8 items-center">
      <ThemeSwitch />

      <input
        type="checkbox"
        role="button"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
        aria-label="Display the menu"
        className="menu relative z-[9999] lg:hidden"
      />
      <ul
        ref={scope}
        className="flex gap-8 nav:flex-col nav:gap-16 nav:fixed nav:inset-[0_0_0_30%] nav:ml-auto nav:bg-background nav:px-16 nav:py-60 nav:translate-x-full "
      >
        {navLinks.map((link, i) => {
          return (
            <li key={link.title}>
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
