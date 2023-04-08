import { client, urlFor } from '@/lib/client'
import { ProductCard, HeroBanner } from '@/components'

import { IProduct, IHeroBanner } from '@/types'

interface IProps {
  products: IProduct[]
  heroBanner: IHeroBanner
}

export default function Home({ products, heroBanner }: IProps) {
  return (
    <>
      {/* HERO BANNER */}
      <HeroBanner heroBanner={heroBanner} />

      {/* PRODUCTS */}
      {/* TODO: Add an header in this section (e.g. Products:) */}
      {/* TODO: Then valuate if it should be moved to own Component */}
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
  const products = await client.fetch('*[_type == "product"]')
  const heroBannerData = await client.fetch(`*[_type == "heroBanner"]`)
  const heroBanner = heroBannerData.length > 0 ? heroBannerData[0] : null

  return {
    props: {
      products,
      heroBanner,
    },

    // Revalidate every 60 seconds
    // revalidate: 60,
  }
}
