import { LuCirclePercent } from "react-icons/lu";
import { RiHome2Fill, RiShoppingBasketLine } from "react-icons/ri";
import { GiMetalBar } from "react-icons/gi";
import { BsFire } from "react-icons/bs";
import { CiMobile1, CiSignpostDuo1 } from "react-icons/ci";
import { RiHome2Line } from "react-icons/ri";
import { BiCart, BiCategory, BiSolidCart, BiSolidCategory } from "react-icons/bi";
import { PiBagSimple, PiGooglePlayLogoFill, PiGooglePlayLogoLight, PiStarFour } from "react-icons/pi";
import { FaRegHeart, FaRegUser, FaUser } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdOutlineModeComment } from 'react-icons/md';
import React from "react";



export const headerNavLinks = [
   {
      href: '#',
      title: 'شگفت انگیزها',
      icon: <LuCirclePercent />,
   },
   {
      href: '#',
      title: 'سوپرمارکت',
      icon: <RiShoppingBasketLine />,
   },
   {
      href: '#',
      title: 'طلای دیجیتال',
      icon: <GiMetalBar />,
   },
   {
      href: '#',
      title: 'پرفروش ترین ها',
      icon: <BsFire />,
   },
   {
      href: '#',
      title: 'خرید کالای کارکرده',
      icon: <CiMobile1 />,
   },
]

export const headerMobileNavLinks = [
   {
      href: '/',
      title: 'خانه',
      icon: {
         default: <RiHome2Line />,
         active: <RiHome2Fill />,
      },
   },
   {
      href: '/categories',
      title: 'دسته بندی',
      icon: {
         default: <BiCategory />,
         active: <BiSolidCategory />,
      },
   },
   {
      href: '/cart',
      title: 'سبد خرید',
      icon: {
         default: <BiCart style={{ transform: 'rotateY(180deg)' }} />,
         active: <BiSolidCart style={{ transform: 'rotateY(180deg)' }} />,
      },
   },
   {
      href: '#',
      title: 'مگنت',
      icon: {
         default: <PiGooglePlayLogoLight />,
         active: <PiGooglePlayLogoFill />,
      },
   },
   {
      href: '/profile',
      title: 'پروفایل من',
      icon: {
         default: <FaRegUser />,
         active: <FaUser />,
      },
   },
]


export type ProfileMenuItem = {
   title: string;
   href: string;
   icon: React.ReactNode;
   helper?: React.ReactNode;
};

export const profileMenuItems: Array<ProfileMenuItem> = [
   {
      title: 'دیجی کلاب',
      href: '#digiclub',
      icon: <span>🪙</span>,
      helper: '0 امتیاز',
   },
   {
      title: 'پلاس',
      href: '#plus',
      icon: <PiStarFour className="!text-text-2" />,
      helper: <span className="flex gap-1 items-center text-purple" >
         <span>
            خرید اشتراک
         </span>
         <span>
            <MdKeyboardArrowLeft className="text-purple" />
         </span>
      </span>,
   },
   {
      title: 'سفارش‌ها',
      href: '#orders',
      icon: <PiBagSimple className="!text-text-2" />,
   },
   {
      title: 'آدرس‌ها',
      href: '',
      icon: <CiSignpostDuo1 className="!text-text-2" />,
   },
   {
      title: 'لیست‌ها',
      href: '',
      icon: <FaRegHeart className="!text-text-2" />,
   },
   {
      title: 'دیدگاه‌ها و پرسش‌ها',
      href: '',
      icon: <MdOutlineModeComment className="!text-text-2" />,
   }
]


// import EventCarouselImg1 from '@/images/home/events-carousel/img-1.jpg';
// import EventCarouselImg2 from '@/images/home/events-carousel/img-2.gif';
// import EventCarouselImg3 from '@/images/home/events-carousel/img-3.gif';
// import EventCarouselImg4 from '@/images/home/events-carousel/img-4.jpg';
// import EventCarouselImg5 from '@/images/home/events-carousel/img-5.jpg';
// import EventCarouselImg6 from '@/images/home/events-carousel/img-6.jpg';
// import EventCarouselImg7 from '@/images/home/events-carousel/img-7.jpg';
// import EventCarouselImg8 from '@/images/home/events-carousel/img-8.jpg';
// import EventCarouselImg9 from '@/images/home/events-carousel/img-9.gif';
// import EventCarouselImg10 from '@/images/home/events-carousel/img-10.gif';

export const eventsCarouselSlides = [
  {
    href: '#',
    image: '/images/home/events-carousel/img-1.jpg',
  },
  {
    href: '#',
    image: '/images/home/events-carousel/img-2.gif',
  },
  {
    href: '#',
    image: '/images/home/events-carousel/img-3.gif',
  },
  {
    href: '#',
    image: '/images/home/events-carousel/img-4.jpg',
  },
  {
    href: '#',
    image: '/images/home/events-carousel/img-5.jpg',
  },
  {
    href: '#',
    image: '/images/home/events-carousel/img-6.jpg',
  },
  {
    href: '#',
    image: '/images/home/events-carousel/img-7.jpg',
  },
  {
    href: '#',
    image: '/images/home/events-carousel/img-8.jpg',
  },
  {
    href: '#',
    image: '/images/home/events-carousel/img-9.gif',
  },
  {
    href: '#',
    image: '/images/home/events-carousel/img-10.gif',
  },
]



// import servicesImg1 from '/images/home/services/img-1.png';
// import servicesImg2 from '/images/home/services/img-2.jpg';
// import servicesImg3 from '/images/home/services/img-3.png';
// import servicesImg4 from '/images/home/services/img-4.png';
// import servicesImg5 from '/images/home/services/img-5.png';
// import servicesImg6 from '/images/home/services/img-6.png';
// import servicesImg7 from '/images/home/services/img-7.jpg';
// import servicesImg8 from '/images/home/services/img-8.png';
// import servicesImg9 from '/images/home/services/img-9.png';


export const services = [
   {
      title: 'طلا با کامزد صفر',
      href: '#',
      image: '/images/home/services/img-1.png',
   },
   {
      title: 'تمدید شانس بیت‌کوین',
      href: '#',
      image: '/images/home/services/img-2.jpg',
   },
   {
      title: 'اشتراک پلاس',
      href: '#',
      image: '/images/home/services/img-3.png',
   },
   {
      title: 'قلب خونه، آشپزخونه',
      href: '#',
      image: '/images/home/services/img-4.png',
   },
   {
      title: 'موبایل بهترین‌قیمت',
      href: '#',
      image: '/images/home/services/img-5.png',
   },
   {
      title: 'تناسب اندام',
      href: '#',
      image: '/images/home/services/img-6.png',
   },
   {
      title: 'برند‌های لوازم‌برقی',
      href: '#',
      image: '/images/home/services/img-7.jpg',
   },
   {
      title: 'خرید قسطی',
      href: '#',
      image: '/images/home/services/img-8.png',
   },
   {
      title: 'شگفت فروشگاه حضوری',
      href: '#',
      image: '/images/home/services/img-9.png',
   },
]


