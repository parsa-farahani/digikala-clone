import React, { useState } from 'react'
import { IoClose, IoGridOutline } from 'react-icons/io5'
import ProductImageCarousel from '../ProductImageCarousel';
import Image from 'next/image';


const ProductImagesModalCarousel = (
  {
    images,
    onClose,
  }: {
    images: string[];
    onClose: () => void;
  }
) => {

  const [activeNavlinkIdx, setActiveNavlinkIdx] = useState(0);  // 0, 1, 2

  const [activeImageIdx, setActiveImageIdx] = useState(0);


  const handleNavigation = (i: number) => {
    setActiveNavlinkIdx(i);
  }

  return (
    <div
      className='h-[100svh] w-full pb-4 text-light-2 flex gap-2 flex-col justify-between'
    >
      {/* Top Nav  */}
      <div className='flex items-center justify-between py-2 px-4 text-sm lg:text-base' >

        <div />

        <div>
          <nav
            className='py-2 px-4 border border-border-1/30  rounded-xl flex gap-2'
          >
            <button
              className={`relative cursor-pointer px-2 before:content-[""] before:absolute before:bottom-0 before:translate-y-2 before:-translate-x-1/2 before:left-1/2 before:w-[18px] before:h-[2px] before:bg-light-2 before:rounded-t-xl before:transition-opacity before:duration-400 ${activeNavlinkIdx === 0 ? 'before:opacity-100' : 'before:opacity-0'}`}
              onClick={() => handleNavigation(0)}
            >
              رسمی
            </button>

            <span
              className='pipe my-0.5 bg-border-1/30'
            />

            <button
              className={`relative cursor-pointer px-2 before:content-[""] before:absolute before:bottom-0 before:translate-y-2 before:-translate-x-1/2 before:left-1/2 before:w-[18px] before:h-[2px] before:bg-light-2 before:rounded-t-xl before:transition-opacity before:duration-400 ${activeNavlinkIdx === 1 ? 'before:opacity-100' : 'before:opacity-0'}`}
              onClick={() => handleNavigation(1)}
            >
              خریداران
            </button>

            <span
              className='pipe my-0.5 bg-border-1/30'
            />

            <button
              className={`relative cursor-pointer px-2 before:content-[""] before:absolute before:bottom-0 before:translate-y-2 before:-translate-x-1/2 before:left-1/2 before:w-[18px] before:h-[2px] before:bg-light-2 before:rounded-t-xl before:transition-opacity before:duration-400 ${activeNavlinkIdx === 2 ? 'before:opacity-100' : 'before:opacity-0'}`}
              onClick={() => handleNavigation(2)}
            >
              ویدیوهای مگنت
            </button>
          </nav>
        </div>

        <button
          className='ibtn text-2xl text-light-1 px-0'
          onClick={() => onClose()}
        >
          <IoClose />
        </button>
      </div>

      {/* current image (Carousel) */}
      <div
        className='w-full lg:grow-1 lg:w-auto lg:aspect-square lg:max-w-[700px] mx-auto overflow-hidden'
      >
        <ProductImageCarousel
          images={images}
          showButtons
          variant='modal'
          onSlideChange={(i: number) => setActiveImageIdx(i)}
          activeIndex={activeImageIdx}
        />
      </div>

      {/* other images (images row) */}
      <nav
        className='max-w-full overflow-x-auto hidden-scroll flex items-center'
      >
        <div
          className='w-fit flex gap-6 items-center p-4'
        >
          <div
            className='flex gap-5'
          >
          
              <button
                className='py-2 px-3 border rounded-md border-border-1/30 flex flex-col gap-2 items-center justify-center leading-3.5 text-center text-sm'
              >
                <span>
                  <IoGridOutline className='text-xl' />
                </span>
                <span>
                  همه
                  <br/>
                  تصاویر
                </span>
              </button>

              <div
                className={`rounded-lg overflow-clip flex items-center gap-[2px] ${activeNavlinkIdx === 0 ? 'border-2' : ''}`}
              >
                {
                  images.map((image, i) => (
                    <button
                      key={i}
                      className={`relative block size-[75px] cursor-pointer aspect-square shrink-0 before:content=[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[18px] before:h-[4px] before:bg-light-1 before:outline-[4px] before:outline-dark-2/50 before:rounded-t-xl before:transition-opacity before:duration-300 grow-0 ${activeImageIdx === i ? 'before:opacity-100' : 'before:opacity-0'}`}
                      onClick={() => {
                        setActiveImageIdx(i)
                      }}
                    >
                      <Image
                        src={image}
                        width={60}
                        height={60}
                        alt="image"
                        className="block size-full object-cover object-center"
                      />
                    </button>
                  ))
                }
              </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default ProductImagesModalCarousel