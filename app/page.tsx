import NavBar from "@/components/NavBar";
import Smallbox from "@/components/Smallbox";
import Image from "next/image";
import { BicepsFlexed, Brain, Sparkles, NotebookPen } from "lucide-react";
import Buttons from "@/components/Buttons";
import { kufi } from "@/public/fonts/fonts";

export default async function Home() {
  return (
    <div className=" bg-[#001b2e] flex flex-col">
      <NavBar />
      <div className="h-screen ">
        <div className="p-7 flex flex-col h-screen gap-20 justify-center items-center">
          <h1
            className={`${kufi.className}  text-3xl  pt-10 md:text-5xl xl:text-[70px]  text-[#537692] text-center `}
          >
            ياسر أشرف النجار
          </h1>
          <div className=" flex flex-col items-center justify-center md:flex-row-reverse gap-10 xl:gap-50 w-full ">
            <div className="flex  justify-center">
              <div className=" relative select-none   bg-[#eef3f9]   rounded-full w-90 h-90 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]  overflow-hidden shadow-[0_0_1000px_5px_rgba(56,189,248,0.5),0_0_100px_5px_rgba(56,189,248,0.5)]">
                <Image
                  src="/done.png"
                  alt=""
                  loading="eager"
                  width={700}
                  height={700}
                />
                <div className="absolute inset-0"></div>
              </div>
            </div>
            <div className=" text-center mt-5 text-[#eef3f9]">
              <h1 className="text-3xl font-bold mb-3 md:text-5xl">
                Hi , My name is Yaser
              </h1>
              <p className="md:text-xl">
                i am a graduated dentist , 2022 patch
              </p>
              <p className="md:text-xl">studied in HUE University</p>
            </div>
          </div>
        </div>
      </div>

      {/* small boxes */}
      <div className="mt-10 mb-10 ">
        <div className=" grid grid-cols-2 place-items-center   px-10 gap-10 md:gap-20 lg:gap-25 lg:flex items-center  md:justify-center">
          <Smallbox
            title="Hard working"
            dec="Alway doing my best"
            Icon={BicepsFlexed}
          />
          <Smallbox
            title="Learning"
            dec="pationate for learning new things"
            Icon={Brain}
          />
          <Smallbox
            title="Quality"
            dec="perfection always the goal"
            Icon={Sparkles}
          />
          <Smallbox
            title="Organization"
            dec="the key to all my good work"
            Icon={NotebookPen}
          />
        </div>
      </div>
      <div className="px-10">
        <Buttons />
      </div>
    </div>
  );
}
