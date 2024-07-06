import { useAnimate, useInView } from 'framer-motion'
import { useEffect, useState } from 'react'

const ProjectAnimation = ({
  children,
  isEven
}: {
  children: React.ReactNode
  isEven: boolean
}) => {
  const [scope, animate] = useAnimate()
  const [inViewAmount, setInViewAmount] = useState(0.2)
  const isInView = useInView(scope, {
    once: true,
    amount: 0.2
  })

  useEffect(() => {
    setInViewAmount(window.innerWidth >= 1024 ? 0.4 : 0.2)
    animate(
      scope.current,
      isInView
        ? { opacity: 1, x: 0 }
        : { opacity: 0, x: isEven ? '200px' : '-200px' },
      { ease: 'easeInOut', duration: 0.8 }
    )
  }, [isInView])

  return (
    <div
      style={{
        height: '100%',
        opacity: 0,
        transform: `translateX(${isEven ? '200px' : '-200px'})`
      }}
      ref={scope}
    >
      {children}
    </div>
  )
}

export default ProjectAnimation
