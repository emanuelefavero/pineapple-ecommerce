import styles from '@/styles/AboutUsPage.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUsPage() {
  return (
    <div className='flex flex-col justify-center items-center px-0'>
      <div className='relative bg-indigo-400 w-full h-[600px] flex flex-col justify-center items-center border-b-2 border-black'>
        <Image
          className='object-cover max-h-[600px] select-none'
          fill
          src='/team.svg'
          alt='team'
        />
      </div>
      <div className='bg-indigo-200 px-1 xs4:px-4 xs:px-10 pt-20 pb-40 flex flex-col justify-center items-center'>
        <div className='relative -top-[7.4rem] w-full'>
          <div className='absolute top-[4.6rem] left-1 w-24 h-1 bg-violet-500'></div>
          <div className='absolute top-[4.1rem] left-1 w-24 h-1 bg-stone-500'></div>
          <h1 className='relative xs2:absolute top-0 left-0 text-7xl font-extrabold wordSpacingTight tracking-tight uppercase'>
            Who We Are
          </h1>
        </div>
        <div className='mb-10 text-xl font-medium tracking-tight max-w-prose'>
          <p className='mb-7'>
            We are a team of tech enthusiasts who are passionate about the
            latest Apple products and accessories.
          </p>
          <p className='mb-7'>
            At our store, we offer a wide range of products, including iPhones,
            AirPods, cool gadgets and more. We believe that everyone should have
            access to the latest and greatest technology, which is why we are
            committed to providing high-quality products at affordable prices.
          </p>
          <p className='mb-7'>
            Our website is built with Next.js, Typescript, Sanity, Stripe, and
            Tailwind, which allows us to create a fast and seamless shopping
            experience for our customers.
          </p>
          <div className='mb-7'>
            <h2 className='mb-4 text-5xl font-bold'>Contacts</h2>
            <p>
              github:{' '}
              <a
                className={`${styles.emailLink} mb-4 text-indigo-700 hover:underline`}
                href='https://github.com/emanuelefavero'
              >
                emanuelefavero
              </a>{' '}
            </p>
            <p>
              email:{' '}
              <a
                className={`${styles.emailLink} mb-4 text-indigo-700 hover:underline`}
                href='mailto:info@emanuelefavero.com'
              >
                info@emanuelefavero.com
              </a>
            </p>
          </div>
        </div>
        <div
          id='successPageCard'
          className='tripleCardEffect bg-violet-300 border-2 border-black px:1 xs4:px-4 xs:px-4 py-4 flex flex-col justify-center items-center'
        >
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
    </div>
  )
}
