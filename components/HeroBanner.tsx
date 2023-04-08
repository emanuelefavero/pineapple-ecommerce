import { IHeroBanner } from '@/types'

interface IProps {
  heroBanner: IHeroBanner
}

export default function HeroBanner({ heroBanner }: IProps) {
  return (
    <>
      <h1>Hero Banner</h1>
      <h2>{heroBanner?.heroText}</h2>
    </>
  )
}
