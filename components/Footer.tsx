import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className='bg-black text-white py-12'>
        <div className='container mx-auto flex justify-center items-center flex-col'>
          <div className='text-lg font-medium tracking-tight leading-8 mb-1'>
            Pineapple <span>&copy;</span> {new Date().getFullYear()}{' '}
            <Link
              href='https://github.com/emanuelefavero'
              className='text-indigo-300'
            >
              Emanuele Favero
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
