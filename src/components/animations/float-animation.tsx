import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card.tsx'

export function FloatAnimation({ src }: { src: string }) {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  '>
        <CardItem translateZ='100' className=' w-full'>
          <img
            src={src}
            height='1000'
            width='1000'
            className='h-[400px] w-full rounded-xl object-cover group-hover/card:shadow-xl'
            alt='imgPath'
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
