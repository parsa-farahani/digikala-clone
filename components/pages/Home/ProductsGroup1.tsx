import MobileProductsRow from "@/components/shared/MobileProductsRow";

import MobileDivider from "@/components/shared/MobileDivider";
import QuadGridGroup from "@/components/shared/QuadGridGroup";

import {
   headphonesData,
   menShoesData,
   womenMenShoesData,
   smartwatchesData,
} from "@/data";
import Heading from "@/components/shared/Heading";


const ProductsGroup1 = () => {
   return (
      <>
         <Heading element="h2" variant="h2" hidden>
            محصولات پرفروش 1
         </Heading>
         <div>
            {/* Mobile  */}
            <div className="block lg:hidden space-y-8">
               <MobileProductsRow
                  headingEl="h3"
                  heading="هدفون، هدست و هندزفری"
                  subHeading="براساس سلیقه شما"
                  href="/search/?q=هدفون"
                  data={headphonesData}
               />
               <MobileProductsRow
                  headingEl="h3"
                  heading="کفش ورزشی مردانه"
                  subHeading="براساس سلیقه شما"
                  href="/search/?q=هدفون"
                  data={menShoesData}
               />

               <MobileDivider />

               <MobileProductsRow
                  headingEl="h3"
                  heading="کفش ورزشی مردانه و زنانه"
                  subHeading="براساس سلیقه شما"
                  href="/search/?q=هدفون"
                  data={womenMenShoesData}
               />
               <MobileProductsRow
                  headingEl="h3"
                  heading="ساعت هوشمند"
                  subHeading="براساس سلیقه شما"
                  href="/search/?q=هدفون"
                  data={smartwatchesData}
               />
            </div>

            {/* Desktop  */}
            <div className="hidden lg:block min-h-[300px] px-8">
               <QuadGridGroup
                  data={[
                     {
                        headingEl: "h3",
                        heading: "هدفون، هدست و هندزفری",
                        subHeading: "براساس سلیقه شما",
                        href: "/search/?q=هدفون",
                        data: headphonesData,
                     },
                     {
                        headingEl: "h3",
                        heading: "کفش ورزشی مردانه",
                        subHeading: "براساس سلیقه شما",
                        href: "/search/?q=هدفون",
                        data: menShoesData,
                     },
                     {
                        headingEl: "h3",
                        heading: "کفش ورزشی مردانه و زنانه",
                        subHeading: "براساس سلیقه شما",
                        href: "/search/?q=هدفون",
                        data: womenMenShoesData,
                     },
                     {
                        headingEl: "h3",
                        heading: "ساعت هوشمند",
                        subHeading: "براساس سلیقه شما",
                        href: "/search/?q=هدفون",
                        data: smartwatchesData,
                     },
                  ]}
               />
            </div>
         </div>
      </>
   );
};

export default ProductsGroup1;
