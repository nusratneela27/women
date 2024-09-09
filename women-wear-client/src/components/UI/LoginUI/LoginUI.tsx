"use client";

import Image from "next/image";
import loginBanner from "@/assets/login.jpg";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { UserData } from "@/types";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.services";

const LoginUI = () => {
  const { register, handleSubmit } = useForm<UserData>();

  const router = useRouter();

  const onSubmit = async (data: UserData) => {
    // console.log(data);

    try {
      const res = await loginUser(data);
      // console.log(res);
      if (res.accessToken) {
        toast.success(res.message);
        storeUserInfo({ accessToken: res.accessToken });
        // localStorage.setItem("accessToken", res.accessToken);
        router.push("/");
      }
      console.log(res);
    } catch (err: any) {
      console.log(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="relative w-full h-screen">
      <Image
        alt="discount"
        src={loginBanner}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center bg-black bg-opacity-30">
        <div className="w-11/12 md:1/2 lg:w-1/3 rounded-3xl p-10 bg-white bg-opacity-50 ">
          <h1 className="text-4xl  font-medium mb-4 text-amber-900">Login</h1>
          <p className="text-xl font-normal italic mb-4">Welcome Back</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 md:px-20"
          >
            <Input
              variant="underlined"
              type="email"
              label="Email"
              {...register("email", { required: true })}
            />
            <Input
              variant="underlined"
              type="password"
              label="Password"
              {...register("password", { required: true })}
            />
            <Button
              type="submit"
              className="bg-gradient-to-tr from-amber-700 to-yellow-500 text-white shadow-lg"
            >
              Submit
            </Button>
          </form>
          <div
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/dashboard",
                // callbackUrl: "https://assignment-8-opal-zeta.vercel.app/dashboard",
                // callbackUrl: `${process.env.NEXT_CALLBACK_URL}/dashboard`,
              })
            }
            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 hover:bg-slate-50 rounded-3xl cursor-pointer w-11/12"
          >
            <FcGoogle size={32} />
            <p>Continue with Google</p>
          </div>
          <div className="flex flex-col md:flex-row justify-around pt-9">
            <p>
              Back To{" "}
              <Link href="/">
                <span className="text-amber-900 font-semibold hover:underline">
                  home
                </span>
              </Link>
            </p>
            <p>
              Don't have account?{" "}
              <Link href="/register">
                <span className="text-amber-900 font-semibold hover:underline">
                  Register
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;
