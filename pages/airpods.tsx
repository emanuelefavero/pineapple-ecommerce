import Head from 'next/head'
import { client } from '@/lib/client'
import { ProductCard } from '@/components'

import { IProduct } from '@/types'

interface IProps {
  products: IProduct[]
}

export default function AirPodsCategoryPage({ products }: IProps) {
  return (
    <>
      <Head>
        <title>AirPods products</title>
      </Head>
      {/* PRODUCTS */}
      {/* TODO: Then valuate if it should be moved to own Component */}
      <h2 className='px-10 pt-14 text-xl xs4:text-4xl font-bold text-center tracking-tight select-none'>
        AirPods
      </h2>
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

// -< getStaticProps >-
export const getStaticProps = async () => {
  // Fetch all products and banner in the Sanity dataset
  // const products = await client.fetch('*[_type == "product"]')
  const products = await client.fetch(
    '*[_type == "product" && category->name == "AirPods"]'
  )

  const heroBannerData = await client.fetch(`*[_type == "heroBanner"]`)
  const heroBanner = heroBannerData.length > 0 ? heroBannerData[0] : null

  return {
    props: {
      products,
      heroBanner,
    },

    // Revalidate every 60 seconds***
    revalidate: 60,
  }
}
// TIP: *** see pages/index.tsx for more info
