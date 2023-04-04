import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'rnizwphe',
  dataset: 'production',
  apiVersion: '2023-04-04', // use current date
  useCdn: false, // ! TODO: turn this to true in production if you want to use CDN cache

  // NOTE: the token is only needed if the application updates data from the client side
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  //   ignoreBrowserTokenWarning: true,
})

// use sanity images and access images urls
const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

// TIP: If you are using Next.js there is another sanity client that you can use
// import { createClient } from 'next-sanity'
// TODO: Try to use this client instead of the one above - @see https://www.sanity.io/docs/connect-your-content-to-next-js
