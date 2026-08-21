import NavBar from "@/components/NavBar";
import Image from "next/image";
import Buttons from "@/components/Buttons";
import { kufi } from "@/public/fonts/fonts";
import Preloader from "../components/Preloader"
import Link from "next/link";

export default async function Home() {
  return (
    <div className=" bg-[#001b2e] flex flex-col">
      <Preloader/>
      <NavBar />
      <div className="h-screen ">
        <div className="p-7 flex flex-col  gap-2 justify-center items-center">
          <h1
            className={`${kufi.className}  text-4xl mb-5 mt-10 md:mb-10 md:mt-5  pt-10 md:text-6xl xl:text-[70px]  text-[#537692] text-center `}
          >
          ياسر أشرف النجار
          </h1>
          <div className=" flex flex-col mb-5 items-center justify-center md:flex-row-reverse gap-2 xl:gap-25 w-full ">
            <div className="flex  justify-center">
              <div className=" relative select-none mb-5   bg-[#eef3f9]   rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden shadow-[0_0_1000px_5px_rgba(56,189,248,0.5),0_0_100px_5px_rgba(56,189,248,0.5)]">
                <Image
                  src="/done.png"
                  alt=""
                  loading="eager"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0"></div>
              </div>
            </div>
            <div className=" text-center text-[#eef3f9]">
              <h1 className="text-3xl font-bold mb-3 md:text-5xl">
                Hi , My name is <span className=" text-blue-400">Yaser</span>
              </h1>
              <p className="md:text-xl">
                i am a graduated dentist , 2022 patch
              </p>
              <p className="md:text-xl">studied in <Link  href={"https://www.facebook.com/hue.eg/"} className=" font-bold text-yellow-500">HUE</Link> University</p>
            </div>
          </div>
        <Buttons />

        </div>
      </div>

      <div className="px-10">
      </div>
    </div>
  );
}
