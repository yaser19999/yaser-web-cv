"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import toast from "react-hot-toast"

interface NotifyProps {
  message?: string
  type?: "success" | "error",
  orignalUrl?:string
}

export default function Notify({ message, type , orignalUrl }: NotifyProps) {
  const router = useRouter()

  useEffect(() => {
    if (!message || !type) return

    const showToast = () => {
      if (type === "success") toast.success(message)
      if (type === "error") toast.error(message)
    }

    setTimeout(() => {
      if(orignalUrl) router.replace(orignalUrl,{scroll:false})
    }, 300);


    // Prevent double toast in React Strict Mode
    const timeout = setTimeout(showToast, 0)

    return () => clearTimeout(timeout)
  }, [message, type , orignalUrl , router])

  return null
}
