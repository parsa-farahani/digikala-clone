import ProductCard from "./ProductCard";

type CProduct = {
   id: string;
   image: string;
   title: string;
   price: number;
   discountPerc: number;
}

const ProductsGrid = (
   {
      products,
   }: {
      products: CProduct[];
   }
) => {

  return (
    <div>
      <div
         className="grid grid-cols-5 [&>*]:border-r [&>*]:border-b [&>*]:border-border-1 [&>*:nth-of-type(5n)]:border-l-0 [&>*:nth-of-type(5n+1)]:border-r-0 [&>*:last-of-type]:border-l-1 [&>*:nth-last-of-type(1)]:border-b-0 [&>*:nth-last-of-type(2)]:border-b-0 [&>*:nth-last-of-type(3)]:border-b-0"
      >
         {
            products.map((product, i) => (
               <ProductCard
                  key={i}
                  product={product}
                  variant="grid"
               />
            ))
         }
      </div>
    </div>
  )
}

export default ProductsGrid