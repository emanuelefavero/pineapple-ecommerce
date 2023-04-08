import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* 3 lines */}
      <div className='border-black border-t-2 bg-indigo-300 w-full h-3'></div>
      <div className='bg-indigo-400 w-full h-3'></div>
      <div className='border-slate-700 border-b-2 bg-fuchsia-400 w-full h-3'></div>

      {/* Black Footer */}
      <div className='bg-black text-white py-12'>
        <div className='container mx-auto flex justify-center items-center flex-col'>
          <div className='text-lg font-medium tracking-tight leading-8 mb-1'>
            Pineapple <span>&copy;</span> {new Date().getFullYear()}{' '}
            <Link
              href='https://github.com/emanuelefavero'
              className='text-indigo-300 hover:text-indigo-400 hover:underline'
            >
              Emanuele Favero
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
