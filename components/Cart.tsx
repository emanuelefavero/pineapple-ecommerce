import styles from '@/styles/Cart.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillShopping } from 'react-icons/ai'
import { useStateContext } from '@/context/StateContext'

export default function Cart() {
  const { setShowCart } = useStateContext()

  // TODO: Add handle to close cart when clicking outside of it

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
          <div className='px-6 py-20'>
            {/* EMPTY CART */}
            <div className='w-full flex flex-col justify-center items-center mb-20'>
              <AiFillShopping
                size={133}
                className='mb-2 text-slate-500 opacity-30'
              />
              <h3 className='text-xl font-extrabold wordSpacing tracking-tight select-none mb-1 text-slate-800'>
                Your shopping bag is empty
              </h3>
              <Link href='/'>
                <button
                  type='button'
                  onClick={() => setShowCart(false)}
                  className={`${styles.buyButton} mt-8 text-3xl font-bold select-none text-white bg-indigo-500 py-1 px-20 rounded-lg uppercase border-indigo-700 border-2 hover:bg-slate-800 hover:border-black active:border-white active:scale-95 transition-all duration-100 ease-in-out`}
                >
                  Continue Shopping
                </button>
              </Link>
            </div>

            {/* CART NOT EMPTY */}
            {/* Cart Card */}
            <div
              className={`${styles.cartCard} relative bg-white text-black rounded-lg w-full px-4 py-3 flex justify-between items-center mb-8`}
            >
              <div className='flex justify-center items-center'>
                {/* Image */}
                <Link href={`/`}>
                  <div className='relative rounded-2xl mr-4'>
                    <Image
                      className='w-24 h-24 object-contain p-2 select-none'
                      src='https://cdn.sanity.io/images/rnizwphe/production/e05a8c1cdcbbf03b7f6e9ead72dcb928e99ed89e-1134x1500.jpg'
                      alt='Product Image'
                      width={50}
                      height={50}
                    />
                  </div>
                </Link>

                <div className='flex flex-col'>
                  {/* Product Name */}
                  <h2 className='text-2xl font-bold tracking-tight leading-8 mb-2 w-72'>
                    iPhone 14 Pro Deep Purple 128GB
                  </h2>

                  {/* Product Quantity */}
                  <nav className='flex justify-start items-center mb-1'>
                    <div className='flex'>
                      <button className='w-8 h-8 rounded-full bg-black text-red-400 text-3xl font-semibold text-center flex justify-center items-center select-none p-1 mr-1 hover:text-red-300 active:text-red-500 active:scale-95'>
                        -
                      </button>
                      <p className='w-8 h-8 rounded-full bg-white text-black border-black border-2 text-2xl font-semibold text-center flex justify-center items-center select-none p-1 mr-1'>
                        1
                      </p>
                      <button className='w-8 h-8 rounded-full bg-black text-green-400 text-3xl font-semibold text-center flex justify-center items-center select-none p-1 mr-1 hover:text-green-300 active:text-green-500 active:scale-95'>
                        +
                      </button>
                    </div>
                  </nav>
                </div>
              </div>

              {/* Product Price */}
              <button className='absolute top-1 right-1 px-3 pt-0 pb-1 rounded-full text-4xl font-bold text-red-600 hover:text-red-500 active:text-red-700 active:scale-105'>
                x
              </button>
              <h3 className='absolute bottom-2 right-4 wordSpacingPrice text-4xl font-extrabold text-slate-800'>
                &euro; 799
              </h3>
            </div>

            {/* Cart Total */}
            <div className='w-full flex justify-between items-center mt-16 px-5'>
              <h3
                className={`${styles.total} text-slate-800 text-3xl font-extrabold wordSpacingTight tracking-tight leading-8 mb-1 mr-4`}
              >
                Total
              </h3>
              <h3 className='text-3xl font-extrabold wordSpacingTight tracking-tight leading-8 mb-1'>
                &euro; 2,397
              </h3>
            </div>

            {/* Buy Button */}
            <div className='w-full flex justify-center items-center'>
              <button
                className={`${styles.buyButton} mt-8 text-3xl font-bold select-none text-white bg-indigo-500 py-1 px-20 rounded-lg uppercase border-indigo-700 border-2 hover:bg-slate-800 hover:border-black active:border-white active:scale-95 transition-all duration-100 ease-in-out`}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ! Test Image Link
// https://cdn.sanity.io/images/rnizwphe/production/e05a8c1cdcbbf03b7f6e9ead72dcb928e99ed89e-1134x1500.jpg
