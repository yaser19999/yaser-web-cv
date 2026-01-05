"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { kufi } from "@/public/fonts/fonts"; // if you want to use the same font
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleSubmit = async () => {

    if (!password) return toast.error("Password is required");

    const token =  new URLSearchParams(window.location.search).get("token");

    try {
      const res = await fetch("/api/auth/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, token }),
      });


      if (res.ok)
        router.replace("/login?message=Password reset successfully&type=success");
    } catch (err) {
      console.log(err);
      toast.error("Failed to reset password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[url('/rose.svg')] bg-cover">
      <div className="rounded-2xl text-[#b3cde4] w-2/3 md:w-1/2 lg:w-1/4 p-6 bg-white/5 border border-white/10 shadow-2xl">
        <h1
          className={`${kufi.className} text-3xl text-[#537692] text-center mb-6`}
        >
          Reset Password
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 outline-none bg-[#b3cde4] rounded-2xl px-3 text-[#001b2e] mt-1"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="py-2 px-5 bg-[#1d3f58] rounded-2xl hover:bg-[#eef3f9] hover:text-[#001b2e] transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
