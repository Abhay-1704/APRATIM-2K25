import React, { useState } from 'react';

// Import all images
import bgImage from '../../assets/Home/bg.webp';
import img1 from '../../assets/Schedule/1.webp';
import img2 from '../../assets/Schedule/2.webp';
import img3 from '../../assets/Schedule/3.webp';
import img4 from '../../assets/Schedule/4.webp';
import img5 from '../../assets/Schedule/5.webp';
import img6 from '../../assets/Schedule/6.webp';
import img7 from '../../assets/Schedule/7.webp';
import img8 from '../../assets/Schedule/8.webp';
import img9 from '../../assets/Schedule/9.webp';
import img10 from '../../assets/Schedule/10.webp';
import img11 from '../../assets/Schedule/11.webp';
import img12 from '../../assets/Schedule/12.webp';
import img13 from '../../assets/Schedule/13.webp';
import img14 from '../../assets/Schedule/14.webp';
import img15 from '../../assets/Schedule/15.webp';
import img16 from '../../assets/Schedule/16.webp';
import img17 from '../../assets/Schedule/17.webp';
import img18 from '../../assets/Schedule/18.webp';
import img19 from '../../assets/Schedule/19.webp';
import img20 from '../../assets/Schedule/20.webp';
import img21 from '../../assets/Schedule/21.webp';
import img22 from '../../assets/Schedule/22.webp';
import img23 from '../../assets/Schedule/23.webp';
import img24 from '../../assets/Schedule/24.webp';
import img25 from '../../assets/Schedule/25.webp';
import img26 from '../../assets/Schedule/26.webp';
import img27 from '../../assets/Schedule/27.webp';
import img28 from '../../assets/Schedule/28.webp';
import img29 from '../../assets/Schedule/29.webp';
import img30 from '../../assets/Schedule/30.webp';
import img31 from '../../assets/Schedule/31.webp';
import img32 from '../../assets/Schedule/32.webp';
import img33 from '../../assets/Schedule/33.webp';
import img34 from '../../assets/Schedule/34.webp';
import img35 from '../../assets/Schedule/35.webp';
import img36 from '../../assets/Schedule/36.webp';
import img37 from '../../assets/Schedule/37.webp';
import img38 from '../../assets/Schedule/38.webp';
import img39 from '../../assets/Schedule/39.webp';
import img40 from '../../assets/Schedule/40.webp';
import img41 from '../../assets/Schedule/41.webp';
import img42 from '../../assets/Schedule/42.webp';
import img43 from '../../assets/Schedule/43.webp';
import img44 from '../../assets/Schedule/44.webp';
import img45 from '../../assets/Schedule/45.webp';
import img46 from '../../assets/Schedule/46.webp';
import img47 from '../../assets/Schedule/47.webp';
import img48 from '../../assets/Schedule/48.webp';
import img49 from '../../assets/Schedule/49.webp';
import img50 from '../../assets/Schedule/50.webp';
import img51 from '../../assets/Schedule/51.webp';
import img52 from '../../assets/Schedule/52.webp';
import img53 from '../../assets/Schedule/53.webp';
import img54 from '../../assets/Schedule/54.webp';
import img55 from '../../assets/Schedule/55.webp';
import img56 from '../../assets/Schedule/56.webp';
import img57 from '../../assets/Schedule/57.webp';
import img58 from '../../assets/Schedule/58.webp';
import img59 from '../../assets/Schedule/59.webp';
import img60 from '../../assets/Schedule/60.webp';
import img61 from '../../assets/Schedule/61.webp';
import img63 from '../../assets/Schedule/63.webp';
import img64 from '../../assets/Schedule/64.webp';
import img65 from '../../assets/Schedule/65.webp';

