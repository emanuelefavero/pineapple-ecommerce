import styles from '@/styles/ProductCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/client'
import { useStateContext } from '@/context/StateContext'

import { IProduct } from '@/types'

interface IProps {
  product: IProduct
}

export default function ProductCard({ product }: IProps) {
  const { setQty } = useStateContext()

  return (
    // Set quantity to 1 when clicking on the product card
    <div onClick={() => setQty(1)}>
      <Link href={`/product/${product.slug.current}`}>
        <div
          className={`${styles.ProductCard} bg-white text-black rounded-lg w-full xs3:w-72 h-96 px-4 xs3:px-8 py-3 xs3:py-6 flex flex-col justify-between items-center relative active:top-[0.1rem]`}
        >
          <div className='relative w-full xs3:w-56 h-full rounded-2xl mb-4 flex-1'>
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
              &euro; {product.price}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  )
}
