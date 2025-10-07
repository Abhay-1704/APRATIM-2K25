import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: ''
  })

  const events = [
    'Hackathon 2024',
    'AI & ML Workshop',
    'Startup Pitch Competition'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Registration submitted:', formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-ccet-card/50 backdrop-blur-md rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-ccet-primary mb-6 text-center">
          Event Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-2 bg-ccet-background/50 border border-ccet-primary/20 rounded-lg text-ccet-text focus:outline-none focus:ring-2 focus:ring-ccet-primary"
            required
          />
          <input 
            type="email" 
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-2 bg-ccet-background/50 border border-ccet-primary/20 rounded-lg text-ccet-text focus:outline-none focus:ring-2 focus:ring-ccet-primary"
            required
          />
          <input 
            type="tel" 
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-4 py-2 bg-ccet-background/50 border border-ccet-primary/20 rounded-lg text-ccet-text focus:outline-none focus:ring-2 focus:ring-ccet-primary"
            required
          />
          <select 
            value={formData.event}
            onChange={(e) => setFormData({...formData, event: e.target.value})}
            className="w-full px-4 py-2 bg-ccet-background/50 border border-ccet-primary/20 rounded-lg text-ccet-text focus:outline-none focus:ring-2 focus:ring-ccet-primary"
            required
          >
            <option value="">Select Event</option>
            {events.map(event => (
              <option key={event} value={event}>{event}</option>
            ))}
          </select>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-ccet-primary text-white py-3 rounded-lg hover:bg-ccet-primary/90 transition-colors"
          >
            Register
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

export default Registration