// import offersImg1 from '/images/home/offers/products/headphones-1.jpg';

export const offersProducts = [
   {
      id: '1',
      title: 'هدفون بلوتوثی مدل EARPHONE GT40',
      image: '/images/home/headphones/img-1.jpg',
      price: 5_900_000,
      discountPerc: 45,
   },
   {
      id: '2',
      title: 'هدفون بلوتوثی مدل EARPHONE GT40',
      image: '/images/home/headphones/img-3.jpg',
      price: 5_900_000,
      discountPerc: 45,
   },
   {
      id: '3',
      title: 'هدفون بلوتوثی مدل EARPHONE GT40',
      image: '/images/home/headphones/img-4.jpg',
      price: 5_900_000,
      discountPerc: 45,
   },
   {
      id: '4',
      title: 'هدفون بلوتوثی مدل EARPHONE GT40',
      image: '/images/home/headphones/img-2.jpg',
      price: 5_900_000,
      discountPerc: 45,
   },
   {
      id: '5',
      title: 'هدفون بلوتوثی مدل EARPHONE GT40',
      image: '/images/home/headphones/img-5.jpg',
      price: 5_900_000,
      discountPerc: 45,
   },
   {
      id: '6',
      title: 'هدفون بلوتوثی مدل EARPHONE GT40',
      image: '/images/home/headphones/img-2.jpg',
      price: 5_900_000,
      discountPerc: 45,
   },
   {
      id: '7',
      title: 'هدفون بلوتوثی مدل EARPHONE GT40',
      image: '/images/home/headphones/img-3.jpg',
      price: 5_900_000,
      discountPerc: 45,
   },
   {
      id: '8',
      title: 'هدفون بلوتوثی مدل EARPHONE GT40',
      image: '/images/home/headphones/img-4.jpg',
      price: 5_900_000,
      discountPerc: 45,
   },
   {
      id: '9',
      title: 'هدفون بلوتوثی مدل EARPHONE GT40',
      image: '/images/home/headphones/img-5.jpg',
      price: 5_900_000,
      discountPerc: 45,
   },
   {
      id: '10',
      title: 'هدفون بلوتوثی مدل EARPHONE GT40',
      image: '/images/home/headphones/img-6.jpg',
      price: 5_900_000,
      discountPerc: 45,
   },
   {
      id: '11',
      title: 'هدفون بلوتوثی مدل EARPHONE GT40',
      image: '/images/home/headphones/img-7.jpg',
      price: 5_900_000,
      discountPerc: 45,
   },
   {
      id: '12',
      title: 'هدفون بلوتوثی مدل EARPHONE GT40',
      image: '/images/home/headphones/img-8.jpg',
      price: 5_900_000,
      discountPerc: 45,
   },
]


// import offersCardImg1 from '/images/home/offers/cards/img-1.jpg';
// import offersCardImg2 from '/images/home/offers/cards/img-2.gif';
// import offersCardImg3 from '/images/home/offers/cards/img-3.gif';
// import offersCardImg4 from '/images/home/offers/cards/img-4.gif';
// import offersCardImg5 from '/images/home/offers/cards/img-5.jpg';
// import offersCardImg6 from '/images/home/offers/cards/img-6.jpg';
// import offersCardImg7 from '/images/home/offers/cards/img-7.gif';
// import offersCardImg8 from '/images/home/offers/cards/img-8.jpg';

export const offersCards1 = [
   {
      image: '/images/home/offers/cards/img-1.jpg',
   },
   {
      image: '/images/home/offers/cards/img-2.gif',
   },
   {
      image: '/images/home/offers/cards/img-3.gif',
   },
   {
      image: '/images/home/offers/cards/img-4.gif',
   },
]

export const offersCards2 = [
   {
      image: '/images/home/offers/cards/img-5.jpg',
   },
   {
      image: '/images/home/offers/cards/img-6.jpg',
   },
   {
      image: '/images/home/offers/cards/img-7.gif',
   },
   {
      image: '/images/home/offers/cards/img-8.jpg',
   },
]



// import offersMarketImage1 from '/images/home/offers/market/img-1.jpg';
// import offersMarketImage2 from '/images/home/offers/market/img-2.jpg';
// import offersMarketImage3 from '/images/home/offers/market/img-3.jpg';
// import offersMarketImage4 from '/images/home/offers/market/img-4.jpg';

export const offersMarketImages = [
   {
      image: '/images/home/offers/market/img-1.jpg',
   },
   {
      image: '/images/home/offers/market/img-2.jpg',
   },
   {
      image: '/images/home/offers/market/img-3.jpg',
   },
   {
      image: '/images/home/offers/market/img-4.jpg',
   },
]


// import catImage1 from '/images/home/categories/img-1.jpg'
// import catImage2 from '/images/home/categories/img-2.jpg'
// import catImage3 from '/images/home/categories/img-3.jpg'
// import catImage4 from '/images/home/categories/img-4.jpg'
// import catImage5 from '/images/home/categories/img-5.jpg'
// import catImage6 from '/images/home/categories/img-6.jpg'
// import catImage7 from '/images/home/categories/img-7.jpg'
// import catImage8 from '/images/home/categories/img-8.jpg'
// import catImage9 from '/images/home/categories/img-9.jpg'
// import catImage10 from '/images/home/categories/img-10.jpg'
// import catImage11 from '/images/home/categories/img-11.jpg'
// import catImage12 from '/images/home/categories/img-12.jpg'
// import catImage13 from '/images/home/categories/img-13.jpg'
// import catImage14 from '/images/home/categories/img-14.jpg'
// import catImage15 from '/images/home/categories/img-15.jpg'
// import catImage16 from '/images/home/categories/img-16.jpg'
// import catImage17 from '/images/home/categories/img-17.jpg'
// import catImage18 from '/images/home/categories/img-18.jpg'

