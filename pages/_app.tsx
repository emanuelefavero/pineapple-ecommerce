import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import appName from '@/utils/appName'
import { StateContextProvider } from '@/context/StateContext'
import { Header, Footer } from '@/components'
import { Toaster } from 'react-hot-toast'
import { Inconsolata } from 'next/font/google'
import { Unbounded } from 'next/font/google'

const unbounded = Unbounded({ subsets: ['latin'] })
const inconsolata = Inconsolata({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inconsolata.className}`}>
      <Head>
        <title>{appName}</title>
        <meta
          name='description'
          content='An ecommerce selling the latest iPhones on all colors'
        />
        <meta
          name='keywords'
          content='technology, iphone, apple, store, ecommerce'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='robots' href='/robots.txt' />
        <link rel='manifest' href='/manifest.json' />
      </Head>

      {/* STATE CONTEXT */}
      <StateContextProvider>
        {/* HEADER */}
        <header className='sticky top-0 z-20'>
          <Header />
        </header>

        {/* BIG APP NAME HEADER */}
        {/* TODO: Move to separate component */}
        <div
          className={`${unbounded.className} select-none text-center border-black border-b-2 pt-1 pb-1 pr-1 pl-1 text-xl xs5:text-xl xs4:text-4xl xs4:pb-1 xs3:text-5xl xs3:pb-3 xs3:pt-2 xs2:text-6xl xs2:pb-4 xs:text-7xl xs:pb-5 sm:text-8xl md:text-9xl`}
        >
          {appName}
        </div>

        {/* MAIN */}
        <main className='bg-indigo-200'>
          <Toaster />
          <Component {...pageProps} />
        </main>

        {/* FOOTER */}
        <footer>
          <Footer />
        </footer>
      </StateContextProvider>
    </div>
  )
}
