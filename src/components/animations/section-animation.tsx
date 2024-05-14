import { useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'

const SectionAnimation = ({ children }: { children: React.ReactNode }) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    animate(
      scope.current,
      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 },
      { ease: 'easeInOut', duration: 0.5 }
    )
  })

  return <div ref={scope}>{children}</div>
}

export default SectionAnimation
