'use client'

import { useEffect, useState } from 'react'

import PrimaryCarousel from './offers/PrimaryCarousel';
import OffersGrid from './offers/OffersGrid';
import SuperMarketCarousel from './offers/SuperMarketCarousel';

import { offersCards1, offersCards2 } from '@/data';
import Heading from '@/components/shared/Heading';


const OFFER_DURATION = 10;  // Timer time - in 'hours'



const Offers = () => {

   const [timerDate, setTimerDate] = useState<string>("");

   useEffect(() => {

      const date = new Date();

      date.setHours( date.getHours() + OFFER_DURATION );

      setTimerDate(
         date.toISOString()
      )

   }, [])


  return (
    <>
      <Heading
          element="h2"
          hidden
        >
          پیشنهاد شگفت‌انگیز
        </Heading>
      <div
        className='space-y-4'
      >

        <PrimaryCarousel timerDate={timerDate} />

        <OffersGrid data={offersCards1} />

        <SuperMarketCarousel timerDate={timerDate} />

        <OffersGrid data={offersCards2} />

      </div>
    </>
  )
}

export default Offers