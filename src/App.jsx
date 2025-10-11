import React from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
//import Registration from './pages/Registration'
//import Events from './pages/Events'
//import Timeline from './pages/Timeline'
//import Sponsors from './pages/Sponsors'
//import About from './pages/About'

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
        </Routes>
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