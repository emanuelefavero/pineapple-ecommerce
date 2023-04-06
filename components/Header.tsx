import Link from 'next/link'
import appName from '@/utils/appName'

import { Unbounded } from 'next/font/google'

const unbounded = Unbounded({ subsets: ['latin'] })

export default function Header() {
  return (
    <>
      <div className='w-full flex justify-center items-center flex-col bg-white text-black'>
        <div
          className={`${unbounded.className} select-none pt-1 pb-1 pr-1 pl-1 text-xl xs5:text-xl xs4:text-4xl xs4:pb-1 xs3:text-5xl xs3:pb-3 xs3:pt-2 xs2:text-6xl xs2:pb-4 xs:text-7xl xs:pb-5 sm:text-8xl md:text-9xl`}
        >
          {appName}
        </div>
        <div className='w-full flex justify-between items-center border-t-2 border-b-2 border-black font-medium p-0'>
          <ul className='px-4 xs3:px-10'>
            <li>
              <Link
                className='headerLink text-black hover:no-underline'
                href='/'
                id='homeLink'
              >
                Home
              </Link>
            </li>
          </ul>

          <button
            className='bg-black text-white px-4 xs3:px-14 py-3 text-lg border-l-2 border-black hover:bg-indigo-500'
            type='button'
          >
            Cart
          </button>
        </div>
      </div>
    </>
  )
}
