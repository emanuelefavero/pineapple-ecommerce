import { client, urlFor } from '@/lib/client'
import { ProductCard } from '@/components'

import { IProduct } from '@/types'

interface IProps {
  products: IProduct[]
}

export default function Home({ products }: IProps) {
  return (
    <>
      <section className='container mx-auto flex gap-12 flex-wrap justify-center items-center py-16'>
        {products.map((product: any) => (
          <div key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </section>
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
