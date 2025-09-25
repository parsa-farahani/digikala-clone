
import { offersProducts } from '@/data';
import OffersCarousel from './OffersCarousel';


const PrimaryCarousel = (
   {
      timerDate
   }: {
      timerDate: string;
   }
) => {


  return (
    <OffersCarousel
      products={offersProducts}
      timerDate={timerDate}
    />
  )
}

export default PrimaryCarousel