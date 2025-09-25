import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <main className="container h-svh bg-light-1 ">
         {children}
      </main>
   );
};

export default layout;
