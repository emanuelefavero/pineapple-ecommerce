import { GetStaticProps, GetStaticPaths } from 'next'
import { client, urlFor } from '@/lib/client'

import { IProduct } from '@/types'

interface IProps {
  product: IProduct
  products: IProduct[]
}

export default function ProductDetailPage({ product, products }: IProps) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.details}</p>
      <h3>{product.price}</h3>
    </div>
  )
}

// -< getStaticPaths >- and -< getStaticProps >- methods
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