const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Event data based on APRATIM'25 schedule
  const events = {
    1: [
      // Inauguration Ceremony (Day 1)
      {
        id: 1,
        time: '10:30 am',
        title: 'Chief Guest Arrival',
        place: 'Block A Entrance',
        image: img1,
        category: 'inauguration'
      },
      {
        id: 2,
        time: '10:30 am - 10:35 am',
        title: 'Floral Welcome + Releasing Helium balloons',
        place: 'Block A Entrance',
        image: img2,
        category: 'inauguration'
      },
      {
        id: 3,
        time: '10:35 am - 10:40 am',
        title: 'Welcome Lamp Lighting',
        place: 'Main Stage',
        image: img3,
        category: 'inauguration'
      },
      {
        id: 4,
        time: '10:40 am - 10:45 am',
        title: 'Saraswati Vandana by Beatles Club',
        place: 'Main Stage',
        image: img4,
        category: 'inauguration'
      },
      {
        id: 5,
        time: '10:45 am - 10:50 am',
        title: 'Welcome Address by Principal, CCET, Degree Wing ',
        place: 'Main Stage',
        image: img5,
        category: 'inauguration'
      },
      {
        id: 6,
        time: '10:50am - 10:55 am',
        title: 'Overview of APRATIM\'25(Coordinator of APRATIM\'2025)',
        place: 'Main Stage',
        image: img64,
        category:'inauguration'
      },
      {
        id: 7,
        time: '10:55 am - 11:05 am',
        title: 'Speech of Honorable Chief Guest',
        place: 'Main Stage',
        image: img65,
        category:'inauguration'
      },
      {
        id: 8,
        time: '11:05 am - 11:15 am',
        title: 'Performance of Dram-e-Baz (Skit on Anti-Drug)',
        place: 'Main Stage',
        image: img6,
        category: 'inauguration'
      },
      {
        id: 9,
        time: '11:15 am - 11:25 am',
        title: 'Performance of PNB Club (Bhangra Punjabi Folk Dance)',
        place: 'Main Stage',
        image: img7,
        category: 'inauguration'
      },
      {
        id: 10,
        time: '11:25 am - 11:30 am',
        title: 'National Anthem',
        place: 'Main Stage',
        image: img8,
        category: 'inauguration'
      },
      // Cultural Events (Day 1)
      {
        id: 11,
        time: '10:30AM - 1:30PM',
        title: 'Painting Competition',
        club: 'ARTSTRONG',
        place: 'LH2 A-BLOCK',
        image: img9,
        category: 'cultural'
      },
      {
        id: 12,
        time: '11:00AM onwards',
        title: 'Photography Competition',
        club: 'ACHINTYAM',
        place: 'Online',
        image: img10,
        category: 'cultural'
      },
      {
        id: 13,
        time: '11:00AM onwards',
        title: 'Videography Competition',
        club: 'ACHINTYAM',
        place: 'Online',
        image: img11,
        category: 'cultural'
      },
      {
        id:14,
        time: 'ONLINE',
        title: 'Mashoori-Nautanki Poori',
        club: 'DRAMEBAAZ',
        place: 'ONLINE',
        image: img63,
        category: 'cultural'
      },
      {
        id: 15,
        time: '11:30AM - 12:30PM',
        title: 'Insta Act',
        club: 'DRAMEBAAZ',
        place: 'Main Stage',
        image: img12,
        category: 'cultural'
      },
      {
        id: 16,
        time: '11:30AM - 1:30PM',
        title: 'Open Mic',
        club: 'AOS',
        place: 'Fun Stage',
        image: img13,
        category: 'cultural'
      },
      {
        id: 17,
        time: '12:00PM onwards',
        title: 'Console Showdown',
        club: 'E SPORTS',
        place: 'Block A- Computer centre(cchall)',
        image: img14,
        category: 'cultural'
      },
      {
        id: 18,
        time: '12:30PM - 13:30PM',
        title: 'Story Writing',
        club: 'AOS',
        place: 'LH A Block',
        image: img15,
        category: 'cultural'
      },
      {
        id: 19,
        time: '1:00PM onwards',
        title: 'Nukkad Natok',
        club: 'DRAMEBAAZ',
        place: 'Main Stage',
        image: img16,
        category: 'cultural'
      },
      {
        id: 20,
        time: '1:30PM - 2:30PM',
        title: 'Duet Dance',
        club: 'BEATLES',
        place: 'Main Stage',
        image: img17,
        category: 'cultural'
      },
      {
        id: 21,
        time: '1:30PM - 3:00PM',
        title: 'Solo Instrumental',
        club: '7NOTES',
        place: 'Fun Stage',
        image: img18,
        category: 'cultural'
      },
      {
        id: 22,
        time: '2:30PM - 4:30PM',
        title: 'Solo Singing',
        club: '7NOTES',
        place: 'Main Stage',
        image: img19,
        category: 'cultural'
      },
      {
        id: 23,
        time: '2:30PM - 4:00PM',
        title: 'Custom Art Competition',
        club: 'ARTSTRONG',
        place: 'PAT-SHALA',
        image: img20,
        category: 'cultural'
      },
      {
        id: 24,
        time: '3:00AM - 4:00PM',
        title: 'Prop Hustle',
        club: 'BEATLES',
        place: 'Fun Stage',
        image: img21,
        category: 'cultural'
      },
      {
        id: 25,
        time: '4:30PM - 6:30PM',
        title: 'Punjabi Folk Dance Competition',
        club: 'PBN',
        place: 'Main Stage',
        image: img22,
        category: 'cultural'
      },
      {
        id: 26,
        time: '6:30 PM onwards',
        title: 'DJ Night',
        club: 'DJ',
        place: 'Main Stage',
        image: img23,
        category: 'cultural'
      },
      // Technical Events (Day 1)
      {
        id: 27,
        time: '9:30 am - 5:30 pm',
        title: 'Hack Sprint',
        club: 'ACM',
        place: 'Room 2S Block A',
        image: img24,
        category: 'technical'
      },
      {
        id: 28,
        time: '10:00 am - 12:00 pm',
        title: 'Bridge It',
        club: 'CMQ',
        place: 'GIS Room No 401 Block B',
        image: img25,
        category: 'technical'
      },
      {
        id: 29,
        time: '10:30 am - 11:30 pm',
        title: 'Line Follower',
        club: 'Robonox',
        place: 'Student Activity Centre Block A',
        image: img26,
        category: 'technical'
      },
      {
        id: 30,
        time: '10:30 am - 12:00 pm',
        title: 'Quizathon',
        club: 'ACM',
        place: 'Room 407 Block A',
        image: img27,
        category: 'technical'
      },
      {
        id: 31,
        time: '11:00 am - 12:00 pm',
        title: 'Robo Soccer',
        club: 'Robonox',
        place: 'Student Activity Centre Block A',
        image: img28,
        category: 'technical'
      },
      {
        id: 32,
        time: '11:00 am - 1:00 pm',
        title: 'Flight Fest',
        club: 'ASME',
        place: 'E Block 1st Floor',
        image: img29,
        category: 'technical'
      },
      {
        id: 33,
        time: '2:00 pm - 4:00 pm',
        title: 'CAD Combat',
        club: 'ASME',
        place: 'CAD Lab - 2 Block B',
        image: img30,
        category: 'technical'
      },
      {
        id: 34,
        time: '2:30 pm - 4:30 pm',
        title: 'Design Scope',
        club: 'ACM',
        place: 'Room 407 Block A',
        image: img31,
        category: 'technical'
      },
      {
        id: 35,
        time: '3:00 pm - 5:00 pm',
        title: 'Hold up Blocks',
        club: 'CMQ',
        place: 'CAD Lab - Room 3B Block B',
        image: img32,
        category: 'technical'
      },
      {
        id: 36,
        time: '4:00 pm - 5:00 pm',
        title: 'Competitive Programming',
        club: 'ACM',
        place: 'Room 407 Block A',
        image: img33,
        category: 'technical'
      }
    ],
    2: [
      // Technical Events (Day 2)
      {
        id: 37,
        time: '10:00 AM - 12:00 PM',
        title: 'Bob The Builder',
        club: 'CMQ',
        place: 'CAD Lab - Room 3B BLOCK B',
        image: img34,
        category: 'technical'
      },
      {
        id: 38,
        time: '11:00 AM - 01:00 PM',
        title: 'Skyspray Challenge',
        club: 'ASME',
        place: 'Construction Testing with Parking Ground LH-2',
        image: img35,
        category: 'technical'
      },
      {
        id: 39,
        time: '11:30 AM - 02:00 PM',
        title: 'Autonomous Catapult',
        club: 'Robonox',
        place: 'Block E Ground Floor',
        image: img36,
        category: 'technical'
      },
      {
        id: 40,
        time: '02:00 PM - 04:00 PM',
        title: 'Goldberg',
        club: 'ASME',
        place: 'Patshala Block A',
        image: img37,
        category: 'technical'
      },
      {
        id: 41,
        time: '02:00 PM - 05:00 PM',
        title: 'Treasure Hunt',
        club: 'CMQ',
        place: 'CAD Lab - Room 3B BLOCK B',
        image: img38,
        category: 'technical'
      },
      {
        id: 42,
        time: '04:00 PM - 05:00 PM',
        title: 'RC Obstacle Race',
        club: 'Robonox',
        place: 'Patshala Block A',
        image: img39,
        category: 'technical'
      },
      // Cultural Events (Day 2)
      {
        id: 43,
        time: '10:30AM - 12:30PM',
        title: 'Debate',
        club: 'AOS',
        place: 'Seminar Hall C Block',
        image: img40,
        category: 'cultural'
      },
      {
        id: 44,
        time: '10:30AM - 1:30PM',
        title: 'Sketching Competition',
        club: 'ARTSTRONG',
        place: 'LH2 Block',
        image: img41,
        category: 'cultural'
      },
      {
        id: 45,
        time: '11:30AM onwards',
        title: 'Pocket Wars',
        club: 'E SPORTS',
        place: 'Block A-Computer centre(cchall)',
        image: img42,
        category: 'cultural'
      },
      {
        id: 46,
        time: '12:00PM - 1:00PM',
        title: 'Monologue',
        club: 'DRAMEBAAZ',
        place: 'Fun Stage',
        image: img43,
        category: 'cultural'
      },
      {
        id: 47,
        time: '12:00PM - 1:30PM',
        title: 'Photo Hunt',
        club: 'ACHINTYAM',
        place: 'Infront of Block C/A',
        image: img44,
        category: 'cultural'
      },
      {
        id: 48,
        time: '12:30PM - 1:30PM',
        title: 'Catch The Hook',
        club: 'BEATLES',
        place: 'Fun Stage',
        image: img45,
        category: 'cultural'
      },
      {
        id: 49,
        time: '12:30PM - 2:00PM',
        title: 'Group Singing',
        club: '7NOTES',
        place: 'Main Stage',
        image: img46,
        category: 'cultural'
      },
      {
        id: 50,
        time: '1:30PM - 3:30PM',
        title: 'Murder Mystery',
        club: 'AOS',
        place: 'EG Hall A Block',
        image: img47,
        category: 'cultural'
      },
      {
        id: 51,
        time: '2:00PM - 3:00PM',
        title: 'Iska Topi Uska Sar',
        club: 'DRAMEBAAZ',
        place: 'Main Stage',
        image: img48,
        category: 'cultural'
      },
      {
        id: 52,
        time: '2:30PM onwards',
        title: 'Photo Essay Competition',
        club: 'ACHINTYAM',
        place: 'Seminar Hall C Block',
        image: img49,
        category: 'cultural'
      },
      {
        id: 53,
        time: '2:30PM - 4:30PM',
        title: 'CD Crafting Competition',
        club: 'ARTSTRONG',
        place: 'LH 1A BLOCK',
        image: img50,
        category: 'cultural'
      },
      {
        id: 54,
        time: '3:00PM - 4:00PM',
        title: 'Group Dance',
        club: 'BEATLES',
        place: 'Main Stage',
        image: img51,
        category: 'cultural'
      },
      {
        id: 55,
        time: '4:00PM - 5:30PM',
        title: 'Fusion Band',
        club: '7NOTES',
        place: 'Main Stage',
        image: img52,
        category: 'cultural'
      },
      {
        id: 56,
        time: '6:00PM - 7:00PM',
        title: 'Mr. & Ms. Apratim',
        club: 'SYMPHONY',
        place: 'Main Stage',
        image: img53,
        category: 'cultural'
      },
      {
        id: 57,
        time: '6:00PM - 7:00PM',
        title: 'CCET Fashion Icon(Man & Women)',
        club: 'SYMPHONY',
        place: 'Main Stage',
        image: img54,
        category: 'cultural'
      },
      {
        id: 58,
        time: '7:00 PM onwards',
        title: 'DJ Night',
        club: 'DJ',
        place: 'Main Stage',
        image: img55,
        category: 'cultural'
      },
      // Valedictory Ceremony (Day 2)
      {
        id: 59,
        time: '4:00 pm - 4:05 pm',
        title: 'Valedictory Speech',
        place: 'Main Stage',
        image: img56,
        category: 'valedictory'
      },
      {
        id: 60,
        time: '4:05 pm - 4:25 pm',
        title: 'APRATIM\'25 Cultural Event winners',
        place: 'Main Stage',
        image: img57,
        category: 'valedictory'
      },
      {
        id: 61,
        time: '4:25 pm - 4:45 pm',
        title: 'APRATIM\'25 Technical Event winners',
        place: 'Main Stage',
        image: img58,
        category: 'valedictory'
      },
      {
        id: 62,
        time: '4:45 pm - 5:10 pm',
        title: 'Felicitation Ceremony for Committee Heads (Faculty) APRATIM\'25',
        place: 'Main Stage',
        image: img59,
        category: 'valedictory'
      },
      {
        id: 63,
        time: '5:10 pm - 5:25 pm',
        title: 'Felicitation Ceremony for Students Core Committee APRATIM\'25',
        place: 'Main Stage',
        image: img60,
        category: 'valedictory'
      },
      {
        id: 64,
        time: '5:25 pm - 5:30 pm',
        title: 'Vote of thanks of APRATIM\'25',
        place: 'Main Stage',
        image: img61,
        category: 'valedictory'
      }
    ]
  };

  // Filter events by category for display
  const getFilteredEvents = () => {
    let dayEvents = events[selectedDay] || [];

    if (selectedCategory === 'all') {
      return dayEvents;
    }

    return dayEvents.filter(event => event.category === selectedCategory);
  };

  return (
      <div className="min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="p-4 min-h-screen bg-gradient-to-br from-indigo-900/80 via-purple-800/80 to-pink-700/80 md:p-8 animate__animated animate__fadeIn">
          <div className="mx-auto max-w-6xl">
            {/* Header with animation */}
            <header className="mt-6 mb-10 text-center animate__animated animate__fadeInDown">
              <h1 className="mb-3 font-serif text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 drop-shadow-2xl md:text-6xl">
                Schedule of APRATIM 2025
              </h1>
            </header>

            {/* Day Selector Buttons with hover effects */}
            <div className="flex flex-wrap gap-4 justify-center mb-8 animate__animated animate__fadeInUp">
              <button
                  onClick={() => {setSelectedDay(1); setSelectedCategory('all');}}
                  className={`px-6 py-3 rounded-full text-base font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl ${
                      selectedDay === 1
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                          : 'bg-white/20 text-white backdrop-blur-sm border-2 border-white/30 hover:bg-white/30'
                  }`}
              >
                Day 1 (29th Oct)
              </button>
              <button
                  onClick={() => {setSelectedDay(2); setSelectedCategory('all');}}
                  className={`px-6 py-3 rounded-full text-base font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl ${
                      selectedDay === 2
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                          : 'bg-white/20 text-white backdrop-blur-sm border-2 border-white/30 hover:bg-white/30'
                  }`}
              >
                Day 2 (30th Oct)
              </button>
            </div>

            {/* Category Selector Buttons with animations */}
            <div className="flex flex-wrap gap-3 justify-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
              <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === 'all'
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-400/40'
                          : 'bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30'
                  }`}
              >
                All Events
              </button>
              {selectedDay === 1 && (
                  <>
                    <button
                        onClick={() => setSelectedCategory('inauguration')}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                            selectedCategory === 'inauguration'
                                ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-lg shadow-emerald-400/40'
                                : 'bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30'
                        }`}
                    >
                      Opening Ceremony
                    </button>
                    <button
                        onClick={() => setSelectedCategory('cultural')}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                            selectedCategory === 'cultural'
                                ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-lg shadow-yellow-400/40'
                                : 'bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30'
                        }`}
                    >
                      Cultural Events
                    </button>
                    <button
                        onClick={() => setSelectedCategory('technical')}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                            selectedCategory === 'technical'
                                ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/40'
                                : 'bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30'
                        }`}
                    >
                      Technical Events
                    </button>
                  </>
              )}
              {selectedDay === 2 && (
                  <>
                    <button
                        onClick={() => setSelectedCategory('cultural')}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                            selectedCategory === 'cultural'
                                ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-lg shadow-yellow-400/40'
                                : 'bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30'
                        }`}
                    >
                      Cultural Events
                    </button>
                    <button
                        onClick={() => setSelectedCategory('technical')}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                            selectedCategory === 'technical'
                                ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/40'
                                : 'bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30'
                        }`}
                    >
                      Technical Events
                    </button>
                    <button
                        onClick={() => setSelectedCategory('valedictory')}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                            selectedCategory === 'valedictory'
                                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/40'
                                : 'bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30'
                        }`}
                    >
                      Valedictory Ceremony
                    </button>
                  </>
              )}
            </div>

            {/* Timeline with enhanced animations */}
            <div className="relative">
              {/* Vertical line with gradient */}
              <div className="absolute left-1/2 z-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 shadow-lg transform -translate-x-1/2"></div>

              {/* Events with serial image positions - left, right, left, right... */}
              <div className="relative z-10 space-y-12">
                {getFilteredEvents().length > 0 ? (
                    getFilteredEvents().map((event, index) => (
                        <div
                            key={event.id}
                            className={`flex flex-col md:flex-row items-center animate__animated ${
                                index % 2 === 0
                                    ? 'animate__fadeInLeft animate__delay-' + (index % 5) + 's'
                                    : 'animate__fadeInRight animate__delay-' + (index % 5) + 's'
                            }`}
                        >
                          {/* Event image - alternating sides (first event: left, second: right, etc.) */}
                          <div className={`w-full md:w-5/12 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                            <div className={`overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl transform hover:-translate-y-2 inline-block ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                              <img
                                  src={event.image}
                                  alt={event.title}
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-[200px] md:h-[300px] w-full md:w-[400px] object-cover rounded-2xl transition-transform duration-700 hover:scale-110"
                              />
                            </div>
                          </div>

                          {/* Center circle with pulse animation - hidden on mobile */}
                          <div className="hidden justify-center w-2/12 md:flex">
                            <div className={`w-6 h-6 rounded-full border-4 border-white shadow-xl z-10 animate-pulse ${
                                event.category === 'inauguration' ? 'bg-gradient-to-r from-emerald-400 to-teal-500' :
                                    event.category === 'cultural' ? 'bg-gradient-to-r from-yellow-400 to-amber-500' :
                                        event.category === 'technical' ? 'bg-gradient-to-r from-rose-500 to-red-600' :
                                            event.category === 'valedictory' ? 'bg-gradient-to-r from-indigo-500 to-purple-600' :
                                                'bg-gradient-to-r from-gray-400 to-gray-600'
                            }`}></div>
                          </div>

                          {/* Event content - alternating sides (first event: right, second: left, etc.) */}
                          <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                            <div className="p-6 text-center rounded-2xl border shadow-2xl backdrop-blur-lg transition-all duration-500 transform bg-white/20 md:p-8 border-white/30 hover:bg-white/30 hover:shadow-3xl hover:-translate-y-2">
                              <h3 className="mb-3 text-xl font-bold text-white drop-shadow-md md:text-2xl md:mb-4">{event.title}</h3>
                              <p className="text-lg font-semibold text-cyan-200 drop-shadow md:text-xl">{event.time}</p>
                              {event.place && (
                                  <p className="flex justify-center items-center mt-2 text-base text-amber-100 md:mt-3 md:text-lg">
                                    <span className="mr-2">📍</span> {event.place}
                                  </p>
                              )}
                              {event.club && (
                                  <p className="flex justify-center items-center mt-1 text-base text-purple-200 md:mt-2 md:text-lg">
                                    <span className="mr-2">🏢</span> {event.club}
                                  </p>
                              )}
                            </div>
                          </div>
                        </div>
                    ))
                ) : (
                    <div className="py-16 text-center animate__animated animate__fadeIn">
                      <p className="text-2xl font-medium text-white drop-shadow-2xl">No events found for this category.</p>
                    </div>
                )}
              </div>
            </div>

            {/* Footer note with animation */}
            <div className="mt-16 text-center animate__animated animate__fadeInUp animate__delay-2s">

            </div>
          </div>
        </div>
      </div>
  );
};

export default SchedulePage;
