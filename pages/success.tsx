import styles from '@/styles/SuccessPage.module.scss'
import { useEffect } from 'react'
import Link from 'next/link'
import { IoBagCheckSharp } from 'react-icons/io5'
import { runConfetti } from '@/lib/confetti'

// TODO: Reset cartItems, totalPrice and totalQuantity in the cart context

export default function SuccessPage() {
  useEffect(() => {
    // * CONFETTI ANIMATION
    runConfetti()
  }, [])

  return (
    <div className='bg-indigo-200 px-1 xs4:px-4 xs:px-10 pt-20 pb-40 flex justify-center items-center'>
      <div
        id='successPageCard'
        className='tripleCardEffect bg-violet-300 border-2 border-black px:1 xs4:px-4 xs:px-20 sm:px-32 py-12 flex flex-col justify-center items-center'
      >
        <IoBagCheckSharp className='w-10 h-10 xs4:w-20 xs4:h-20 text-green-700 mb-4' />
        <h1 className='text-sm xs4:text-4xl font-extrabold text-center wordSpacingTight tracking-tight mb-1 select-none'>
          Thank You For Your Order!
        </h1>
        <p className='text-sm xs4:text-xl font-bold text-center wordSpacingTight tracking-tight mb-12 select-none'>
          Check your email for the receipt
        </p>
        <p className='text-sm xs4:text-xl font-bold text-center wordSpacingTight tracking-tight mb-4'>
          <span className='select-none'>
            If you have any questions, please contact us at{' '}
          </span>
          <a
            className={`${styles.emailLink} inline text-indigo-800 hover:underline`}
            href='mailto:info@emanuelefavero.com'
          >
            info@emanuelefavero.com
          </a>
        </p>

        <Link href='/'>
          <button
            className='
          text-sm xs4:text-2xl font-bold select-none text-white bg-indigo-500 py-1 px-2 xs4:px-10 rounded-lg uppercase border-indigo-700 border-2 hover:bg-slate-800 hover:border-black active:border-white active:scale-95 transition-all duration-100 ease-in-out
        '
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}
