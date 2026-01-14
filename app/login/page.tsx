import { auth } from "@/auth";
import NavBar from "@/components/NavBar";
import Notify from "@/components/notification/Notify";
import PromiseButton from "@/components/PromiseButton";
import { login } from "@/utils/actions";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function page({
  searchParams,
}: {
  searchParams?: { message?: string; type?: "success" | "error" };
}) {
  const data = await searchParams;
  const styleButton = {
    first: " bg-[#1d3f58]  hover:bg-[#eef3f9] hover:text-[#001b2e] ",
    second: "bg-gray-500",
    main: "cursor-pointer flex justify-center py-2 px-5 rounded-2xl transition-all duration-300",
  };

  const user = await auth();
  if (user) return redirect("/");

  return (
    <div className="flex items-center justify-center h-screen bg-[url('/rose.svg')] bg-cover">
      {data?.message && data?.type && (
        <Notify message={data.message} type={data.type} orignalUrl="/login" />
      )}{" "}
      <NavBar />
      <div className="  rounded-2xl text-[#b3cde4]  w-2/3  h-2/3 md:w-1/4">
        <form
          action={login}
          className="flex flex-col h-full justify-center gap-8 "
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="md:text-xl">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className=" outline-none p-1 bg-[#b3cde4] rounded-2xl px-2 text-[#001b2e]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="md:text-xl">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className=" outline-none bg-[#b3cde4] p-1 rounded-2xl px-2 text-[#001b2e]"
            />
          </div>
          <div className="flex flex-col gap-1 text-[12px]">
            <Link href={"/register"}>Do not have an account ?</Link>
            <Link href={"/forgetPassword/email"}>Forget your password?</Link>
          </div>

          <PromiseButton msg={"Login"} style={styleButton} />

        </form>
      </div>
    </div>
  );
}
