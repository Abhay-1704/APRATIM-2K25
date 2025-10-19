import React, { useEffect, useState, useRef } from 'react'
import styles from './PageTransition.module.css'

const PageTransition = ({ currentLocation, displayLocation, onLocationChange, lottieJson }) => {
    const [isAnimating, setIsAnimating] = useState(false)
    const [isPageReady, setIsPageReady] = useState(false)
    const lottieRef = useRef(null)
    const animationRef = useRef(null)
    const isFirstRender = useRef(true)

    useEffect(() => {
        // Load Lottie from CDN if not already loaded
        if (!window.lottie) {
            const script = document.createElement('script')
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js'
            script.async = true
            document.body.appendChild(script)

            return () => {
                if (document.body.contains(script)) {
                    document.body.removeChild(script)
                }
            }
        }
    }, [])

    useEffect(() => {
        // Skip transition on first render
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        // If location changed, start transition
        if (currentLocation.pathname !== displayLocation.pathname) {
            setIsPageReady(false)
            playTransition()
        }
    }, [currentLocation.pathname])

    const playTransition = () => {
        if (!window.lottie || isAnimating) return

        setIsAnimating(true)

        // Show transition overlay
        const overlay = document.querySelector(`.${styles.overlay}`)
        if (overlay) {
            overlay.style.display = 'flex'
            setTimeout(() => {
                overlay.style.opacity = '1'
            }, 10)
        }

        // Scroll to top
        window.scrollTo(0, 0)

        // Wait for Lottie to be ready
        const initLottie = setInterval(() => {
            if (window.lottie && lottieRef.current) {
                clearInterval(initLottie)

                // Destroy previous animation if exists
                if (animationRef.current) {
                    animationRef.current.destroy()
                }

                // Clear the container
                lottieRef.current.innerHTML = ''

                animationRef.current = window.lottie.loadAnimation({
                    container: lottieRef.current,
                    renderer: 'svg',
                    loop: true, // Loop continuously until page is ready
                    autoplay: true,
                    animationData: lottieJson
                })

                // Calculate when to switch page (halfway through first loop)
                animationRef.current.addEventListener('DOMLoaded', () => {
                    const singleLoopDuration = (animationRef.current.totalFrames / animationRef.current.frameRate) * 1000
                    const midPoint = singleLoopDuration / 2

                    // Switch page at midpoint of first loop
                    setTimeout(() => {
                        onLocationChange(currentLocation)
                        window.scrollTo(0, 0)

                        // Wait for next frame to ensure DOM is updated, then mark page as ready
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                // Add small delay to ensure all content is loaded
                                setTimeout(() => {
                                    setIsPageReady(true)
                                }, 100)
                            })
                        })
                    }, midPoint)
                })
            }
        }, 50)
    }

    // When page is ready, hide the overlay
    useEffect(() => {
        if (isPageReady && isAnimating) {
            const overlay = document.querySelector(`.${styles.overlay}`)

            // Add minimum display time to ensure animation is visible
            setTimeout(() => {
                if (overlay) {
                    overlay.style.opacity = '0'
                    setTimeout(() => {
                        overlay.style.display = 'none'
                        setIsAnimating(false)
                        setIsPageReady(false)
                        // Clean up animation
                        if (animationRef.current) {
                            animationRef.current.destroy()
                            animationRef.current = null
                        }
                    }, 300)
                }
            }, 500) // Minimum 500ms to ensure user sees the animation
        }
    }, [isPageReady, isAnimating])

    return (
        <div className={styles.overlay}>
            <div className={styles.blur}></div>
            <div className={styles.lottieContainer} ref={lottieRef}></div>
        </div>
    )
}

export default PageTransition