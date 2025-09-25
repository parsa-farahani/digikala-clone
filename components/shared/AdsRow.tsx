import Image from 'next/image';
import Link from 'next/link';


const AdsRow = (
   {
      data,
      containerClassName,
      itemClassName,
   }: {
      data: {
         image: string;
         href?: string;
         title?: string;
      }[];
      containerClassName: string;
      itemClassName: string;
   }
) => {

   return (
      <div
          className={containerClassName}
      >
         {
            data.map((d, i) => {
               if (d?.href) {
                  return(
                     <Link
                        key={i}
                        href={d.href ?? '#'}
                        className={itemClassName}
                     >
                        <Image
                           src={d?.image}
                           width={100}
                           height={100}
                           alt={d?.title ?? ''}
                           className='size-full block object-cover object-center'
                           unoptimized
                           loading='lazy'
                        />
                     </Link>
                  )
               } else {
                  return(
                     <div
                        key={i}
                        className={itemClassName}
                     >
                        <Image
                           src={d?.image}
                           width={100}
                           height={100}
                           alt={d?.title ?? ''}
                           className=''
                           unoptimized
                        />
                     </div>
                  )
               }
            })
         }
      </div>
   )
}

export default AdsRow