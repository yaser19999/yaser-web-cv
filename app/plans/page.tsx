import NavBar from "@/components/NavBar";
import { CircleCheck, CircleQuestionMark } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip";

export default function PricingPlans() {
  return (
    <div className="min-h-screen w-full text-white flex flex-col items-center justify-center px-4 bg-[url('/ocean2.jpg')] bg-cover bg-linear-to-b from-[#042136] via-[#031522] to-black relative overflow-hidden">
      <NavBar />

      {/* background subtle lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-[#0a5c8a]/20 blur-[200px] rounded-full top-10 left-1/4"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#0d3355]/30 blur-[200px] rounded-full bottom-10 right-1/4"></div>
      </div>

      <h2 className="text-4xl text-center font-semibold mt-16 md:mt-1 mb-4 z-10">
        Choose a right plan for you
      </h2>
      <p className="text-gray-300 mb-12 z-10"></p>

      <div className="flex flex-col md:flex-row gap-10 w-full  justify-center z-10">
        {/* the third card */}
        <div
          className={`relative flex flex-col justify-between backdrop-blur-xs shadow-[0_0_40px_rgba(0,255,255,0.1)] rounded-3xl p-10 w-full md:w-[380px] border transition-all duration-500  bg-linear-to-b from-white/10 to-white/5 border-cyan-500/50 shadow-black/40`}
          style={{
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.4)",
          }}
        >
          <div>
            <div className="flex  items-center gap-3 mb-3 ">
              <h3 className="text-2xl font-semibold ">Simple portfolio</h3>
              <Tooltip>
                <TooltipTrigger>
                  <CircleQuestionMark />
                </TooltipTrigger>
                <TooltipContent>
                  <p>a single landing page containing important informations</p>
                  <p>image , address , name , about yourself </p>
                </TooltipContent>
              </Tooltip>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Single page containing important informations
            </p>
            <div className="relative mb-7">
              {/* Discount badge */}

              {/* Old price */}
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <div>
                  <span className="text-xs uppercase tracking-widest font-medium text-red-400/80">
                    Was
                  </span>{" "}
                  <span className="text-xl  text-white/60 line-through">
                    3500 EGP
                  </span>
                </div>

                <span className=" bg-linear-to-r from-[#6b4f1d]/40 via-[#f5d57a]/40 to-[#6b4f1d]/40 text-[#f8e7a1] text-xs px-4 py-1.5 rounded-full font-semibold tracking-widest uppercase border border-[#f5d57a]/40 shadow-[0_0_18px_rgba(255,215,120,0.6)] transition-all duration-500 cursor-pointer hover:shadow-none backdrop-blur-xl">
                  Limited offer
                </span>
              </div>

              {/* New price */}
              <div className="flex items-end gap-2">
                <span className="text-xl font-semibold text-cyan-300 uppercase tracking-wide">
                  Now
                </span>

                <span className="text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
                  2499 EGP
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-8 text-gray-300">
              <div className="flex items-center gap-3 text-sm">
                <CircleCheck size={16} /> Simple landing page
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/201096660304?text=Simple portfolioكنت عايز أسال عن خطة ال"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full cursor-pointer py-3 text-center rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 transition font-medium backdrop-blur-md"
          >
            Contact us
          </a>
        </div>
        {/* the second card */}
        <div
          className={`relative flex flex-col justify-between backdrop-blur-xs shadow-[0_0_40px_rgba(0,255,255,0.1)] rounded-3xl p-10 w-full md:w-[380px] border transition-all duration-500  bg-linear-to-b from-white/10 to-white/5 border-cyan-300/40 shadow-cyan-400/20 scale-105`}
          style={{
            boxShadow: "inset 0 0 40px rgba(0,200,255,0.4)",
          }}
        >
          <span
            className="
                absolute -top-5 left-1/2 -translate-x-1/2
              bg-cyan-400/20
                backdrop-blur-2xl
                text-xs font-medium
                px-4 py-1
                rounded-full
                border border-cyan-300/30
                shadow-[0_0_12px_rgba(0,200,255,0.35)]"
          >
            Best value for money!
          </span>
          <div className="flex items-center  mb-3 gap-3">
            <h3 className="text-2xl font-semibold ">Advanced portfolio</h3>
            <Tooltip>
              <TooltipTrigger>
                <CircleQuestionMark />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  multible pages containing all you need to shine among dentists
                </p>
                <p>
                  information data base , image data base , social media links ,
                  contact form email , user authentication , and many more
                  configrations{" "}
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
          <p className="text-gray-400 mb-4 text-sm">
            A website that tells your story and who you really are
          </p>
          <div className="relative mb-7">
            {/* Discount badge */}

            {/* Old price */}
            <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
              <div>
                <span className="text-xs uppercase tracking-widest font-medium text-red-400/80">
                  Was
                </span>{" "}
                <span className="text-xl  text-white/60 line-through">
                  9500 EGP
                </span>
              </div>

              <span
                className=" bg-[radial-gradient(circle_at_top,_#fff6c3,_#f1c44f,_#8b5e14)] text-[#3b2a0a] text-[11px] px-5 py-1.5 rounded-full font-semibold uppercase tracking-[0.2em]
                border border-[#f8e39a]/60 shadow-[0_6px_30px_rgba(255,215,120,0.55),_inset_0_1px_2px_rgba(255,255,255,0.6)] transition-all duration-500 cursor-pointer hover:shadow-none backdrop-blur-xl"
              >
                Limited offer
              </span>
            </div>

            {/* New price */}
            <div className="flex items-end gap-2">
              <span className="text-xl font-semibold text-cyan-300 uppercase tracking-wide">
                Now
              </span>

              <span className="text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
                4999 EGP
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-8 text-gray-300">
            <div className="flex items-center gap-3 text-sm">
              <CircleCheck size={16} /> Simple landing page
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CircleCheck size={16} /> Blog Section
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CircleCheck size={16} /> Rich text editor
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CircleCheck size={16} /> Login & Register Section
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CircleCheck size={16} /> Contact Form
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CircleCheck size={16} /> C.V Section
            </div>
          </div>

          <a
            href="https://wa.me/201096660304?text=Advanced portfolioكنت عايز أسال عن خطة ال"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer py-3 text-center rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 transition font-medium backdrop-blur-md"
          >
            Contact us
          </a>
        </div>

        {/* the firist card */}
        <div
          className={`relative flex flex-col justify-between backdrop-blur-xs shadow-[0_0_40px_rgba(0,255,255,0.1)] rounded-3xl p-10 w-full md:w-[380px] border transition-all duration-500  bg-linear-to-b from-white/10 to-white/5  border-cyan-300/40 shadow-black/40`}
          style={{
            boxShadow: "inset 0 0 20px rgba(255, 200, 0, 0.3)",
          }}
        >
          <div>
            <div className="flex items-center mb-3 gap-3">
              <h3 className="text-2xl font-semibold ">Custom Website</h3>
              <Tooltip>
                <TooltipTrigger>
                  <CircleQuestionMark />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    what ever your imaganation takes you , we can deliver .{" "}
                  </p>
                  <p>
                    a complete Unique website , a new custom feature to your
                    website.{" "}
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              If you can think it , we can bulid it
            </p>
            <p className="text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_12px_rgba(0,255,255,0.6)] mb-6">
              Hourly based
              
            </p>

            <div className="flex flex-col gap-3 mb-8 text-gray-300">
              <div className="flex items-center gap-3 text-sm">
                <CircleCheck size={16} /> Unique and Stand out website
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/201096660304?text=Custome websiteكنت عايز أسال عن خطة ال"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer py-3 text-center rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 transition font-medium backdrop-blur-md"
          >
            Contact us
          </a>
        </div>
      </div>

      <p className="mt-14 text-sm text-gray-500 z-10">
        Terms and conditions apply. Please contact us for custom offerings.
      </p>
    </div>
  );
}
