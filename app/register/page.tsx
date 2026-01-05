
import Link from "next/link";
import { kufi } from "@/public/fonts/fonts";
import {register} from "@/utils/actions";
import Notify from "@/components/notification/Notify";
import NavBar from "@/components/NavBar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";






export default async  function Page({searchParams}:{searchParams:{message:string , type:"success" | "error"}}) {
  const data = await searchParams ;

  const user = await auth();
    if(user) return redirect("/")

  return (
    <div className="flex items-center justify-center h-screen bg-[url('/rose.svg')] bg-cover">
      <NavBar />
      <Notify message={data.message} type={data.type}   />
      <div className="  rounded-2xl text-[#b3cde4]  w-2/3  h-2/3 md:w-1/2 lg:w-1/4">
        <form action={register} className="flex flex-col h-full justify-center gap-8 ">

            <h1 className={`${kufi.className} text-3xl text-[#537692] text-center mb-4 `}>
                ياسر أشرف النجار
            </h1>

          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className=" p-1 outline-none bg-[#b3cde4] rounded-2xl px-2 text-[#001b2e]" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className=" p-1 outline-none bg-[#b3cde4] rounded-2xl px-2 text-[#001b2e]" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" >Password</label>
            <input type="password" name="password" id="password" className=" p-1 outline-none bg-[#b3cde4] rounded-2xl px-2 text-[#001b2e]" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Re-enter" >Re-enter the password</label>
            <input type="password" name="Re-enter" id="Re-enter" className=" p-1 outline-none bg-[#b3cde4] rounded-2xl px-2 text-[#001b2e]" />
          </div>
          <Link href={"/login"} >You have an account ?</Link>
          <button className=" py-2 px-5 bg-[#1d3f58] rounded-2xl hover:bg-[#eef3f9] hover:text-[#001b2e] transition-all duration-300">Login</button>
        </form>
      </div>
    </div>
  );
}
