import { handleSubmitReset } from "@/utils/actions";
import PromiseButton from "./PromiseButton";
import Notify from "./notification/Notify";

export default function page({searchParams}:{searchParams?:{message?:string , type?:"success" | "error"}}) {
  console.log("from here" , searchParams);

  const styleButton = {
    first:" bg-[#1d3f58]  hover:bg-[#eef3f9] hover:text-[#001b2e] ",
    second:"bg-gray-500",
    main:"cursor-pointer flex justify-center py-2 px-5 rounded-2xl transition-all duration-300"
  }
  return (
    <div className="flex items-center justify-center h-screen bg-[url('/rose.svg')] bg-cover">

      {searchParams?.message && searchParams?.type && <Notify message={searchParams.message} type={searchParams.type} orignalUrl="/forgetPassword/email" />}  
      <div className="rounded-2xl text-[#b3cde4] w-2/3 md:w-1/2 lg:w-1/4 p-6 bg-white/5 border border-white/10 shadow-2xl">
        <h1 className="text-3xl text-[#537692] text-center mb-6">
          Forgot Password
        </h1>
        <form action={handleSubmitReset}>
          <div className="flex flex-col">
            <div className="flex flex-col mb-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="p-2 outline-none bg-[#b3cde4] rounded-2xl px-3 text-[#001b2e] mt-1"
              />
            </div>
            <PromiseButton msg={"Reset Password"}
            style={styleButton}
            />
          </div>
        </form>

        <p className="text-center text-sm mt-2">
          Remembered your password?{" "}
          <a href="/login" className="text-[#537692] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