export const categories = [
   {
      image: '/images/home/categories/img-1.jpg',
      title: 'موبایل',
      href: '#',
   },
   {
      image: '/images/home/categories/img-2.jpg',
      title: 'کالای دیجیتال',
      href: '#',
   },
   {
      image: '/images/home/categories/img-3.jpg',
      title: 'لوازم خانگی برقی',
      href: '#',
   },
   {
      image: '/images/home/categories/img-4.jpg',
      title: 'مد و پوشاک',
      href: '#',
   },
   {
      image: '/images/home/categories/img-5.jpg',
      title: 'خودرو و موتورسیکلت',
      href: '#',
   },
   {
      image: '/images/home/categories/img-6.jpg',
      title: 'تجهیزات پزشکی و سلامت',
      href: '#',
   },
   {
      image: '/images/home/categories/img-7.jpg',
      title: 'ورزش و سفر',
      href: '#',
   },
   {
      image: '/images/home/categories/img-8.jpg',
      title: 'کالای خوراکی و اسااسی',
      href: '#',
   },
   {
      image: '/images/home/categories/img-9.jpg',
      title: 'محصولات بومی و محلی',
      href: '#',
   },
   {
      image: '/images/home/categories/img-10.jpg',
      title: 'لپ تاپ',
      href: '#',
   },
   {
      image: '/images/home/categories/img-11.jpg',
      title: 'خانه و آشپزخانه',
      href: '#',
   },
   {
      image: '/images/home/categories/img-12.jpg',
      title: 'آرایشی بهداشتی',
      href: '#',
   },
   {
      image: '/images/home/categories/img-13.jpg',
      title: 'طلا و نقره',
      href: '#',
   },
   {
      image: '/images/home/categories/img-14.jpg',
      title: 'ابزارآلات و تجهیزات',
      href: '#',
   },
   {
      image: '/images/home/categories/img-15.jpg',
      title: 'کتاب، لوازم تحریر و هنر',
      href: '#',
   },
   {
      image: '/images/home/categories/img-16.jpg',
      title: 'کارت هدیه و گیفت کارت',
      href: '#',
   },
   {
      image: '/images/home/categories/img-17.jpg',
      title: 'اسباب بازی، کودک و نوزاد',
      href: '#',
   },

   {
      image: '/images/home/categories/img-18.jpg',
      title: 'پت شاپ',
      href: '#',
   },
]



// import brandImage1 from '/images/home/brands/img-1.png'
// import brandImage2 from '/images/home/brands/img-2.png'
// import brandImage3 from '/images/home/brands/img-3.jpg'
// import brandImage4 from '/images/home/brands/img-4.png'
// import brandImage5 from '/images/home/brands/img-5.png'
// import brandImage6 from '/images/home/brands/img-6.jpg'
// import brandImage7 from '/images/home/brands/img-7.jpg'
// import brandImage8 from '/images/home/brands/img-8.png'
// import brandImage9 from '/images/home/brands/img-9.png'
// import brandImage10 from '/images/home/brands/img-10.png'


export const popularBrands = [
   {
      image: '/images/home/brands/img-1.png',
      title: 'پریل',
      href: '#',
   },
   {
      image: '/images/home/brands/img-2.png',
      title: 'پرسیل',
      href: '#',
   },
   {
      image: '/images/home/brands/img-3.jpg',
      title: 'چرم مشهد',
      href: '#',
   },
   {
      image: '/images/home/brands/img-4.png',
      title: 'آدانا',
      href: '#',
   },
   {
      image: '/images/home/brands/img-5.png',
      title: 'چینی زرین ایران',
      href: '#',
   },
   {
      image: '/images/home/brands/img-6.jpg',
      title: 'پنتر',
      href: '#',
   },
   {
      image: '/images/home/brands/img-7.jpg',
      title: 'ایکس ویژن',
      href: '#',
   },
   {
      image: '/images/home/brands/img-8.png',
      title: 'پمینا',
      href: '#',
   },
   {
      image: '/images/home/brands/img-9.png',
      title: 'نتربیت',
      href: '#',
   },
   {
      image: '/images/home/brands/img-10.png',
      title: 'هواوی',
      href: '#',
   },
]


// import ads3Image1 from '/images/home/ads/img-1.jpg'
// import ads3Image2 from '/images/home/ads/img-2.jpg'

// import ads4Image1 from '/images/home/ads/img-3.gif'
// import ads4Image2 from '/images/home/ads/img-4.jpg'


export const ads3 = [
   {
      image: '/images/home/ads/img-1.jpg',
      href: '#',
   },
   {
      image: '/images/home/ads/img-2.jpg',
      href: '#',
   },
]

export const ads4 = [
   {
      image: '/images/home/ads/img-3.gif',
      href: '#',
   },
   {
      image: '/images/home/ads/img-4.jpg',
      href: '#',
   },
]



// import headphonesImage1 from '/images/home/headphones/img-1.jpg';
// import headphonesImage2 from '/images/home/headphones/img-2.jpg';
// import headphonesImage3 from '/images/home/headphones/img-3.jpg';
// import headphonesImage4 from '/images/home/headphones/img-4.jpg';
// import headphonesImage5 from '/images/home/headphones/img-5.jpg';
// import headphonesImage6 from '/images/home/headphones/img-6.jpg';
// import headphonesImage7 from '/images/home/headphones/img-7.jpg';
// import headphonesImage8 from '/images/home/headphones/img-8.jpg';
// import headphonesImage9 from '/images/home/headphones/img-9.jpg';

export const headphonesData = [
   {
      id: '1',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-1.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '2',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-2.jpg',
      price: 29_990_000,
      discountPerc: 0,
   },
   {
      id: '3',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-3.jpg',
      price: 139_870_000,
      discountPerc: 0,
   },
   {
      id: '4',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-4.jpg',
      price: 25_120_800,
      discountPerc: 0,
   },
   {
      id: '5',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-5.jpg',
      price: 13_900_000,
      discountPerc: 0,
   },
   {
      id: '6',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-6.jpg',
      price: 15_990_000,
      discountPerc: 19,
   },
   {
      id: '7',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-7.jpg',
      price: 179_780_000,
      discountPerc: 0,
   },
   {
      id: '8',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-8.jpg',
      price: 16_500_000,
      discountPerc: 0,
   },
   {
      id: '9',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-9.jpg',
      price: 11_250_000,
      discountPerc: 0,
   },
]

export const menShoesData = [
   {
      id: '1',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-1.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '2',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-2.jpg',
      price: 29_990_000,
      discountPerc: 0,
   },
   {
      id: '3',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-3.jpg',
      price: 139_870_000,
      discountPerc: 0,
   },
   {
      id: '4',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-4.jpg',
      price: 25_120_800,
      discountPerc: 0,
   },
   {
      id: '5',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-5.jpg',
      price: 13_900_000,
      discountPerc: 0,
   },
   {
      id: '6',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-6.jpg',
      price: 15_990_000,
      discountPerc: 19,
   },
   {
      id: '7',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-7.jpg',
      price: 179_780_000,
      discountPerc: 0,
   },
   {
      id: '8',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-8.jpg',
      price: 16_500_000,
      discountPerc: 0,
   },
   {
      id: '9',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-9.jpg',
      price: 11_250_000,
      discountPerc: 0,
   },
]

