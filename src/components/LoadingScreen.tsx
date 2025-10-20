"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
const timer = setTimeout(() => {
setIsLoading(false)
}, 2000)

return () => clearTimeout(timer)
}, [])

if (!isLoading) return null

return (
<div className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500">
{/* Animated Background */}
<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
</div>

{/* Loading Content */}
<div className="relative z-10 text-center">
{/* 3D Glass Logo/Text */}
<div className="glass-strong rounded-3xl px-8 py-6 mb-8 inline-block">
<h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
Welcome To My Portfolio
</h1>
</div>

{/* Animated Dots Loader */}
<div className="flex justify-center gap-3">
<div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
<div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '150ms' }} />
<div className="w-3 h-3 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: '300ms' }} />
</div>
</div>
</div>
)
}