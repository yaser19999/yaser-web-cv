import { LucideIcon } from "lucide-react";

export default function Smallbox({
  title,
  dec,
  Icon,
}: {
  title: string;
  dec: string;
  Icon: LucideIcon;
}) {
  return (
    <div className="text-[#eef3f9] ">
      <div className=" cursor-pointer hover:shadow-none transition-all duration-300 select-none shadow-[0_0_30px_1px_rgba(56,189,248,0.2)] flex flex-col items-center justify-center text-center gap-2 p-3 w-[130px] h-[130px] backdrop-blur-md bg-white/10 border border-white/20 rounded-xl
      md:w-[200px] md:h-[200px]">
        <Icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" color="#eef3f9" />
        <h1 className=" text-sm font-bold md:text-xl">{title}</h1>
        <p className=" text-[10px] md:text-sm">{dec}</p>
      </div>
    </div>
  );
}
