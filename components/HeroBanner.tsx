import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/client'
import { IHeroBanner } from '@/types'

interface IProps {
  heroBanner: IHeroBanner
}

export default function HeroBanner({ heroBanner }: IProps) {
  const {
    image,
    productName,
    slug,
    heroText,
    buttonText,
    description,
    originalPrice,
    discounted,
    discountPrice,
    discountPercentage,
    discountTime,
  } = heroBanner

  return (
    <>
      {heroBanner && (
        <section>
          {discounted && (
            // If discounted, show discount percentage and time left
            <p className='w-full bg-yellow-300 text-lg font-extrabold px-4 text-center border-yellow-400 border-b-4 select-none'>
              {discountPercentage}% {discountTime}
            </p>
          )}
          <div className='bg-white flex items-center border-black border-b-2 flex-col sm:flex-row'>
            {/* PRODUCT DETAILS */}
            {/* TODO: Fix responsive text position, margin etc.. on large screens */}
            <div className='relative w-full h-96 sm:h-96 sm:w-1/2 py-12 px-1 xs5:px-4 xs3:px-8 lg:p-16 bg-fuchsia-300 border-black border-b-2 sm:border-r-2 sm:border-b-0'>
              {/* Hero Text */}
              <h2 className='text-lg xs4:text-3xl xs3:text-5xl font-bold wordSpacingTight tracking-tight uppercase select-none mb-2'>
                {heroText}
              </h2>

              {/* Product Name */}
              <p className='text-2xl font-medium wordSpacingTight tracking-tight text-slate-800 mb-2'>
                {productName}
              </p>

              {/* Price */}
              <p className='text-4xl xs3:text-7xl font-black wordSpacingPrice tracking-tight text-emerald-700 mb-5'>
                {discounted ? (
                  // If discounted, show discount price and original price with strikethrough
                  <>
                    &euro; {discountPrice}{' '}
                    <span className='line-through text-red-800 text-xl xs3:text-3xl font-extrabold relative -top-4 -left-1 xs3:-top-9'>
                      {originalPrice}
                    </span>
                  </>
                ) : (
                  // If not discounted, show original price
                  <>&euro; {originalPrice} </>
                )}
              </p>

              {/* CTA Button */}
              <Link
                href={`product/${slug.current}`}
                id='heroButtonCTA'
                className='bg-black text-white text-2xl wordSpacingTight tracking-tight font-medium px-11 py-2 rounded-md select-none'
                style={{
                  fontSize: '1.5rem',
                }}
              >
                {buttonText}
              </Link>
            </div>

            {/* PRODUCT IMAGE */}
            <div className='relative bg-white w-full h-80 sm:h-96 py-10 sm:w-1/2 flex items-center justify-center'>
              <Image
                className='object-contain max-h-full max-w-full select-none'
                src={urlFor(image && image[0]).url()}
                alt={productName}
                width={600}
                height={600}
              />

              {/* Description */}
              <p className='absolute bottom-1 right-3 hidden xs3:block'>
                {description}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
