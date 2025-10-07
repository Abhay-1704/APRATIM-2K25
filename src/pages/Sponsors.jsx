import React from 'react'
import { motion } from 'framer-motion'

const sponsors = [
  {
    id: 1,
    name: 'Tech Innovate',
    logo: '/images/sponsor1.svg',
    tier: 'Platinum'
  },
  {
    id: 2,
    name: 'CodeCraft Solutions',
    logo: '/images/sponsor2.svg',
    tier: 'Gold'
  },
  {
    id: 3,
    name: 'AI Frontier',
    logo: '/images/sponsor3.svg',
    tier: 'Silver'
  },
  {
    id: 4,
    name: 'StartUp Boost',
    logo: '/images/sponsor4.svg',
    tier: 'Bronze'
  }
]

const Sponsors = () => {
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
          Our <span className="text-ccet-primary">Sponsors</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div 
              key={sponsor.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-ccet-card/50 backdrop-blur-md border border-ccet-primary/20 rounded-lg p-6 shadow-lg flex flex-col items-center"
            >
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <img 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} logo`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold text-ccet-primary mb-2">
                {sponsor.name}
              </h2>
              <p className="text-ccet-text/80 text-sm">
                {sponsor.tier} Sponsor
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Sponsors
