import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './FilmReelLoader.module.css'

function FilmReelLoader({ onLoadingComplete }) {
    const [countdown, setCountdown] = useState(5)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1)
            }, 1000)
            return () => clearTimeout(timer)
        } else {
            setTimeout(() => {
                setIsComplete(true)
                setTimeout(onLoadingComplete, 500)
            }, 500)
        }
    }, [countdown, onLoadingComplete])

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    className={styles.loaderContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Film Strip Borders */}
                    <div className={styles.filmBorderLeft}>
                        {[...Array(12)].map((_, i) => (
                            <div key={`left-${i}`} className={styles.perfHole} />
                        ))}
                    </div>
                    <div className={styles.filmBorderRight}>
                        {[...Array(12)].map((_, i) => (
                            <div key={`right-${i}`} className={styles.perfHole} />
                        ))}
                    </div>

                    {/* Countdown Circle */}
                    <div className={styles.countdownWrapper}>
                        <motion.div
                            className={styles.countdownCircle}
                            key={countdown}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.2, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Concentric Circles */}
                            <div className={styles.circle} style={{ width: '100%', height: '100%' }} />
                            <div className={styles.circle} style={{ width: '85%', height: '85%' }} />
                            <div className={styles.circle} style={{ width: '70%', height: '70%' }} />

                            {/* Crosshair */}
                            <div className={styles.crosshairH} />
                            <div className={styles.crosshairV} />

                            {/* Countdown Number */}
                            <motion.div
                                className={styles.number}
                                initial={{ scale: 0.5, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            >
                                {countdown}
                            </motion.div>
                        </motion.div>

                        {/* Rotating Scan Line */}
                        <motion.div
                            className={styles.scanLine}
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </div>

                    {/* Vignette Effect */}
                    <div className={styles.vignette} />

                    {/* Film Grain */}
                    <div className={styles.grain} />

                    {/* Scanlines */}
                    <div className={styles.scanlines} />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default FilmReelLoader