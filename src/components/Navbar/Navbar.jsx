import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import styles from './Navbar.module.css'

class RadioButtonEffect {
  constructor(radioBtnGroups) {
    this.previousRadioBtn = null;

    radioBtnGroups.forEach((group) => {
      const radioBtn = gsap.utils.selector(group)("input[type='radio']")[0];

      radioBtn.addEventListener("change", () => {
        const nodes = this.getNodes(radioBtn);

        if (this.previousRadioBtn && this.previousRadioBtn !== radioBtn) {
          this.changeEffect(this.getNodes(this.previousRadioBtn), false);
        }

        this.changeEffect(nodes, true);
        this.previousRadioBtn = radioBtn;
      });

      if (radioBtn.checked) {
        const nodes = this.getNodes(radioBtn);
        this.changeEffect(nodes, true);
        this.previousRadioBtn = radioBtn;
      }
    });
  }

  getNodes(radioBtn) {
    const container = radioBtn.closest(`.${styles.radioBtnGroup}`);
    return [
      gsap.utils.shuffle(gsap.utils.selector(container)(`.${styles.blue} rect`)),
      gsap.utils.shuffle(gsap.utils.selector(container)(`.${styles.pink} rect`))
    ];
  }

  changeEffect(nodes, isChecked) {
    gsap.to(nodes[0], {
      duration: 1.8,
      ease: "elastic.out(1, 0.3)",
      xPercent: isChecked ? "-100" : "100",
      stagger: 0.012,
      overwrite: true
    });

    gsap.to(nodes[1], {
      duration: 1.8,
      ease: "elastic.out(1, 0.3)",
      xPercent: isChecked ? "100" : "-100",
      stagger: 0.012,
      overwrite: true
    });
  }
}

