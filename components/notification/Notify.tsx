"use client"

import { useEffect } from "react"
import toast from "react-hot-toast"

interface NotifyProps {
  message?: string
  type?: "success" | "error"
}

export default function Notify({ message, type }: NotifyProps) {
  useEffect(() => {
    if (!message || !type) return

    const showToast = () => {
      if (type === "success") toast.success(message)
      if (type === "error") toast.error(message)
    }

    // Prevent double toast in React Strict Mode
    const timeout = setTimeout(showToast, 0)

    return () => clearTimeout(timeout)
  }, [message, type])

  return null
}
