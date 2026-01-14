"use client"

import { useFormStatus } from "react-dom"
import { Loader } from "lucide-react"

export default function PromiseButton({ msg , style }: { msg: string , style?:{first:string , second:string , main:string}}) {
  const { pending } = useFormStatus()


  return (
    <button
      type="submit"
      disabled={pending}
      className={`${style ? style.main : "flex justify-center w-full transition text-white font-semibold p-3 rounded-xl shadow-lg "} 
      ${
        pending ? style ? style.second :"bg-gray-500" : `${style ? style.first :"bg-cyan-500 hover:bg-cyan-600"}`
      }`}
    >
      {pending ? <Loader className="animate-spin" /> : msg}
    </button>
  )
}
