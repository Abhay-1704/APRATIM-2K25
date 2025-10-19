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

    // Google Form URLs for registration
    const technicalRegistrationFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfoaap-vlkmh5uKW0KNrat3_qnIVU4ZSEvpYsjdfevI9IKmYg/viewform";
    const culturalRegistrationFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeUMrnLYtSLmQKbLFaCd7qWgNeem-eYn4Shn-kIPiCYjGrpqQ/viewform";

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
                    description: "HackSprint is the flagship hackathon of ACM – Apratim, designed to ignite innovation and collaboration among students. Participants work in teams to conceptualize, design, and build impactful projects that solve real-world challenges using technology. This event emphasizes creativity, teamwork, time management, and problem-solving under high pressure.",
                    objective: "HackSprint brings together programmers, designers, and innovators to brainstorm ideas that can create tangible societal or industrial impact. The event will include an idea pitching phase, prototype development, and a final demo presentation before judges. Participants will receive surprise themes that align with modern-day technological challenges such as: Artificial Intelligence & Machine Learning, Cybersecurity & Privacy, Environmental Sustainability, EdTech & Smart Learning, Social Impact Tech.",
                    highlights: [
                        "Highlights",
                        "Day-long coding marathon promoting creative and technical synergy",
                        "Teams work from scratch to prototype functional solutions",
                        "Real-world, impact-driven problem statements",
                        "Mentorship and checkpoints during the event",
                        "Final presentations judged by an expert panel",
                        "Open to all students regardless of experience level"
                    ],
                    rules: [
                        "Rules & Guidelines",
                        "Each team must comprise exactly four members. Cross-department teams are allowed.",
                        "Problem statements will be released at the beginning of the event.",
                        "Teams are expected to ideate, design, and develop their solutions within the given time frame.",
                        "The use of AI-generated or prebuilt codebases must be declared; failure to do so will result in disqualification.",
                        "Participants must bring their own laptops and necessary development tools.",
                        "Internet access will not be provided by us explicitly.",
                        "All submissions must include a brief documentation or pitch deck describing the idea, implementation, and impact."
                    ],
                    judgingCriteria: [
                        "Judging Criteria:",
                        "Creativity and Originality – 25%",
                        "Technical Feasibility – 25%",
                        "Impact and Relevance – 20%",
                        "Presentation and Teamwork – 15%",
                        "Completeness of Prototype – 15%"
                    ],
                    outcome: "HackSprint aims to encourage rapid ideation and real-world application of theoretical knowledge. By the end of the event, participants will have gained team-building experience, presentation confidence, and the ability to execute innovative ideas under time constraints."
                }
            },
            {
                id: 2,
                name: "Quizathon",
                image: quizathonImg,
                description: "Test your technical knowledge",
                moreInfo: {
                    mode: "Individual Participation",
                    description: "Quizathon is an exciting and intellectually stimulating event designed to assess participants' understanding of core computer science concepts, emerging technologies, logical reasoning, and problem-solving aptitude. It's a battle of knowledge where speed, accuracy, and awareness define victory.",
                    highlights: [
                        "Highlights",
                        "Solo contest designed for both beginners and advanced learners",
                        "Covers topics like Programming, Operating Systems, Networking, Databases, AI, and Current Tech Trends",
                        "Exciting prizes and certificates for top scorers"
                    ],
                    rules: [
                        "Rules & Guidelines",
                        "The quiz will be conducted offline at a physical location.",
                        "Participants must bring their own internet connection.",
                        "Individual participation is allowed (no team entries).",
                        "Entry fee: TBD",
                        "Bring your fully charged devices (laptop/phone/tablet) and/or bring your chargers.",
                        "Questions will cover programming, general computer science, and major tech companies/events."
                    ],
                    outcome: "Quizathon fosters a competitive learning environment, inspiring students to explore topics beyond the classroom. It's an excellent platform for participants to gauge their technical awareness, quick thinking, and conceptual understanding of computer science fundamentals."
                }
            },
            {
                id: 3,
                name: "Designscape",
                image: designscapeImg,
                description: "UI/UX Design Challenge",
                moreInfo: {
                    mode: "Individual",
                    description: "DesignScape is a UI/UX Design Challenge focused on assessing participants' creativity, usability understanding, and design thinking approach. It aims to test not just aesthetic sense but also the user experience and practicality of design solutions in a given problem scenario.",
                    objective: "DesignScape is a UI/UX Design Challenge focused on assessing participants' creativity, usability understanding, and design thinking approach. It aims to test not just aesthetic sense but also the user experience and practicality of design solutions in a given problem scenario.",
                    eventOverview: [
                        "Event Overview",
                        "Participants will be provided with a surprise design prompt related to real-world user problems. They must conceptualize and create a digital interface – such as a mobile app, website layout, or dashboard – that effectively addresses the given challenge.",
                        "The event focuses on end-to-end design thinking, including:",
                        "Understanding user pain points",
                        "Wireframing and prototyping",
                        "Color theory, layout, and accessibility",
                        "User-centric design approach"
                    ],
                    highlights: [
                        "Highlights",
                        "Surprise design problem revealed at event start",
                        "Judged on creativity, usability, consistency, and storytelling",
                        "Open to all skill levels – no prior experience required"
                    ],
                    rules: [
                        "Rules & Guidelines",
                        "The design challenge must be completed within the allotted time.",
                        "Designs must be original; plagiarism or template-based work will lead to disqualification."
                    ],
                    judgingCriteria: [
                        "Judging Criteria:",
                        "Creativity and Visual Appeal – 25%",
                        "Usability & Accessibility – 25%",
                        "Relevance to Problem Statement – 20%",
                        "Innovation & User Empathy – 15%",
                        "Presentation & Explanation – 15%",
                        "Participants are encouraged to explain their thought process during the final presentation round."
                    ],
                    outcome: "DesignScape gives participants the opportunity to think like a designer and problem-solver, not just an artist. It cultivates empathy-driven creativity, practical design sense, and strong storytelling – all key skills in modern UI/UX design careers."
                }
            },
            {
                id: 4,
                name: "Competitive Programming",
                image: competitiveImg,
                description: "Code your way to victory",
                moreInfo: {
                    mode: "Individual Participation",
                    description: "The Competitive Programming Contest is designed to challenge logical reasoning, algorithmic proficiency, and coding efficiency. It simulates real-world programming contests where participants must solve multiple problems within a fixed duration.",
                    objective: "The Competitive Programming Contest is designed to challenge logical reasoning, algorithmic proficiency, and coding efficiency. It simulates real-world programming contests where participants must solve multiple problems within a fixed duration.",
                    eventOverview: [
                        "Event Overview",
                        "Participants will be given algorithmic problems ranging from basic logic puzzles to advanced DSA challenges. The competition will follow an online-judge format with a live leaderboard, reflecting scores in real-time."
                    ],
                    highlights: [
                        "Highlights",
                        "Real-time coding competition simulating online challenges",
                        "Problems based on Data Structures, Algorithms, and Mathematics",
                        "Live leaderboard for transparency and competitiveness",
                        "Encourages accuracy, optimization, and clean coding",
                        "Open to students of all years"
                    ],
                    rules: [
                        "Rules & Guidelines",
                        "Each participant competes individually using their preferred programming language (C, C++, Java, Python).",
                        "Participants must submit solutions within the time constraints.",
                        "Partial scoring will be enabled – some test cases may carry partial credit.",
                        "The ranking will be determined by:",
                        "Number of correct problems solved",
                        "Total penalty time (including wrong submissions)",
                        "Any code copied from external sources or other participants will result in immediate disqualification.",
                        "The top 3 scorers will be declared as winners, and certificates will be awarded to the top performers."
                    ],
                    outcome: "This event strengthens analytical and coding skills while promoting a culture of logical problem-solving. It is particularly beneficial for students preparing for coding interviews, hackathons, and global programming contests such as Codeforces or LeetCode competitions."
                }
            },
            {
                id: 5,
                name: "CAD Combat",
                image: cadCombatImg,
                description: "3D modeling competition",
                moreInfo: {
                    description: "Unleash your design skills in this high-energy CAD Competition! Participants will be tested on their ability to think quickly, model accurately, and collaborate effectively. The competition combines speed, precision, and teamwork as participants transform engineering drawings into fully modeled 3D parts. Whether you're a CAD beginner or a seasoned designer, this event will challenge your technical expertise and push your creativity under time pressure!",
                    rules: [
                        "Rules & Guidelines",
                        "1. Participation:",
                        "○ Solo entries are allowed during registration.",
                        "○ On arrival, participants will be randomly grouped into teams of 3 members to encourage collaboration.",
                        "2. Task:",
                        "○ Each team will be given three engineering drawings to model using CAD software.",
                        "○ The objective is to accurately complete all three parts in the shortest possible time.",
                        "3. Judging Criteria:",
                        "○ The fastest team to successfully model all three parts will be declared the winner.",
                        "○ Accuracy is essential: if any part is found to be inaccurate, the team will receive a 5-minute penalty added to their total time.",
                        "4. Final Results:",
                        "○ The final position of teams will be based on their total effective time (completion time + penalties).",
                        "○ In case of a tie, overall accuracy and design completeness will be considered.",
                        "5. General Rules:",
                        "○ Teams must use the CAD software provided at the venue (specific software will be announced in advance).",
                        "○ No external resources, files, or internet access will be permitted.",
                        "○ Teams must work only within their allocated systems and time slots.",
                        "6. Disqualification Grounds:",
                        "○ Using unfair means such as pre-made files, external drives, or internet help.",
                        "○ Tampering with systems or disturbing other teams."
                    ],
                    additionalInfo: [
                        "Proposed time : 2pm - 4pm",
                        "Proposed venue : CAD Lab Block - B Floor 3",
                        "Proposed day : Day - 2"
                    ]
                }
            },
            {
                id: 6,
                name: "Flight Fest",
                image: flightFestImg,
                description: "Paper glider design challenge",
                moreInfo: {
                    description: "Unleash your inner aeronautical engineer! In this exciting competition, participants will design and build paper or lightweight material gliders that combine creativity with the principles of aerodynamics. The challenge is to craft a glider that can achieve the longest flight distance and best stability. This event is not only a test of engineering skills but also of imagination and precision. Whether you're a beginner or a flight enthusiast, come and put your designs to the test – and watch your creations take to the skies!",
                    rules: [
                        "Rules & Regulations",
                        "1. Materials Provided:",
                        "○ All materials for making the glider (paper/card, tape, scissors, etc.) will be provided by the organizers.",
                        "○ Participants are not allowed to bring or use any external materials, adhesives, or tools.",
                        "2. Construction Time:",
                        "○ A fixed time limit (e.g., 30 minutes) will be given for building the glider.",
                        "○ Gliders must be constructed on-site under the supervision of organizers.",
                        "3. Size & Weight Restrictions:",
                        "○ Maximum wingspan: 30 cm",
                        "○ Maximum length: 25 cm",
                        "○ Only single-layer paper/card structures are allowed (no folding multiple sheets into thick blocks).",
                        "○ No weights (clips, pins, coins, etc.) are allowed for balancing.",
                        "4. Launch Rules:",
                        "○ The glider must be hand-thrown only.",
                        "○ Each participant/team will get 2 launch attempts.",
                        "○ The better performance of the two will be considered.",
                        "○ The launch must be made from behind the marked line. Crossing the line leads to a foul throw.",
                        "5. Performance Area:",
                        "○ Launches must be made in the designated throwing area.",
                        "○ If the glider hits walls, ceiling, or obstacles, the distance will be measured up to the first contact point.",
                        "6. Disqualification Conditions:",
                        "○ Use of unapproved materials or modifications.",
                        "○ Launching with external aids (rubber bands, motors, catapults, etc.).",
                        "○ Any unsafe behavior or not following the organizer's instructions."
                    ],
                    additionalInfo: [
                        "Proposed time : 11am - 1pm",
                        "Proposed venue : E - Block 1St Floor",
                        "Proposed day : Day 1 of Apratim"
                    ]
                }
            },
            {
                id: 7,
                name: "Goldberg",
                image: goldbergImg,
                description: "Rube Goldberg machine competition",
                moreInfo: {
                    description: "Think outside the box and let your imagination run wild! In this exciting competition, participants will design and build their very own Rube Goldberg-inspired machine to move a ball from one corner of a board to the opposite corner. The challenge is to use everyday materials to create the most inventive, complex, and visually engaging chain-reaction mechanism possible. This event celebrates creativity, problem-solving, and the beauty of engineering with a touch of fun!",
                    rules: [
                        "Rules & Guidelines",
                        "1. Objective:",
                        "○ The goal is to transport a ball from one corner of the board to the opposite corner using a chain-reaction mechanism.",
                        "○ Once the machine is started, no manual intervention is allowed until the ball reaches its destination.",
                        "2. Team Structure:",
                        "○ Each team will work together to design and build their machine within the given time frame.",
                        "○ Teams are allowed two attempts to complete the task; the better attempt will be considered for scoring.",
                        "3. Machine Constraints:",
                        "○ The entire setup must fit within the specified board dimensions provided at the venue.",
                        "○ All materials for building the machine will be provided by the organizers. External materials will not be allowed.",
                        "4. Operation Rules:",
                        "○ Once the machine is set in motion, team members are not allowed to touch or interfere with it.",
                        "○ Interference during operation will result in disqualification of that attempt.",
                        "5. Judging Criteria (100 Points Total):",
                        "○ Creativity: Innovative and original design – 30 points",
                        "○ Complexity: Number and uniqueness of steps involved – 30 points",
                        "○ Functionality: Successful and smooth operation of the machine – 25 points",
                        "○ Aesthetic Appeal: Neatness, design, and overall appearance – 15 points",
                        "6. Disqualification Grounds:",
                        "○ Use of unapproved materials.",
                        "○ Physical interference once the machine has started.",
                        "○ Failure to comply with board size or safety guidelines."
                    ],
                    additionalInfo: [
                        "Proposed time : 2pm - 4pm",
                        "Proposed venue : Near fun Stage",
                        "Proposed day : Day - 2"
                    ]
                }
            },
            {
                id: 8,
                name: "Skyspray Challenge",
                image: skysprayImg,
                description: "Bottle rocket competition",
                moreInfo: {
                    description: "Ignite your passion for rocketry! In this thrilling competition, participants will design and build bottle rockets using simple materials and basic propulsion techniques. The challenge is to create a rocket that can achieve the highest altitude and longest airtime while maintaining stability during flight. This event tests your engineering creativity, problem-solving skills, and precision, all while having fun with hands-on experimentation. Whether you're a beginner or a budding rocket scientist, get ready to launch your ideas skyward and watch your rockets soar!",
                    rules: [
                        "Bottle Rocket Making Competition – Rules",
                        "1. Materials Provided:",
                        "○ Participants must use the waste bottles provided by the organizers to build their rockets.",
                        "○ Additional materials (tape, cardboard, paper, rubber bands, etc.) will also be provided by the organizers. No outside materials are allowed.",
                        "2. Objective:",
                        "○ The goal of the competition is to design a rocket that flies the furthest distance while remaining stable in flight.",
                        "3. Construction Guidelines:",
                        "○ Rockets must be constructed during the event within the allotted time.",
                        "○ Only the materials provided may be used.",
                        "○ Rockets must fit within any size constraints announced at the start of the competition (if applicable).",
                        "4. Launch Procedure:",
                        "○ Rockets will be launched using a tyre pump to pressurize the bottle.",
                        "○ Rockets will be launched at a fixed angle provided by the organizers.",
                        "○ Safety precautions must be followed during pressurization and launch.",
                        "5. Scoring:",
                        "○ Distance of flight will be the primary criterion for scoring.",
                        "○ Stability in flight may be considered as a tiebreaker if multiple rockets cover similar distances.",
                        "6. Team Guidelines:",
                        "○ Each team may consist of 2 members.",
                        "○ Teams must work within the designated work area.",
                        "7. Disqualification:",
                        "○ Using materials not provided by organizers.",
                        "○ Tampering with the launch setup.",
                        "○ Violating safety instructions."
                    ],
                    additionalInfo: [
                        "Proposed time : 11am - 1pm",
                        "Proposed venue : Construction  -  LH1 Block A",
                        "               Testing - In Front of Block B",
                        "Proposed day : Day - 2"
                    ]
                }
            },
            {
                id: 9,
                name: "Bob The Builder",
                image: bobImg,
                description: "Card structure building",
                moreInfo: {
                    description: "Create the engineering wonders with cards. A hands-on event where teams compete to design and build model structures within a time limit, using basic materials. It's a fun challenge that tests your creativity, teamwork, and engineering skills.",
                    rules: [
                        "EVENT RULES AND GUIDLINES",
                        "1. A maximum of 2 members are allowed to participate in one team.",
                        "2. Each team has to construct a structure using playing cards and double sided tape and feviquick only.",
                        "3. Only one deck of cards and one tape roll will be provided to each team",
                        "4. Teams can cut or fold the cards as per their requirement.",
                        "5. Structure can be anything ranging from one story building to multi-story building to towers etc.",
                        "6. The structure should stand within an area of 80x80 square cm.",
                        "7. Height of the structure should not exceed 100 cm.",
                        "8. In case of any dispute the decision of judges will be final."
                    ],
                    judgingCriteria: [
                        "Architectural point of view and aesthetics"
                    ]
                }
            },
            {
                id: 10,
                name: "Hold Up Blocks",
                image: holdUpImg,
                description: "Jenga with engineering questions",
                moreInfo: {
                    description: "Stabilize the tower with the knowledge of a civil engineering. A practical event where teams design and construct model bridges using simple materials, aiming for maximum strength and stability. It's a test of creativity, engineering skills, and teamwork in a fun, competitive setting.",
                    rules: [
                        "EVENT RULES AND GUIDLINES",
                        "1. A maximum of 2 members are allowed to participate in one team.",
                        "2. You will be using one hand at a time to remove the blocks from the tower.",
                        "3. All the rules of the JENGA game will be applicable.",
                        "4. There will be a tower of 5 levels, each marked with a difficulty level of questions.",
                        "5. You or your teammate(one after the other) will take one block from any level of the tower and place it on the topmost level in order to complete it without letting the tower fall.",
                        "6. After you place the block at the top of the tower, you have to answer the question asked by the judges present there.",
                        "7. Correct answers will give you +2 points and wrong answers will deduct 0.5 points in level 1 and 2.",
                        "8. During your first 3 turns, you will remove blocks from 1st and 2nd level only.",
                        "9. The points will increase to +3 for each correct answer in level 3 and +4 in level 4 and for wrong answer 0.5 points will be deducted in each level.",
                        "10. The game will end when the tower falls completely or when you fail to answer the question at any point."
                    ],
                    judgingCriteria: [
                        "Stabilization of the structure up to maximum time amid disturbance."
                    ]
                }
            },
            {
                id: 11,
                name: "Bridge It",
                image: bridgeItImg,
                description: "Bridge construction challenge",
                moreInfo: {
                    description: "A practical event where teams design and construct model bridges using simple materials, aiming for maximum strength and stability. It's a test of creativity, engineering skills, and teamwork in a fun, competitive setting.",
                    rules: [
                        "EVENT RULES AND GUIDLINES",
                        "1. A maximum of 2 members are allowed to participate in one team.",
                        "2. Construct a deck arch bridge of length 400-500 mm using straws.",
                        "3. The bridge must have only two footings and the distance between their centres must be 400-500 m and footing width can be maximum of 500 mm.",
                        "4. The roadway should be continuous and should allow all 10cm x 10cm vehicles to pass through the entire length of the bridge and the width of the bridge at any point shall not be more than 125 mm.",
                        "5. Total height of the bridge from footing must not be less than 100mm and must not exceed 200mm. Loading will be checked at the center of the bridge.",
                        "6. The Bridge will be tested for a deflection of 15mm and will be rated according to the load required.",
                        "7. The load considered E is that value of weight supported by the bridge until failure or until a deflection of 15mm at the center."
                    ],
                    judgingCriteria: [
                        "Aesthetics, scientific concept, loading and efficiency of bridge."
                    ]
                }
            },
            {
                id: 12,
                name: "Treasure Hunt",
                image: treasureHuntImg,
                description: "Campus-wide treasure hunt",
                moreInfo: {
                    rules: [
                        "RULES AND REGULATIONS FOR TREASURE HUNT:",
                        "· Each team must have 3–5 members.",
                        "· Cross-department teams are allowed.",
                        "· Only registered teams can participate.",
                        "· Participants must be the bonafide students of the college. Each member must carry a valid ID card.",
                        "· Teams will be given the first clue at the starting point. Each clue leads to the next location/object until the final treasure is found. The team that finds the final treasure first will be declared the winner."
                    ]
                }
            },
            {
                id: 13,
                name: "Line Follower",
                image: lineFollowerImg,
                description: "Autonomous line following robot",
                moreInfo: {
                    mode: "Individual or Team based (max members-4)",
                    description: "The Line Follower event is a robotics competition that challenges participants to design and program autonomous robots capable of navigating a track defined by a continuous line. This event emphasizes precision, speed, and technical innovation, as teams apply concepts of sensor integration, control systems, and algorithm design.",
                    gameplay: [
                        "Gameplay:",
                        "1.) Choose one from black line based maze and white line maze.",
                        "2.) The event consists of 2 rounds: ",
                        "a.) Scan round :- The bot scans the whole maze.",
                        "b.) Solve round :- The bot follows the shortest path from the scanned path earlier ",
                        "3.) 2 resets are allowed during scan round, if the bot loses it's path and is unable to track back."
                    ],
                    generalRules: [
                        "General Rules:",
                        "■ Each team may consist of a maximum of 3–4 members.",
                        "■ Only one robot per team is allowed for the competition.",
                        "■ Robots must be fully autonomous and should not be controlled externally once the run begins.",
                        "■ Any form of deliberate damage to the arena or interference with other teams will lead to disqualification"
                    ],
                    scoring: [
                        "Scoring and Timing:",
                        "■ The time will be measured from the robot's start until it crosses the finish line.",
                        "■ The team with the shortest completion time is declared the winner.",
                        "■ Penalty seconds may be added for interventions or track violations.",
                        "■ If no robot completes the full track, the one covering the longest valid distance wins.",
                        "■ Final declaration of disqualification and announcing the winners rests in the hands of the judge."
                    ]
                }
            },
            {
                id: 14,
                name: "Robo Soccer",
                image: roboSoccerImg,
                description: "Robot soccer competition",
                moreInfo: {
                    mode: "Individual or Team ( max 4)",
                    description: "RoboSoccer is an exciting robotics event where teams design and program autonomous or manually controlled robots to play soccer on a designated field. The competition combines engineering, strategy, and teamwork as robots must coordinate movement, control the ball, and score goals against opponents. It encourages innovation while providing a fun and competitive platform to test design and problem-solving skills.",
                    gameplay: [
                        "Gameplay:- ",
                        "1.\tThe teams must score against each other just like in actual soccer.",
                        "2.\tThe bots can have either wireless or wired control. ",
                        "3.\tOnly 1 person from the team is allowed to operate the bot.",
                        "4.\tThere are 2 rounds, each 90 seconds. Total time 3 minutes."
                    ],
                    botSpecifications: [
                        "Bot Specifications:- ",
                        "The bot must fit in a box of 30cm X 30 cm box with weight ≤ 2.5 kg, that is either controlled with a wireless remote or wired media."
                    ],
                    rules: [
                        "Rules:-",
                        "1.\tDeliberate harm to the opponents bot is not allowed and causes disqualification ",
                        "2.\tDamaging the arena leads to penalty and disqualification.",
                        "3.\tThe bot must not grab the ball, only pushing or dribbling mechanism can be integrated in the bot.",
                        "4.\tHoarding the ball for more than 15 seconds calls for penalty and doing it more than 2 times leads to disqualification."
                    ]
                }
            },
            {
                id: 15,
                name: "Autonomous Catapult",
                image: autonomousImg,
                description: "Build and automate a catapult",
                moreInfo: {
                    mode: "Team ( 4 members max)",
                    duration: "1.5 - 2 hours ",
                    description: "A fun event to engage your mechanical and electronics knowledge, where you design your own catapult from the components provided and put it to test against others to see who is the best of the best.",
                    gameplay: [
                        "Gameplay:- 2 Rounds"
                    ],
                    rounds: [
                        {
                            name: "Design phase (Round 1, duration:- 30min )",
                            details: [
                                "Choosing the components agreed upon by the team members to make the Catapult from.",
                                "Use of online tools and AI is allowed.",
                                "No change of components and team members once the round starts.",
                                "Submit the design to the judges (either hand drawn or reference picture).",
                                "Note :- The design can be altered or completely changed but more material and components won't be provided."
                            ]
                        },
                        {
                            name: "Build Round (Round 2, duration:- 1.5 hours)",
                            details: [
                                "Start building the catapult based upon the design finalized and submitted to the judges.",
                                "After building a mechanically functioning catapult, teams must automate the launching and coiling mechanism.",
                                "The catapult with the longest throw of the projectile wins.",
                                "Note:- If teams are unable to automate the required functions then the teams would be judges on the basis of mechanical and manual launch of the projectile."
                            ]
                        }
                    ]
                }
            },
            {
                id: 16,
                name: "RC Obstacle Race",
                image: rcImg,
                description: "RC car obstacle course",
                moreInfo: {
                    description: "RC Obstacle Racing is a thrilling event where participants design and navigate through a challenging track filled with obstacles such as gates, hoops, and barriers. The competition emphasizes speed, precision, and control, as drivers must skillfully maneuver their cars while avoiding penalties. It provides an engaging platform to showcase innovation, driving skills, and quick decision-making.",
                    basicRules: [
                        "Each team may consist of 1–3 members with one car allowed per team.",
                        "RC cars must be self assembled and weighing not more than 3kg.",
                        "The race track will consist of a series of obstacles like gates, tunnels, and slalom paths that must be completed in the correct order.",
                        "Time will be recorded from take-off to crossing the designated finish line.",
                        "Collisions with obstacles or leaving the track will result in time penalties.",
                        "If a car crashes, it may be restarted from the point of crash with an added penalty, provided safety rules are followed.",
                        "External interference, unsafe driving, or deliberate damage to other cars or the arena will result in immediate disqualification."
                    ],
                    winningCriteria: "The winner will be the car that completes the course in the shortest official time after accounting for penalties."
                }
            }
        ],
        cultural: [
            {
                id: 18,
                name: "Solo Singing",
                image: soloSingingImg,
                description: "Showcase your vocal talent",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/ogJUKN8C6CABQ6Aq9",
                moreInfo: {
                    description: "A stage for passionate vocalists to express their artistry, emotion, and individuality through powerful solo performances.",
                    rules: [
                        "Solo singing competition will comprise 2 rounds.",
                        "",
                        "PRELIMS:",
                        "1. Time limit: 2-3 minutes.",
                        "2. Singers can use a backing track or can be accompanied by 1 instrumentalist.",
                        "3. The decision of the judges will be final.",
                        "4. Registration can be done online.",
                        "5. Note that this will be the elimination round and the singers that get selected in this round",
                        "   will be eligible for the final competition.",
                        "FINALS:-",
                        "1. Time limit: 4-5 minutes.",
                        "2. Karaoke is allowed or singers can be accompanied by 2 instrumentalists.",
                        "3. The decision of the judges will be final."
                    ]
                }
            },
            {
                id: 19,
                name: "Solo Instrumental",
                image: soloInstrumentalImg,
                description: "Instrumental performance",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/9frhtwkF7BhTpqLf6",
                moreInfo: {
                    description: "An instrumentalist's stage to captivate the audience through melody, skill, and the pure language of music.",
                    rules: [
                        "1. Time limit: 4-5 minutes (Performance) + 5 minutes (for setup and sound check).",
                        "2. No instruments will be provided.",
                        "3. Registration can be done online or on the spot.",
                        "4. Any kind of vulgarity will lead to disqualification.",
                        "5. The decision of the judges will be final.",
                        "6. Backing track is allowed."
                    ]
                }
            },
            {
                id: 20,
                name: "Group Singing",
                image: groupSingingImg,
                description: "Harmony in unity",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/WJZLW49qgyBSdSkt5",
                moreInfo: {
                    description: "A harmony-driven showcase where voices unite to create magic, rhythm, and resonance as one collective sound.",
                    rules: [
                        "1. Time limit: 3-5 minutes performance time",
                        "2. Max Team size: 4",
                        "3. Singers can use a backing track or can be accompanied by instrumentalist (maximum 2).",
                        "4. Registration can be done online.",
                        "5. The decision of the judges will be final."
                    ]
                }
            },
            {
                id: 21,
                name: "Fusion Band",
                image: fusionBandImg,
                description: "Blend musical genres",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/ehanDyv5t2pNPGhk8",
                moreInfo: {
                    description: "A celebration of creativity and collaboration where bands blend diverse musical styles to create a one-of-a-kind sonic experience.",
                    rules: [
                        "1. The team limit is 8 members.",
                        "2. Time limit is 10 mins for performance and at most 10 mins for sound check",
                        "3. Original compositions will be appreciated and fusion of different genres is expected.",
                        "4. No backing track / vocal filtering allowed.",
                        "5. Judging criteria – Innovation of different genres, amalgamations of different rhythms and beat patterns."
                    ]
                }
            },
            {
                id: 22,
                name: "Photography Competition",
                image: photographyImg,
                description: "Capture the moment",
                hasRegistration: true,
                registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeUMrnLYtSLmQKbLFaCd7qWgNeem-eYn4Shn-kIPiCYjGrpqQ/viewform?usp=dialog",
                moreInfo: {
                    organizedBy: "Achintyam – The Photography Club, CCET",
                    under: "APRATIM 2025",
                    mode: "Online Competition",
                    description: "Capture the perfect moment in this photography competition.",
                    eligibility: [
                        "1. Eligibility",
                        "Open to students from all colleges/institutions.",
                        "Entries can be individual or team-based (maximum 2 members).",
                        "Each participant must possess a valid College/University ID card for verification."
                    ],
                    registration: [
                        "2. Registration",
                        "Participants must register within the deadline announced by the organizing committee.",
                        "Late or incomplete submissions will not be accepted."
                    ],
                    submissionGuidelines: [
                        "3. Submission Guidelines",
                        "Theme: \"Expressions\"",
                        "Photographs must be clicked after the theme announcement.",
                        "Each participant/team can submit a maximum of 2 entries for the theme.",
                        "Camera date and time must be set correctly to verify EXIF data.",
                        "Submissions must include both RAW files (e.g., .CR2, .NEF, etc.) and the edited versions.",
                        "Provide a short description (up to 30 words) in a PDF file along with your submission.",
                        "Photos must be submitted online via the official link shared by the club."
                    ],
                    editingRules: [
                        "4. Editing Rules",
                        "Only basic editing is allowed – cropping, brightness, contrast, and color adjustments.",
                        "No heavy manipulation, compositing, or AI enhancements are permitted.",
                        "Entries with credentials, watermarks, or signatures will be disqualified.",
                        "Any form of plagiarism will lead to immediate disqualification."
                    ],
                    judgingResults: [
                        "5. Judging & Results",
                        "Evaluation will be based on relevance to theme, composition, originality, and expression capture.",
                        "The decision of the judging panel will be final and binding.",
                        "Selected entries may be featured on Achintyam's official platforms."
                    ]
                }
            },
            {
                id: 23,
                name: "Videography Competition",
                image: videographyImg,
                description: "Tell stories through film",
                hasRegistration: true,
                registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLScdgA-AUnOtD5Ykm42n_uc8jMShFeyggC32vTBz_OnlLnb4LQ/viewform?usp=header",
                moreInfo: {
                    organizedBy: "Achintyam – The Photography Club, CCET",
                    under: "APRATIM 2025",
                    mode: "Online Competition",
                    description: "Create stunning visual stories in this videography competition.",
                    eligibility: [
                        "1. Eligibility",
                        "Participation is open to students from all colleges/institutions.",
                        "Each entry can be individual or a team of up to 2 members.",
                        "Every participant must carry a valid College/University ID card for verification (if shortlisted for screening)."
                    ],
                    registration: [
                        "2. Registration",
                        "Teams must register within the deadline announced by the organizing committee.",
                        "Late submissions will not be accepted."
                    ],
                    filmGuidelines: [
                        "3. Film Guidelines",
                        "Duration: 2–5 minutes (including credits).",
                        "Aspect Ratio: 4:3 or 16:9 (letterboxed if widescreen).",
                        "Any genre or theme is allowed.",
                        "Original content only – plagiarism or use of stock footage is prohibited.",
                        "Voiceovers and original soundtracks are allowed. Borrowed tracks may be used only with proper credits."
                    ],
                    technicalSpecifications: [
                        "4. Technical Specifications",
                        "Equipment: Any device (DSLRs encouraged).",
                        "Resolution: Minimum 720p, maximum 4K.",
                        "Frame rate: Up to 60 fps allowed.",
                        "Submission:",
                        "Upload both final edited video and raw footage.",
                        "All entries must be submitted online through the provided form/link."
                    ],
                    conductEvaluation: [
                        "5. Conduct & Evaluation",
                        "The film must adhere to ethical and decent content standards.",
                        "Teams may be asked to provide proof of originality if required.",
                        "The organizing committee reserves the right to reject entries violating guidelines.",
                        "The decision of the judges will be final and binding."
                    ]
                }
            },
            {
                id: 24,
                name: "Photo Hunt",
                image: photoHuntImg,
                description: "Decode and capture",
                hasRegistration: true,
                registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeJxMKoXLDNspb7EaTBXS2XSLhCtNDBqUu3WooyAcZi6tEdfw/viewform?usp=header",
                moreInfo: {
                    organizedBy: "Achintyam – The Photography Club, CCET",
                    eventUnder: "APRATIM 2025",
                    venue: "College Campus (CCET)",
                    description: "Unleash your inner detective and photographer! The Photo Hunt challenges participants to decode clues hidden across the CCET campus and capture their answers through photographs. Each solved clue leads you closer to victory – the sharper your eyes and lens, the faster you progress!",
                    rules: [
                        "Rules & Guidelines:",
                        "1. Each team can have a maximum of 2 members.",
                        "2. Only one entry per team is permitted.",
                        "3. Team members must stay together throughout the event.",
                        "4. No external assistance or vehicles are allowed during the competition.",
                        "5. The answers to the clues must be captured clearly in photographs.",
                        "6. All captured images must be stored on one single device (camera or mobile phone) for ease of judgment.",
                        "7. Sharing photos or clues with other teams is strictly prohibited.",
                        "8. Photo quality and clarity will influence progression to the next level.",
                        "9. The time limit and number of clues solved will determine the final ranking."
                    ],
                    disqualification: [
                        "Grounds for Disqualification:",
                        "1. Using external help or vehicles.",
                        "2. Sharing clues or photos with other participants.",
                        "3. Submitting unclear or duplicate images.",
                        "4. Using more than one device for submissions.",
                        "5. Any behavior violating fair play or event decorum."
                    ],
                    judgingCriteria: [
                        "Judgment Criteria:",
                        "1. Total number of clues solved.",
                        "2. Accuracy and clarity of photographs.",
                        "3. Time taken to complete the hunt.",
                        "4. Creativity and composition (in case of a tie)."
                    ],
                    note: [
                        "Note: Participants must bring their own camera or mobile phone with sufficient battery and storage. The decision of the Achintyam Organizing Committee will be final and binding."
                    ]
                }
            },
            {
                id: 25,
                name: "Photo Essay",
                image: photoEssayImg,
                description: "Visual storytelling",
                hasRegistration: true,
                registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLScPtHpUaoHJBNseAXTatHEJiUP7OBQUA7ehG--bzvH9Db2yKQ/viewform?usp=header",
                moreInfo: {
                    organizedBy: "Achintyam – The Photography Club, CCET",
                    under: "APRATIM 2025",
                    mode: "Online Competition",
                    description: "Tell a story through a series of photographs in this photo essay competition.",
                    eligibility: [
                        "1. Eligibility",
                        "Open to students from all colleges/institutions.",
                        "Participation is individual (no team entries).",
                        "Participants must have a valid College/University ID card for verification if required."
                    ],
                    registration: [
                        "2. Registration",
                        "Participants must register and submit entries within the deadline announced by the organizing committee.",
                        "Late or incomplete submissions will not be considered."
                    ],
                    submissionGuidelines: [
                        "3. Submission Guidelines",
                        "Theme: Any (open theme).",
                        "Each participant may submit a maximum of 3 photo essays.",
                        "Each entry must contain a series of 5–10 photographs forming a visual story.",
                        "A brief description (up to 50 words) must accompany each photo essay in a PDF file.",
                        "Do not include names, watermarks, or signatures on any images.",
                        "All entries must be submitted online through the official link shared by the club."
                    ],
                    editingRules: [
                        "4. Editing & Originality Rules",
                        "Only basic editing (crop, exposure, color balance) is allowed.",
                        "No heavy manipulation or addition/removal of elements is permitted.",
                        "All work must be original; plagiarism or AI-generated content will result in disqualification."
                    ],
                    evaluationCriteria: [
                        "5. Evaluation Criteria",
                        "Storytelling and coherence of the photo sequence.",
                        "Creativity and originality.",
                        "Visual quality and composition.",
                        "Relevance of the description to the theme.",
                        "The decision of the judges will be final and binding."
                    ]
                }
            },
            {
                id: 26,
                name: "Group Dance",
                image: groupDanceImg,
                description: "Synchronize and shine",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/ffGmPcMmo3CNZVdx5",
                moreInfo: {
                    description: "Synchronize your moves with your team in this energetic group dance competition.",
                    eligibility: [
                        "Participation is open to students from all colleges/ institutions.",
                        "Each team must consist of a minimum of 12 and a maximum of 25 members."
                    ],
                    registration: [
                        "A team leader must be nominated at the time of registration, who will be the single point of contact."
                    ],
                    performanceGuidelines: [
                        "Each performance shall have a duration of 5–12 minutes.",
                        "Teams exceeding the time limit will be penalized with negative marking.",
                        "Teams are required to bring their own props and costumes.",
                        "All dance forms are allowed. Semi-Folk/ Semi-Classical is allowed but purely folk dances are not allowed."
                    ],
                    technicalRequirements: [
                        "Each team shall submit its music track on a pen drive at least two hours before the event.",
                        "Each team is permitted only one track (medleys allowed). The file must be clearly named with the team's name.",
                        "Stage setup/clearance time shall not exceed 5 minutes before and after the performance."
                    ],
                    conduct: [
                        "Teams must report at the venue at least 30 minutes before the commencement of the competition.",
                        "Performance order will be determined by a draw of lots conducted on the spot.",
                        "Any damage to stage property, misbehaviour, or indiscipline will lead to immediate disqualification.",
                        "The organizing committee will not be responsible for loss of props, costumes, or personal belongings.",
                        "The decision of the judges shall be final and binding.",
                        "Exciting cash prizes awaits you."
                    ]
                }
            },
            {
                id: 27,
                name: "Duet Dance",
                image: duetDanceImg,
                description: "Dance in harmony",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/2JFMt9ZF2JSGAj958",
                moreInfo: {
                    description: "Dance in perfect harmony with your partner in this duet dance event.",
                    eligibility: [
                        "Participation is open to students from all colleges/institutions.",
                        "Each team must consist of exactly 2 members.",
                        "Every participant must carry a valid College/University ID card for verification on the day of the event."
                    ],
                    registration: [
                        "Teams must register within the deadline announced by the organizing committee."
                    ],
                    performanceGuidelines: [
                        "Performance duration must be 2–5 minutes.",
                        "Teams exceeding the time limit will face negative marking.",
                        "Any style is allowed (Bollywood, Contemporary, Classical, Hip-Hop, Salsa, Fusion, etc.).",
                        "Props may be used but must be arranged by the team."
                    ],
                    technicalRequirements: [
                        "Teams must submit their track in MP3 format on a pen drive at least 2 hours before the competition.",
                        "Only one track per performance is allowed (medleys permitted).",
                        "Stage setup/clearance time shall not exceed 2 minutes before and after performance."
                    ],
                    conduct: [
                        "Teams must report at the venue at least 30 minutes before the event starts.",
                        "Performance order will be determined by a draw of lots.",
                        "Any misbehaviour, delay, or property damage will lead to disqualification.",
                        "The organizing committee will not be responsible for the safety of props, costumes, or valuables.",
                        "The decision of the judges will be final and binding."
                    ]
                }
            },
            {
                id: 28,
                name: "Prop Hustle",
                image: propHustleImg,
                description: "Creative prop performance",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/B7TnKebnW5b4kY7z7",
                moreInfo: {
                    description: "Showcase your creativity with props in this fun-filled event.",
                    eligibility: [
                        "Participation is open to students from all colleges/institutions.",
                        "This is an individual event – only one participant per entry.",
                        "Each participant must carry a valid College/University ID card for verification."
                    ],
                    registration: [
                        "Participants must register within the announced deadline."
                    ],
                    propAllotment: [
                        "Props will be decided by the organizers.",
                        "Props will be allotted to participants through a random draw on the spot.",
                        "Examples of props: umbrella, chair, dupatta, bottle, stick, hat, newspaper, bag, etc.",
                        "Participants must use the prop creatively as a central element of their performance.",
                        "No exchange or refusal of props is allowed."
                    ],
                    performanceGuidelines: [
                        "Performance duration: 1.5–3 minutes.",
                        "Participants can choose their own song (any style/genre).",
                        "The prop must be clearly visible and actively used during the performance.",
                        "Vulgar, obscene, or offensive choreography/costumes will result in disqualification."
                    ],
                    conduct: [
                        "Participants must report at the venue 30 minutes before the event begins.",
                        "The organizing committee will not be responsible for loss of personal belongings.",
                        "The decision of the judges will be final and binding."
                    ]
                }
            },
            {
                id: 29,
                name: "Catch The Hook",
                image: catchTheHookImg,
                description: "Dance to the hook step",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/4bK3DkBztWHMCLpJA",
                moreInfo: {
                    description: "An exciting event where participants catch hooks with precision.",
                    eligibility: [
                        "Open to students from all colleges/institutions.",
                        "Each participant enters individually (solo event)."
                    ],
                    registration: [
                        "Participants must register before the deadline."
                    ],
                    competitionFormat: [
                        "The event will be conducted in multiple rounds.",
                        "In each round, a random song will be played.",
                        "Participants must perform the hook step of the song as accurately and creatively as possible.",
                        "Each round may have different songs or genres – participants must adapt quickly.",
                        "The hook step can be interpreted with personal style, but the core move of the hook must be recognizable.",
                        "Participants will be eliminated at the end of each round based on judges' scores. Only top performers advance to the next round."
                    ],
                    performanceGuidelines: [
                        "Time limit per hook step: 30–45 seconds.",
                        "No props are allowed (unless explicitly announced by organizers).",
                        "Participants must stay within the stage boundaries during the performance."
                    ],
                    conduct: [
                        "Participants must report at the venue 30 minutes before the event.",
                        "Any misbehaviour, misuse of music, or damage to property will lead to disqualification.",
                        "Organizers are not responsible for loss of personal belongings.",
                        "Judges' decisions are final and binding."
                    ]
                }
            },
            {
                id: 30,
                name: "Mr and Ms Apratim",
                image: mrAndMsImg,
                description: "Talent and charisma",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/GwMKLKzuDhFQhGVB8",
                moreInfo: {
                    description: "The ultimate couple competition showcasing talent and charisma.",
                    generalRules: [
                        "These rules govern participation and conduct throughout the Mr./Miss Apratim event.",
                        "1. Punctuality: Report on time for all rounds; late arrivals face penalties or disqualification.",
                        "2. Conduct: Maintain professionalism and respect toward judges, organizers. and peers.",
                        "3. Judging: Decisions are final: disputes or arguments lead to disqualification.",
                        "4. Advancement: Only those qualifying in Rounds 1 & 2 proceed to the Grand Finale (Rounds 3 & 4).",
                        "5. Preparation: Participants must arrange approved music or props for the Talent Round (Round 2)",
                        "6. Eligibility: Open to all registered participants from recognized colleges/universities.",
                        "7. Dress Code: Proper. professional, and tired for all rounds.",
                        "8. Timeliness: Strict adherence to schedules is mandatory.",
                        "9. No Dispute Clause: All judging decisions are final; disputes or arguments will not be entertained."
                    ],
                    fourRounds: [
                        "Phase 1- College Qualifiers: Venue and tinging will be announced later.",
                        "Round 1: Introduction & Discussion Assessing communication, confidence, and spontaneity through self-introduction and a short group discussion or interview.",
                        "Round 2: Talent Showcase Display any special talent (singing, dance, instrument, or unique aet). Time limit: 2 minutes.",
                        "Phase II-Grand Finale",
                        "Round 3: The Grand Walk Formal/traditional ramp walk judged on poise, confidence, and stage presence.",
                        "Round 4: Final Questions Spontaneous Q&A testing intellect, wit, and awareness."
                    ]
                }
            },
            {
                id: 31,
                name: "CCET Fashion Icon",
                image: fashionIconImg,
                description: "Strut your style",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/GwMKLKzuDhFQhGVB8",
                moreInfo: {
                    description: "Strut your style in this glamorous fashion competition.",
                    generalRules: [
                        "1.Participants must arrive 30 minutes before the event starts.",
                        "2.Late entries will not be allowed once the event begins.",
                        "3.Participants must bring their own costumes, accessories, and makeup.",
                        "4.Vulgarity or offensive gestures will lead to immediate disqualification.",
                        "5.Music tracks (if used) should be submitted in .mp3 format at least 1 hour prior.",
                        "6.Use of props is allowed but must be safe and non-hazardous.",
                        "7.The decision of the judges and organizing committee is final.",
                        "8.Any kind of misbehavior, misconduct, or violation of college rules will result in disqualification.",
                        "9.Participants must respect time limits strictly.",
                        "10.Themes and rounds are subject to change based on event logistics."
                    ],
                    eligibility: [
                        "Open to all college students with valid ID cards.",
                        "Individual participation (no teams).",
                        "Participants must register before the deadline."
                    ]
                }
            },
            {
                id: 32,
                name: "Punjabi Folk Dance",
                image: punjabiImg,
                description: "Bhangra competition",
                hasRegistration: true,
                registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeRyJIIirwyaLd4seey6FdjZhcuvGPM-4k9pP__OaTE7IV8nA/viewform?usp=header",
                moreInfo: {
                    description: "Feel the beats, the moves, and the spirit of Punjab at VIRSA! Organized by Punjabi by Nature, this Bhangra competition brings together solo dancers and groups to show their skills and captivate the audience. Expect energetic performances, stunning coordination, and a celebration of Punjabi heritage like never before.",
                    eventRules: [
                        "Participants must wear appropriate, non-vulgar attire.",
                        "Each participant/group should bring their own song on a USB drive.",
                        "Performance duration must be between 2 to 10 minutes.",
                        "Performances may be solo or in groups, with a maximum of 10 members.",
                        "Note: Any form of vulgarity in song selection or attire will not be permitted."
                    ]
                }
            },
            {
                id: 33,
                name: "Nukkad Natak",
                image: nukkadNatakImg,
                description: "Street play",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/mmrviBz8JPBVyBQZ7",
                moreInfo: {
                    description: "Nukkad Natak (Street Play) is a traditional Indian theatre form performed in public spaces to raise social awareness on critical issues. It is characterized by its minimalist setup and high-energy, direct delivery, bringing the message intimately to the common people.",
                    rules: [
                        "There will be only one final round.",
                        "The Act can be performed either in Hindi/English or bilingual.",
                        "Number of participants per team: 5-20 members:(all team members should be certified students of their respective institute. Please bring your identity cards for verification).",
                        "No cross-college teams are allowed. But multiple teams of the same college are allowed but they should not perform the same play.",
                        "Any entry found using obscene language, pornographic materials, vulgarity, or defamatory statements about but, not limited to, any person, company, organisation, or entity will be disqualified.",
                        "Performance should not exceed 30 minutes in length (Empty circle to Empty circle).",
                        "Teams are allowed to use musical props such as Dholak, Flute, or any other musical instrument of their choice, but usage of mics, lights, or other electronic instruments is not allowed.",
                        "No instruments will be provided by CCET, so teams are required to bring their own instruments.",
                        "No technical support will be provided.",
                        "Use of any hazardous element/prop is strictly prohibited.",
                        "The decision of the judging panel will be final and binding."
                    ]
                }
            },
            {
                id: 34,
                name: "Insta Act",
                image: instaActImg,
                description: "Instant acting",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/8h5o9y3o9gk2Yk6TA",
                moreInfo: {
                    description: "Performers have to act on a topic which is given instantly. They have to improve their performance according to the topic.",
                    rules: [
                        "There will be only one final round.",
                        "Act can be performed either in Hindi or English.",
                        "Number of participants per team: 1-3 members:(all team members should be certified students of the same institute. Please bring your identity cards for verification).",
                        "You will get on the spot topic which you have to perform.",
                        "You will be given 5-10 min prep time.",
                        "Performance should be minimum of 2 minutes and maximum of 7 minutes.",
                        "No props will be provided by CCET, so performers are required to bring their own props.",
                        "Use of any hazardous element/prop is strictly prohibited.",
                        "The decision of the judging panel will be final and binding."
                    ]
                }
            },
            {
                id: 35,
                name: "Mashhoori",
                image: mashooriImg,
                description: "Creative advertising",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/UvxPY3sxQmotcWe47",
                moreInfo: {
                    description: "You have to make a short reel/video to advertise things. In this you will have to explore new ways to advertise things.",
                    rules: [
                        "Individuals or max team of 4 is allowed.",
                        "No vulgarity should be shown or used in advertisement.",
                        "Advertisement of any intimacy related products like (condoms) are prohibited.",
                        "Last submission will be at 11:59 pm on 29/October/2025.",
                        "The decision of the judging panel will be final and binding."
                    ]
                }
            },
            {
                id: 36,
                name: "Monologue",
                image: monologueImg,
                description: "Solo performance",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/HdW2SD3hSmnAqugR7",
                moreInfo: {
                    description: "A monologue is a long, uninterrupted performance by a single character in which they used to express their inner thoughts, emotions, or back-story.",
                    rules: [
                        "There will be only one final round.",
                        "Act can be performed either in Hindi or English.",
                        "Multiple individuals from the same college are allowed but they should not perform the same act.",
                        "Any entry found using obscene language, pornographic materials, vulgarity, or defamatory statements about but, not limited to, any person, company, organization, or entity will be disqualified.",
                        "Maximum time allowed for a performer to perform is 7 minutes.",
                        "No props will be provided by CCET, so performers are required to bring their own props.",
                        "Use of any hazardous element/prop is strictly prohibited.",
                        "The decision of the judging panel will be final and binding."
                    ]
                }
            },
            {
                id: 37,
                name: "Iski Topi Uske Sar",
                image: iskiTopiImg,
                description: "Role reversal duet",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/DEndx6wQQUpDtYNJ7",
                moreInfo: {
                    description: "Duet performance in which role are reverse on the tap/buzz.",
                    rules: [
                        "Team of 2 required.",
                        "You can perform your pre planned act.",
                        "Roles should be reversed after hearing buzz.",
                        "Performance should be minimum of 2 minutes and maximum of 7 minutes.",
                        "No props will be provided by CCET, so performers are required to bring their own props.",
                        "Use of any hazardous element/prop is strictly prohibited.",
                        "The decision of the judging panel will be final and binding."
                    ]
                }
            },
            {
                id: 38,
                name: "Custom Art",
                image: customArtsImg,
                description: "Customize objects",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/WCcmn6mfvb2n5jsE6",
                moreInfo: {
                    description: "Give any ordinary item a creative twist! Customize or paint an object that reflects your unique style.",
                    rules: [
                        "The object to be customized will be provided by the organizer.",
                        "All designs must be created live during the event.",
                        "No pre-made work will be accepted.",
                        "Time limit: 1.5 hours.",
                        "Judging Criteria: Originality, Creativity, Aesthetic Appeal, and Finish."
                    ],
                    youShouldBring: [
                        "Paints, brushes, markers, glue, decorative materials – everything needed for your design."
                    ],
                    providedByOrganizers: [
                        "Basic supplies and water supply."
                    ],
                    generalGuidelines: [
                        "Open to all students.",
                        "Individual participation only.",
                        "Participants must report 15 minutes before the event starts.",
                        "Any form of tracing, plagiarism, or pre-made work will lead to disqualification.",
                        "The judges' decision will be final."
                    ]
                }
            },
            {
                id: 39,
                name: "Painting",
                image: paintingImg,
                description: "Paint your imagination",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/A5KTPpqh2VWrEq4H8",
                moreInfo: {
                    description: "Add life to your imagination with colors! Paint a composition that captures attention and emotion. Every brushstroke should express your creativity and command over color.",
                    rules: [
                        "Theme will be disclosed on the spot.",
                        "Allowed mediums: Watercolors, Poster Colors, or Acrylics.",
                        "Canvas size: A3.",
                        "Time limit: 2.5 hours.",
                        "Judging Criteria: Creativity, Color Harmony, Presentation, and Theme Depiction."
                    ],
                    youShouldBring: [
                        "Brushes, paints, palette, water container."
                    ],
                    providedByOrganizers: [
                        "Basic supplies and water for cleaning brushes."
                    ],
                    generalGuidelines: [
                        "Open to all students.",
                        "Individual participation only.",
                        "Participants must report 15 minutes before the event starts.",
                        "Any form of tracing, plagiarism, or pre-made work will lead to disqualification.",
                        "The judges' decision will be final."
                    ]
                }
            },
            {
                id: 40,
                name: "Sketching",
                image: sketchingImg,
                description: "Pencil artistry",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/DqEYPjXUg2RK8gPF6",
                moreInfo: {
                    description: "Let your pencils do the talking! Create expressive and detailed sketches on the given on-spot theme. Show your control, imagination, and technique through your lines and shading.",
                    rules: [
                        "The theme will be announced on the spot.",
                        "Only pencils, graphite, charcoal, or black pens may be used.",
                        "No pre-drawn outlines or tracing allowed.",
                        "Time limit: 2.5 hours.",
                        "Judging Criteria: Creativity, Technique, Neatness, and Relevance to Theme."
                    ],
                    youShouldBring: [
                        "Pencils, sharpeners, erasers, charcoal sticks, pens, and other drawing materials."
                    ],
                    providedByOrganizers: [
                        "Basic art supplies, A3 size drawing sheet."
                    ],
                    generalGuidelines: [
                        "Open to all students.",
                        "Individual participation only.",
                        "Participants must report 15 minutes before the event starts.",
                        "Any form of tracing, plagiarism, or pre-made work will lead to disqualification.",
                        "The judges' decision will be final."
                    ]
                }
            },
            {
                id: 41,
                name: "CD Crafting",
                image: cdCraftingImg,
                description: "Transform old CDs",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/kvaPxapcmiKksAK47",
                moreInfo: {
                    description: "Transform old CDs into something artistic! Use colors, textures, and decorative elements to create unique pieces of art. Show how creativity can give a new life to everyday materials.",
                    rules: [
                        "The theme will be announced on the spot.",
                        "Only on-the-spot creations are allowed (no pre-made work).",
                        "Individual participation only.",
                        "Time limit: 1.5 hours.",
                        "Judging Criteria: Originality, Creativity, Neatness, and Overall Appeal."
                    ],
                    youShouldBring: [
                        "Paints, brushes, markers, decorative items (beads, mirrors, lace, etc.), glue, scissors, and any small craft supplies you prefer."
                    ],
                    providedByOrganizers: [
                        "Basic supplies, waste cloths/newspaper for table covering, and water."
                    ],
                    generalGuidelines: [
                        "Open to all students.",
                        "Individual participation only.",
                        "Participants must report 15 minutes before the event starts.",
                        "Any form of tracing, plagiarism, or pre-made work will lead to disqualification.",
                        "The judges' decision will be final."
                    ]
                }
            },
            {
                id: 42,
                name: "Open Mic",
                image: openMicImg,
                description: "Express yourself",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/LKd3Gm1KiPN1bCjX8",
                moreInfo: {
                    title: "Open Mic Event",
                    eligibility: [
                        "Eligibility",
                        "Participation is open to students from all colleges/institutions.",
                        "Individual entries only."
                    ],
                    registration: [
                        "Registration",
                        "Participants must register before the event.",
                        "Spot entries may be allowed subject to time availability."
                    ],
                    performanceGuidelines: [
                        "Performance Guidelines",
                        "Any literary act is allowed – poem, song, shayari, stand-up, or storytelling.",
                        "Performances can be in Hindi, English, or Punjabi.",
                        "Maximum performance time is 4 minutes.",
                        "Use of derogatory, offensive, or obscene language is strictly prohibited."
                    ],
                    technicalRequirements: [
                        "Technical Requirements",
                        "Basic mic and sound system will be provided.",
                        "Stage setup/clearance must be done promptly."
                    ],
                    conduct: [
                        "Conduct & Discipline",
                        "Participants must report at the venue at least 30 minutes before the event.",
                        "Maintain respect and decorum throughout the event – no interruptions or disrespectful behaviour.",
                        "Any act of indiscipline or violation of rules will lead to disqualification.",
                        "The decision of the organizing committee shall be final and binding"
                    ]
                }
            },
            {
                id: 43,
                name: "Story Writing",
                image: storyWritingImg,
                description: "Craft compelling stories",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/27CJPkX4bApeR9J76",
                moreInfo: {
                    title: "Story Writing Competition",
                    eligibility: [
                        "1. Eligibility",
                        "• Participation is open to students from all colleges/institutions.",
                        "• Individual entries only."
                    ],
                    registration: [
                        "2. Registration",
                        "• Participants must register before the event through the provided form or link.",
                        "• Late or spot entries may be considered only if time and schedule permit."
                    ],
                    theme: [
                        "3. Topic & Theme",
                        "• Participants must write their story based on the given theme within the allotted time.",
                        "• The topic or theme for the story will be announced at the time of the competition or prior to submission.",
                        "• Stories must adhere strictly to the given theme/topic."
                    ],
                    guidelines: [
                        "4. Story Guidelines",
                        "• The story must be written on paper provided at the venue.",
                        "• Time limit: 1 hour for on-spot writing.",
                        "• Language: English or Hindi",
                        "• Word limit (recommended): 800 to 1200 words.",
                        "• The content must be original and self-written during the event.",
                        "• Use of offensive or inappropriate content is prohibited."
                    ],
                    judgingCriteria: [
                        "6. Judgement Criteria",
                        "Stories will be evaluated based on:",
                        "• Creativity and originality",
                        "• Plot development and coherence",
                        "• Language, grammar, and writing style",
                        "• Emotional impact and message"
                    ],
                    timeLimit: [
                        "7. Time Limit",
                        "• Total writing time: 1 hour.",
                        "• Participants must finish and submit within the allotted time.",
                        "• Late submissions will not be accepted."
                    ],
                    conduct: [
                        "8. Conduct & Discipline",
                        "• No electronic devices or reference materials are allowed.",
                        "• Participants must maintain decorum and abide by instructions provided by organizers.",
                        "• Any form of plagiarism or misbehavior will result in disqualification.",
                        "• The decision of the judging panel/organizing committee will be final and binding."
                    ]
                }
            },
            {
                id: 44,
                name: "Debate",
                image: debateImg,
                description: "Moot court competition",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/vaRqTkGXhqWTqTTL7",
                moreInfo: {
                    title: "⚖️ Apostle of Speech presents: Moot Court 2025",
                    tagline: "\"Argue. Defend. Convince.\"",
                    eventOverview: [
                        "🛐 1. Event Overview",
                        "Moot Court is a simulated court proceeding where participants argue on given legal cases.",
                        "Each team will represent either the Prosecution or the Defence and will argue their side before a panel of judges."
                    ],
                    teamComposition: [
                        "👥 2. Team Composition",
                        "Each team must consist of 3 members.",
                        "Roles can be divided as:",
                        "Speaker 1: Opening arguments",
                        "Speaker 2: Counterarguments and rebuttals",
                        "Speaker 3: Closing statements and summary",
                        "Teams are expected to coordinate their arguments cohesively."
                    ],
                    caseAllocation: [
                        "📚 3. Case Allocation",
                        "Cases will be assigned beforehand to allow preparation. (Prep time TBA)",
                        "Teams will be informed whether they represent the Prosecution or the Defence.",
                        "Each team must prepare written notes or a short submission (if required by judges)."
                    ],
                    timeStructure: [
                        "⏱️ 4. Time Structure",
                        "Each round will follow this structure:",
                        "Opening Statement (Speaker 1): 4 minutes",
                        "Rebuttals (Speaker 2): 4 minutes",
                        "Closing Statement (Speaker 3): 3 minutes",
                        "Judges' Questions: 2 minutes",
                        "(Extra time will result in negative marking)"
                    ],
                    rulesOfConduct: [
                        "⚔️ 5. Rules of Conduct",
                        "Respect the opposing side and the judges at all times.",
                        "No interruptions during a speaker's allocated time.",
                        "Only factual and logical arguments are encouraged – personal attacks or unrelated content will lead to disqualification.",
                        "The use of AI-generated content is strictly prohibited."
                    ],
                    judgingCriteria: [
                        "🧑‍⚖️ 6. Judging Criteria",
                        "Teams will be evaluated on:",
                        "Criteria\tMarks",
                        "Clarity and Structure of Argument\t20",
                        "Legal Reasoning and Evidence\t20",
                        "Rebuttals and Counterarguments\t20",
                        "Team Coordination\t20",
                        "Presentation and Confidence\t20",
                        "Total: 100 Marks"
                    ],
                    outcome: [
                        "🏆 7. Outcome",
                        "The team with the highest score wins the round.",
                        "Judges' decision will be final and binding."
                    ]
                }
            },
            {
                id: 45,
                name: "Murder Mystery",
                image: murderMysteryImg,
                description: "Solve the mystery",
                hasRegistration: true,
                registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSerk21ZOhI24oPxJzEAVzJHM3cPgFSLx4NgnxRoLn9g1P9tpw/viewform",
                moreInfo: {
                    description: "To ensure a fair and engaging experience for all participants, please review and adhere to the following rules and guidelines for the Murder Mystery event.",
                    teamComposition: [
                        "1. Team Composition",
                        "Each team must consist of exactly three (3) members.",
                        "All participants must be currently enrolled college students and must present a valid student ID at the time of registration or check-in.",
                        "Teams are required to register in advance through the official registration form.",
                        "On-the-spot registrations may be permitted subject to time and slot availability; however, participants are strongly encouraged to register beforehand to confirm their participation."
                    ],
                    conduct: [
                        "2. Conduct and Fair Play",
                        "Participants are expected to maintain professionalism, decorum, and respect throughout the event.",
                        "The use of mobile phones, the internet, or any external assistance during the investigation is strictly prohibited.",
                        "Teams must rely solely on the information and materials provided by the organizers.",
                        "Any form of misconduct, disturbance, or unfair practice will result in disqualification."
                    ],
                    eventProcedure: [
                        "3. Event Procedure",
                        "Each team will receive a case file containing clues, witness statements, evidence, and other relevant materials.",
                        "Teams must carefully analyze the provided information to identify the culprit, motive, and method within the given time limit.",
                        "All conclusions must be submitted in the format and manner specified by the event coordinators.",
                        "Decisions and instructions from the event organizers must be followed at all times."
                    ],
                    evaluation: [
                        "4. Evaluation and Results",
                        "Teams will be evaluated based on the accuracy, logic, and clarity of their case solution.",
                        "In case of a tie, the timeliness of submission and the quality of reasoning will be considered.",
                        "The decision of the organizing committee will be final and binding."
                    ],
                    generalGuidelines: [
                        "5. General Guidelines",
                        "Participants are required to arrive on time and adhere to the event schedule.",
                        "Teams are encouraged to maintain a formal or semi-formal dress code appropriate for a college event.",
                        "The organizers reserve the right to amend rules, modify schedules, or disqualify participants in case of violations or unforeseen circumstances."
                    ]
                }
            },
            {
                id: 46,
                name: "Console Showdown",
                image: consoleShowdownImg,
                description: "Gaming competition",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/8ry1XCGzM22vUAPT7",
                moreInfo: {
                    description: "A high-intensity face-off featuring competitive console titles where players fight for dominance and reputation.",
                    gameLineup: [
                        "🎮 Game Lineup",
                        "Tekken 8 – 1v1 Knockout Battles",
                        "WWE 2K24 – 1v1 & Tag Team (2v2) Matches",
                        "Call of Duty: Black Ops – 1v1 Duels & FFA (Free for All)"
                    ],
                    rules: [
                        "🕹 Rules & Guidelines",
                        "Each participant must register through the official Google Form before the deadline.",
                        "Players can compete in multiple games (each registered separately).",
                        "All matches will follow a knockout format unless stated otherwise.",
                        "Players must report 15–30 minutes before their scheduled match time.",
                        "Only official, unmodified game settings are allowed – no mods or cheats.",
                        "Button mapping can be customized before the match starts.",
                        "Matches will be Best of 3 rounds (Final = Best of 5).",
                        "Unsportsmanlike behavior, arguing with referees, or equipment tampering = disqualification.",
                        "Players may bring their own controller or keyboard (if compatible).",
                        "Arcade sticks are strictly prohibited for Tekken.",
                        "If a personal device malfunctions, players must continue using club-provided equipment.",
                        "Organizers' decision will be final and binding in all disputes"
                    ],
                    generalRules: [
                        "GENERAL RULES",
                        "All participants must bring valid College ID cards.",
                        "Registration fees are non-refundable.",
                        "Late arrivals may lead to match forfeiture.",
                        "The event schedule will be posted in the official WhatsApp community.",
                        "Respect referees, organizers, and fellow players at all times.",
                        "Toxicity, hate speech, or harassment = instant disqualification.",
                        "Participants are responsible for their own devices and belongings.",
                        "Organizers reserve the right to alter rules, formats, or timing as needed.",
                        "All match results and organizer decisions are final"
                    ],
                    specialNotes: [
                        "🧾 Special Notes",
                        "Players may bring their own controllers or keyboards (must be compatible).",
                        "Arcade sticks are banned for Tekken.",
                        "Club-provided controllers will be available for general use."
                    ],
                    codeOfConduct: [
                        "Code of Conduct",
                        "Maintain sportsmanlike behavior on and off the stage.",
                        "Avoid toxic, rude, or disrespectful communication.",
                        "Follow all staff directions during setup and gameplay.",
                        "Misbehavior may result in disqualification or campus restrictions."
                    ]
                }
            },
            {
                id: 47,
                name: "Pocket Wars",
                image: pocketWarsImg,
                description: "Mobile gaming event",
                hasRegistration: true,
                registrationUrl: "https://forms.gle/8ry1XCGzM22vUAPT7",
                moreInfo: {
                    description: "A competitive mobile and casual gaming event for both hardcore and fun gamers.",
                    gameLineup: [
                        "🎮 Game Lineup",
                        "BGMI (Battlegrounds Mobile India) – Custom Lobby Matches",
                        "COD Mobile – TDM (Team Deathmatch) Only",
                        "Mario Kart (Mobile/Switch) – Multiplayer Races (up to 8 players)"
                    ],
                    rules: [
                        "Rules & Guidelines",
                        "Team registration is mandatory for squad-based games (max 4 players per team).",
                        "All teams/players must register through the official Google Form.",
                        "Team leaders must submit in-game IDs and contact info at registration.",
                        "Players must use their own mobile devices (phones/tablets).",
                        "Internet or ping issues are the player's responsibility – matches won't be paused or replayed.",
                        "Any form of hacks, emulators, or third-party tools = instant disqualification.",
                        "BGMI matches will be held in Custom Classic – Erangel (TPP) format.",
                        "CODM matches will be Team Deathmatch (TDM) only.",
                        "Mario Kart races will feature multiplayer tracks; cumulative points decide winners.",
                        "Teams/players must join their lobbies on time – late entries won't be allowed.",
                        "Finalists will be determined based on points + kills + placement (as applicable)."
                    ],
                    generalRules: [
                        "⚡ GENERAL RULES",
                        "All participants must bring valid College ID cards.",
                        "Registration fees are non-refundable.",
                        "Late arrivals may lead to match forfeiture.",
                        "The event schedule will be posted in the official WhatsApp community.",
                        "Respect referees, organizers, and fellow players at all times.",
                        "Toxicity, hate speech, or harassment = instant disqualification.",
                        "Participants are responsible for their own devices and belongings.",
                        "Organizers reserve the right to alter rules, formats, or timing as needed.",
                        "All match results and organizer decisions are final."
                    ],
                    codeOfConduct: [
                        "Code of Conduct",
                        "Maintain sportsmanlike behavior on and off the stage.",
                        "Avoid toxic, rude, or disrespectful communication.",
                        "Follow all staff directions during setup and gameplay.",
                        "Misbehavior may result in disqualification or campus restrictions."
                    ]
                }
            }
        ]
    };

    return (
        <div className={styles.app} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className={styles.homeSection}>
                <div className={styles.homeContent}>
                    <h1 className={styles.mainTitle}>EVENTS</h1>

                    {/* Registration Info under main heading */}
                    <div className={styles.homeRegistrationInfo}>
                        <div className={styles.homeRegTextWrapper}>
                            <img src={appLogo} alt="Fest Connect App" className={styles.homeAppLogo} />
                            <p className={styles.homeRegisterText}>
                                To Register for events download the Fest Connect
                            </p>
                        </div>
                        <div className={styles.homeAppIcons}>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.festconnect.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.homeIconLink}
                            >
                                <svg className={styles.homeIcon} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                <span className={styles.homeIconText}>Download for Android</span>
                            </a>
                            <a
                                href="https://apps.apple.com/in/app/fest-connect/id6751292964"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.homeIconLink}
                            >
                                <svg className={styles.homeIcon} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                </svg>
                                <span className={styles.homeIconText}>Download for iOS</span>
                            </a>
                        </div>
                    </div>

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
                                    {selectedEvent.moreInfo.objective && (
                                        <p>{selectedEvent.moreInfo.objective}</p>
                                    )}
                                    {selectedEvent.moreInfo.eventOverview && (
                                        <>
                                            <h3>Event Overview:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.eventOverview.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
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
                                    {selectedEvent.moreInfo.judgingCriteria && (
                                        <>
                                            <h3>Judging Criteria:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.judgingCriteria.map((item, i) => (
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
                                    {selectedEvent.moreInfo.additionalInfo && (
                                        <>
                                            <h3>Additional Information:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.additionalInfo.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.gameplay && (
                                        <>
                                            <h3>Gameplay:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.gameplay.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.botSpecifications && (
                                        <>
                                            <h3>Bot Specifications:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.botSpecifications.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.generalRules && (
                                        <>
                                            <h3>General Rules:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.generalRules.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.scoring && (
                                        <>
                                            <h3>Scoring:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.scoring.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.basicRules && (
                                        <>
                                            <h3>Basic Rules:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.basicRules.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.winningCriteria && (
                                        <>
                                            <h3>Winning Criteria:</h3>
                                            <p>{selectedEvent.moreInfo.winningCriteria}</p>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.rounds && (
                                        <>
                                            <h3>Rounds:</h3>
                                            {selectedEvent.moreInfo.rounds.map((round, i) => (
                                                <div key={i}>
                                                    <h4>{round.name}</h4>
                                                    <ul>
                                                        {round.details.map((detail, j) => (
                                                            <li key={j} style={{ '--li-index': j }}>{detail}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.eligibility && (
                                        <>
                                            <h3>Eligibility:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.eligibility.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.registration && (
                                        <>
                                            <h3>Registration:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.registration.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.performanceGuidelines && (
                                        <>
                                            <h3>Performance Guidelines:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.performanceGuidelines.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.technicalRequirements && (
                                        <>
                                            <h3>Technical Requirements:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.technicalRequirements.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.conduct && (
                                        <>
                                            <h3>Conduct:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.conduct.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.propAllotment && (
                                        <>
                                            <h3>Prop Allotment:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.propAllotment.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.competitionFormat && (
                                        <>
                                            <h3>Competition Format:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.competitionFormat.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.fourRounds && (
                                        <>
                                            <h3>The Four Rounds:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.fourRounds.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.eventRules && (
                                        <>
                                            <h3>Event Rules:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.eventRules.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.submissionGuidelines && (
                                        <>
                                            <h3>Submission Guidelines:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.submissionGuidelines.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.editingRules && (
                                        <>
                                            <h3>Editing Rules:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.editingRules.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.judgingResults && (
                                        <>
                                            <h3>Judging & Results:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.judgingResults.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.filmGuidelines && (
                                        <>
                                            <h3>Film Guidelines:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.filmGuidelines.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.technicalSpecifications && (
                                        <>
                                            <h3>Technical Specifications:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.technicalSpecifications.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.conductEvaluation && (
                                        <>
                                            <h3>Conduct & Evaluation:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.conductEvaluation.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.disqualification && (
                                        <>
                                            <h3>Grounds for Disqualification:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.disqualification.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.note && (
                                        <>
                                            <h3>Note:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.note.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.evaluationCriteria && (
                                        <>
                                            <h3>Evaluation Criteria:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.evaluationCriteria.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.youShouldBring && (
                                        <>
                                            <h3>You Should Bring:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.youShouldBring.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.providedByOrganizers && (
                                        <>
                                            <h3>Provided by Organizers:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.providedByOrganizers.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.generalGuidelines && (
                                        <>
                                            <h3>General Guidelines:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.generalGuidelines.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.theme && (
                                        <>
                                            <h3>Topic & Theme:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.theme.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.guidelines && (
                                        <>
                                            <h3>Guidelines:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.guidelines.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.timeLimit && (
                                        <>
                                            <h3>Time Limit:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.timeLimit.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.teamComposition && (
                                        <>
                                            <h3>Team Composition:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.teamComposition.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.eventProcedure && (
                                        <>
                                            <h3>Event Procedure:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.eventProcedure.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.evaluation && (
                                        <>
                                            <h3>Evaluation and Results:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.evaluation.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.gameLineup && (
                                        <>
                                            <h3>Game Lineup:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.gameLineup.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.specialNotes && (
                                        <>
                                            <h3>Special Notes:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.specialNotes.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.codeOfConduct && (
                                        <>
                                            <h3>Code of Conduct:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.codeOfConduct.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.caseAllocation && (
                                        <>
                                            <h3>Case Allocation:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.caseAllocation.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.timeStructure && (
                                        <>
                                            <h3>Time Structure:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.timeStructure.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.rulesOfConduct && (
                                        <>
                                            <h3>Rules of Conduct:</h3>
                                            <ul>
                                                {selectedEvent.moreInfo.rulesOfConduct.map((item, i) => (
                                                    <li key={i} style={{ '--li-index': i }}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {selectedEvent.moreInfo.organizedBy && (
                                        <p><strong>Organized by:</strong> {selectedEvent.moreInfo.organizedBy}</p>
                                    )}
                                    {selectedEvent.moreInfo.under && (
                                        <p><strong>Under:</strong> {selectedEvent.moreInfo.under}</p>
                                    )}
                                    {selectedEvent.moreInfo.eventUnder && (
                                        <p><strong>Under:</strong> {selectedEvent.moreInfo.eventUnder}</p>
                                    )}
                                    {selectedEvent.moreInfo.venue && (
                                        <p><strong>Venue:</strong> {selectedEvent.moreInfo.venue}</p>
                                    )}
                                    {selectedEvent.moreInfo.title && (
                                        <h3>{selectedEvent.moreInfo.title}</h3>
                                    )}
                                    {selectedEvent.moreInfo.tagline && (
                                        <p><strong>{selectedEvent.moreInfo.tagline}</strong></p>
                                    )}
                                    {selectedEvent.moreInfo.duration && (
                                        <p><strong>Duration:</strong> {selectedEvent.moreInfo.duration}</p>
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