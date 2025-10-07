import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
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

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-12 text-center text-white"
        >
          About <span className="text-ccet-primary">CCET Tech Fest</span>
        </motion.h1>

        <motion.div 
          variants={itemVariants}
          className="bg-ccet-card/50 backdrop-blur-md border border-ccet-primary/20 rounded-lg p-8 shadow-lg"
        >
          <p className="text-ccet-text mb-6 leading-relaxed text-center">
            XYZ description about the tech fest. This is a placeholder text to replace the original content.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              variants={itemVariants}
              className="text-center bg-ccet-background/50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-ccet-primary mb-4">XYZ Mission</h3>
              <p className="text-ccet-text">
                XYZ mission statement for the tech fest. This is a placeholder text to replace the original content.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="text-center bg-ccet-background/50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-ccet-primary mb-4">XYZ Vision</h3>
              <p className="text-ccet-text">
                XYZ vision statement for the tech fest. This is a placeholder text to replace the original content.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="text-center bg-ccet-background/50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-ccet-primary mb-4">XYZ Impact</h3>
              <p className="text-ccet-text">
                XYZ impact description for the tech fest. This is a placeholder text to replace the original content.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
