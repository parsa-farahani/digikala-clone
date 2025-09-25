import AccountVerification from "@/components/pages/Profile/AccountVerification";
import ProfileSidebarNav from "@/components/pages/Profile/sidebar/ProfileSidebarNav";
import Heading from "@/components/shared/Heading";
import MobileDivider from "@/components/shared/MobileDivider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";


const Profile = () => {

   return (
      <main>
         <AccountVerification />

         <section>
            <div className="border rounded-md py-3 px-4 mt-4">
               <div className="flex items-center justify-between">
                  <Heading
                     element="h2"
                     variant="h3"
                     style="underline-always"
                     className="py-4"
                  >
                     سفارش‌های من
                  </Heading>

                  <Link
                     href="#"
                     className="text-secondary-500 text-sm flex items-center gap-1"
                  >
                     مشاهده همه
                     <MdKeyboardArrowLeft />
                  </Link>
               </div>

               <div className="flex py-4">
                  <div className="flex-1 flex flex-col items-center justify-center lg:flex-row gap-2">
                     <div className="relative w-fit flex grow-0 shrink-0 items-center justify-center">
                        <Image
                           src="/images/profile/status-processing.svg"
                           width={60}
                           height={60}
                           alt=""
                        />

                        <div className="bg-light-2 absolute left-0 bottom-0 size-6 flex items-center justify-center rounded-sm lg:hidden">
                           0
                        </div>
                     </div>

                     <div>
                        <p className="flex flex-col lg:items-start">
                           <span className="hidden lg:block">0 سفارش</span>
                           <span className="text-center text-text-2 text-sm">
                              جاری
                           </span>
                        </p>
                     </div>
                  </div>
                  <div className="pipe inline-block my-0" />
                  <div className="flex-1 flex flex-col items-center lg:flex-row gap-2 justify-center">
                     <div className="relative w-fit flex grow-0 shrink-0 items-center justify-center">
                        <Image
                           src="/images/profile/status-delivered.svg"
                           width={60}
                           height={60}
                           alt=""
                        />

                        <div className="bg-light-2 absolute left-0 bottom-0 size-6 flex items-center justify-center rounded-sm lg:hidden">
                           0
                        </div>
                     </div>

                     <div>
                        <p className="flex flex-col lg:items-start">
                           <span className="hidden lg:block">0 سفارش</span>
                           <span className="text-center text-text-2 text-sm">
                              تحویل شده
                           </span>
                        </p>
                     </div>
                  </div>
                  <div className="pipe inline-block my-0" />
                  <div className="flex-1 flex flex-col items-center lg:flex-row gap-2 justify-center">
                     <div className="relative w-fit flex grow-0 shrink-0 items-center justify-center">
                        <Image
                           src="/images/profile/status-returned.svg"
                           width={60}
                           height={60}
                           alt=""
                        />

                        <div className="bg-light-2 absolute left-0 bottom-0 size-6 flex items-center justify-center rounded-sm lg:hidden">
                           0
                        </div>
                     </div>

                     <div>
                        <p className="flex flex-col lg:items-start">
                           <span className="hidden lg:block">0 سفارش</span>
                           <span className="text-center text-text-2 text-sm">
                              مرجوع شده
                           </span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <MobileDivider />

         {/* sidebar navlinks - Mobile only  */}
         <div className="lg:hidden px-4">
            <ProfileSidebarNav />
         </div>
      </main>
   );
};

export default Profile;
