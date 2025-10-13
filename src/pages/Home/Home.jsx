import React from 'react'
import { motion } from 'framer-motion'
import bgImage from '../../assets/Home/bg.webp'
import gifFile from '../../assets/Home/animation.gif'

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
      <div
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center w-full px-4 md:mt-16"
        >
          <motion.div
              variants={itemVariants}
              className="w-full mx-auto"
              style={{ maxWidth: '900px' }}
          >
            <img
                src={gifFile}
                alt="Animation"
                className="w-full rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
  )
}

export default Home