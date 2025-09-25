import React from "react";
import { RiChatSmile2Line } from "react-icons/ri";

const ChatBtn = () => {
   return (
      <div className="lg:hidden relative z-[10]">
         <button
            type="button"
            className="fixed z-[999] left-0 bottom-[160px] h-[40px] w-[140px] -translate-x-[100px] rounded-full bg-gradient-to-br from-[#8f4aec] to-[#2586ff] "
         >
            <span className="flex items-center justify-start px-1">
               <RiChatSmile2Line className="text-light-1 text-3xl" />
            </span>
         </button>
      </div>
   );
};

export default ChatBtn;
