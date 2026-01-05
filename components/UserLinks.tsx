import { logout } from "@/utils/actions";
import { LogOut, Plus } from "lucide-react";
import { Session } from "next-auth";
import Link from "next/link";

export default function UserLinks({ user }: { user: Session | null }) {
  return (
    <div>
      {user ? (
        <div className="px-5 py-4 flex flex-col items-start gap-2 text-white border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow">
              <span className="text-lg font-semibold uppercase">
                {user?.user?.name?.[0] ?? "U"}
              </span>
            </div>

            <div>
              <p className="font-semibold text-sm">{user?.user?.name}</p>
              <p className="text-xs text-white/70">Welcome back</p>
            </div>
          </div>

          {/* New Case Button */}
          <Link
            href="/private/editor"
            className="mt-2 flex items-center justify-center gap-2 w-full py-2 text-sm rounded-lg bg-white/15 hover:bg-white/25 transition-all border border-white/20 backdrop-blur-md shadow"
          >
            <Plus size={16} /> New Case
          </Link>

          {/* Logout Button */}
          <button
            onClick={() => logout()}
            className="flex items-center justify-center gap-2 w-full py-2 text-sm rounded-lg bg-red-400/40 text-red-100 hover:bg-red-300/40 hover:cursor-pointer transition-all border border-red-400/30 backdrop-blur-md shadow"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      ) : (
        <div className="px-5 py-4 flex flex-col items-start gap-2 text-white border-b border-white/10">
          {/* New Case Button */}
          <Link
            href="/login"
            className="mt-2 flex items-center justify-center gap-2 w-full py-2 text-sm rounded-lg bg-white/15 hover:bg-white/25 transition-all border border-white/20 backdrop-blur-md shadow"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="mt-2 flex items-center justify-center gap-2 w-full py-2 text-sm rounded-lg bg-white/15 hover:bg-white/25 transition-all border border-white/20 backdrop-blur-md shadow"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
