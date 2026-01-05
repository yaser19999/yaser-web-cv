import { Image as Pic, FileUser, Phone } from "lucide-react";
import Link from "next/link";

export default function Buttons() {
  const btnClass =
    "flex items-center justify-center gap-5 text-xl h-15 w-[95%] lg:w-[77%]  md:w-[80%] p-3 overflow-hidden text-white rounded-xl \
    bg-linear-to-r from-cyan-800 to-cyan-950 shadow-[0_0_20px_2px_rgb(71,179,165,0.2)] \
    border border-white/30 bg-cover transition-all duration-300 ease-in-out hover:shadow-none";

  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-30 mb-10">
      <Link href="/documentedCases" className={btnClass}>
        <Pic size={30} color="#eef3f9" />
        <p>Documented Cases</p>
      </Link>

      <Link href="/cv" className={btnClass}>
        <FileUser size={30} color="#eef3f9" />
        <p>Personal C.V</p>
      </Link>

      <Link href="/contact" className={btnClass}>
        <Phone size={30} color="#eef3f9" />
        <p>Contact me</p>
      </Link>
    </div>
  );
}
