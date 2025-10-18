import React, { useState, useRef, useEffect } from 'react';
import styles from './Events.module.css';

// Import background image
import bgImage from '../../assets/Events/bg.webp';

// Import app logo
import appLogo from '../../assets/Events/festconnect.webp';

// Import technical event images
import hackSprintImg from '../../assets/Events/HACK-SPRINT.jpeg';
import quizathonImg from '../../assets/Events/QUIZATHON.jpeg';
import designscapeImg from '../../assets/Events/DESIGN-SCAPE.jpeg';
import competitiveImg from '../../assets/Events/COMPETITIVE.jpeg';
import cadCombatImg from '../../assets/Events/CAD-COMBAT.jpeg';
import flightFestImg from '../../assets/Events/FLIGHT-FEST.jpeg';
import goldbergImg from '../../assets/Events/GOLDBERG.jpeg';
import skysprayImg from '../../assets/Events/SKYSPRAY.jpeg';
import bobImg from '../../assets/Events/BOB.jpeg';
import holdUpImg from '../../assets/Events/HOLD-UP-THE-BLOCKS.jpeg';
import bridgeItImg from '../../assets/Events/BRIDGE-IT.jpeg';
import treasureHuntImg from '../../assets/Events/TREASURE-HUNT.jpeg';
import lineFollowerImg from '../../assets/Events/LINE-FOLLOWER.jpeg';
import roboSoccerImg from '../../assets/Events/ROBO-SOCCER.jpeg';
import autonomousImg from '../../assets/Events/AUTONOMOUS.jpeg';
import rcImg from '../../assets/Events/RC.jpeg';

// Import cultural event images
import soloSingingImg from '../../assets/Events/SOLO-SINGING.jpeg';
import soloInstrumentalImg from '../../assets/Events/SOLO-INSTRUMENTAL.jpeg';
import groupSingingImg from '../../assets/Events/GROUP-SINGINIG.jpeg';
import fusionBandImg from '../../assets/Events/FUNSION-BAND.jpeg';
import photographyImg from '../../assets/Events/PHOTOGRAPHY.jpeg';
import videographyImg from '../../assets/Events/VIDEOGRAPHY.jpeg';
import photoHuntImg from '../../assets/Events/PHOTO-HUNT.jpeg';
import photoEssayImg from '../../assets/Events/PHOTO-ESSAY.jpeg';
import groupDanceImg from '../../assets/Events/GROUP-DANCE.jpeg';
import duetDanceImg from '../../assets/Events/DUET-DANCE.jpeg';
import propHustleImg from '../../assets/Events/PROP-HUSTLE.jpeg';
import catchTheHookImg from '../../assets/Events/CATCH-THE-HOOK.jpeg';
import mrAndMsImg from '../../assets/Events/MR-AND-MS.jpeg';
import fashionIconImg from '../../assets/Events/FASHION-ICON.jpeg';
import punjabiImg from '../../assets/Events/PUNJABI.jpeg';
import nukkadNatakImg from '../../assets/Events/NUKKAD-NATAK.jpeg';
import instaActImg from '../../assets/Events/INSTA-ACT.jpeg';
import mashooriImg from '../../assets/Events/MASHHOORI.jpeg';
import monologueImg from '../../assets/Events/MONOLOGUE.jpeg';
import iskiTopiImg from '../../assets/Events/ISKI-TOPI.jpeg';
import customArtsImg from '../../assets/Events/CUSTOM-ARTS.jpeg';
import paintingImg from '../../assets/Events/PAINTING.jpeg';
import sketchingImg from '../../assets/Events/SKETCHING.jpeg';
import cdCraftingImg from '../../assets/Events/CD-CRAFTING.jpeg';
import openMicImg from '../../assets/Events/OPEN-MIC.jpeg';
import storyWritingImg from '../../assets/Events/STORY-WRITING.jpeg';
import debateImg from '../../assets/Events/DEBATE.jpeg';
import murderMysteryImg from '../../assets/Events/MURDER-MYSTERY.jpeg';
import consoleShowdownImg from '../../assets/Events/CONSOLE-SHOWDOWN.jpeg';
import pocketWarsImg from '../../assets/Events/POCKET-WARS.jpeg';

