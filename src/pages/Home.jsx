import React from 'react'
import { motion } from 'framer-motion'
import bgVideo from '../assets/bg-video.gif'

function Home() {
    return (
        <motion.div
            className="min-h-screen flex items-center justify-center z-[5]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <motion.img
                    src={bgVideo}
                    alt="Home"
                    className="w-full max-w-[1800px] h-auto z-[20] scale-110"
                    initial={{ scale: 2 }}
                    animate={{ scale: 1.5 }}
                    transition={{ duration: 2 }}
                />

            </motion.div>
        </motion.div>
    )
}

export default Home