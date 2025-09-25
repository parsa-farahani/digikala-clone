'use client';

import React, { useEffect, useRef, useState } from 'react'

const Timer = (
   {
      dateISO
   }: {
      dateISO: string;
   }
) => {

   const [date, setDate] = useState(new Date(dateISO));

   const [remainingTime, setRemainingTime] = useState(
      {
         hours: 0,
         mins: 0,
         secs: 0,
      }
   )

   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

   useEffect(() => {
      setDate(
         new Date(dateISO)
      )
   }, [dateISO])


   useEffect(() => {


      const updateTime = () => {
         if (!date?.getTime() || isNaN(date?.getTime())) return;
   
         const dateMs = date.getTime();
   
         const dateDiffMs = (dateMs - Date.now()) >= 0 ? dateMs - Date.now() : 0;
   
         const hours = Math.floor(dateDiffMs / 3600_000);
         const mins = Math.floor((dateDiffMs % 3600_000) / 60_000);
         const secs = Math.floor(((dateDiffMs % 3600_000) % 60_000) / 1_000);
      
         setRemainingTime(
            {
               hours,
               mins,
               secs,
            }
         );
      }


      let interval = intervalRef.current;

      interval = setInterval(updateTime, 1000)

      return () => {
         clearInterval(
            interval
         )
      }
   }, [date])


  return (
    <time dateTime={dateISO}
      className='flex items-center gap-0.5'
    >
      <span className='bg-light-1 rounded-xs text-text-1 flex-center grow-0 shrink-0 size-[24px] text-sm leading-5'>
         {
            remainingTime.secs
         }
      </span>
      :
      <span className='bg-light-1 rounded-xs text-text-1 flex-center grow-0 shrink-0 size-[24px] text-sm leading-5'>
         {
            remainingTime.mins
         }
      </span>
      :
      <span className='bg-light-1 rounded-xs text-text-1 flex-center grow-0 shrink-0 size-[24px] text-sm leading-5'>
         {
            remainingTime.hours
         }
      </span>
    </time>
  )
}

export default Timer