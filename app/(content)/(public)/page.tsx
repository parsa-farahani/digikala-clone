
import Header from "@/components/shared/header/Header";
import StoryCarousel from "@/components/pages/Home/StoryCarousel";
import Footer from "@/components/shared/footer/Footer";
import MobileDivider from "@/components/shared/MobileDivider";
import Articles from "@/components/pages/Home/Articles";
import Heading from "@/components/shared/Heading";
import BestSellers from "@/components/pages/Home/BestSellers";
import ProductsGroup1 from "@/components/pages/Home/ProductsGroup1";
import AdsRow from "@/components/shared/AdsRow";
import DiscountsGrid from "@/components/pages/Home/DiscountsGrid";
import PopularBrands from "@/components/pages/Home/PopularBrands";
import Categories from "@/components/pages/Home/Categories";
import Offers from "@/components/pages/Home/Offers";
import Services from "@/components/pages/Home/Services";
import EventsCarousel from "@/components/pages/Home/EventsCarousel";
import { ads3, ads4 } from '@/data';
import Section from "@/components/shared/Section";
import ChatBtn from "@/components/shared/ChatBtn";
import SuperMarketBtn from "@/components/shared/SuperMarketBtn";
import HotSellers from "@/components/pages/Home/HotSellers";




export default function Home() {

  // const dispatch = useAppDispatch();

  //  const {
  //       mutateAsync,
  //   } = useSignOutAccount();

  //  const handleLogout = async () => {
  //     try {
  //        await mutateAsync();
  //        dispatch(
  //           clientLogout()
  //        )
  //     } catch (error) {
  //        console.log(error);
  //     }
  //  }

   return (
      <div className="bg-light-1">

        {/* <button
          onClick={() => {
            handleLogout();
          }}
        >
          logout
        </button> */}

         <div className="h-10 flex-center bg-green-400/10 border border-green-500 text-green-700">
            تبلیغات
         </div>
         <Header />
         
         <main className="space-y-4">
            <Heading
              element="h1"
              hidden
            >
               دیجی‌کالا - فروشگاه اینترنتی با کیفیت بینظیر و قیمت های باور
               نکردنی
            </Heading>


            <Section
              containerClassName="flex-center py-3 px-0 lg:px-10"
            >
              <StoryCarousel />
            </Section>


            <Section
              containerClassName="flex-center h-[200px] lg:h-[300px] xl:h-[400px] !p-0"
            >
                <EventsCarousel />
            </Section>

            <Section
              containerClassName="flex-center h-auto max-lg:px-0"
            >
                <Services />
            </Section>


            <Section
              containerClassName="w-full lg:container lg:rounded-xl"
            >
                <Offers />
            </Section>


            <Section
              containerClassName="py-6 space-y-2 max-lg:px-0"
            >
              <Categories />
            </Section>


            <div className="container" >
              <AdsRow
                data={ads3}
                containerClassName="h-[200px] gap-4 hidden lg:flex"
                itemClassName="flex-1 rounded-xl border overflow-clip"
              />
            </div>

            <Section
              containerClassName="pt-6 space-y-6"
            >
              <PopularBrands />
            </Section>

            <div className="container" >
              <AdsRow
                data={ads4}
                containerClassName="h-[200px] gap-4 hidden lg:flex"
                itemClassName="flex-1 rounded-xl border overflow-clip"
              />
            </div>
            
            <MobileDivider />


            <Section
              containerClassName="py-3 px-0"
            >
              <ProductsGroup1 />
            </Section>


          <MobileDivider />

          <Section
            containerClassName="pt-6 space-y-6"
          >
            <BestSellers />
          </Section>


          <Section
            sectionClassName="hidden lg:block"
            containerClassName="pt-6 space-y-6"
          >
            <DiscountsGrid />
          </Section>

          <MobileDivider />

          <AdsRow
            containerClassName="container h-[140px] flex ;px-2 g:px-8"
            itemClassName="grow-1 rounded-xl overflow-clip"
            data={ads3.slice(0, 1)}
          />

          <Section
            containerClassName=" py-3 px-0"
          >
              <ProductsGroup1 />
          </Section>


          <MobileDivider />

          <Section
            containerClassName="pt-6 space-y-6"
          >
            <HotSellers />
          </Section>


          <Section
            containerClassName="pt-6 space-y-6"
          >
            <Articles />
          </Section>

          <MobileDivider />


           <ChatBtn />

            <SuperMarketBtn />

            </main>
           
            <Footer />
      </div>
   );
}
