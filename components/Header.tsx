import Link from 'next/link'
import appName from '@/utils/appName'

export default function Header() {
  return (
    <>
      <div className='w-full flex justify-center items-center flex-col bg-white text-black'>
        <div>{appName}</div>
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
