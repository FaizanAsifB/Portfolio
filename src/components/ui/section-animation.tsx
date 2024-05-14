import { useAnimate, useInView, type AnimationSequence } from 'framer-motion'
import { useEffect } from 'react'

const SectionAnimation = ({ children }: { children: React.ReactNode }) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    if (!isInView) {
      animate(scope.current, { opacity: 0, y: 200 })
    }
    if (isInView) {
      animate(
        scope.current,
        { opacity: 1, y: 0 },
        { ease: 'easeInOut', duration: 0.5 }
      )
    }
  })

  return <div ref={scope}>{children}</div>
}

export default SectionAnimation
