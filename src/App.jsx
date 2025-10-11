import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import FilmReelLoader from './components/FilmReelLoader'
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
    const [isLoading, setIsLoading] = useState(true)
    const [hasVisited, setHasVisited] = useState(false)

    useEffect(() => {
        // Check if user has visited before
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