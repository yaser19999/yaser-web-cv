"use client"

import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Loading({
  show = false,
  text = "Loading..."
}: {
  show: boolean
  text?: string
}) {
  if (!show) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center",
        "bg-white/40 backdrop-blur-sm",
        "animate-fade-in"
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-4 rounded-2xl",
          "bg-white/80 px-8 py-6 shadow-xl",
          "animate-scale-in"
        )}
      >
        <Loader2 className="h-8 w-8 animate-spin text-gray-700" />
        <p className="text-sm font-medium text-gray-600">
          {text}
        </p>
      </div>
    </div>
  )
}
