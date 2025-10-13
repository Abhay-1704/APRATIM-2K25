import React, { useState, useRef, useEffect } from 'react';
import styles from './RetroTimeline.module.css';

import poster1 from '../../assets/RetroTimeline/1.png';
import poster2 from '../../assets/RetroTimeline/2.png';
import poster3 from '../../assets/RetroTimeline/3.png';
import poster4 from '../../assets/RetroTimeline/4.png';
import poster5 from '../../assets/RetroTimeline/5.png';
import poster6 from '../../assets/RetroTimeline/6.png';

const RetroTimeline = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [currentCheckpoint, setCurrentCheckpoint] = useState(null);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderTrackRef = useRef(null);
  const posterRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const events = {
    1: [
      {
        time: '10:00',
        events: [
          { name: 'OPENING CEREMONY', poster: poster1 },
          { name: 'REGISTRATION', poster: poster2 }
        ]
      },
      {
        time: '11:30',
        events: [
          { name: 'RETRO GAMING TOURNAMENT', poster: poster2 }
        ]
      },
      {
        time: '14:00',
        events: [
          { name: 'PIXEL ART WORKSHOP', poster: poster3 },
          { name: 'GAME DEV TALK', poster: poster4 },
          { name: 'COSPLAY PREP', poster: poster5 }
        ]
      },
      {
        time: '16:30',
        events: [
          { name: 'SPEEDRUN COMPETITION', poster: poster6 }
        ]
      },
      {
        time: '19:00',
        events: [
          { name: 'COSPLAY CONTEST', poster: poster4 },
          { name: 'EVENING SHOWCASE', poster: poster6 }
        ]
      }
    ],
    2: [
      {
        time: '10:00',
        events: [
          { name: 'ARCADE CHALLENGE', poster: poster1 }
        ]
      },
      {
        time: '12:00',
        events: [
          { name: 'INDIE GAME SHOWCASE', poster: poster2 },
          { name: 'DEVELOPER MEETUP', poster: poster3 }
        ]
      },
      {
        time: '15:00',
        events: [
          { name: 'CHIPTUNE CONCERT', poster: poster1 }
        ]
      },
      {
        time: '17:30',
        events: [
          { name: 'FINAL BOSS BATTLE', poster: poster6 }
        ]
      },
      {
        time: '20:00',
        events: [
          { name: 'CLOSING CEREMONY', poster: poster3 },
          { name: 'PRIZE DISTRIBUTION', poster: poster6 }
        ]
      }
    ]
  };

  const selectDay = (day) => {
    setCurrentDay(day);
    setCurrentCheckpoint(null);
    setCurrentEventIndex(0);
    setSliderPosition(0);
  };

  const updateCheckpoint = (index) => {
    setCurrentCheckpoint(index);
    setCurrentEventIndex(0);
  };

  const handleCheckpointClick = (index) => {
    const dayEvents = events[currentDay];
    const position = (index / (dayEvents.length - 1)) * 100;
    setSliderPosition(position);
    updateCheckpoint(index);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderTrackRef.current) return;

    const rect = sliderTrackRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    let percentage = (x / rect.width) * 100;

    const dayEvents = events[currentDay];

    const snapThreshold = 5;

    dayEvents.forEach((evt, idx) => {
      const checkpointPosition = (idx / (dayEvents.length - 1)) * 100;
      const distance = Math.abs(percentage - checkpointPosition);

      if (distance < snapThreshold) {
        percentage = checkpointPosition;
      }
    });

    setSliderPosition(percentage);

    const index = Math.round((percentage / 100) * (dayEvents.length - 1));
    updateCheckpoint(index);
  };

  const handlePrevEvent = () => {
    if (currentCheckpoint === null) return;
    const checkpoint = events[currentDay][currentCheckpoint];
    if (currentEventIndex > 0) {
      setCurrentEventIndex(currentEventIndex - 1);
    }
  };

  const handleNextEvent = () => {
    if (currentCheckpoint === null) return;
    const checkpoint = events[currentDay][currentCheckpoint];
    if (currentEventIndex < checkpoint.events.length - 1) {
      setCurrentEventIndex(currentEventIndex + 1);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (currentCheckpoint === null) return;

    const swipeThreshold = 50; // Minimum swipe distance
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        handleNextEvent();
      } else {
        handlePrevEvent();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, currentDay]);

  const dayEvents = events[currentDay];
  const currentCheckpointData = currentCheckpoint !== null ? dayEvents[currentCheckpoint] : null;
  const currentEvent = currentCheckpointData ? currentCheckpointData.events[currentEventIndex] : null;
  const totalEvents = currentCheckpointData ? currentCheckpointData.events.length : 0;

  return (
      <div className={styles.retroTimelineWrapper}>
        <nav className={styles.navbar}>
          <h1>🎮 RETRO TIMELINE 🎮</h1>
        </nav>

        <div className={styles.container}>
          <div className={styles.daySelector}>
            <button
                className={`${styles.dayBtn} ${currentDay === 1 ? styles.active : ''}`}
                onClick={() => selectDay(1)}
            >
              Day 1
            </button>
            <button
                className={`${styles.dayBtn} ${currentDay === 2 ? styles.active : ''}`}
                onClick={() => selectDay(2)}
            >
              Day 2
            </button>
          </div>

          <div className={styles.timelineContainer}>
            <div className={styles.eventName}>
              {currentEvent ? currentEvent.name : 'SELECT A CHECKPOINT'}
            </div>

            {totalEvents > 1 && (
                <div className={styles.eventCounter}>
                  Event {currentEventIndex + 1} of {totalEvents}
                </div>
            )}

            <div className={styles.sliderContainer}>
              <div className={styles.sliderTrack} ref={sliderTrackRef}>
                {dayEvents.map((evt, idx) => {
                  const position = (idx / (dayEvents.length - 1)) * 100;
                  return (
                      <div
                          key={idx}
                          className={styles.checkpoint}
                          style={{ left: `${position}%` }}
                          onClick={() => handleCheckpointClick(idx)}
                      >
                        <div className={styles.checkpointLabel}>{evt.time}</div>
                        {evt.events.length > 1 && (
                            <div className={styles.checkpointBadge}>{evt.events.length}</div>
                        )}
                      </div>
                  );
                })}
                <div
                    className={styles.sliderThumb}
                    style={{ left: `${sliderPosition}%` }}
                    onMouseDown={handleMouseDown}
                />
              </div>
            </div>

            <div className={styles.posterContainer}>
              <div
                  className={styles.poster}
                  ref={posterRef}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
              >
                {currentEvent ? (
                    <img src={currentEvent.poster} alt={currentEvent.name} />
                ) : (
                    '🎮 SLIDE TO VIEW EVENT POSTERS 🎮'
                )}
              </div>

              {totalEvents > 1 && (
                  <div className={styles.carouselControls}>
                    <button
                        className={`${styles.carouselBtn} ${styles.carouselBtnLeft}`}
                        onClick={handlePrevEvent}
                        disabled={currentEventIndex === 0}
                    >
                      ◀
                    </button>
                    <button
                        className={`${styles.carouselBtn} ${styles.carouselBtnRight}`}
                        onClick={handleNextEvent}
                        disabled={currentEventIndex === totalEvents - 1}
                    >
                      ▶
                    </button>
                  </div>
              )}
            </div>

            {totalEvents > 1 && (
                <div className={styles.carouselDots}>
                  {currentCheckpointData.events.map((_, idx) => (
                      <span
                          key={idx}
                          className={`${styles.dot} ${idx === currentEventIndex ? styles.active : ''}`}
                          onClick={() => setCurrentEventIndex(idx)}
                      />
                  ))}
                </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default RetroTimeline;