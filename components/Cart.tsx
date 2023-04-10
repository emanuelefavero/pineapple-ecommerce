import styles from '@/styles/Cart.module.scss'
import { useStateContext } from '@/context/StateContext'

export default function Cart() {
  const { setShowCart } = useStateContext()
  return (
    <>
      <section className='w-full h-full bg-slate-900 bg-opacity-80 fixed right-0 top-0 z-50 transition-all duration-1000 ease-in-out'>
        <div className='w-full xs2:w-10/12 sm:w-[37.5rem] h-full bg-indigo-200 float-right relative border-l-2 border-black'>
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
        </div>
      </section>
    </>
  )
}
