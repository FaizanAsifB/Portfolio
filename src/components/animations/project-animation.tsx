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
    once: true,
    amount: 0.5
  })

  useEffect(() => {
    animate(
      scope.current,
      isInView
        ? { opacity: 1, x: 0 }
        : { opacity: 0, x: isEven ? '400px' : '-400px' },
      { ease: 'easeInOut', duration: 1 }
    )
  }, [isInView])

  return (
    <div
      style={{
        opacity: 0,
        transform: `translateX(${isEven ? '400px' : '-400px'})`
      }}
      ref={scope}
    >
      {children}
    </div>
  )
}

export default ProjectAnimation
