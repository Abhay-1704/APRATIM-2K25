import React from 'react'
import { motion } from 'framer-motion'

const events = [
  {
    id: 1,
    name: 'XYZ Event 1',
    description: 'XYZ description for the first event',
    date: 'XYZ Date',
    venue: 'XYZ Venue',
    category: 'XYZ Category'
  },
  {
    id: 2,
    name: 'XYZ Event 2',
    description: 'XYZ description for the second event',
    date: 'XYZ Date',
    venue: 'XYZ Venue',
    category: 'XYZ Category'
  },
  {
    id: 3,
    name: 'XYZ Event 3',
    description: 'XYZ description for the third event',
    date: 'XYZ Date',
    venue: 'XYZ Venue',
    category: 'XYZ Category'
  }
]

const Events = () => {
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
          CCET <span className="text-ccet-primary">Events</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-ccet-card/50 backdrop-blur-md border border-ccet-primary/20 rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold text-ccet-primary mb-4">
                {event.name}
              </h2>
              <p className="text-ccet-text mb-4">{event.description}</p>
              <div className="space-y-2 text-ccet-text/80">
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Venue:</strong> {event.venue}</p>
                <p><strong>Category:</strong> {event.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Events
