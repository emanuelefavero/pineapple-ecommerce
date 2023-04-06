import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import appName from '@/utils/appName'
import { Header, Footer } from '@/components'
import { Inconsolata } from 'next/font/google'

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
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* HEADER */}
      <header>
        <Header />
      </header>

      {/* MAIN */}
      <main className='bg-fuchsia-300'>
        <Component {...pageProps} />
      </main>

      {/* FOOTER */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
