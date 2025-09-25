import ProfileMobileHeader from '@/components/pages/Profile/ProfileMobileHeader'
import ProfileSidebar from '@/components/pages/Profile/ProfileSidebar'
import ProfileEditNActions from '@/components/pages/Profile/sidebar/ProfileEditNActions'
import Header from '@/components/shared/header/Header'
import MobileNav from '@/components/shared/header/MobileNav'
import React, { ReactElement } from 'react'

interface LayoutProps {
  children: ReactElement;
}

const Layout = (
   {
      children
   }: LayoutProps
) => {


  return (
   <>
      <Header className="max-lg:!hidden" />

      <ProfileMobileHeader />

      <MobileNav />
    <div
      className='lg:flex lg:gap-4 container p-8 max-lg:p-0'
      >

      {/* Desktop  */}
      <div
         className='hidden lg:block w-[270px] border rounded-md'
      >
         <ProfileSidebar />
      </div>

      {/* Mobile  */}
      <div className='lg:hidden p-4' >
         <ProfileEditNActions />
      </div>

      <div
         className='grow-1 max-lg:mb-[100px]'
      >
         {
            children
         }
      </div>
    </div>
</>
  )
}

export default Layout