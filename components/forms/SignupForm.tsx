"use client";

import React, { useState } from "react";
import Typography from "../shared/Typography";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { signupAccount } from "@/lib/appwrite/actions/account";
import toast from "react-hot-toast";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LoaderDot from "../shared/LoaderDot";
import { checkAuthUser, clientLogout } from "@/redux/slices/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { initCartItems } from "@/lib/appwrite/actions/cart";
import { selectCartItems } from "@/redux/slices/cart/cartSlice";
import { useSignOutAccount } from "@/lib/react-query/api/users";

const SignUpSchema = z.object({
   email: z.email({ message: "ایمیل نامعتبر است" }),
   password: z.string().min(6, { message: "رمز عبور باید حد اقل 6 کاراکتر باشد" })
})


const SignupForm = (
   {
      redirectUrl,
   }: {
      redirectUrl?: string;
   }
) => {

   const router = useRouter();

   const dispatch = useAppDispatch();
   const clientCartItems = useAppSelector(selectCartItems);

   const [isLoading, setIsLoading] = useState(false);



   const form = useForm<z.infer<typeof SignUpSchema>>({
      resolver: zodResolver(SignUpSchema),
      defaultValues: {
         email: '',
         password: '',
      }
   })

   const {
      mutateAsync: logout,
   } = useSignOutAccount();

   const handleLogout = async () => {
      try {

         await logout();

         dispatch(
            clientLogout()
         )

      } catch (error) {
         console.log(error);
      }
   }

   const onSubmit = async (values: z.infer<typeof SignUpSchema>) => {

      setIsLoading(true);

      try {
         const session = await signupAccount(values);

         if (!session || 'error' in session) {
            if (session?.status === 500) {
               throw new Error('invalid credentials');
            }
            throw new Error('Something went wrong');
         }

         console.log(session, session.userId, clientCartItems);

         const mergedCart = await initCartItems(session?.userId, clientCartItems);

         if ('error' in mergedCart) throw new Error("Error loading cart.");

         dispatch(
            checkAuthUser()
         )

         if (redirectUrl) {
            router.replace(redirectUrl);
         } else {
            router.replace('/');
         }

      } catch (error) {

         await handleLogout();

         console.log(error);
         console.error("Error signup/signin: ", error);
         toast(
            (t) => (
               <span>
                  ایمیل یا رمز عبور اشتباه است
                  <button
                     onClick={() => toast.dismiss(t.id)}
                     style={{
                        cursor: 'pointer',
                        marginRight: '.75rem',
                        color: '#19bfd3',
                     }}
                  >
                     باشه
                  </button>
               </span>
            ),
            {
               // icon: <Icon />,
            }
         );
      } finally {
         setIsLoading(false);
      }
   };


   return (
      <form
         onSubmit={form.handleSubmit(onSubmit)}
         className="space-y-4"
      >
         <div className="">
            <h1 className="mb-6">
               <Typography variant="h3">ثبت نام</Typography>
            </h1>
            <p>
               <Typography variant="base" weight="light">
                  خوش آمدید!
               </Typography>
            </p>
            <p>
               <Typography variant="base" weight="light">
                  لطفا ایمیل و رمز عبور خود را وارد کنید
               </Typography>
            </p>
         </div>

         <div className="space-y-8">
            <div>
               <Input
                  {...form.register('email')}
                  placeholder="ایمیل شما"
                  autoFocus
                  errorMessage={form.formState.errors.email?.message}
               />
            </div>
            <div>
               <Input
                  {...form.register('password')}
                  placeholder="رمز عبور" 
                  errorMessage={form.formState.errors.password?.message}
               />
            </div>
         </div>

         <Button full className="h-12 !py-3 mt-4" type="submit" disabled={isLoading}>
            {
               isLoading
               ? (
                  <LoaderDot className="!p-0" color="light" />
               ): (
                  "ثبت نام"
               )
            }
         </Button>

         <p>
            <Typography variant="small" weight="light">
               ورود شما به معنای پذیرش{" "}
               <span className="text-secondary-500 cursor-pointer">
                  شرایط ما
               </span>{" "}
               و{" "}
               <span className="text-secondary-500 cursor-pointer">
                  قوانین حریم خصوصی
               </span>{" "}
               است
            </Typography>
         </p>

         <p>
            <Typography variant="small" weight="light" className="flex gap-2">
               حساب کاربری دارید؟ 
               &nbsp;
               <Link
                  href="/login"
                  className="text-secondary-500"
                  >
                  ورود به حساب
               </Link>
            </Typography>
         </p>
      </form>
   );
};

export default SignupForm;
