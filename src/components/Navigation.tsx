import { navLinks } from '@/data/nav-links.ts'
import useOnScroll from '@/hooks/useOnScroll'
import { stagger, useAnimate, type AnimationSequence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { useWindowSize } from 'usehooks-ts'
import ThemeSwitch from './ui/ThemeSwitch'
import HamburgerIcon from './ui/hamburger-icon'
import HamburgerButton from './ui/hamburger-button'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [scope, animate] = useAnimate()
  const { width = 0 } = useWindowSize()
  const [isDesktop, setIsDesktop] = useState(width >= 1024)
  const currentSection = useOnScroll()

  useEffect(() => {
    if (isDesktop && width < 1024) {
      setIsDesktop(false)
    }
    if (!isDesktop && width >= 1024) {
      setIsDesktop(true)

      animate([
        [scope.current, { transform: 'translateX(0)' }],
        [
          'li',
          {
            transform: 'scale(1)',
            opacity: 1,
            filter: 'blur(0px)',
            display: 'block'
          }
        ]
      ])
    }

    if (!isDesktop && width < 1024) {
      const menuAnimations: AnimationSequence = isOpen
        ? [
            [
              scope.current,
              { transform: 'translateX(0)', opacity: 1 },
              { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
            ],
            [
              'li',
              {
                transform: 'scale(1)',
                opacity: 1,
                filter: 'blur(0px)',
                display: 'block'
              },
              { delay: stagger(0.05), at: '-0.1' }
            ]
          ]
        : [
            [
              'li',
              { transform: 'scale(0.5)', opacity: 0, filter: 'blur(10px)' },
              { delay: stagger(0.05, { from: 'last' }), at: '<' }
            ],
            [scope.current, { transform: 'translateX(100%)' }, { at: '-0.1' }]
          ]

      animate(menuAnimations)
    }
  }, [isOpen, width, isDesktop])

  return (
    <nav className='flex items-center gap-8 lg:flex-row-reverse'>
      <ThemeSwitch />
      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />

      <ul
        ref={scope}
        className='flex gap-8 nav:fixed nav:inset-[0_0_0_30%] nav:ml-auto nav:translate-x-full nav:flex-col nav:gap-16 nav:bg-primary/10 nav:px-16 nav:py-60 nav:opacity-0 nav:backdrop-blur-3xl'
      >
        {navLinks.map((link) => {
          return (
            <li key={link.title}>
              <a
                href={link.href}
                data-scrolled='false'
                className={twMerge(
                  'before:left:0 relative rounded-lg before:absolute before:-bottom-1  before:h-1 before:w-full before:origin-right before:scale-x-0 before:rounded-sm before:bg-primary before:transition-transform before:duration-300 data-[scrolled=true]:before:origin-left hover:before:h-1 hover:before:origin-left hover:before:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  currentSection &&
                    link.href.includes(currentSection) &&
                    'before:origin-left before:scale-x-100'
                )}
              >
                {link.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Navigation
