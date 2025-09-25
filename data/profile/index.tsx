import { BiBell, BiHomeCircle } from 'react-icons/bi'
import { CiSignpostDuo1 } from 'react-icons/ci'
import { FaRegHeart, FaRegUser } from 'react-icons/fa6'
import { MdOutlineCall, MdOutlineLock, MdOutlineModeComment, MdOutlineShoppingBag } from 'react-icons/md'
import { PiStarFourBold } from 'react-icons/pi'
import { HiOutlineGiftTop } from "react-icons/hi2";
import { FiClock } from 'react-icons/fi'
import { TbLogout } from 'react-icons/tb'
import { BsQuestionSquare } from 'react-icons/bs'
import { LuClipboardList } from 'react-icons/lu'
import { IoBugOutline } from 'react-icons/io5'


export const navlinks = [
   {
      title: 'خلاصه فعالیت ها',
      icon: <BiHomeCircle />,
      href: '/profile',
   },
   {
      title: 'پلاس',
      icon: <PiStarFourBold className='text-purple' />,
      href: '#',
   },
   {
      title: 'سفارش‌ها',
      icon: <MdOutlineShoppingBag />,
      href: '#',
   },
   {
      title: 'لیست‌های من',
      icon: <FaRegHeart />,
      href: '#',
   },
   {
      title: 'دیدگاه‌ها و پرسش‌ها',
      icon: <MdOutlineModeComment />,
      href: '#',
   },
   {
      title: 'آدرس‌ها',
      icon: <CiSignpostDuo1 />,
      href: '#',
   },
   {
      title: 'کارت‌های هدیه',
      icon: <HiOutlineGiftTop />,
      href: '#',
   },
   {
      title: 'پیام‌ها',
      icon: <BiBell />,
      href: '#',
   },
   {
      title: 'بازدید‌های اخیر',
      icon: <FiClock />,
      href: '#',
   },
   {
      title: 'اطلاعات حساب کاربری',
      icon: <FaRegUser />,
      href: '/profile/personal-info',
   },
   {
      title: 'خروج از حساب کاربری',
      icon: <TbLogout />,
      action: 'logout'
   },
]


export const mobileSettingsNavlinks = [
   {
      title: 'پرسش‌های متداول',
      icon: <BsQuestionSquare />,
      href: '#',
   },
   {
      title: 'حریم خصوصی',
      icon: <MdOutlineLock />,
      href: '#',
   },
   {
      title: 'شرایط استفاده',
      icon: <LuClipboardList />,
      href: '#',
   },
   {
      title: 'بتماس با ما',
      icon: <MdOutlineCall />,
      href: '#',
   },
   {
      title: 'گزارش خطا',
      icon: <IoBugOutline />,
      href: '#',
   },
   {
      title: 'خروج از حساب کاربری',
      icon: <TbLogout />,
      action: 'logout'
   },
]