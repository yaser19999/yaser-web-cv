"use client";
import { Files, House, Images, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import UserLinks from "./UserLinks";
import { Session } from "next-auth";
import PremiumGlassButton from "./Animatedbutton";

const Mobilemenu = ({ user }: { user: Session | null }) => {
  const element = useRef<HTMLDivElement | null>(null);
  const iconMenu = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        element.current &&
        !element.current.contains(e.target as Node) &&
        iconMenu.current &&
        !iconMenu.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="z-50 absolute right-3 top-3 select-none">
      {/* Menu Button */}
      <div
        ref={iconMenu}
        onClick={() => toggleMenu()}
        className="cursor-pointer p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-200 shadow-lg border border-white/20"
      >
        <Image src="/menu_icon.svg" alt="menu" width={28} height={28} />
      </div>

      {/* Dropdown */}
      <div
        ref={element}
        className={`absolute right-0 mt-3 w-[230px] backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl 
          shadow-[0_0_50px_rgba(255,255,255,0.25)] 
          transition-all duration-500 ease-out origin-top
          ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-3 pointer-events-none"
          }`}
      >
        {/* User Section */}

        <div className="border-b border-white/10">
          <UserLinks user={user} />
        </div>

        {/* Menu Items */}
        <GlassItem href="/" icon={<House size={20} />} text="Home" />
        <GlassItem
          href="/documentedCases"
          icon={<Files size={20} />}
          text="Documented Cases"
        />
        <GlassItem href="/cv" icon={<Images size={20} />} text="Personal C.V" />
        <GlassItem
          href="/contact"
          icon={<Phone size={20} />}
          text="Contact Me"
        />
        <PremiumGlassButton />
      </div>
    </div>
  );
};

export default Mobilemenu;

function GlassItem({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="  flex items-center gap-3 px-5 py-4 text-white hover:bg-white/10 hover:backdrop-blur-2xl transition-all duration-200"
    >
      <span className="text-white">{icon}</span>
      <span className="whitespace-nowrap">{text}</span>
    </Link>
  );
}
