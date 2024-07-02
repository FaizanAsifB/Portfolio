import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card.tsx'

export function FloatAnimation({ src }: { src: string }) {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='group/card relative h-[360px] w-[335px] rounded-xl border border-black/[0.1] bg-gray-50 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]'>
        <CardItem translateZ='100' className='w-full'>
          <img
            src={src}
            height='360'
            width='335'
            className='rounded-xl object-contain group-hover/card:shadow-xl'
            alt='imgPath'
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
