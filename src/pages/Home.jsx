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
                <img
                    src={bgVideo}
                    alt="Home"
                    className="max-w-4xl w-full h-auto z-[20]"
                />
            </motion.div>
        </motion.div>
    )
}

export default Home