import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ImageRewindLoader from './components/ImageRewindLoader/ImageRewindLoader.jsx'
import BackToHome from './components/BacktoHome/BacktoHome.jsx'
import PageTransition from './components/PageTransition/PageTransition.jsx'
import Home from './pages/Home/Home.jsx'
import Schedule from './pages/Schedule/SchedulePage.jsx'
import About from './pages/About/AboutPage.jsx'
import Events from './pages/Events/Events.jsx'
import ComingSoon from './pages/ComingSoon/ComingSoon.jsx'
import transitionAnimation from './assets/Loader/Phoenix.json'
import Gallery from './pages/Gallery/Gallery'

function AnimatedRoutes() {
    const location = useLocation()
    const [displayLocation, setDisplayLocation] = useState(location)

    return (
        <>
            <PageTransition
                currentLocation={location}
                displayLocation={displayLocation}
                onLocationChange={setDisplayLocation}
                lottieJson={transitionAnimation}
            />
            <BackToHome />
            <Routes location={displayLocation} key={displayLocation.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/schedule" element={<ComingSoon />} />
                <Route path='/about' element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/sponsors" element={<ComingSoon />} />
                <Route path="/gallery" element={<Gallery />} />
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
                <ImageRewindLoader onLoadingComplete={handleLoadingComplete} />
            )}
            <AnimatedRoutes />
        </Router>
    )
}

export default App