import React from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Events from './pages/Events'
import Timeline from './pages/Timeline'
import Sponsors from './pages/Sponsors'
import About from './pages/About'

// Separate component to use useLocation hook
function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/events" element={<Events />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </AnimatePresence>
    )
}

function App() {
    return (
        <Router>
            <Navbar />
            <AnimatedRoutes />
        </Router>
    )
}

export default App