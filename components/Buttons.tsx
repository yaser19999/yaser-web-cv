import { Image as Pic, FileUser, Phone } from "lucide-react";
import Link from "next/link";

export default function Buttons() {
  // Increased height (h-24 to h-32) and refined the liquid glass borders
  const btnClass =
    "group flex flex-1 flex-col items-center justify-center gap-3 p-6 \
    text-white transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] \
    bg-white/[0.02] backdrop-blur-md \
    border-r border-white/10 last:border-r-0 \
    hover:bg-white/[0.07] hover:backdrop-blur-3xl  hover:z-10";

  return (
    <div
      className="flex w-[95%] lg:w-[85%] max-w-screen-2xl mx-auto overflow-hidden \
                    rounded-[2rem] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] \
                    bg-black/10 min-h-[100px] md:min-h-[140px]"
    >
      <Link href="/documentedCases" className={btnClass}>
        <div className="relative">
          <Pic
            className="w-7 h-7 md:w-10 md:h-10 transition-transform duration-500 group-hover:rotate-3"
            strokeWidth={1.2}
          />
          <div className="absolute inset-0 bg-cyan-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="text-xs md:text-lg font-light tracking-[0.1em] uppercase">
          Cases
        </span>
      </Link>

      <Link href="/cv" className={btnClass}>
        <div className="relative">
          <FileUser
            className="w-7 h-7 md:w-10 md:h-10 transition-transform duration-500 group-hover:-translate-y-1"
            strokeWidth={1.2}
          />
          <div className="absolute inset-0 bg-purple-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="text-xs md:text-lg font-light tracking-[0.1em] uppercase">
          C.V
        </span>
      </Link>

      <Link href="/contact" className={btnClass}>
        <div className="relative">
          <Phone
            className="w-7 h-7 md:w-10 md:h-10 transition-transform duration-500 group-hover:rotate-3"
            strokeWidth={1.2}
          />
          <div className="absolute inset-0 bg-blue-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="text-xs md:text-lg font-light tracking-[0.1em] uppercase">
          Contact
        </span>
      </Link>
    </div>
  );
}
