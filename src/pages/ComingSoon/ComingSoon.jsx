import React from 'react'
import { Sparkles } from 'lucide-react'

export default function SponsorsComingSoon() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                {/* Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <Sparkles className="w-24 h-24 text-purple-400 animate-pulse" />
                        <div className="absolute inset-0 blur-xl bg-purple-500 opacity-50"></div>
                    </div>
                </div>

                {/* Main Content */}
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    Coming Soon
                </h1>


                <p className="text-lg text-gray-300 mb-12 max-w-lg mx-auto">
                    We're working hard to bring you something amazing.
                    Stay tuned for updates!
                </p>

                {/* Decorative Elements */}
                <div className="flex justify-center gap-2 mb-8">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>


            </div>
        </div>
    )
}