import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import image1 from '../../assets/Loader/1.jpg'
import image2 from '../../assets/Loader/2.jpg'
import image3 from '../../assets/Loader/3.jpg'
import image4 from '../../assets/Loader/4.webp'
import image5 from '../../assets/Loader/5.jpg'

function ImageRewindLoader({ onLoadingComplete }) {
    const [isComplete, setIsComplete] = useState(false)
    const [translateX, setTranslateX] = useState(0)

    // Use imported images
    const images = [image1, image2, image3, image4, image5]

    const imageWidth = 400
    const gap = 40
    const frameWidth = imageWidth + gap
    const totalWidth = images.length * frameWidth
    const speed = 200 // pixels per second

    useEffect(() => {
        const startTime = Date.now()
        const duration = 5000 // 5 seconds auto-complete

        const animate = () => {
            const elapsed = Date.now() - startTime
            const newTranslateX = ((elapsed / 1000) * speed) % totalWidth

            // Auto complete after duration
            if (elapsed >= duration) {
                setIsComplete(true)
                if (onLoadingComplete) {
                    setTimeout(onLoadingComplete, 500)
                }
                return
            }

            setTranslateX(newTranslateX)
            requestAnimationFrame(animate)
        }

        const animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [totalWidth, speed, onLoadingComplete])

    const currentFrame = Math.floor(translateX / frameWidth) % images.length
    const [loadingProgress, setLoadingProgress] = useState(0)

    useEffect(() => {
        const duration = 5000 // 5 seconds
        const startTime = Date.now()

        const updateProgress = () => {
            const elapsed = Date.now() - startTime
            const progressPercent = Math.min((elapsed / duration) * 100, 100)
            setLoadingProgress(progressPercent)

            if (progressPercent < 100) {
                requestAnimationFrame(updateProgress)
            }
        }

        requestAnimationFrame(updateProgress)
    }, [])

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    className="fixed inset-0 bg-black z-[9999] flex flex-col overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Film Strip Borders - Top */}
                    <div className="w-full h-8 md:h-12 bg-gradient-to-b from-gray-700 to-gray-600 flex justify-around items-center px-4 md:px-8 flex-shrink-0">
                        {[...Array(20)].map((_, i) => (
                            <div key={`top-${i}`} className="w-2 h-4 md:w-4 md:h-6 bg-black rounded-sm" />
                        ))}
                    </div>

                    {/* Text Overlay - Centered and non-overlapping */}
                    <motion.div
                        className="w-full py-4 md:py-6 flex justify-center items-center flex-shrink-0"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="bg-black bg-opacity-80 px-4 md:px-8 py-3 md:py-4 rounded-lg">
                            <div className="text-gray-300 text-sm md:text-xl font-bold tracking-widest whitespace-nowrap flex items-center gap-2 md:gap-4">
                                LOADING...
                                <span className="text-white text-xl md:text-4xl font-black tracking-wider">APRATIM 2K25</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Film Reel Container */}
                    <div className="flex-1 flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 overflow-hidden">
                            {/* Film Strip with Images - Doubled for seamless loop */}
                            <div
                                className="absolute flex items-center h-full transition-none"
                                style={{
                                    left: '0',
                                    transform: `translateX(-${translateX}px)`,
                                    willChange: 'transform',
                                    gap: `${gap}px`
                                }}
                            >
                                {[...images, ...images].map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="relative flex-shrink-0"
                                        style={{
                                            width: `${imageWidth}px`,
                                            height: '200px'
                                        }}
                                    >
                                        <img
                                            src={img}
                                            alt={`Frame ${(idx % images.length) + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                            style={{
                                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                            }}
                                        />

                                        {/* Image Frame Border */}
                                        <div className="absolute inset-0 border-4 md:border-8 border-gray-600 rounded-lg pointer-events-none"
                                             style={{ boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)' }} />

                                        {/* Frame Number */}
                                        <div className="absolute -bottom-6 md:-bottom-8 left-0 right-0 text-center text-gray-300 font-mono text-xs md:text-sm font-bold">
                                            FRAME {String((idx % images.length) + 1).padStart(2, '0')}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vignette Effect */}
                        <div className="absolute inset-0 pointer-events-none"
                             style={{
                                 background: 'radial-gradient(circle, transparent 0%, transparent 50%, rgba(0,0,0,0.7) 100%)',
                                 opacity: 0.6
                             }} />

                        {/* Film Grain */}
                        <div
                            className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='6.29' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                animation: 'grain 0.5s steps(10) infinite'
                            }}
                        />

                        {/* Scanlines */}
                        <div
                            className="absolute inset-0 pointer-events-none opacity-10"
                            style={{
                                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, black 2px, black 4px)'
                            }}
                        />
                    </div>

                    {/* Bottom Controls Section */}
                    <div className="w-full py-4 md:py-6 flex flex-col items-center gap-3 md:gap-4 flex-shrink-0">
                        {/* Playing Indicator and Counter */}
                        <div className="w-full px-4 flex justify-between items-center max-w-4xl">
                            <motion.div
                                className="bg-gray-700 text-white px-3 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-lg flex items-center gap-2 border-2 border-gray-500"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                            >
                                <motion.svg
                                    className="w-4 h-4 md:w-6 md:h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </motion.svg>
                                <span className="hidden md:inline">PLAYING</span>
                            </motion.div>

                            <div className="text-gray-300 font-mono text-sm md:text-xl bg-black bg-opacity-70 px-3 md:px-4 py-2 rounded-lg border border-gray-600">
                                {String(currentFrame + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full max-w-xs md:max-w-md h-1.5 md:h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-gray-500 to-gray-300 transition-all duration-100"
                                style={{ width: `${loadingProgress}%` }}
                            />
                        </div>
                    </div>

                    {/* Film Strip Borders - Bottom */}
                    <div className="w-full h-8 md:h-12 bg-gradient-to-t from-gray-700 to-gray-600 flex justify-around items-center px-4 md:px-8 flex-shrink-0">
                        {[...Array(20)].map((_, i) => (
                            <div key={`bottom-${i}`} className="w-2 h-4 md:w-4 md:h-6 bg-black rounded-sm" />
                        ))}
                    </div>

                    <style>{`
                        @keyframes grain {
                            0%, 100% { transform: translate(0, 0); }
                            10% { transform: translate(-5%, -10%); }
                            30% { transform: translate(3%, -15%); }
                            50% { transform: translate(12%, 9%); }
                            70% { transform: translate(9%, 4%); }
                            90% { transform: translate(-1%, 7%); }
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ImageRewindLoader