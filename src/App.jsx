import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Events from './pages/Events'
import Timeline from './pages/Timeline'
import Sponsors from './pages/Sponsors'
import About from './pages/About'

function App() {
    return (
        <Router>
            <Navbar />

            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </AnimatePresence>
        </Router>
    )
}

export default App