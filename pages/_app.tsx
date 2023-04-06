import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import appName from '@/utils/appName'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className}`}>
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
      <main>
        <Component {...pageProps} />
      </main>

      {/* FOOTER */}
      <footer>Footer</footer>
    </div>
  )
}
