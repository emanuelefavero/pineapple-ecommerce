import { client } from '@/lib/client'
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
      {/* TODO: Then valuate if it should be moved to own Component */}
      <h2 className='px-10 pt-14 text-xl xs4:text-4xl font-bold text-center tracking-tight'>
        Popular Products
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
  const products = await client.fetch('*[_type == "product"]')
  const heroBannerData = await client.fetch(`*[_type == "heroBanner"]`)
  const heroBanner = heroBannerData.length > 0 ? heroBannerData[0] : null

  return {
    props: {
      products,
      heroBanner,
    },

    // Revalidate every 60 seconds***
    revalidate: 60,

    // TIP: ***ISR (Incremental Static Regeneration) is a new feature in Next.js that allows you to update existing pages by re-rendering them in the background as traffic comes in.

    // It is needed with services like Sanity cause those services will not trigger a rebuild of the site when data is updated

    // Revalidation will only happen if the page is visited (it will not impact resources when the page is not visited. With higher traffic you should consider higher revalidation times)
  }
}
