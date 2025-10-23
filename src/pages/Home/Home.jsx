import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import bgImage from '../../assets/Home/bg.webp'
import gifFile from '../../assets/Home/animation.gif'
// Import your corner images
import upcomingEvents from '../../assets/Home/Events.png'
import schedule from '../../assets/Home/Schedule.png'
import sponsors from '../../assets/Home/Sponsors.png'
import aboutApratim from '../../assets/Home/About.png'

const Home = () => {
  const navigate = useNavigate()

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

  const cornerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        delay: 0.5
      }
    }
  }

  return (
      <div
          className="relative min-h-screen md:h-screen flex items-center justify-center overflow-y-auto md:overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full h-auto md:h-full max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

          {/* Left Side - Main GIF */}
          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full md:w-[58%] h-auto flex flex-col gap-6"
          >
            <motion.div variants={itemVariants}>
              <img
                  src={gifFile}
                  alt="Animation"
                  className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="text-white text-center md:text-left px-4 md:px-0"
            >
              <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-3">
                Apratim is the annual techno-cultural festival of Chandigarh College of Engineering and Technology (CCET), Sector-26, Chandigarh. It serves as a dynamic platform that unites technology, innovation, and culture, fostering an environment of creativity, collaboration, and intellectual growth among students.
              </p>
              <p className="text-xs md:text-sm font-semibold italic">
                Click on icons to know more...
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - 2x2 Grid */}
          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full md:w-[42%] flex flex-col items-center gap-4"
          >
            {/* Title */}
            <motion.h1
                variants={itemVariants}
                className="text-white text-2xl md:text-3xl lg:text-3xl font-bold text-center tracking-wider"
                style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.15em' }}
            >
              CCET APRATIM 2025
            </motion.h1>

            {/* Grid Container */}
            <div className="w-full grid grid-cols-2 gap-4 md:gap-6">
              {/* Upcoming Events - Top Left */}
              <motion.div
                  variants={cornerVariants}
                  className="flex items-center justify-center"
                  onClick={() => navigate('/events')}
              >
                <img
                    src={upcomingEvents}
                    alt="Upcoming Events"
                    className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer md:scale-150"
                />
              </motion.div>

              {/* Sponsors - Top Right */}
              <motion.div
                  variants={cornerVariants}
                  className="flex items-center justify-center"
                  onClick={() => navigate('/sponsors')}
              >
                <img
                    src={sponsors}
                    alt="Sponsors"
                    className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </motion.div>

              {/* Schedule - Bottom Left */}
              <motion.div
                  variants={cornerVariants}
                  className="flex items-center justify-center"
                  onClick={() => navigate('/schedule')}
              >
                <img
                    src={schedule}
                    alt="Schedule"
                    className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer md:scale-150"
                />
              </motion.div>

              {/* About Apratim - Bottom Right */}
              <motion.div
                  variants={cornerVariants}
                  className="flex items-center justify-center"
                  onClick={() => navigate('/about')}
              >
                <img
                    src={aboutApratim}
                    alt="About Apratim"
                    className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
  )
}

export default Home