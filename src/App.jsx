import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import FilmReelLoader from './components/FilmReelLoader/FilmReelLoader.jsx'
import Home from './pages/Home/Home.jsx'
import Timeline from './pages/RetroTimeline/RetroTimeline.jsx'

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
        </Routes>
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
            <Navbar />
            <AnimatedRoutes />
        </Router>
    )
}

export default App
