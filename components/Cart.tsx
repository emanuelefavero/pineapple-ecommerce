import styles from '@/styles/Cart.module.scss'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { AiFillShopping } from 'react-icons/ai'
import { urlFor } from '@/lib/client'
import { useStateContext } from '@/context/StateContext'
import getStripe from '@/lib/getStripe'

export default function Cart() {
  const {
    totalPrice,
    totalQuantities,
    setShowCart,
    cartItems,
    updateCartItemQuantity,
    removeCartItem,
  } = useStateContext()
  const cartRef = useRef() as React.MutableRefObject<HTMLInputElement>

  // STRIPE CHECKOUT
  const handleCheckout = async () => {
    const stripe = await getStripe()

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    })

    if (response.status === 500) return
    // if (response.statusCode === 500) return

    const data = await response.json()

    toast.loading(
      (t) => (
        <span
          // padding included here so that all the toast is clickable
          style={{
            paddingTop: '0.4rem',
            paddingBottom: '0.4rem',
            cursor: 'pointer',
          }}
          // dismiss toast on click
          onClick={() => toast.dismiss(t.id)}
        >
          {/* any jsx content here */}
          Redirecting to checkout...
        </span>
      ),
      {
        // TIP: By giving it an id, yu can dismiss it with toast.dismiss('custom-toast')
        // TIP: When you give it an id, only one toast with that id can be shown at a time
        id: 'toast-redirecting-to-checkout', // unique id

        // duration: 2000,
        style: {
          // fontWeight: 'bold',
          border: '1px solid #000',
          paddingLeft: '1rem',
          color: '#000',
          backgroundColor: '#eef2ff',
          userSelect: 'none',
        },
        iconTheme: {
          primary: '#6366f1',
          secondary: '#eef2ff',
        },
      }
    )

    stripe?.redirectToCheckout({ sessionId: data.id })
  }

  // TODO: Add handle to close cart when clicking outside of it

  return (
    <>
      {/* Cart Overlay */}
      <section
        className='w-full h-full bg-slate-900 bg-opacity-80 fixed right-0 top-0 z-50 transition-all duration-1000 ease-in-out'
        ref={cartRef}
      >
        {/* Cart */}
        <div className='w-full xs2:w-10/12 sm:w-[37.5rem] h-full bg-indigo-200 float-right relative border-l-2 border-black overflow-y-scroll'>
          {/* Cart Header */}
          <nav className='w-full bg-white px-4 py-4 border-b-2 border-black select-none flex flex-col xs4:flex-row justify-start items-center'>
            <button
              className={`${styles.closeCartButton} text-3xl font-bold tracking-tight mb-2 xs4:mb-0 xs4:mr-2`}
              onClick={() => setShowCart(false)}
            >
              <span className='transform transition-all group-hover:scale-90'>
                &lt;
              </span>{' '}
              Cart
            </button>
            <span className='text-indigo-600 text-2xl font-bold tracking-tight relative -top-2'>
              ({totalQuantities} items)
            </span>
          </nav>

          {/* Cart Body */}
          <div className='px-3 xs:px-6 py-20'>
            {/* EMPTY CART */}
            {cartItems.length < 1 && (
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
            )}

            {/* CART NOT EMPTY */}
            {/* Cart Card */}
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <>
                  <div
                    key={item._id}
                    className={`${styles.cartCard} relative bg-white text-black rounded-lg w-full px-4 py-10 xs4:py-3 flex justify-between items-center mb-8`}
                  >
                    <div className='flex flex-col xs:flex-row justify-center items-start xs:items-center'>
                      {/* Image */}
                      <Link href={`/`}>
                        <div className='relative rounded-2xl mr-4'>
                          <Image
                            className='w-24 h-24 object-contain p-2 select-none'
                            src={urlFor(item?.image[0]).url()}
                            alt='Product Image'
                            width={50}
                            height={50}
                          />
                        </div>
                      </Link>

                      <div className='flex flex-col'>
                        {/* Product Name */}
                        <h2 className='text-2xl font-bold tracking-tight leading-8 mb-2 flex flex-wrap break-words'>
                          {item?.name}
                        </h2>

                        {/* Product Quantity */}
                        <nav className='flex justify-start items-center mb-10 xs4:mb-1'>
                          <div className='flex flex-col xs4:flex-row'>
                            <button
                              className='w-8 h-8 rounded-full bg-black text-red-400 text-3xl font-semibold text-center flex justify-center items-center select-none p-1 mr-1 hover:text-red-300 active:text-red-500 active:scale-95'
                              onClick={() =>
                                updateCartItemQuantity(item._id, 'dec')
                              }
                            >
                              -
                            </button>
                            <p className='w-8 h-8 rounded-full bg-white text-black border-black border-2 text-2xl font-semibold text-center flex justify-center items-center select-none p-1 mr-1'>
                              {item.quantity}
                            </p>
                            <button
                              className='w-8 h-8 rounded-full bg-black text-green-400 text-3xl font-semibold text-center flex justify-center items-center select-none p-1 mr-1 hover:text-green-300 active:text-green-500 active:scale-95'
                              onClick={() =>
                                updateCartItemQuantity(item._id, 'inc')
                              }
                            >
                              +
                            </button>
                          </div>
                        </nav>
                      </div>
                    </div>

                    {/* Product Price */}
                    <button
                      className='absolute top-1 right-1 px-3 pt-0 pb-1 rounded-full text-4xl font-bold text-red-600 hover:text-red-500 active:text-red-700 active:scale-105'
                      onClick={() => removeCartItem(item._id)}
                    >
                      x
                    </button>
                    <h3 className='absolute bottom-2 right-4 wordSpacingPrice text-4xl font-extrabold text-slate-800'>
                      &euro; {item?.price}
                    </h3>
                  </div>
                </>
              ))}

            {cartItems.length >= 1 && (
              <>
                {/* Cart Total */}
                <div className='w-full flex flex-col xs4:flex-row justify-between items-center mt-16 px-5'>
                  <h3
                    className={`${styles.total} text-slate-800 text-3xl font-extrabold wordSpacingTight tracking-tight leading-8 mb-4 xs:4mb-1 mr-4`}
                  >
                    Total
                  </h3>
                  <h3 className='text-3xl font-extrabold wordSpacingTight tracking-tight leading-8 mb-1'>
                    &euro; {totalPrice}
                  </h3>
                </div>

                {/* Buy Button */}
                <div className='w-full flex justify-center items-center'>
                  <button
                    className={`${styles.buyButton} mt-8 mb-2 text-3xl font-bold select-none text-white bg-indigo-500 py-1 px-20 rounded-lg uppercase border-indigo-700 border-2 hover:bg-slate-800 hover:border-black active:border-white active:scale-95 transition-all duration-100 ease-in-out`}
                    onClick={handleCheckout}
                  >
                    Buy
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

// ! Test Image Link
// https://cdn.sanity.io/images/rnizwphe/production/e05a8c1cdcbbf03b7f6e9ead72dcb928e99ed89e-1134x1500.jpg
