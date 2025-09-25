import AddToCartMobile from '@/components/pages/Product/addToCartNav/AddToCartMobile'
import Advantages from '@/components/pages/Product/advantages/Advantages'
import ProductDetails from '@/components/pages/Product/details/ProductDetails'
import MobileFooter from '@/components/pages/Product/footer/MobileFooter'
import ProductIntro from '@/components/pages/Product/intro/ProductIntro'
import ProductHeader from '@/components/pages/Product/ProductHeader'
import RelatedProducts from '@/components/pages/Product/relatedProducts/RelatedProducts'
import RelatedTags from '@/components/pages/Product/relatedTags/RelatedTags'
import RelatedVideos from '@/components/pages/Product/relatedVideos/RelatedVideos'
import SimilarProducts from '@/components/pages/Product/similarProducts/SimilarProducts'
import Divider from '@/components/shared/Divider'
import Footer from '@/components/shared/footer/Footer'
import Header from '@/components/shared/header/Header'
import MobileDivider from '@/components/shared/MobileDivider'
import Section from '@/components/shared/Section'
import React from 'react'
import { Metadata } from 'next';
import { getProduct } from '@/lib/utils'
import { notFound } from 'next/navigation'
// import ProductsProvider from './ProductsProvider'
import { productMiniInfo, headerNavlinks, detailsNavlinks } from '@/data/product'


type PageProps = {
   params: Promise<{ productId: string }>;
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}


export const revalidate = 120;


// Generate the metadata based on the 'product.name'
export async function generateMetadata(  
   { params }: PageProps,
   // parent: ResolvingMetadata
): Promise<Metadata> {


   const { productId }  = await params;

   const product = await getProduct(productId);

   return {
      title: product?.name,
   }
}



const Product = async (
  {
    params
  }: {
    params: Promise<{ productId: string }>
  }
) => {

  const { productId } = await params;

  const product = await getProduct(productId);

  if (!product?.$id) {  // If we have not such product, just show a 404 page - or anything else
    notFound();
  }

  return (
      <div
        className='mb-[100px] lg:mb-0'
      >
        
        <Header
          className='max-lg:hidden'
          containerClassName='max-lg:hidden'
        />

        <ProductHeader navlinks={headerNavlinks} />


        <main
          className=' lg:mb-0 lg:space-y-6'
        >

          <Section
            containerClassName='px-4'
            >
            <ProductIntro product={product!} />
          </Section>

          <Section
            sectionClassName='max-lg:hidden'
            >
            <Advantages />
          </Section>

          <div className='container max-lg:hidden' >
            <Divider className='!h-[4px] !bg-text-3/10' />
          </div>

          <Section sectionClassName='hidden lg:block' >
            <SimilarProducts />
          </Section>

          <Section sectionClassName='hidden lg:block' >
            <RelatedVideos />
          </Section>

          <Section sectionClassName='hidden lg:block mb-20' >
            <RelatedTags />
          </Section>

          <div className='container max-lg:px-0' >
            <ProductDetails
              product={product!}
              navlinks={detailsNavlinks}
              productMiniInfo={productMiniInfo}
            />
          </div>

          <MobileDivider className='relative z-3' />

          <Section sectionClassName='lg:hidden' >
            <RelatedVideos />
          </Section>

          <MobileDivider className='relative z-3' />

          <Section sectionClassName='' >
            <RelatedProducts />
          </Section>

          <div
            className='relative z-3 bg-light-1 py-4'
          >
            <MobileDivider className='relative z-3' />
          </div>

          <AddToCartMobile
            product={product!}
          />
        </main>
        

        <Footer
          className="max-lg:hidden"
        />

        <MobileFooter />
      </div>
  )
}

export default Product