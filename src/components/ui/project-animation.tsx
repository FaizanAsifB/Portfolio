import { useAnimate, useInView, type AnimationSequence } from 'framer-motion'
import { useEffect } from 'react'

const ProjectAnimation = ({
  children,
  isEven
}: {
  children: React.ReactNode
  isEven: boolean
}) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    if (!isInView) {
      animate(scope.current, { opacity: 0, x: isEven ? '100%' : '-100%' })
    }
    if (isInView) {
      animate(
        scope.current,
        { opacity: 1, x: 0 },
        { ease: 'easeInOut', duration: 0.5 }
      )
    }
  })

  return <div ref={scope}>{children}</div>
}

export default ProjectAnimation
