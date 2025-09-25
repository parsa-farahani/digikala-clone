import CartTabs from '@/components/pages/Cart/CartTabs';
import Footer from '@/components/shared/footer/Footer'
import Header from '@/components/shared/header/Header'
import MobileNav from '@/components/shared/header/MobileNav';
import React from 'react'

const Cart = () => {

  return (
    <div className='max-lg:mb-[100px]' >
      
      <Header className="max-lg:!hidden" />

      <MobileNav />

      <main>
         <div
            className='container p-0 lg:p-8'
         >
            <CartTabs />
         </div>
      </main>

      <Footer className='max-lg:!hidden !mt-4' />

    </div>
  )
}

export default Cart