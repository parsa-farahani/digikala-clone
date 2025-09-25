import Heading from '@/components/shared/Heading'
import ProductsGrid from '@/components/shared/ProductsGrid'
import { discountsGridProducts } from '@/data'
import { LuTicketPercent } from 'react-icons/lu'


const DiscountsGrid = () => {

  return (
    <div
      className="lg:p-4 rounded-xl lg:border border-border-1 space-y-6 !pb-0"
    >
      <Heading
        element="h2"
        variant="h2"
        className="relative w-full flex items-center gap-2 lg:justify-center px-2"
      >
        <span className="">
          <LuTicketPercent className="lg:text-primary-600" />
        </span>
        <span>
          منتخب محصولات تخفیف و حراج  
        </span>
      </Heading>

      <div>
        <ProductsGrid
          products={discountsGridProducts}
        />
      </div>
    </div>
  )
}

export default DiscountsGrid