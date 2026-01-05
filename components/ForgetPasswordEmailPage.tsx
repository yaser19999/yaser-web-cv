"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ForgetPasswordEmailPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleForget = async () => {
    if (!email) return toast.error("Email is required");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/email/sendforget`,
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.ok) {
        toast.success("Reset email sent successfully!");
        setTimeout(() => {
          router.replace("/login");
        }, 2000);
      } else toast.error("Something went wrong!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to send email");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[url('/rose.svg')] bg-cover">
      <div className="rounded-2xl text-[#b3cde4] w-2/3 md:w-1/2 lg:w-1/4 p-6 bg-white/5 border border-white/10 shadow-2xl">
        <h1 className="text-3xl text-[#537692] text-center mb-6">
          Forgot Password
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 outline-none bg-[#b3cde4] rounded-2xl px-3 text-[#001b2e] mt-1"
            />
          </div>
          <button
            onClick={handleForget}
            className="py-2 px-5 bg-[#1d3f58] rounded-2xl hover:bg-[#eef3f9] hover:text-[#001b2e] transition-all duration-300"
          >
            Send Reset Email
          </button>
          <p className="text-center text-sm mt-2">
            Remembered your password?{" "}
            <a href="/login" className="text-[#537692] hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
