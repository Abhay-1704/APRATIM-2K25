import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import bgImage from '../../assets/Home/bg.webp'
import gifFile from '../../assets/Home/animation.gif'
import upcomingEvents from '../../assets/Home/Events.png'
import schedule from '../../assets/Home/Schedule.png'
import sponsors from '../../assets/Home/Sponsors.png'
import aboutApratim from '../../assets/Home/About.png'
import gallery from '../../assets/Home/Gallery.png'

const Home = () => {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768)

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  const cornerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, delay: 0.5 }
    }
  }

  // Icons data for circular arrangement with individual sizes
  const icons = [
    {
      src: upcomingEvents,
      alt: "Upcoming Events",
      navigateTo: '/events',
      scale: 'md:scale-150',
      size: 'w-24 h-24 md:w-32 md:h-32'
    },
    {
      src: schedule,
      alt: "Schedule",
      navigateTo: '/schedule',
      scale: 'md:scale-150',
      size: 'w-24 h-24 md:w-32 md:h-32'
    },
    {
      src: sponsors,
      alt: "Sponsors",
      navigateTo: '/sponsors',
      scale: 'md:scale-100',
      size: 'w-20 h-20 md:w-28 md:h-28'
    },
    {
      src: aboutApratim,
      alt: "About Apratim",
      navigateTo: '/about',
      scale: 'md:scale-125',
      size: 'w-28 h-28 md:w-36 md:h-36'
    },
    {
      src: gallery,
      alt: "Gallery",
      navigateTo: '/gallery',
      scale: 'md:scale-100',
      size: 'w-20 h-20 md:w-28 md:h-28'
    }
  ]

  return (
      <div
          className="relative min-h-screen md:h-screen flex items-center justify-center overflow-x-hidden md:overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Main Content */}
        <div className="relative z-10 w-full h-auto md:h-full max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

          {/* Left - Main GIF */}
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

          {/* Right - Ferris Wheel Section */}
          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full md:w-[42%] flex flex-col items-center justify-center gap-6"
          >
            {/* Title */}
            <motion.h1
                variants={itemVariants}
                className="text-white text-2xl md:text-3xl lg:text-3xl font-bold text-center tracking-wider mb-4"
                style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.15em' }}
            >
              CCET APRATIM 2025
            </motion.h1>

            {/* Ferris Wheel Container */}
            <motion.div
                className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center"
                animate={{
                  rotate: 360
                }}
                transition={{
                  rotate: {
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                  }
                }}
            >
              {/* Center Hub */}
              <div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-2xl border-4 border-yellow-300 z-20">
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white to-orange-400"></div>
              </div>

              {/* Outer Ring */}
              <div className="absolute w-[270px] h-[270px] md:w-[360px] md:h-[360px] lg:w-[450px] lg:h-[450px] rounded-full border-[6px] border-yellow-400/40 shadow-lg"></div>

              {/* Inner Ring */}
              <div className="absolute w-[225px] h-[225px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] rounded-full border-4 border-yellow-400/20"></div>

              {/* Spokes */}
              {icons.map((icon, index) => {
                const angle = (index / icons.length) * 2 * Math.PI;
                // Mobile: 168px, Desktop: 225px
                const spokeLength = isMobile ? 168 : 225;

                return (
                    <div
                        key={`spoke-${index}`}
                        className="absolute w-1 bg-gradient-to-r from-white to-transparent origin-left z-10"
                        style={{
                          height: '2px',
                          width: `${spokeLength}px`,
                          left: '50%',
                          top: '50%',
                          transform: `rotate(${angle}rad)`,
                          boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)'
                        }}
                    />
                );
              })}

              {/* Icons in Gondolas */}
              {icons.map((icon, index) => {
                const angle = (index / icons.length) * 2 * Math.PI;
                // Mobile: 135px, Desktop: 180px
                const radius = isMobile ? 135 : 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                    <motion.div
                        key={icon.alt}
                        className="absolute flex items-center justify-center z-30"
                        style={{
                          x: x,
                          y: y,
                        }}
                        animate={{
                          rotate: -360 // Counter-rotation to keep icons upright
                        }}
                        transition={{
                          rotate: {
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear"
                          }
                        }}
                        onClick={() => navigate(icon.navigateTo)}
                    >
                      {/* Gondola Container */}
                      <div className="relative p-2 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl backdrop-blur-sm border-2 border-white shadow-2xl hover:scale-110 hover:border-yellow-300 transition-all duration-300 cursor-pointer">
                        {/* Hanging Rope/Chain */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-yellow-400 to-transparent"></div>

                        {/* Icon */}
                        <img
                            src={icon.src}
                            alt={icon.alt}
                            className={`${icon.size} object-contain drop-shadow-2xl ${icon.scale}`}
                        />

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-2xl blur-xl -z-10"></div>
                      </div>
                    </motion.div>
                );
              })}

              {/* Center Bolt Details */}
              <div className="absolute w-3 h-3 rounded-full bg-yellow-200 z-30"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
  )
}

export default Home