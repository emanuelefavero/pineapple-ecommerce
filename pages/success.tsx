// TODO: Style success page
// TODO: Add confetti animation
import { IoBagCheckSharp } from 'react-icons/io5'

export default function success() {
  return (
    <div className='bg-indigo-200 px-10 pt-20 pb-40 flex justify-center items-center'>
      <div
        id='successPageCard'
        className='tripleCardEffect bg-violet-300 border-2 border-black px-32 py-12 flex flex-col justify-center items-center'
      >
        <IoBagCheckSharp className='w-20 h-20 text-green-700 mb-4' />
        <h1 className='text-4xl font-extrabold text-center wordSpacingTight tracking-tight mb-1'>
          Thank You For Your Order!
        </h1>
        <p className='text-xl font-bold text-center wordSpacingTight tracking-tight mb-12'>
          Check your email for the receipt
        </p>
        <p className='text-xl font-bold text-center wordSpacingTight tracking-tight mb-4'>
          If you have any questions, please contact us at{' '}
          <a
            style={{
              fontSize: '1.25rem',
            }}
            className='text-indigo-800 hover:underline'
            href='mailto:info@emanuelefavero.com'
          >
            info@emanuelefavero.com
          </a>
        </p>

        <button
          className='
          text-2xl font-bold select-none text-white bg-indigo-500 py-1 px-10 rounded-lg uppercase border-indigo-700 border-2 hover:bg-slate-800 hover:border-black active:border-white active:scale-95 transition-all duration-100 ease-in-out
        '
        >
          Continue Shopping
        </button>
      </div>
    </div>
  )
}
