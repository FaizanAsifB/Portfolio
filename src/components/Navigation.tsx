import useOnScroll from '@/hooks/useOnScroll'
import useMediaQuery from '@mui/material/useMediaQuery'
import { stagger, useAnimate, type AnimationSequence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { useWindowSize } from 'usehooks-ts'
import ThemeSwitch from './ui/ThemeSwitch'

const navLinks = [
  {
    title: 'Home',
    href: '#hero'
  },
  {
    title: 'About',
    href: '#about'
  },
  {
    title: 'Skills',
    href: '#skills'
  },
  {
    title: 'Projects',
    href: '#projects'
  },
  {
    title: 'Contact',
    href: '#contact'
  }
]

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
    <nav className='flex lg:flex-row-reverse gap-8 items-center'>
      <ThemeSwitch />

      {/* <input
        type='checkbox'
        role='button'
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
        aria-label='Display the navigation menu'
        className='menu relative z-[9999] lg:hidden'
      /> */}
      <button
        className={`mob-menu relative z-[9999] lg:hidden ${isOpen && 'opened'}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Main Menu '
      >
        <svg width='32' height='32' viewBox='0 0 100 100'>
          <path
            className='line line1'
            d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
          />
          <path className='line line2' d='M 20,50 H 80' />
          <path
            className='line line3'
            d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
          />
        </svg>
      </button>
      <ul
        ref={scope}
        className='flex gap-8 nav:flex-col nav:gap-16 nav:fixed nav:inset-[0_0_0_30%] nav:ml-auto nav:bg-primary/10 nav:backdrop-blur-3xl nav:px-16 nav:py-60 nav:translate-x-full nav:opacity-0'
      >
        {navLinks.map((link, i) => {
          return (
            <li key={link.title}>
              <a
                href={link.href}
                data-scrolled='false'
                className={twMerge(
                  'relative before:transition-transform before:duration-300 before:absolute before:w-full  before:rounded-sm before:-bottom-1 before:left:0 before:origin-right before:scale-x-0 before:h-1 before:bg-primary hover:before:origin-left hover:before:h-1 hover:before:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg data-[scrolled=true]:before:origin-left',
                  link.href.slice(1) === currentSection &&
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