function Events() {
    const [selectedCategory, setSelectedCategory] = useState('technical');
    const [selectedEvent, setSelectedEvent] = useState(null);
    const eventsSectionRef = useRef(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        if (eventsSectionRef.current) {
            eventsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCloseEvent = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSelectedCategory(null);
    };

    const openEventDetails = (event) => {
        setSelectedEvent(event);
    };

    const closeEventDetails = () => {
        setSelectedEvent(null);
    };

    // Event data with imported images
    const events = {
        technical: [
            {
                id: 1,
                name: "Hack Sprint",
                image: hackSprintImg,
                description: "24-hour hackathon to build innovative solutions",
                moreInfo: {
                    mode: "Team-Based (4 Members)",
                    description: "HackSprint is the flagship hackathon of ACM – Apratim, designed to ignite innovation and collaboration among students.",
                    highlights: [
                        "Day-long coding marathon promoting creative and technical synergy",
                        "Teams work from scratch to prototype functional solutions",
                        "Real-world, impact-driven problem statements"
                    ],
                    rules: [
                        "Each team must comprise exactly four members",
                        "Problem statements will be released at the beginning",
                        "Teams must bring their own laptops"
                    ],
                    outcome: "Encourages rapid ideation and real-world application of knowledge"
                }
            },
            {
                id: 2,
                name: "Quizathon",
                image: quizathonImg,
                description: "Test your technical knowledge",
                moreInfo: {
                    mode: "Individual Participation",
                    description: "An exciting quiz covering programming, OS, networking, databases, AI, and current tech trends.",
                    highlights: [
                        "Solo contest for all skill levels",
                        "Covers diverse CS topics",
                        "Prizes for top scorers"
                    ]
                }
            },
            {
                id: 3,
                name: "Designscape",
                image: designscapeImg,
                description: "UI/UX Design Challenge"
            },
            {
                id: 4,
                name: "Competitive Programming",
                image: competitiveImg,
                description: "Code your way to victory"
            },
            {
                id: 5,
                name: "CAD Combat",
                image: cadCombatImg,
                description: "3D modeling competition"
            },
            {
                id: 6,
                name: "Flight Fest",
                image: flightFestImg,
                description: "Paper glider design challenge"
            },
            {
                id: 7,
                name: "Goldberg",
                image: goldbergImg,
                description: "Rube Goldberg machine competition"
            },
            {
                id: 8,
                name: "Skyspray Challenge",
                image: skysprayImg,
                description: "Bottle rocket competition"
            },
            {
                id: 9,
                name: "Bob The Builder",
                image: bobImg,
                description: "Card structure building"
            },
            {
                id: 10,
                name: "Hold Up Blocks",
                image: holdUpImg,
                description: "Jenga with engineering questions"
            },
            {
                id: 11,
                name: "Bridge It",
                image: bridgeItImg,
                description: "Bridge construction challenge"
            },
            {
                id: 12,
                name: "Treasure Hunt",
                image: treasureHuntImg,
                description: "Campus-wide treasure hunt"
            },
            {
                id: 13,
                name: "Line Follower",
                image: lineFollowerImg,
                description: "Autonomous line following robot"
            },
            {
                id: 14,
                name: "Robo Soccer",
                image: roboSoccerImg,
                description: "Robot soccer competition"
            },
            {
                id: 15,
                name: "Autonomous Catapult",
                image: autonomousImg,
                description: "Build and automate a catapult"
            },
            {
                id: 16,
                name: "RC Obstacle Race",
                image: rcImg,
                description: "RC car obstacle course"
            }
        ],
        cultural: [
            {
                id: 18,
                name: "Solo Singing",
                image: soloSingingImg,
                description: "Showcase your vocal talent"
            },
            {
                id: 19,
                name: "Solo Instrumental",
                image: soloInstrumentalImg,
                description: "Instrumental performance"
            },
            {
                id: 20,
                name: "Group Singing",
                image: groupSingingImg,
                description: "Harmony in unity"
            },
            {
                id: 21,
                name: "Fusion Band",
                image: fusionBandImg,
                description: "Blend musical genres"
            },
            {
                id: 22,
                name: "Photography Competition",
                image: photographyImg,
                description: "Capture the moment"
            },
            {
                id: 23,
                name: "Videography Competition",
                image: videographyImg,
                description: "Tell stories through film"
            },
            {
                id: 24,
                name: "Photo Hunt",
                image: photoHuntImg,
                description: "Decode and capture"
            },
            {
                id: 25,
                name: "Photo Essay",
                image: photoEssayImg,
                description: "Visual storytelling"
            },
            {
                id: 26,
                name: "Group Dance",
                image: groupDanceImg,
                description: "Synchronize and shine"
            },
            {
                id: 27,
                name: "Duet Dance",
                image: duetDanceImg,
                description: "Dance in harmony"
            },
            {
                id: 28,
                name: "Prop Hustle",
                image: propHustleImg,
                description: "Creative prop performance"
            },
            {
                id: 29,
                name: "Catch The Hook",
                image: catchTheHookImg,
                description: "Dance to the hook step"
            },
            {
                id: 30,
                name: "Mr and Ms Apratim",
                image: mrAndMsImg,
                description: "Talent and charisma"
            },
            {
                id: 31,
                name: "CCET Fashion Icon",
                image: fashionIconImg,
                description: "Strut your style"
            },
            {
                id: 32,
                name: "Punjabi Folk Dance",
                image: punjabiImg,
                description: "Bhangra competition"
            },
            {
                id: 33,
                name: "Nukkad Natak",
                image: nukkadNatakImg,
                description: "Street play"
            },
            {
                id: 34,
                name: "Insta Act",
                image: instaActImg,
                description: "Instant acting"
            },
            {
                id: 35,
                name: "Mashhoori",
                image: mashooriImg,
                description: "Creative advertising"
            },
            {
                id: 36,
                name: "Monologue",
                image: monologueImg,
                description: "Solo performance"
            },
            {
                id: 37,
                name: "Iski Topi Uske Sar",
                image: iskiTopiImg,
                description: "Role reversal duet"
            },
            {
                id: 38,
                name: "Custom Art",
                image: customArtsImg,
                description: "Customize objects"
            },
            {
                id: 39,
                name: "Painting",
                image: paintingImg,
                description: "Paint your imagination"
            },
            {
                id: 40,
                name: "Sketching",
                image: sketchingImg,
                description: "Pencil artistry"
            },
            {
                id: 41,
                name: "CD Crafting",
                image: cdCraftingImg,
                description: "Transform old CDs"
            },
            {
                id: 42,
                name: "Open Mic",
                image: openMicImg,
                description: "Express yourself"
            },
            {
                id: 43,
                name: "Story Writing",
                image: storyWritingImg,
                description: "Craft compelling stories"
            },
            {
                id: 44,
                name: "Debate",
                image: debateImg,
                description: "Moot court competition"
            },
            {
                id: 45,
                name: "Murder Mystery",
                image: murderMysteryImg,
                description: "Solve the mystery"
            },
            {
                id: 46,
                name: "Console Showdown",
                image: consoleShowdownImg,
                description: "Gaming competition"
            },
            {
                id: 47,
                name: "Pocket Wars",
                image: pocketWarsImg,
                description: "Mobile gaming event"
            }
        ]
    };

    return (
        <div className={styles.app} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className={styles.homeSection}>
                <div className={styles.homeContent}>
                    <h1 className={styles.mainTitle}>EVENTS</h1>

                    <div className={styles.categoryButtons}>
                        <button
                            className={`${styles.glowButton} ${styles.technicalButton}`}
                            onClick={() => handleCategoryClick('technical')}
                        >
                            TECHNICAL EVENTS
                        </button>
                        <button
                            className={`${styles.glowButton} ${styles.culturalButton}`}
                            onClick={() => handleCategoryClick('cultural')}
                        >
                            CULTURAL EVENTS
                        </button>
                    </div>
                </div>
            </div>

            <div ref={eventsSectionRef} className={styles.eventsSection}>
                <div className={styles.eventsContent}>
                    {selectedCategory && (
                        <>
                            <div className={styles.eventsHeader}>
                                <h2 className={styles.eventCategoryTitle}>
                                    {selectedCategory.toUpperCase()} EVENTS
                                </h2>
                                <button className={styles.closeButton} onClick={handleCloseEvent}>
                                    ✕
                                </button>
                            </div>

                            {/* Registration Info Banner */}
                            <div className={styles.registrationBanner}>
                                <img src={appLogo} alt="Fest Connect App" className={styles.appLogo} />
                                <h3 className={styles.bannerTitle}>Register for Events</h3>
                                <p className={styles.bannerText}>Download Fest Connect App to register for all events</p>
                                <div className={styles.appLinks}>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.festconnect.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.appLink}
                                    >
                                        <svg className={styles.appIcon} viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                        </svg>
                                        <span className={styles.appText}>Android</span>
                                    </a>
                                    <a
                                        href="https://apps.apple.com/in/app/fest-connect/id6751292964"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.appLink}
                                    >
                                        <svg className={styles.appIcon} viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                        </svg>
                                        <span className={styles.appText}>iOS</span>
                                    </a>
                                </div>
                            </div>

                            <div className={styles.eventsContainer}>
                                {events[selectedCategory].map((event, index) => (
                                    <div
                                        key={event.id}
                                        className={styles.eventCard}
                                        style={{ '--card-index': index }}
                                    >
                                        <img src={event.image} alt={event.name} className={styles.eventImage} />
                                        <div className={styles.eventContent}>
                                            <h3 className={styles.eventName}>{event.name}</h3>
                                            <p className={styles.eventDescription}>{event.description}</p>
                                            <div className={styles.eventButtons}>
                                                <button
                                                    className={styles.infoButton}
                                                    onClick={() => openEventDetails(event)}
                                                >
                                                    MORE INFORMATION
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {selectedEvent && (
                <div className={styles.modalOverlay} onClick={closeEventDetails}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2 className={styles.modalTitle}>{selectedEvent.name}</h2>
                            <button className={styles.modalCloseButton} onClick={closeEventDetails}>
                                ✕
                            </button>
                        </div>
                        <div className={styles.modalBody}>
                            <img src={selectedEvent.image} alt={selectedEvent.name} className={styles.modalImage} />
                            <p className={styles.modalDescription}>{selectedEvent.description}</p>
                            {selectedEvent.moreInfo && (
                                <div className={styles.modalMoreInfo}>
                                    {selectedEvent.moreInfo.mode && (
                                        <>
                                            <h3>Mode:</h3>
                                            <p>{selectedEvent.moreInfo.mode}</p>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.description && (
                                        <p>{selectedEvent.moreInfo.description}</p>
                                    )}
                                    {selectedEvent.moreInfo.highlights && (
                                        <>
                                            <h3>Highlights:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.highlights.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.rules && (
                                        <>
                                            <h3>Rules:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.rules.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.outcome && (
                                        <>
                                            <h3>Outcome:</h3>
                                            <p>{selectedEvent.moreInfo.outcome}</p>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Events;