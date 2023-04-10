import styles from '@/styles/Cart.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext'

export default function Cart() {
  const { setShowCart } = useStateContext()
  return (
    <>
      {/* Cart Overlay */}
      <section className='w-full h-full bg-slate-900 bg-opacity-80 fixed right-0 top-0 z-50 transition-all duration-1000 ease-in-out'>
        {/* Cart */}
        <div className='w-full xs2:w-10/12 sm:w-[37.5rem] h-full bg-indigo-200 float-right relative border-l-2 border-black'>
          {/* Cart Header */}
          <nav className='w-full bg-white px-4 py-4 border-b-2 border-black select-none flex justify-start items-center'>
            <button
              className={`${styles.closeCartButton} text-3xl font-bold tracking-tight mr-2`}
              onClick={() => setShowCart(false)}
            >
              <span className='transform transition-all group-hover:scale-90'>
                &lt;
              </span>{' '}
              Cart
            </button>
            <span className='text-indigo-600 text-2xl font-bold tracking-tight relative -top-2'>
              (3 items)
            </span>
          </nav>

          {/* Cart Body */}
          <div className='p-6'>
            <Link href={`/`}>
              <div
                className={`${styles.cartCard} bg-white text-black rounded-lg w-full px-6 py-2 flex justify-between items-center`}
              >
                <div className='flex justify-center items-center'>
                  <div className='relative rounded-2xl mr-4'>
                    <Image
                      className='w-24 h-24 object-contain p-2 select-none'
                      src='https://cdn.sanity.io/images/rnizwphe/production/e05a8c1cdcbbf03b7f6e9ead72dcb928e99ed89e-1134x1500.jpg'
                      alt='Product Image'
                      width={50}
                      height={50}
                    />
                  </div>

                  <h2 className='text-2xl font-bold tracking-tight leading-8 mb-1'>
                    iPhone 14 Blue
                  </h2>
                </div>

                <h3 className='wordSpacingPrice text-4xl font-extrabold text-slate-800'>
                  &euro; 799
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ! Test Image Link
// https://cdn.sanity.io/images/rnizwphe/production/e05a8c1cdcbbf03b7f6e9ead72dcb928e99ed89e-1134x1500.jpg
