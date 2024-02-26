import { useEffect, useState } from 'react'

const useOnScroll = () => {
  const [currentSection, setCurrentSection] = useState<null | string>(null)

  const navLinkEls = document.querySelectorAll(
    'nav>ul>li>a'
  ) as NodeListOf<HTMLAnchorElement>
  const sectionEls = document.querySelectorAll('section')
  const heroImg = document.getElementById('hero-img') as HTMLImageElement
  const headerEl = document.querySelector('header') as HTMLElement
  const headerBot = headerEl?.offsetHeight
  const heroTop = heroImg?.offsetTop

  const intersectedHero = () => {
    if (
      window.scrollY >= heroTop - headerBot &&
      headerEl.dataset.scrolled === 'false'
    )
      headerEl.setAttribute('data-scrolled', 'true')
    if (
      window.scrollY <= heroTop - headerBot &&
      headerEl.dataset.scrolled === 'true'
    )
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
    intersectedHero()
    intersectedSections()
    window.addEventListener('scroll', () => {
      intersectedHero()
      intersectedSections()
    })
    return () => {
      window.removeEventListener('scroll', () => {
        intersectedHero()
        intersectedSections()
      })
    }
  })

  return currentSection

  // const handleIntersections = () => {
  //   intersectedHero();
  //   intersectedSections();
  // };

  // (() => handleIntersections())();

  // window.onscroll = () => {
  //   handleIntersections();
  // };
}

export default useOnScroll
