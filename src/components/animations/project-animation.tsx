import { useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'

const ProjectAnimation = ({
  children,
  isEven
}: {
  children: React.ReactNode
  isEven: boolean
}) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, {
    once: true
  })

  useEffect(() => {
    animate(
      scope.current,
      isInView
        ? { opacity: 1, x: 0 }
        : { opacity: 0, x: isEven ? '100%' : '-100%' },
      { ease: 'easeInOut', duration: 1 }
    )
  })

  return <div ref={scope}>{children}</div>
}

export default ProjectAnimation
