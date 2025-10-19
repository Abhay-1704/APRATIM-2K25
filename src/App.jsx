import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import FilmReelLoader from './components/FilmReelLoader/FilmReelLoader.jsx'
import BackToHome from './components/BacktoHome/BacktoHome.jsx'
import Home from './pages/Home/Home.jsx'
import Schedule from './pages/Schedule/SchedulePage.jsx'
import About from './pages/About/AboutPage.jsx'
import Events from './pages/Events/Events.jsx'

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <>
            <BackToHome />
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path='/about' element={<About />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </>
    )
}

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [hasVisited, setHasVisited] = useState(false)

    useEffect(() => {
        const visited = sessionStorage.getItem('hasVisited')
        if (visited) {
            setIsLoading(false)
            setHasVisited(true)
        }
    }, [])

    const handleLoadingComplete = () => {
        setIsLoading(false)
        setHasVisited(true)
        sessionStorage.setItem('hasVisited', 'true')
    }

    return (
        <Router>
            {isLoading && !hasVisited && (
                <FilmReelLoader onLoadingComplete={handleLoadingComplete} />
            )}
            <AnimatedRoutes />
        </Router>
    )
}

export default App