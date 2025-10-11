import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import styles from './Navbar.module.css'

class RadioButtonEffect {
  constructor(radioBtnGroups) {
    this.previousRadioBtn = null;

    radioBtnGroups.forEach((group) => {
      const radioBtn = gsap.utils.selector(group)("input[type='radio']")[0];

      // Add change event listener
      radioBtn.addEventListener("change", () => {
        const nodes = this.getNodes(radioBtn);

        if (this.previousRadioBtn && this.previousRadioBtn !== radioBtn) {
          this.changeEffect(this.getNodes(this.previousRadioBtn), false);
        }

        this.changeEffect(nodes, true);
        this.previousRadioBtn = radioBtn;
      });

      // Trigger initial animation for active radio button
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

  const navItems = [
    { name: 'Home', path: '/', value: 'home' },
    { name: 'Register', path: '/register', value: 'register' },
    { name: 'Events', path: '/events', value: 'events' },
    { name: 'Timeline', path: '/timeline', value: 'timeline' },
    { name: 'Sponsors', path: '/sponsors', value: 'sponsors' },
    { name: 'About', path: '/about', value: 'about' }
  ]

  useEffect(() => {
    // Initialize radio button effects after component mounts
    if (!effectInitialized.current) {
      const radioBtnGroups = document.querySelectorAll(`.${styles.radioBtnGroup}`)
      if (radioBtnGroups.length > 0) {
        new RadioButtonEffect(radioBtnGroups)
        effectInitialized.current = true
      }
    }
  }, [])

  // Update radio button states when location changes
  useEffect(() => {
    if (effectInitialized.current) {
      // Find the currently active radio button and trigger its animation
      const activeRadioBtn = document.querySelector(`input[type="radio"]:checked`)
      if (activeRadioBtn) {
        const nodes = getNodes(activeRadioBtn)
        changeEffect(nodes, true)
      }
    }
  }, [location])

  // Helper functions for the effect
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
    // This ensures the radio button gets checked and triggers the change event
    const radioBtn = document.getElementById(`nav-input-${itemValue}`)
    if (radioBtn) {
      radioBtn.checked = true
      const event = new Event('change', { bubbles: true })
      radioBtn.dispatchEvent(event)
    }
  }

  return (
      <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.navbar}
      >
        <div className={styles.radioGroupContainer}>
          {navItems.map((item) => (
              <div key={item.path} className={styles.radioBtnGroup}>
                <input
                    type="radio"
                    name="nav-radio-group"
                    value={item.value}
                    id={`nav-input-${item.value}`}
                    checked={location.pathname === item.path}
                    onChange={() => {}} // Controlled component
                />
                <label
                    htmlFor={`nav-input-${item.value}`}
                    onClick={() => handleLabelClick(item.value)}
                >
                  <Link
                      to={item.path}
                      className={styles.navLink}
                      onClick={(e) => {
                        // Prevent double navigation
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
      </motion.nav>
  )
}

export default Navbar
