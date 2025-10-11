import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ccet-background via-ccet-primary/10 to-ccet-accent/10 opacity-50" />

      {/* Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl px-4"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
        >
          CCET <span className="text-ccet-primary">Tech Fest</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Unleashing Innovation, Celebrating Technology, and Empowering Future Innovators
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link to="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-ccet-primary text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all"
            >
              <span>Register Now</span>
            </motion.button>
          </Link>

          <Link to="/events">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-ccet-primary text-ccet-primary px-6 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-ccet-primary/10 transition-all"
            >
              <span>Explore Events</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Date and Venue */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 text-gray-300 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8"
        >
          <div className="flex items-center space-x-2">
            <span>15-17 September 2024</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div>
            Chandigarh College of Engineering & Technology
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home