export const womenMenShoesData = [
   {
      id: '1',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-1.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '2',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-2.jpg',
      price: 29_990_000,
      discountPerc: 0,
   },
   {
      id: '3',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-3.jpg',
      price: 139_870_000,
      discountPerc: 0,
   },
   {
      id: '4',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-4.jpg',
      price: 25_120_800,
      discountPerc: 0,
   },
   {
      id: '5',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-5.jpg',
      price: 13_900_000,
      discountPerc: 0,
   },
   {
      id: '6',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-6.jpg',
      price: 15_990_000,
      discountPerc: 19,
   },
   {
      id: '7',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-7.jpg',
      price: 179_780_000,
      discountPerc: 0,
   },
   {
      id: '8',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-8.jpg',
      price: 16_500_000,
      discountPerc: 0,
   },
   {
      id: '9',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-9.jpg',
      price: 11_250_000,
      discountPerc: 0,
   },
]

export const smartwatchesData = [
   {
      id: '1',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-1.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '2',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-2.jpg',
      price: 29_990_000,
      discountPerc: 0,
   },
   {
      id: '3',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-3.jpg',
      price: 139_870_000,
      discountPerc: 0,
   },
   {
      id: '4',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-4.jpg',
      price: 25_120_800,
      discountPerc: 0,
   },
   {
      id: '5',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-5.jpg',
      price: 13_900_000,
      discountPerc: 0,
   },
   {
      id: '6',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-6.jpg',
      price: 15_990_000,
      discountPerc: 19,
   },
   {
      id: '7',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-7.jpg',
      price: 179_780_000,
      discountPerc: 0,
   },
   {
      id: '8',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-8.jpg',
      price: 16_500_000,
      discountPerc: 0,
   },
   {
      id: '9',
      title: 'هندزفری بلوتوثی ریمکس مدل RB-S20',
      image: '/images/home/headphones/img-9.jpg',
      price: 11_250_000,
      discountPerc: 0,
   },
]



// import bestSelllersImage1 from '/images/home/bestSellers/img-1.jpg';
// import bestSelllersImage2 from '/images/home/bestSellers/img-2.jpg';
// import bestSelllersImage3 from '/images/home/bestSellers/img-3.jpg';
// import bestSelllersImage4 from '/images/home/bestSellers/img-4.jpg';
// import bestSelllersImage5 from '/images/home/bestSellers/img-5.jpg';
// import bestSelllersImage6 from '/images/home/bestSellers/img-6.jpg';
// import bestSelllersImage7 from '/images/home/bestSellers/img-7.jpg';
// import bestSelllersImage8 from '/images/home/bestSellers/img-8.jpg';
// import bestSelllersImage9 from '/images/home/bestSellers/img-9.jpg';


