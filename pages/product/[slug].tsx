import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import { client, urlFor } from '@/lib/client'
import { ProductCard } from '@/components'
import { useStateContext } from '@/context/StateContext'

import { IProduct } from '@/types'

interface IProps {
  product: IProduct
  products: IProduct[]
}

export default function ProductDetailPage({ product, products }: IProps) {
  const { qty, decQty, incQty, onAdd, setShowCart } = useStateContext()
  const [index, setIndex] = useState(0)

  const handleBuyNow = () => {
    // TIP: Here we pass product as any because eventually we will add a quantity property to the product object (see context/StateContext.tsx)
    // TIP: Ideally we would avoid this by creating a new object with the product properties and the quantity property
    onAdd(product, qty)

    setShowCart(true)
  }

  return (
    <>
      <section className='bg-white flex items-center border-black border-b-2 flex-col sm:flex-row'>
        {/* PRODUCT IMAGE */}
        <div className='bg-white w-full h-80 sm:h-96 py-10 sm:w-1/2 flex items-center justify-center'>
          <Image
            className='object-contain max-h-full max-w-full select-none'
            src={urlFor(product.image && product.image[index]).url()}
            alt={product.name}
            width={600}
            height={600}
          />
        </div>

        {/* PRODUCT SELECTABLE IMAGES */}
        <nav className='w-full flex justify-end items-center h-16 sm:h-full sm:w-16 mb-3 overflow-hidden sm:flex-col gap-2 px-4'>
          {product.image?.map((item, i) => (
            <div
              key={i}
              className={`rounded-md ${
                i === index ? 'border-black border' : ''
              }`}
            >
              <Image
                width={50}
                height={50}
                src={urlFor(item).url()}
                className={`h-16 sm:h-16 sm:w-20 object-contain select-none`}
                // select image on mouse enter (hover state on desktop, click on mobile)
                onMouseEnter={() => setIndex(i)}
                alt={`${i} ${product.name}`}
              />
            </div>
          ))}
        </nav>

        {/* PRODUCT DETAILS */}
        <div className='w-full flex justify-center items-center h-96 xs5:h-custom-mobile xs2:h-96 sm:h-96 sm:w-1/2 py-16 sm:py-8 md:py-16 px-1 xs5:px-4 xs3:px-8 bg-indigo-100 border-black border-t-2 sm:border-l-2 sm:border-t-0'>
          <div>
            <h1 className='wordSpacingTight text-3xl font-bold tracking-tight leading-8 mb-1'>
              {product.name}
            </h1>
            <p className='text-lg font-normal'>{product.details}</p>
            <p className='wordSpacingTight tracking-tight text-4xl font-extrabold mb-4'>
              <span className='mr-2'>&euro;</span>
              {product.price}
            </p>

            {/* Product Quantity */}
            <nav className='flex flex-col xs3:flex-row justify-start items-center mb-5'>
              <p className='text-md font-semibold select-none mr-3 mb-3 xs3:mb-0'>
                Quantity:
              </p>
              <div className='flex flex-col xs5:flex-row'>
                <button
                  className='w-8 h-8 rounded-full bg-black text-red-400 text-3xl font-semibold text-center flex justify-center items-center select-none p-1 mr-1 hover:text-red-300 active:text-red-500 active:scale-95'
                  onClick={decQty}
                >
                  -
                </button>
                <p className='w-8 h-8 rounded-full bg-white text-black border-black border-2 text-2xl font-semibold text-center flex justify-center items-center select-none p-1 mr-1'>
                  {qty}
                </p>
                <button
                  className='w-8 h-8 rounded-full bg-black text-green-400 text-3xl font-semibold text-center flex justify-center items-center select-none p-1 mr-1 hover:text-green-300 active:text-green-500 active:scale-95'
                  onClick={incQty}
                >
                  +
                </button>
              </div>
            </nav>

            {/* Product CTA */}
            <nav>
              <button
                className='productDetailButton wordSpacingCompact text-lg font-extrabold tracking-tight bg-white rounded-md py-1 w-full xs2:w-max px-4 border-black border-2 select-none mr-4 mb-2 relative active:top-[0.08rem]'
                onClick={() => {
                  onAdd(product, qty)
                }}
              >
                Add To Cart
              </button>
              <button
                className='productDetailButton wordSpacingCompact text-lg font-extrabold tracking-tight bg-amber-300 rounded-md py-1 w-full xs2:w-max px-4 border-black border-2 select-none relative active:top-[0.08rem]'
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* PRODUCT CARD CAROUSEL SECTION */}
      {/* TODO: Add swipe gestures (left, right) to carousel */}
      <div className='marquee overflow-x-hidden bg-slate-200'>
        <div className='px-7 pt-7'>
          <h2 className='font-extrabold text-2xl wordSpacingCompact tracking-tight select-none'>
            You may also like:
          </h2>
        </div>
        <section className='container mx-auto flex gap-12 justify-center items-center py-16'>
          {products.map((currentProduct: any) => (
            <>
              {currentProduct._id !== product._id ? (
                <div key={currentProduct._id}>
                  <ProductCard product={currentProduct} />
                </div>
              ) : (
                <div key={currentProduct._id} className='hidden'></div>
              )}
            </>
          ))}
        </section>
      </div>
    </>
  )
}

// -< getStaticPaths >-
// Fetch all products from sanity to generate paths (needed for SSG below)
export const getStaticPaths: GetStaticPaths = async () => {
  const products = await client.fetch('*[_type == "product"]')

  const paths = products.map((product: any) => ({
    params: { slug: product.slug.current },
  }))

  return {
    paths,

    // ? the server will return a 404 page for any paths that are not generated at build time. This means that all possible paths for the website must be specified in the paths array returned by getStaticPaths method.
    fallback: false,

    // ? the server will not return a 404 page for any path that is not generated at build time. Instead, Next.js will wait for the data to be generated on the server and then render the page with the new data.
    // fallback: 'blocking',
  }
}

// -< getStaticProps >-
// Fetch the product from sanity that matches the slug in the url
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }

  const product = await client.fetch(
    // This is a sanity specific query that will get the product with the slug that matches the slug in the url
    // TIP: the [0] is used so only the first result is returned
    `*[_type == "product" && slug.current == $slug][0]`,
    { slug }
  )

  const products = await client.fetch('*[_type == "product"]')

  return {
    props: {
      product,
      products,
    },

    // TIP: Change this if the application needs to be updated more frequently or less or not at all
    // Revalidate at most once per minute
    revalidate: 60,
  }
}
