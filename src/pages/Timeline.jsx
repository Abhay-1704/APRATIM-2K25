import React from 'react'
import { motion } from 'framer-motion'

const timelineEvents = [
  {
    id: 1,
    date: 'XYZ Date 1',
    title: 'XYZ Title 1',
    description: 'XYZ description for the first timeline event',
    time: 'XYZ Time'
  },
  {
    id: 2,
    date: 'XYZ Date 2',
    title: 'XYZ Title 2',
    description: 'XYZ description for the second timeline event',
    time: 'XYZ Time'
  },
  {
    id: 3,
    date: 'XYZ Date 3',
    title: 'XYZ Title 3',
    description: 'XYZ description for the third timeline event',
    time: 'XYZ Time'
  },
  {
    id: 4,
    date: 'XYZ Date 4',
    title: 'XYZ Title 4',
    description: 'XYZ description for the fourth timeline event',
    time: 'XYZ Time'
  },
  {
    id: 5,
    date: 'XYZ Date 5',
    title: 'XYZ Title 5',
    description: 'XYZ description for the fifth timeline event',
    time: 'XYZ Time'
  }
]

const Timeline = () => {
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ccet-background via-ccet-primary/10 to-ccet-accent/10 opacity-50" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-12 text-center text-white"
        >
          Event <span className="text-ccet-primary">Timeline</span>
        </motion.h1>

        <div className="relative">
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`
                flex items-center mb-8 
                ${index % 2 === 0 ? 'flex-row-reverse' : ''}
              `}
            >
              <div className={`
                w-1/2 p-6 
                bg-ccet-card/50 backdrop-blur-md 
                border border-ccet-primary/20 
                rounded-lg shadow-lg
                ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}
              `}>
                <h2 className="text-xl font-semibold text-ccet-primary mb-2">
                  {event.title}
                </h2>
                <p className="text-ccet-text mb-2">{event.description}</p>
                <div className="text-ccet-text/80 text-sm">
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                </div>
              </div>
              <div className="w-16 h-16 bg-ccet-primary rounded-full flex items-center justify-center mx-4 text-white font-bold">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Timeline
