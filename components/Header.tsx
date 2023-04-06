import Link from 'next/link'
import appName from '@/utils/appName'

import { Unbounded } from 'next/font/google'

const unbounded = Unbounded({ subsets: ['latin'] })

export default function Header() {
  return (
    <>
      <div className='w-full flex justify-center items-center flex-col bg-white text-black'>
        <div
          className={`${unbounded.className} select-none pt-1 pb-1 pr-1 pl-1 text-xl xs5:text-xl xs4:text-4xl xs4:pb-1 xs3:text-5xl xs3:pb-3 xs2:text-6xl xs2:pb-4 xs:text-7xl xs:pb-5 sm:text-8xl md:text-9xl`}
        >
          {appName}
        </div>
        <div className='w-full flex justify-between items-center border-t-2 border-b-2 border-black'>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
          </ul>

          <button type='button'>Cart</button>
        </div>
      </div>
    </>
  )
}
