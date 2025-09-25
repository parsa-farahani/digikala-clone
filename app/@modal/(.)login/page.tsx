import ParallelModal from '@/components/shared/ParallelModal'
import React from 'react'
import SigninForm from '@/components/forms/SigninForm';
import BackButton from '@/components/shared/BackButton';
import Image from 'next/image'
import Link from 'next/link'


const LoginModal = async (
   
   {
      searchParams,
   }: {
      searchParams: Promise<{ redirect?: string }>
   }

) => {
   
   const { redirect: redirectUrl } = await searchParams;

  return (
    <ParallelModal
      overlayClassName="backdrop-blur-sm bg-light-2/50"
      wrapperClassName="w-full h-full lg:flex lg:items-center lg:justify-center"
    >
      <div
      className='w-fit h-full lg:flex items-center justify-center'
    >
      <div className='p-6 fixed inset-0 w-full h-svh lg:relative lg:min-w-[400px] lg:w-fit lg:h-auto rounded-xl lg:border lg:border-border-1 bg-light-1'>
         <div className='size-full flex flex-col justify-center gap-4'>
            <div className='relative h-20 flex justify-center items-center'>

               <BackButton />

               <Link
                  href="/"
                  >
                  <Image
                     src="/images/logo/digikala-logo.svg"
                     width={100}
                     height={100}
                     alt='logo'
                     className='w-40'
                     priority
                  />
               </Link>
            </div>

            <SigninForm redirectUrl={redirectUrl} />
         </div>
      </div>

    </div>
   </ParallelModal>
  )
}

export default LoginModal



