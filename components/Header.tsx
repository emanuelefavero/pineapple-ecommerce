import styles from '@/styles/Header.module.scss'
import { useState } from 'react' // ! move to context
import Link from 'next/link'
import Image from 'next/image'
import { Cart } from '@/components'

export default function Header() {
  const [showCart, setShowCart] = useState(false) // ! move to context

  return (
    <>
      {/* TODO: Add sticky position to Header */}
      <div className='w-full flex justify-center items-center flex-col bg-white text-black'>
        <div className=' w-full flex justify-between items-center border-t-2 border-b-2 border-black font-medium p-0'>
          <div className='flex px-4 xs3:px-10'>
            {/* Header Logo */}
            <Link className='active:scale-95' href='/'>
              <Image
                className='hover:brightness-105'
                src='/pineapple.png'
                alt='logo'
                width={29}
                height={29}
              />
            </Link>

            {/* Header Menu */}
            <ul className='px-7 flex'>
              {/* TODO: Add real pages for these items (iPhone, Accessories, About Us) */}
              {/* TODO: Move to separate container where you only need to pass the menu item text and link url */}
              <li className='mr-5'>
                <Link
                  className={`${styles.headerLink} text-black wordSpacingTight tracking-tight hover:no-underline`}
                  href='/'
                >
                  iPhone
                </Link>
              </li>

              <li className='mr-5'>
                <Link
                  className={`${styles.headerLink} text-black wordSpacingTight tracking-tight hover:no-underline`}
                  href='/'
                >
                  Accessories
                </Link>
              </li>

              <li className='mr-5'>
                <Link
                  className={`${styles.headerLink} text-black wordSpacingTight tracking-tight hover:no-underline`}
                  href='/'
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <button
            className='bg-black text-white px-4 xs3:px-14 py-3 text-lg border-l-2 border-black hover:bg-indigo-500'
            type='button'
            onClick={() => setShowCart(!showCart)}
          >
            Cart
          </button>
        </div>
      </div>

      {/* Cart */}
      {showCart && <Cart />}
    </>
  )
}