export const bestSellers = [
   {
      id: '1',
      title: 'کره کاله - 50 گرم',
      image: '/images/home/bestSellers/img-1.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '2',
      title: 'فلوئید ضدآفتاب بی‌رنگ مای ',
      image: '/images/home/bestSellers/img-2.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },   
   {
      id: '3',
      title:  'پودر ماشینی پرسیل Deep Clean',
      image: '/images/home/bestSellers/img-3.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },   
   {
      id: '4',
      title:  'کنسرو تون ماهی در روغن گیاهی محفل 180 گرم',
      image: '/images/home/bestSellers/img-4.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '5',
      title:  'ماکارونی پنه ریگاته',
      image: '/images/home/bestSellers/img-5.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '6',
      title:  'گوشی موبایل شیائومی redmi',
      image: '/images/home/bestSellers/img-6.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '7',
      title:  'گوشی موبایل نوکیا',
      image: '/images/home/bestSellers/img-7.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '8',
      title:  'مایع لباسشویی پرسیل',
      image: '/images/home/bestSellers/img-8.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '9',
      title:  'گوجه فرنگی مقدار 1 کیلوگرم',
      image: '/images/home/bestSellers/img-9.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '10',
      title: 'کره کاله - 50 گرم',
      image: '/images/home/bestSellers/img-1.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '11',
      title: 'فلوئید ضدآفتاب بی‌رنگ مای ',
      image: '/images/home/bestSellers/img-2.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },   
   {
      id: '12',
      title:  'پودر ماشینی پرسیل Deep Clean',
      image: '/images/home/bestSellers/img-3.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },   
   {
      id: '13',
      title:  'کنسرو تون ماهی در روغن گیاهی محفل 180 گرم',
      image: '/images/home/bestSellers/img-4.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '14',
      title:  'ماکارونی پنه ریگاته',
      image: '/images/home/bestSellers/img-5.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '15',
      title:  'گوشی موبایل شیائومی redmi',
      image: '/images/home/bestSellers/img-6.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '16',
      title:  'گوشی موبایل نوکیا',
      image: '/images/home/bestSellers/img-7.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '17',
      title:  'مایع لباسشویی پرسیل',
      image: '/images/home/bestSellers/img-8.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
   {
      id: '18',
      title:  'گوجه فرنگی مقدار 1 کیلوگرم',
      image: '/images/home/bestSellers/img-9.jpg',
      price: 24_800_000,
      discountPerc: 0,
   },
]


// import discountsGridImage1 from '/images/home/discountsGrid/img-1.jpg';
// import discountsGridImage2 from '/images/home/discountsGrid/img-2.jpg';
// import discountsGridImage3 from '/images/home/discountsGrid/img-3.jpg';
// import discountsGridImage4 from '/images/home/discountsGrid/img-4.jpg';
// import discountsGridImage5 from '/images/home/discountsGrid/img-5.jpg';
// import discountsGridImage6 from '/images/home/discountsGrid/img-6.jpg';
// import discountsGridImage7 from '/images/home/discountsGrid/img-7.jpg';
// import discountsGridImage8 from '/images/home/discountsGrid/img-8.jpg';
// import discountsGridImage9 from '/images/home/discountsGrid/img-9.jpg';
// import discountsGridImage10 from '/images/home/discountsGrid/img-10.jpg';


export const discountsGridProducts = [
   {
      id: '1',
      title:  'تیشرت مردانه مشکی',
      image: '/images/home/discountsGrid/img-1.jpg',
      price: 1_677000,
      discountPerc: 57,
   },
   {
      id: '2',
      title:  'اسپیکر',
      image: '/images/home/discountsGrid/img-2.jpg',
      price: 1_677000,
      discountPerc: 0,
   },
   {
      id: '3',
      title:  'کفش زنانه',
      image: '/images/home/discountsGrid/img-3.jpg',
      price: 1_677000,
      discountPerc: 24,
   },
   {
      id: '4',
      title:  'ساعت هوشمند',
      image: '/images/home/discountsGrid/img-4.jpg',
      price: 1_677000,
      discountPerc: 0,
   },
   {
      id: '5',
      title:  'ایرپاد',
      image: '/images/home/discountsGrid/img-5.jpg',
      price: 1_677000,
      discountPerc: 0,
   },
   {
      id: '6',
      title:  'کفش ورزشی',
      image: '/images/home/discountsGrid/img-6.jpg',
      price: 1_677000,
      discountPerc: 57,
   },
   {
      id: '7',
      title:  'کفش مردانه',
      image: '/images/home/discountsGrid/img-7.jpg',
      price: 1_677000,
      discountPerc: 57,
   },
   {
      id: '8',
      title:  'گارد موبایل',
      image: '/images/home/discountsGrid/img-8.jpg',
      price: 1_677000,
      discountPerc: 57,
   },
   {
      id: '9',
      title:  'موبایل شیائومی',
      image: '/images/home/discountsGrid/img-9.jpg',
      price: 1_677000,
      discountPerc: 57,
   },
   {
      id: '10',
      title:  'لپ تاپ ایسوس',
      image: '/images/home/discountsGrid/img-10.jpg',
      price: 1_677000,
      discountPerc: 57,
   },
      {
      id: '11',
      title:  'تیشرت مردانه مشکی',
      image: '/images/home/discountsGrid/img-1.jpg',
      price: 1_677000,
      discountPerc: 57,
   },
   {
      id: '12',
      title:  'اسپیکر',
      image: '/images/home/discountsGrid/img-2.jpg',
      price: 1_677000,
      discountPerc: 57,
   },
   {
      id: '13',
      title:  'کفش زنانه',
      image: '/images/home/discountsGrid/img-3.jpg',
      price: 1_677000,
      discountPerc: 57,
   },
   {
      id: '14',
      title:  'ساعت هوشمند',
      image: '/images/home/discountsGrid/img-4.jpg',
      price: 1_677000,
      discountPerc: 57,
   },
   {
      id: '15',
      title:  'ایرپاد',
      image: '/images/home/discountsGrid/img-5.jpg',
      price: 1_677000,
      discountPerc: 57,
   },
   {
      id: '16',
      title:  'کفش ورزشی',
      image: '/images/home/discountsGrid/img-6.jpg',
      price: 1_677000,
      discountPerc: 57,
   },
   {
      id: '17',
      title:  'کفش مردانه',
      image: '/images/home/discountsGrid/img-7.jpg',
      price: 1_677000,
      discountPerc: 57,
   },
   {
      id: '18',
      title:  'گارد موبایل',
      image: '/images/home/discountsGrid/img-8.jpg',
      price: 1_677000,
      discountPerc: 57,
   },
]



// import articlesImage1 from '/images/home/articles/img-1.jpg';
// import articlesImage2 from '/images/home/articles/img-2.jpg';
// import articlesImage3 from '/images/home/articles/img-3.jpg';
// import articlesImage4 from '/images/home/articles/img-4.jpg';

export const articles = [
   {
      title: 'خرید اسکوتر برقی برای کودکان؛ نکات کلیدی، انواع و راهنمای انتخاب',
      image: '/images/home/articles/img-1.jpg',
   },
   {
      title: 'بهترین مایع بوگیر فاضلاب؛ معرفی ۵ مدل با کارایی بالا',
      image: '/images/home/articles/img-2.jpg',
   },
   {
      title: 'پروتئین‌تراپی مو در خانه؛ دیگر نیازی نیست به سالن زیبایی بروید',
      image: '/images/home/articles/img-3.jpg',
   },
   {
      title: 'بهترین روش خوابیدن برای گودی کمر',
      image: '/images/home/articles/img-4.jpg',
   },
]


/*------------------ Footer ------------------ */
export const withDigikala = [
   {
      href: '#',
      title: 'اتاق خبر دیجی کالا',
   },
   {
      href: '#',
      title: 'فروش در دیجی کالا',
   },
   {
      href: '#',
      title: 'فرصت های شغلی',
   },
   {
      href: '#',
      title: 'گزارش تخلف در دیجی کالا',
   },
   {
      href: '#',
      title: 'تماس با دیجی کالا',
   },
   {
      href: '#',
      title: 'درباره دیجی کالا',
   },
]

export const customerServices = [
   {
      href: '#',
      title: 'پاسخ به پرسش‌های متداول',
   },
   {
      href: '#',
      title: 'رویه های بازگرداندن کالا',
   },
   {
      href: '#',
      title: 'شرایظ استفاده',
   },
   {
      href: '#',
      title: 'حریم خصوصی',
   },
   {
      href: '#',
      title: 'گزارش باگ',
   },
]

export const shoppingGuide = [
   {
      href: '#',
      title: 'نحوه ثبت سفارش',
   },
   {
      href: '#',
      title: 'رویه های ارسال سفارش',
   },
   {
      href: '#',
      title: 'شیوه‌های پرداخت',
   },
]

export const partners = [
   {
      href: '#',
      image: '/images/footer/partners/digiclub.svg',
   },
   {
      href: '#',
      image: '/images/footer/partners/digiexpress.svg',
   },
   {
      href: '#',
      image: '/images/footer/partners/digify.svg',
   },

   {
      href: '#',
      image: '/images/footer/partners/digimag.svg',
   },
   {
      href: '#',
      image: '/images/footer/partners/digiMehr.svg',
   },
   {
      href: '#',
      image: '/images/footer/partners/diginext.svg',
   },
   {
      href: '#',
      image: '/images/footer/partners/digipay.svg',
   },
   {
      href: '#',
      image: '/images/footer/partners/digiplus.svg',
   },
   {
      href: '#',
      image: '/images/footer/partners/digistyle.svg',
   },
   {
      href: '#',
      image: '/images/footer/partners/ganjeh.svg',
   },
   {
      href: '#',
      image: '/images/footer/partners/jet.svg',
   },
   {
      href: '#',
      image: '/images/footer/partners/smartech.svg',
   },
      {
      href: '#',
      image: '/images/footer/partners/digikala-business.svg',
   },
   {
      href: '#',
      image: '/images/footer/partners/digikala-service.svg',
   },
]


export const footerBenefits = [
   {
      title: 'امکان تحویل اکپرس',
      image: '/images/footer/benefits/express-delivery.svg',
   },
   {
      title: 'امکان پرداخت در محل',
      image: '/images/footer/benefits/cash-on-delivery.svg',
   },
   {
      title: '7 روز هفته، 24 ساعته',
      image: '/images/footer/benefits/support.svg',
   },
   {
      title: 'هفت روز ضمانت بازگشت کالا',
      image: '/images/footer/benefits/days-return.svg',
   },
   {
      title: 'ضمانت اصل بودن کالا',
      image: '/images/footer/benefits/original-products.svg',
   },
]

export const footerDescriptions = [
   {
      title: 'ویژگی های مهم دیجی کالا',
      desc: 'یکی از ویژگی‌های مهم در خرید از دیجی کالا، تنوع بی‌نظیر محصولات است. این فروشگاه اینترنتی طیف وسیعی از کالاها را در دسته‌های مختلف از جمله لوازم دیجیتال، لوازم خانگی، مد و پوشاک، لوازم آرایشی و بهداشتی، محصولات سلامت و زیبایی، و بسیاری از محصولات دیگر ارائه می‌دهد. به عنوان مثال، اگر به دنبال خرید یک گوشی موبایل جدید باشید، دیجی کالا مجموعه‌ای از بهترین گوشی‌ها از برندهای معتبر اپل و سامسونگ مانند ایفون 16، گوشی S25، گوشی‌های مختلف از برند شیائومی مانند شیائومی نوت ۱۴ و بسیاری از برندهای دیگر را در اختیار شما قرار می‌دهد. همچنین برای علاقه‌مندان به لوازم دیجیتال، این فروشگاه اینترنتی انواع لپ تاپ، تلویزیون، اسپیکر، و هندزفری بلوتوثی با کیفیت بالا را برای خرید آنلاین ارائه می‌دهد. دیجی کالا، مقصدی بی‌پایان برای خرید آسان، سریع و مطمئن است. راهی که هر آنچه نیاز دارید از قیمت لپ تاپ تا یک ایرپاد مطمئن را در اختیار شما قرار می‌دهد. ',
   },
   {
      title: 'ارسال سریع و مطمئن کالا',
      desc: 'یکی از مهم‌ترین دغدغه‌های کاربران خرید آنلاین، زمان تحویل کالا است. دیجی کالا برای حل این مشکل، گزینه‌های مختلف ارسال را در نظر گرفته است تا کاربران بتوانند بر اساس نیاز خود، روش ارسال مناسب را انتخاب کنند. به عنوان مثال، ارسال کالا به صورت تحویل امروز با ارسال سریع دیجی‌کالا، از جمله روش‌های خرید سریع از این فروشگاه اینترنتی است. این امکانات باعث می‌شود که خریداران بتوانند سفارش خود را در کوتاه‌ترین زمان ممکن دریافت کنند. علاوه بر این، در صورتی که کالای خریداری شده از لحاظ کیفیت یا هر دلیل دیگری رضایت مشتری را جلب نکرده باشد، دیجی کالا ضمانت بازگشت کالا را ارائه می‌دهد. این ویژگی موجب اعتماد بیشتر مشتریان به خرید آنلاین از فروشگاه اینترنتی دیجی کالا شده است.',
   },
   {
      title: 'تخفیف های ویژه و جشنواره ها',
      desc: 'دیجی کالا به طور منظم جشنواره‌ها و تخفیف‌های ویژه‌ای را برگزار می‌کند که برای مشتریان فرصت خرید کالاهای باکیفیت با قیمت‌های مناسب به همراه خواهد داشت. این تخفیف‌ها در ایام خاص مانند بلک فرایدی یا همان حراج جمعه سیاه و جشنواره‌های تابستانی توجه بسیاری از خریداران را جلب می‌کند. در این جشنواره‌ها، دیجی کالا تخفیف‌های عالی روی محصولات مختلف از جمله گوشی‌های موبایل، لپ تاپ‌ها، تلویزیون‌ها، و حتی محصولات زیبایی ارائه می‌دهد. می‌توانید گوشی ایفون ۱۶ یا گوشی S25 را با تخفیف‌های ویژه خریداری کنید و از قیمت مناسب بهره‌مند شوید. دیجی کالا فراتر از یک فروشگاه اینترنتی، یک تجربه خرید مطمئن در بین کاربران مختلف بوده است که با ارائه بزرگ‌ترین تنوع کالا، قیمت‌های مختلف و خدماتی بی‌نقص، به مقصد اول خریداران آنلاین در ایران تبدیل شده است.',
   },
   {
      title: 'انواع محصولات فروشگاه دیجی کالا',
      desc: 'دیجی کالا دارای محصولات متنوعی در گروه‌های مختلف است که خرید آنها بسیار راحت و سریع است. به عنوان مثال، اگر به دنبال قاب گوشی یا هندزفری بلوتوثی باشید، می‌توانید مدل‌های مختلف و برندهای گوناگونی را در این فروشگاه پیدا کنید. ',
   },
   {
      title: 'موبایل و کالای دیجیتال',
      desc: 'دیجی‌کالا انواع گوشی‌های هوشمند از برندهای معتبر جهانی مانند سامسونگ، اپل، شیائومی و هواوی را با مشخصات و قیمت‌های متنوع عرضه می‌کند. علاوه بر موبایل، دیجی‌کالا مجموعه‌ای از لوازم جانبی مانند هدفون، هندزفری، ساعت‌های هوشمند، تبلت‌ها و لپ تاپ را نیز در اختیار مشتریان قرار می‌دهد. با امکان مقایسه محصولات، مطالعه نظرات کاربران و دسترسی به جدیدترین مدل‌ها، دیجی‌کالا به یکی از مقاصد اصلی خرید آنلاین در حوزه موبایل و کالای دیجیتال تبدیل شده است. از دهه گذشته همواره دیجی کالا به عنوان اولین گزینه برای خرید گوشی های سامسونگ، آیفون های اپل و گوشی شیائومی محسوب می‌شده است و تا امروز هم در عرضه این موبایل های محبوب به بازار، دیجی‌کالا اولین فروشگاه آنلاین بوده است. ',
   },
   {
      title: 'کتاب و لوازم تحریر',
      desc: 'کتاب، لوازم تحریر و هنر در دیجی کالا یک مجموعه بی‌نظیر از محصولات فرهنگی و هنری است که به علاقه‌مندان به کتابخوانی، هنر و نوشتن کمک می‌کند تا دنیای خود را گسترش دهند. از کتاب‌های چاپی و کتاب‌های صوتی گرفته تا مجلات خارجی و داخلی و آثار معروف‌ترین نویسندگان مثل سعدی، حافظ، مولانا و فروغ فرخزاد، تمامی نیازهای کتابخوان‌ها را پوشش می‌دهد. همچنین با مجموعه‌ای از لوازم تحریر، ابزار نقاشی و رنگ‌آمیزی، آلبوم‌های عکس و فرش‌های دستبافت، به شما این امکان را می‌دهد تا دنیای هنر و خلاقیت خود را به بهترین نحو پرورش دهید. همچنین خر سال تقریبا همزمان با تهران و نمایشگاه بین المللی کتاب، دیجی کالا نمایشگاه مجازی کتاب خود را برگزار می‌کند تا آنها که فرصت حضور در نمایشگاه را ندارند، بتوانند مجازی از کتاب ها بازدید و خرید کنند. ',
   },
   {
      title: 'لوازم آرایشی و بهداشتی',
      desc: 'در دسته محصولات آرایشی و بهداشتی، دیجی کالا مجموعه‌ای از بهترین و پرطرفدارترین برندهای جهانی را در اختیار کاربران قرار می‌دهد. محصولات متنوعی همچون مرطوب كننده‌ها، كرم پودر، ضدآفتاب، ريمل و رژلب از برندهایی مانند لورال، کلینیک و میبلین در دیجی کالا موجود هستند که برای هر سلیقه و نیاز قابل انتخاب هستند. علاوه بر این، شما می‌توانید محصولات مراقبت از پوست و مو مانند شامپو، کرم‌های ضد چروک و ماسک صورت را در این فروشگاه بیابید و خرید آنلاین خود را به راحتی انجام دهید. دیجی کالا، بزرگ‌ترین و معتبرترین فروشگاه آنلاین لوازم آرایشی ایران، جایی که تنوع، کیفیت و اطمینان در خرید یکجا جمع شده‌اند.',
   },
   {
      title: 'خرید آنلاین طلا و جواهرات',
      desc: 'دیجی کالا به عنوان بزرگترین فروشگاه اینترنتی ایران، یکی از بهترین گزینه‌ها برای خرید طلا و جواهرات آنلاین است. شما می‌توانید خريد گردنبند طلا، انگشتر طلا، گوشواره زنانه طلا و دستبند طلا را با بهترین قیمت‌ها از دیجی کالا انجام دهید. این فروشگاه مجموعه‌ای از بهترین برندهای طلا و جواهرات را در اختیار مشتریان قرار داده است که انتخاب خرید را برای آنها بسیار آسان می‌کند. همچنین می‌توانید خريد سكه، و حتی ربع سكه را نیز از این فروشگاه با راحت‌ترین روش انجام دهید. ',
   },
   {
      title: 'اسباب بازی',
      desc: `این قسمت شامل تمامی نیازهای ضروری برای مراقبت، بهداشت، سرگرمی و راحتی کودک از بدو تولد تا دوران کودکی است. از لوازم بهداشت و حمام کودک و نوزاد مانند پوشک، دستمال مرطوب، شامپو کودک، حوله و وان حمام نوزاد گرفته تا محصولات ویژه‌ای مثل مینی واش و شامپو کودک و نوزاد، همه در این مجموعه موجود هستند. همچنین برای راحتی بیشتر، انواع پوشاک و کفش کودک و نوزاد از لباس نوزادی تا کفش پسرانه، کوله پشتی پسرانه، لباس دخترانه و کفش دخترانه به صورت آنلاین در دسترس شما قرار دارند.

کودکان به سرگرمی‌های ویژه نیاز دارند، از همین رو دیجی کالا مجموعه‌ای کامل از اسباب بازی‌ها از جمله پازل‌ها، لگو و ساختنی‌ها، عروسک‌ها، فیگورها و اسپینر‌ها را به شما ارائه می‌دهد.`,
   },
   {
      title: 'لوازم خانگی و مبلمان',
      desc: `در دسته‌بندی لوازم خانگی، دیجی کالا محصولات متنوعی را ارائه می‌دهد که برای راحتی و زیبایی خانه و آشپزخانه شما طراحی شده‌اند. از جمله مبل راحتی، سرویس‌های خواب، آینه‌های دکوراتیو، و ظروف آشپزخانه که همگی از برندهای معتبر و با کیفیت تولید شده‌اند. شما می‌توانید قابلمه و تابه، یخچال، ماشین لباسشویی و بسیاری از لوازم خانگی دیگر را از دیجی کالا خریداری کنید.

مبل‌های راحتی یکی از پرطرفدارترین محصولات خانگی در دیجی کالا هستند. این مبل‌ها در انواع طرح‌ها و رنگ‌ها و از برندهای معتبر ساخته شده‌اند که با هر دکوراسیونی هماهنگ می‌شوند. همچنین در دیجی کالا  انواع سرویس خواب با کیفیت بالا و طراحی روز دنیا در دسترس است. علاوه بر این، اگر به دنبال آینه دکوراتیو یا سایر لوازم تزئینی منزل هستید، این فروشگاه بهترین انتخاب‌ها را به شما ارائه می‌دهد.`,
   },
   {
      title: 'سوپرمارکت دیجی کالا',
      desc: 'در دسته‌بندی خوراکی‌ها و کالاهای اساسی دیجی کالا، شما می‌توانید انواع محصولات ضروری و پرمصرف روزانه خود را پیدا کنید. از شیرینی و آجیل تا نان تازه و نبات خوشمزه گرفته و رب گوجه، ماکارونی، قند، رب انار، برنج و شکر و حتی شیر و لبنیات همه این محصولات با بالاترین کیفیت و از برندهای معتبر در دسترس شما قرار دارند. این مجموعه شامل همه آن چیزی است که برای تهیه یک وعده غذایی کامل و سالم به آن نیاز دارید. خرید از سوپر مارکت آنلاین  کمک می‌کند که به راحتی و در کمترین زمان ممکن، مواد اولیه مورد نیاز خود را با قیمت‌های مناسب و با تضمین کیفیت دریافت کنید.',
   },
   {
      title: 'محصولات بومی و محلی',
      desc: `در این بخش از دیجی کالا، از برنج، روغن، عسل طبیعی، حلوا شکری، ارده و کنجد سنتی گرفته تا کیک و شیرینی خانگی، لواشک، برگه و آلوچه خانگی، محصولات اصیل و با کیفیت ارائه می‌شود. همچنین، انواع لبنیات سنتی، کره گیاهی و حیوانی محلی، خرمای محلی و خشکبار و آجیل سنتی به همراه غلات و حبوبات ارگانیک، ادویه‌ها و چاشنی‌های ارگانیک نظیر زعفران و زرشک ارگانیک از دیگر گزینه‌های این دسته هستند. برای علاقه‌مندان به دکوراسیون سنتی نیز، محصولاتی مانند لوستر دست ساز، مجسمه‌های سنتی، گلدان و تابلو سنتی، کاشی و آینه سنتی و ظروف آشپزخانه دست ساز از جنس سنتی وجود دارد که خانه شما را به محیطی گرم و اصیل تبدیل خواهد کرد.`,
   },
   {
      title: 'ابزار آلات و تجهیزات',
      desc: 'این بخش شامل ابزار برقی و غیر برقی در دیجی کالا مجموعه‌ای کامل از ابزارهای مورد نیاز برای پروژه‌های صنعتی، تعمیرات و ساخت می‌شود. از ابزارهای برقی مانند دریل، پیچ گوشتی، فرز، سنگ رومیزی، موتور برق و مکنده-دمنده گرفته تا ابزارهای غیر برقی مثل ابزار دستی، نردبان، اره و مجموعه ابزار، این دسته برای هر نیازی ابزار مناسب را ارائه می‌دهد. همچنین کمپرسور هوا، دستگاه جوش، هویه و ابزار برش و تراشکاری برای انجام کارهای دقیق صنعتی موجود است. به‌علاوه انواع لوازم روانکاری، چسب صنعتی، پیچ و مهره، ماسک تنفسی، لوازم ایمنی و کار و شیرآلات به تکمیل نیازهای شما برای کارهای ساختمانی و صنعتی کمک می‌کند. دیجی کالا یک راهکار کامل برای پروژه‌های حرفه‌ای و خانگی است.',
   },
   {
      title: 'پوشاک',
      desc: ' از لباس‌های مردانه شامل هودی، سویشرت، ژاکت، پیراهن، شلوار جین، پالتو، کاپشن، کفش و اکسسوری تا پوشاک زنانه نظیر مانتو، بلوز، تیشرت، لباس مجلسی، لباس خواب، کاپشن و کفش زنانه، همگی در این دسته‌بندی موجود هستند. همچنین برای بچگانه‌ها، از لباس‌های راحتی و خواب، پوشاک ورزشی تا کفش و صندل بچگانه، به‌راحتی می‌توانید کالای مناسب را پیدا کنید. این بخش شامل برندهای معتبر مانند هامتو، چرم مشهد، اسمارا، کروم، گردیه و چرم عطارد است که پوشاک با کیفیت بالا را ارائه می‌دهند. خرید آنلاین لباس از دیجی کالا فرصتی برای همه فروشنده های شناخته شده کشور فراهم کرده است تا فروش اینترنتی بیشتری را تجربه کنند. همچنین شما کاربران می‌توانید طیف وسیعی از پوشاک را به راحتی و از طریق پروفایل همیشگی خود در Digikala خریداری کنید. ',
   },
   {
      title: 'تجهیزات پزشکی و سلامت',
      desc: 'در این بخش از تجهیزات پزشکی مانند فشارسنج، ترازو، تب سنج و دماسنج گرفته تا دستگاه‌های تنفسی و تجهیزات حرفه‌ای پزشکی، موجود هستند. برای کنترل بیماری‌هایی مانند دیابت و سرماخوردگی، محصولات مناسبی از جمله کیسه نمک، رطوبت‌گیر، و دستگاه‌های تب سنج ارائه می‌شود. علاوه بر این، ماساژور و پد و کیسه آب گرم به شما کمک می‌کنند تا در خانه از تسکین درد و آرامش بیشتری برخوردار شوید.',
   },
   {
      title: 'محصولات ورزشی و سفر',
      desc: 'دیجی کالا همچنین برای علاقه‌مندان به ورزش و سفر، محصولات متنوعی را در دسته‌بندی‌های مختلف ارائه می‌دهد. اگر به دنبال خرید وسایل ورزشی برای بدنسازی، ورزش‌های هوازی، یا کمپینگ هستید، دیجی کالا مجموعه‌ای از لوازم ورزشی از جمله وزنه، ساک ورزشی، قمقمه و بسیاری از لوازم دیگر را ارائه می‌دهد. همچنین شما می‌توانید برای سفرهای خود، ساک‌های مسافرتی، کوله پشتی‌های کوهنوردی و لوازم کمپینگ را از این فروشگاه خریداری کنید.',
   },
   {
      title: 'کارت هدیه',
      desc: 'کارت هدیه‌ها راهی عالی برای هدیه دادن به عزیزانتان هستند و در دیجی کالا انواع مختلفی از آنها برای مناسبت‌های گوناگون وجود دارد. شما می‌توانید کارت هدیه فیزیکی دیجی کالا را به صورت عمومی یا براساس مناسبت‌های خاص همچون تولد یا سالگرد خریداری کنید. همچنین، کارت هدیه براساس قیمت امکان انتخاب هدیه‌ای مناسب با بودجه شما را فراهم می‌کند. علاوه بر کارت‌های فیزیکی، کارت هدیه الکترونیکی دیجی کالا هم برای افرادی که به دنبال یک گزینه سریع و آسان هستند، وجود دارد.',
   },
   {
      title: 'مکمل های غذایی',
      desc: 'دیجی کالا همچنین به عنوان یکی از مراجع معتبر برای خرید مکمل نیز شناخته می‌شود. شما می‌توانید انواع قرص‌های ویتامین، منيزيم، زينك، ويتامين C و بسیاری از مکمل‌های دیگر را از برندهای معروف و معتبر در دیجی کالا پیدا کنید. این مکمل‌ها به سلامت شما کمک می‌کنند و برای تقویت سیستم ایمنی بدن یا افزایش انرژی و بهبود وضعیت پوست و مو مفید هستند.',
   },
   {
      title: 'خرید کالاهای کارکرده',
      desc: `خرید کالاهای کارکرده از دیجی کالا فرصتی عالی برای دسترسی به محصولات با کیفیت و قیمت مناسب است. تمامی کالاهای این دسته‌بندی در وضعیت مشابه‌نو قرار دارند و از نظر فنی و ظاهری کاملا سالم و بدون نقص هستند. همچنین هر کالای کارکرده‌ای که خریداری می‌کنید، دارای 7 روز مهلت تست و ضمانت اصالت است تا شما با خیال راحت از خرید خود اطمینان حاصل کنید. برای گوشی‌های موبایل کارکرده، این فروشگاه 3 ماه گارانتی دیجی کالا سرویس نیز ارائه می‌دهد. از جمله کالاهای کارکرده‌ای که می‌توانید در این دسته پیدا کنید می‌توان به گوشی موبایل کارکرده، لپ تاپ کارکرده، کنسول خانگی کارکرده و ساعت هوشمند کارکرده اشاره کرد. این محصولات با قیمت‌های به‌صرفه، گزینه‌ای مناسب برای کسانی است که به دنبال خرید کالاهای با کیفیت و در عین حال اقتصادی هستند.

در آخر باید گفت خرید از دیجی کالا به دلیل تنوع بالای محصولات، خدمات ارسال سریع، تخفیف‌های ویژه، و امکان خرید آنلاین کالاهای متنوع از برندهای معتبر، یکی از بهترین انتخاب‌ها برای خریداران آنلاین در ایران است. با استفاده از خدمات دیجی کالا، خریدی مطمئن، سریع و راحت را تجربه خواهید کرد.`,
   },
]
