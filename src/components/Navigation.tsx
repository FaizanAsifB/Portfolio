import ThemeSwitch from "@/components/ui/ThemeSwitch.tsx";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { handleIntersections } from "../utils/utils.ts";

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
// nav:opacity-0 nav:peer-checked:opacity-100
const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    window.addEventListener("scroll", handleIntersections);
    return () => window.removeEventListener("scroll", handleIntersections);
  }, []);

  return (
    <motion.nav
      className="flex lg:flex-row-reverse gap-8 items-center"
      initial={false}
      animate={isOpen || isDesktop ? "open" : "closed"}
    >
      <ThemeSwitch />

      <input
        type="checkbox"
        role="button"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
        aria-label="Display the menu"
        className="menu relative z-[9999] lg:hidden peer"
      />
      <motion.ul
        className="flex gap-8 nav:flex-col nav:gap-16 nav:fixed nav:inset-[0_0_0_30%] nav:bg-secondary nav:px-16 nav:py-60"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
      >
        {navLinks.map((link) => (
          <li key={link.title} id="nav-link">
            <a
              href={link.href}
              data-scrolled="false"
              className="relative before:transition-transform before:duration-300 before:absolute before:w-full before:h-1 before:rounded-sm before:-bottom-1 before:left:0 before:origin-right before:scale-x-0 before:bg-primary hover:before:origin-left hover:before:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg data-[scrolled=true]:before:origin-left data-[scrolled=true]:before:scale-x-100"
            >
              {link.title}
            </a>
          </li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};
export default Navigation;
