import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'

const BackToHome = () => {
    const navigate = useNavigate()
    const location = useLocation()

    // Don't show on home page
    if (location.pathname === '/') {
        return null
    }

    return (
        <motion.button
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            onClick={() => navigate('/')}
            className="fixed top-4 left-4 z-50 flex items-center gap-2 bg-black/70 hover:bg-black/90 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
        >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm font-semibold">Home</span>
        </motion.button>
    )
}

export default BackToHome