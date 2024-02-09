import { ModeToggle } from '../mode-toggle'

const navLinks = [
  {
    title: 'Home',
    href: '#home',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Skills',
    href: '#skills',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]
const Navigation = () => {
  return (
    <header className="fixed top-0 w-full shadow-sm bg-secondary">
      <div className="container flex items-center justify-between text-2xl ">
        <div>logo</div>
        <nav className="flex gap-8">
          <ul className="flex gap-8 p-6">
            {navLinks.map(link => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="relative py-1 before:transition-transform before:duration-300 before:absolute before:w-full before:h-1 before:rounded-sm before:bottom-0 before:left:0 before:origin-right before:scale-x-0 before:bg-accent hover:before:origin-left hover:before:scale-x-100"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
export default Navigation
