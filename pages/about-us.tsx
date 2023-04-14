import Image from 'next/image'
import Link from 'next/link'

export default function AboutUsPage() {
  return (
    <div className='flex flex-col justify-center items-center px-0'>
      <div className='relative bg-indigo-500 w-full h-[600px] flex flex-col justify-center items-center'>
        <Image
          className='object-cover max-h-[600px] select-none'
          fill
          src='/team.svg'
          alt='team'
        />
      </div>
      <div className='bg-indigo-200 px-1 xs4:px-4 xs:px-10 pt-20 pb-40 flex flex-col justify-center items-center'>
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
