import styles from '@/styles/ProductCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/client'
import { IProduct } from '@/types'

interface IProps {
  product: IProduct
}

export default function ProductCard({ product }: IProps) {
  return (
    <>
      <Link href={`/product/${product.slug.current}`}>
        <div
          className={`${styles.ProductCard} bg-white text-black rounded-lg w-72 h-96 px-8 py-6 flex flex-col justify-between items-center relative active:top-[0.1rem]`}
        >
          <div className='relative w-56 h-full rounded-2xl mb-4 flex-1'>
            <Image
              className='object-contain p-2 h-full select-none'
              src={urlFor(product.image && product.image[0]).url()}
              alt={product.name}
              fill
            />
          </div>

          <div className='flex-1 flex flex-col justify-between'>
            <div>
              <h2 className='text-2xl font-bold tracking-tight leading-8 mb-1'>
                {product.name}
              </h2>
              <p>{product.details}</p>
            </div>
            <h3 className='wordSpacingPrice text-4xl font-extrabold'>
              {product.price} &euro;
            </h3>
          </div>
        </div>
      </Link>
    </>
  )
}
