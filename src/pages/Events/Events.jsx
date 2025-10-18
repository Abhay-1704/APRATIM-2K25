import React, { useState, useRef, useEffect } from 'react';
import styles from './Events.module.css';

// Import background image
import bgImage from '../../assets/Events/bg.webp';

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
            // Add remaining technical events with their imported images...
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
                description: "Showcase your vocal talent",
                registrationUrl: "https://forms.gle/ogJUKN8C6CABQ6Aq9"
            },
            {
                id: 19,
                name: "Solo Instrumental",
                image: soloInstrumentalImg,
                description: "Instrumental performance",
                registrationUrl: "https://forms.gle/9frhtwkF7BhTpqLf6"
            },
            {
                id: 20,
                name: "Group Singing",
                image: groupSingingImg,
                description: "Harmony in unity",
                registrationUrl: "https://forms.gle/WJZLW49qgyBSdSkt5"
            },
            {
                id: 21,
                name: "Fusion Band",
                image: fusionBandImg,
                description: "Blend musical genres",
                registrationUrl: "https://forms.gle/ehanDyv5t2pNPGhk8"
            },
            {
                id: 22,
                name: "Photography Competition",
                image: photographyImg,
                description: "Capture the moment",
                registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeUMrnLYtSLmQKbLFaCd7qWgNeem-eYn4Shn-kIPiCYjGrpqQ/viewform"
            },
            {
                id: 23,
                name: "Videography Competition",
                image: videographyImg,
                description: "Tell stories through film",
                registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLScdgA-AUnOtD5Ykm42n_uc8jMShFeyggC32vTBz_OnlLnb4LQ/viewform"
            },
            {
                id: 24,
                name: "Photo Hunt",
                image: photoHuntImg,
                description: "Decode and capture",
                registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeJxMKoXLDNspb7EaTBXS2XSLhCtNDBqUu3WooyAcZi6tEdfw/viewform"
            },
            {
                id: 25,
                name: "Photo Essay",
                image: photoEssayImg,
                description: "Visual storytelling",
                registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLScPtHpUaoHJBNseAXTatHEJiUP7OBQUA7ehG--bzvH9Db2yKQ/viewform"
            },
            {
                id: 26,
                name: "Group Dance",
                image: groupDanceImg,
                description: "Synchronize and shine",
                registrationUrl: "https://forms.gle/ffGmPcMmo3CNZVdx5"
            },
            {
                id: 27,
                name: "Duet Dance",
                image: duetDanceImg,
                description: "Dance in harmony",
                registrationUrl: "https://forms.gle/2JFMt9ZF2JSGAj958"
            },
            {
                id: 28,
                name: "Prop Hustle",
                image: propHustleImg,
                description: "Creative prop performance",
                registrationUrl: "https://forms.gle/B7TnKebnW5b4kY7z7"
            },
            {
                id: 29,
                name: "Catch The Hook",
                image: catchTheHookImg,
                description: "Dance to the hook step",
                registrationUrl: "https://forms.gle/4bK3DkBztWHMCLpJA"
            },
            {
                id: 30,
                name: "Mr and Ms Apratim",
                image: mrAndMsImg,
                description: "Talent and charisma",
                registrationUrl: "https://forms.gle/GwMKLKzuDhFQhGVB8"
            },
            {
                id: 31,
                name: "CCET Fashion Icon",
                image: fashionIconImg,
                description: "Strut your style",
                registrationUrl: "https://forms.gle/GwMKLKzuDhFQhGVB8"
            },
            {
                id: 32,
                name: "Punjabi Folk Dance",
                image: punjabiImg,
                description: "Bhangra competition",
                registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeRyJIIirwyaLd4seey6FdjZhcuvGPM-4k9pP__OaTE7IV8nA/viewform"
            },
            {
                id: 33,
                name: "Nukkad Natak",
                image: nukkadNatakImg,
                description: "Street play",
                registrationUrl: "https://forms.gle/mmrviBz8JPBVyBQZ7"
            },
            {
                id: 34,
                name: "Insta Act",
                image: instaActImg,
                description: "Instant acting",
                registrationUrl: "https://forms.gle/8h5o9y3o9gk2Yk6TA"
            },
            {
                id: 35,
                name: "Mashhoori",
                image: mashooriImg,
                description: "Creative advertising",
                registrationUrl: "https://forms.gle/UvxPY3sxQmotcWe47"
            },
            {
                id: 36,
                name: "Monologue",
                image: monologueImg,
                description: "Solo performance",
                registrationUrl: "https://forms.gle/HdW2SD3hSmnAqugR7"
            },
            {
                id: 37,
                name: "Iski Topi Uske Sar",
                image: iskiTopiImg,
                description: "Role reversal duet",
                registrationUrl: "https://forms.gle/DEndx6wQQUpDtYNJ7"
            },
            {
                id: 38,
                name: "Custom Art",
                image: customArtsImg,
                description: "Customize objects",
                registrationUrl: "https://forms.gle/WCcmn6mfvb2n5jsE6"
            },
            {
                id: 39,
                name: "Painting",
                image: paintingImg,
                description: "Paint your imagination",
                registrationUrl: "https://forms.gle/A5KTPpqh2VWrEq4H8"
            },
            {
                id: 40,
                name: "Sketching",
                image: sketchingImg,
                description: "Pencil artistry",
                registrationUrl: "https://forms.gle/DqEYPjXUg2RK8gPF6"
            },
            {
                id: 41,
                name: "CD Crafting",
                image: cdCraftingImg,
                description: "Transform old CDs",
                registrationUrl: "https://forms.gle/kvaPxapcmiKksAK47"
            },
            {
                id: 42,
                name: "Open Mic",
                image: openMicImg,
                description: "Express yourself",
                registrationUrl: "https://forms.gle/LKd3Gm1KiPN1bCjX8"
            },
            {
                id: 43,
                name: "Story Writing",
                image: storyWritingImg,
                description: "Craft compelling stories",
                registrationUrl: "https://forms.gle/27CJPkX4bApeR9J76"
            },
            {
                id: 44,
                name: "Debate",
                image: debateImg,
                description: "Moot court competition",
                registrationUrl: "https://forms.gle/vaRqTkGXhqWTqTTL7"
            },
            {
                id: 45,
                name: "Murder Mystery",
                image: murderMysteryImg,
                description: "Solve the mystery",
                registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSerk21ZOhI24oPxJzEAVzJHM3cPgFSLx4NgnxRoLn9g1P9tpw/viewform"
            },
            {
                id: 46,
                name: "Console Showdown",
                image: consoleShowdownImg,
                description: "Gaming competition",
                registrationUrl: "https://forms.gle/8ry1XCGzM22vUAPT7"
            },
            {
                id: 47,
                name: "Pocket Wars",
                image: pocketWarsImg,
                description: "Mobile gaming event",
                registrationUrl: "https://forms.gle/8ry1XCGzM22vUAPT7"
            }
        ]
    };

    const technicalRegistrationFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfoaap-vlkmh5uKW0KNrat3_qnIVU4ZSEvpYsjdfevI9IKmYg/viewform";

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
                            <div className={styles.eventsContainer}>
                                {selectedCategory === 'technical' && (
                                    <div className={styles.allEventsRegister}>
                                        <button
                                            className={styles.registerButton}
                                            onClick={() => window.open(technicalRegistrationFormUrl, '_blank')}
                                        >
                                            REGISTER FOR ALL EVENTS
                                        </button>
                                    </div>
                                )}
                                {events[selectedCategory].map(event => (
                                    <div key={event.id} className={styles.eventCard}>
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
                                                {selectedCategory === 'cultural' && (
                                                    <button
                                                        className={styles.registerButton}
                                                        onClick={() => window.open(event.registrationUrl, '_blank')}
                                                    >
                                                        REGISTER
                                                    </button>
                                                )}
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
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.rules && (
                                        <>
                                            <h3>Rules:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.rules.map((item, i) => (
                                                    <li key={i}>{item}</li>
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