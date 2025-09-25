import React from 'react'

type SectionProps = {
   children: React.ReactNode;
   id?: string;
   sectionClassName?: string;
   containerClassName?: string;
   notContainer?: boolean;
}

const Section = (
   {
      id,
      sectionClassName,
      containerClassName,
      children,
      notContainer,
   }: SectionProps
) => {

   if (notContainer) {
        return (
         <section
            className={` ${sectionClassName ?? ''}`}
         >
            {
               children
            }
         </section>
      )
   }

  return (
    <section
      id={id}
      className={` ${sectionClassName ?? ''}`}
    >
      <div
         className={`container max-lg:px-0 ${containerClassName}`}
      >
         {
            children
         }
      </div>
    </section>
  )
}


export default Section