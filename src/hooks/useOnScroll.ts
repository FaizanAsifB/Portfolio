import { useEffect, useState } from 'react'

const useOnScroll = () => {
  const [currentSection, setCurrentSection] = useState<null | string>(null)

  const navLinkEls = document.querySelectorAll(
    'nav>ul>li>a'
  ) as NodeListOf<HTMLAnchorElement>
  const sectionEls = document.querySelectorAll('section')
  const headerEl = document.querySelector('header') as HTMLElement

  const setHeaderScrolled = () => {
    if (window.scrollY > 0 && headerEl.dataset.scrolled === 'false')
      headerEl.setAttribute('data-scrolled', 'true')
    if (window.scrollY === 0 && headerEl.dataset.scrolled === 'true')
      headerEl.setAttribute('data-scrolled', 'false')
  }

  const intersectedSections = () => {
    sectionEls.forEach((sectionEl) => {
      if (
        window.scrollY >= sectionEl.offsetTop - 450 &&
        window.scrollY < sectionEl.offsetHeight + sectionEl.offsetTop
      )
        navLinkEls.forEach((navLinkEl) => {
          if (navLinkEl.href.includes(sectionEl.id))
            setCurrentSection(sectionEl.id)
        })
    })
  }

  useEffect(() => {
    setHeaderScrolled()
    intersectedSections()
    window.addEventListener('scroll', () => {
      setHeaderScrolled()
      intersectedSections()
    })
    return () => {
      window.removeEventListener('scroll', () => {
        setHeaderScrolled()
        intersectedSections()
      })
    }
  })

  return currentSection
}

export default useOnScroll