function Navbar() {
  const location = useLocation()
  const effectInitialized = useRef(false)
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/', value: 'home' },
    { name: 'Register', path: '/register', value: 'register' },
    { name: 'Events', path: '/events', value: 'events' },
    { name: 'Timeline', path: '/timeline', value: 'timeline' },
    { name: 'Sponsors', path: '/sponsors', value: 'sponsors' },
    { name: 'About', path: '/about', value: 'about' }
  ]

  useEffect(() => {
    if (!effectInitialized.current) {
      const radioBtnGroups = document.querySelectorAll(`.${styles.radioBtnGroup}`)
      if (radioBtnGroups.length > 0) {
        new RadioButtonEffect(radioBtnGroups)
        effectInitialized.current = true
      }
    } else if (isOpen) {
      // Re-initialize effect for mobile menu when it opens
      setTimeout(() => {
        const radioBtnGroups = document.querySelectorAll(`.${styles.radioBtnGroup}`)
        if (radioBtnGroups.length > 0) {
          new RadioButtonEffect(radioBtnGroups)
        }
      }, 100)
    }
  }, [isOpen])

  useEffect(() => {
    if (effectInitialized.current) {
      const activeRadioBtn = document.querySelector(`input[type="radio"]:checked`)
      if (activeRadioBtn) {
        const nodes = getNodes(activeRadioBtn)
        changeEffect(nodes, true)
      }
    }
  }, [location])

  const getNodes = (radioBtn) => {
    const container = radioBtn.closest(`.${styles.radioBtnGroup}`)
    return [
      gsap.utils.shuffle(gsap.utils.selector(container)(`.${styles.blue} rect`)),
      gsap.utils.shuffle(gsap.utils.selector(container)(`.${styles.pink} rect`))
    ]
  }

  const changeEffect = (nodes, isChecked) => {
    gsap.to(nodes[0], {
      duration: 1.8,
      ease: "elastic.out(1, 0.3)",
      xPercent: isChecked ? "-100" : "100",
      stagger: 0.012,
      overwrite: true
    })

    gsap.to(nodes[1], {
      duration: 1.8,
      ease: "elastic.out(1, 0.3)",
      xPercent: isChecked ? "100" : "-100",
      stagger: 0.012,
      overwrite: true
    })
  }

  const handleLabelClick = (itemValue) => {
    const isMobile = window.innerWidth <= 768
    const radioId = isMobile ? `nav-input-mobile-${itemValue}` : `nav-input-${itemValue}`
    const radioBtn = document.getElementById(radioId)
    if (radioBtn) {
      radioBtn.checked = true
      const event = new Event('change', { bubbles: true })
      radioBtn.dispatchEvent(event)
    }
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
      <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.navbar}
      >
        {/* Hamburger Button - Mobile Only */}
        <button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
        >
          <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
          />
          <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
          />
          <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
          />
        </button>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <div className={styles.radioGroupContainer}>
            {navItems.map((item) => (
                <div key={item.path} className={styles.radioBtnGroup}>
                  <input
                      type="radio"
                      name="nav-radio-group"
                      value={item.value}
                      id={`nav-input-${item.value}`}
                      checked={location.pathname === item.path}
                      onChange={() => {}}
                  />
                  <label
                      htmlFor={`nav-input-${item.value}`}
                      onClick={() => handleLabelClick(item.value)}
                  >
                    <Link
                        to={item.path}
                        className={styles.navLink}
                        onClick={(e) => {
                          if (location.pathname === item.path) {
                            e.preventDefault()
                          }
                        }}
                    >
                      <span>{item.name}</span>
                      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <g className={styles.pink}>
                          <rect x="-101%" y="0" width="100%" height="5" />
                          <rect x="-101%" y="5" width="100%" height="5" />
                          <rect x="-101%" y="10" width="100%" height="5" />
                          <rect x="-101%" y="15" width="100%" height="5" />
                          <rect x="-101%" y="20" width="100%" height="5" />
                          <rect x="-101%" y="25" width="100%" height="5" />
                          <rect x="-101%" y="30" width="100%" height="5" />
                          <rect x="-101%" y="35" width="100%" height="5" />
                          <rect x="-101%" y="40" width="100%" height="5" />
                          <rect x="-101%" y="45" width="100%" height="5" />
                        </g>

                        <g className={styles.blue}>
                          <rect x="101%" y="0" width="100%" height="5" />
                          <rect x="101%" y="5" width="100%" height="5" />
                          <rect x="101%" y="10" width="100%" height="5" />
                          <rect x="101%" y="15" width="100%" height="5" />
                          <rect x="101%" y="20" width="100%" height="5" />
                          <rect x="101%" y="25" width="100%" height="5" />
                          <rect x="101%" y="30" width="100%" height="5" />
                          <rect x="101%" y="35" width="100%" height="5" />
                          <rect x="101%" y="40" width="100%" height="5" />
                          <rect x="101%" y="45" width="100%" height="5" />
                        </g>
                      </svg>
                    </Link>
                  </label>
                </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  className={styles.mobileMenu}
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '100%' }}
                  transition={{ duration: 0.3 }}
              >
                <div className={styles.mobileMenuContent}>
                  {navItems.map((item) => (
                      <div key={item.path} className={styles.radioBtnGroup}>
                        <input
                            type="radio"
                            name="nav-radio-group-mobile"
                            value={item.value}
                            id={`nav-input-mobile-${item.value}`}
                            checked={location.pathname === item.path}
                            onChange={() => {}}
                        />
                        <label
                            htmlFor={`nav-input-mobile-${item.value}`}
                            onClick={() => handleLabelClick(item.value)}
                        >
                          <Link
                              to={item.path}
                              className={styles.navLink}
                              onClick={(e) => {
                                if (location.pathname === item.path) {
                                  e.preventDefault()
                                }
                                setIsOpen(false)
                              }}
                          >
                            <span>{item.name}</span>
                            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                              <g className={styles.pink}>
                                <rect x="-101%" y="0" width="100%" height="5" />
                                <rect x="-101%" y="5" width="100%" height="5" />
                                <rect x="-101%" y="10" width="100%" height="5" />
                                <rect x="-101%" y="15" width="100%" height="5" />
                                <rect x="-101%" y="20" width="100%" height="5" />
                                <rect x="-101%" y="25" width="100%" height="5" />
                                <rect x="-101%" y="30" width="100%" height="5" />
                                <rect x="-101%" y="35" width="100%" height="5" />
                                <rect x="-101%" y="40" width="100%" height="5" />
                                <rect x="-101%" y="45" width="100%" height="5" />
                              </g>

                              <g className={styles.blue}>
                                <rect x="101%" y="0" width="100%" height="5" />
                                <rect x="101%" y="5" width="100%" height="5" />
                                <rect x="101%" y="10" width="100%" height="5" />
                                <rect x="101%" y="15" width="100%" height="5" />
                                <rect x="101%" y="20" width="100%" height="5" />
                                <rect x="101%" y="25" width="100%" height="5" />
                                <rect x="101%" y="30" width="100%" height="5" />
                                <rect x="101%" y="35" width="100%" height="5" />
                                <rect x="101%" y="40" width="100%" height="5" />
                                <rect x="101%" y="45" width="100%" height="5" />
                              </g>
                            </svg>
                          </Link>
                        </label>
                      </div>
                  ))}
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
  )
}

export default Navbar