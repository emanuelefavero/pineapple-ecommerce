import { client, urlFor } from '@/lib/client'
import Image from 'next/image'

import { IProduct } from '@/types'

interface IProps {
  products: IProduct[]
}

export default function Home({ products }: IProps) {
  return (
    <>
      <h1>Home</h1>
      {products.map((product: any) => (
        <div key={product._id}>
          <div className='relative w-56 h-56 bg-white rounded-2xl'>
            <Image
              className='object-contain p-5'
              src={urlFor(product.image && product.image[0]).url()}
              alt={product.name}
              fill
            />
          </div>

          <h2>{product.name}</h2>
          <p>{product.details}</p>
          <p>{product.price} &euro;</p>
        </div>
      ))}
    </>
  )
}

export const getServerSideProps = async () => {
  // Fetch all products and banner in the Sanity dataset
  const products = await client.fetch('*[_type == "product"]')

  return {
    props: {
      products,
    },

    // Revalidate every 60 seconds
    // revalidate: 60,
  }
}
