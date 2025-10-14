import React, { useEffect, useState } from 'react';
import { Gamepad2, Music, Tv, Radio, Disc, Camera } from 'lucide-react';
import './AboutPage.css';

export default function ApratimAbout() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-container">
      {/* Animated Background Elements */}
      <div className="bg-elements">
        <div className="floating-icon icon-1">
          <Gamepad2 size={48} />
        </div>
        <div className="floating-icon icon-2">
          <Music size={40} />
        </div>
        <div className="floating-icon icon-3">
          <Tv size={56} />
        </div>
        <div className="floating-icon icon-4">
          <Radio size={44} />
        </div>
        <div className="floating-icon icon-5">
          <Disc size={64} />
        </div>
        <div className="floating-icon icon-6">
          <Music size={40} />
        </div>
        <div className="floating-icon icon-7">
          <Camera size={48} />
        </div>
      </div>

      {/* Scanlines Effect */}
      <div className="scanlines"></div>

      {/* Main Content */}
      <div className="main-content">
        
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-inner">
            <div className="retro-stamp">
              <div className="stamp-circle">
                <span>RETRO</span>
              </div>
            </div>
            
            <h1 className="main-title">
              <span className="title-text">APRATIM</span>
            </h1>
            <h2 className="sub-title">2K25</h2>
          </div>
          
          <div className="college-name">
            <Disc className="disc-icon" size={32} />
            <span>Chandigarh College of Engineering & Technology</span>
            <Disc className="disc-icon" size={32} />
          </div>
        </div>

        {/* About Apratim Section */}
        <div className="section about-section">
          <div className="section-border border-cyan">
            <div className="section-content">
              <div className="section-header">
                <div className="icon-badge badge-cyan">
                  <Tv size={40} />
                </div>
                <h3 className="section-title title-cyan">
                  ABOUT APRATIM
                </h3>
              </div>
              
              <div className="text-content">
                <p className="para fade-in-1">
                  <span className="highlight-yellow">Apratim</span> is the annual techno-cultural festival of Chandigarh College of Engineering and Technology (CCET), Sector-26, Chandigarh. It serves as a dynamic platform that unites technology, innovation, and culture, fostering an environment of creativity, collaboration, and intellectual growth among students.
                </p>
                
                <p className="para fade-in-2">
                  The fest features a diverse array of technical, cultural, and literary events, including <span className="highlight-pink">hackathons, coding challenges, robotics competitions, project exhibitions, music, dance, drama, fashion shows, and art performances</span>. These events provide students with opportunities to demonstrate their technical expertise and artistic talents while promoting teamwork and leadership.
                </p>
                
                <p className="para fade-in-3">
                  Each edition of Apratim revolves around a distinctive theme that highlights social awareness, sustainability, and empowerment, aligning with CCET's mission to develop responsible and skilled professionals. Through its wide participation and impactful initiatives, Apratim has established itself as one of the most anticipated student festivals in the region.
                </p>
                
                <p className="para fade-in-4 emphasis-text">
                  Apratim continues to uphold its legacy as a symbol of innovation and excellence, celebrating the fusion of technology and culture while inspiring the youth to think beyond boundaries and create meaningful change.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Section */}
        <div className="section theme-section">
          <div className="section-border border-pink">
            <div className="section-content">
              <div className="section-header">
                <div className="icon-badge badge-pink">
                  <Radio size={40} />
                </div>
                <h3 className="section-title title-pink">
                  THE RETRO THEME
                </h3>
              </div>
              
              <div className="text-content">
                <p className="para fade-in-1">
                  This year, <span className="highlight-yellow">Apratim 2025</span> embraces the timeless charm of the <span className="highlight-pink-lg">Retro era</span> — the celebration of vintage styles, classic music, iconic fashion, and the unforgettable spirit of the past.
                </p>
                
                <p className="para fade-in-2">
                  The Retro theme represents more than nostalgia; it symbolizes the beauty of <span className="highlight-cyan">revisiting old ideas and reinventing them for a new generation</span>. It reminds us that progress is built on the foundations of creativity, culture, and innovation that came before us.
                </p>
                
                <p className="para fade-in-3">
                  Through this theme, Apratim invites participants to <span className="highlight-orange">rewind to the golden decades, relive their vibrant essence, and recreate them through a modern lens</span> — blending tradition with technology, and the old with the new.
                </p>
                
                <div className="cta-box fade-in-4">
                  <p className="cta-text">
                    Get ready to step into a world where past meets present, and every moment echoes with the rhythm of timeless creativity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="decorative-circles">
          <div className="circle circle-yellow"></div>
          <div className="circle circle-pink"></div>
          <div className="circle circle-cyan"></div>
          <div className="circle circle-orange"></div>
        </div>
      </div>
    </div>
  );
}