import { client } from '@/lib/client'

export default function Home({ products }: any) {
  return (
    <>
      <h1>Home</h1>
      {products.map((product: any) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>{product.details}</p>
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
