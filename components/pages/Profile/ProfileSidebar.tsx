"use client";

import React from "react";
import ProfileSidebarNav from "./sidebar/ProfileSidebarNav";
import ProfileEditNActions from "./sidebar/ProfileEditNActions";

const ProfileSidebar = () => {
   return (
      <aside className="py-4">
         {/* Edit & Gold, ...  */}
         <div className="px-4">
            <ProfileEditNActions />
         </div>

         {/* nav links, logout, ... items  */}
         <div>
            <ProfileSidebarNav />
         </div>
      </aside>
   );
};

export default ProfileSidebar;
