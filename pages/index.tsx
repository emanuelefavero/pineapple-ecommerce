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
          <>
            <ProductCard product={product} />
          </>
        ))}
      </section>

      {/* <section className='bg-red-200 container mx-auto grid justify-items-center items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-12'>
        {products.map((product: any) => (
          <>
            <ProductCard product={product} />
          </>
        ))}
      </section> */}
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
