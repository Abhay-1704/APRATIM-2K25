import React, { useState, useEffect, useRef } from 'react';
import styles from './Gallery.module.css';

import day1_1 from '../../assets/Gallery/day1/1.JPG';
import day1_2 from '../../assets/Gallery/day1/2.JPG';
import day1_3 from '../../assets/Gallery/day1/3.JPG';
import day1_4 from '../../assets/Gallery/day1/4.JPG';
import day1_5 from '../../assets/Gallery/day1/5.JPG';
import day1_6 from '../../assets/Gallery/day1/6.JPG';
import day1_7 from '../../assets/Gallery/day1/7.JPG';
import day1_8 from '../../assets/Gallery/day1/8.JPG';
import day1_9 from '../../assets/Gallery/day1/9.JPG';
import day1_10 from '../../assets/Gallery/day1/10.JPG';
import day1_11 from '../../assets/Gallery/day1/11.JPG';
import day1_12 from '../../assets/Gallery/day1/12.JPG';
import day1_13 from '../../assets/Gallery/day1/13.JPG';
import day1_14 from '../../assets/Gallery/day1/14.JPG';
import day1_15 from '../../assets/Gallery/day1/15.JPG';
import day1_16 from '../../assets/Gallery/day1/16.JPG';
import day1_17 from '../../assets/Gallery/day1/17.JPG';
import day1_18 from '../../assets/Gallery/day1/18.JPG';
import day1_19 from '../../assets/Gallery/day1/19.JPG';
import day1_20 from '../../assets/Gallery/day1/20.JPG';
import day1_21 from '../../assets/Gallery/day1/21.JPG';
import day2_22 from '../../assets/Gallery/day2/22.JPG';
import day2_23 from '../../assets/Gallery/day2/23.JPG';
import day2_24 from '../../assets/Gallery/day2/24.JPG';
import day2_25 from '../../assets/Gallery/day2/25.JPG';
import day2_26 from '../../assets/Gallery/day2/26.JPG';
import day2_27 from '../../assets/Gallery/day2/27.JPG';
import day2_28 from '../../assets/Gallery/day2/28.JPG';
import day2_29 from '../../assets/Gallery/day2/29.JPG';
import day2_30 from '../../assets/Gallery/day2/30.JPG';
import day2_31 from '../../assets/Gallery/day2/31.JPG';
import day2_32 from '../../assets/Gallery/day2/32.JPG';
import day2_34 from '../../assets/Gallery/day2/34.JPG';
import day2_35 from '../../assets/Gallery/day2/35.JPG';
import day2_36 from '../../assets/Gallery/day2/36.JPG';
import day2_37 from '../../assets/Gallery/day2/37.JPG';
import day2_38 from '../../assets/Gallery/day2/38.JPG';
import day2_39 from '../../assets/Gallery/day2/39.JPG';
import day2_40 from '../../assets/Gallery/day2/40.JPG';
import day2_41 from '../../assets/Gallery/day2/41.JPG';
import day2_42 from '../../assets/Gallery/day2/42.JPG';
import day2_43 from '../../assets/Gallery/day2/43.JPG';
import day2_44 from '../../assets/Gallery/day2/44.JPG';
import day2_45 from '../../assets/Gallery/day2/45.JPG';
import day2_46 from '../../assets/Gallery/day2/46.JPG';
import day2_47 from '../../assets/Gallery/day2/47.JPG';
import day2_48 from '../../assets/Gallery/day2/48.JPG';
import day2_49 from '../../assets/Gallery/day2/49.JPG';
import day2_50 from '../../assets/Gallery/day2/50.JPG';
import day2_51 from '../../assets/Gallery/day2/51.JPG';
import day2_52 from '../../assets/Gallery/day2/52.JPG';
import day2_53 from '../../assets/Gallery/day2/53.JPG';
import day2_54 from '../../assets/Gallery/day2/54.JPG';
import day2_55 from '../../assets/Gallery/day2/55.JPG';
import day2_56 from '../../assets/Gallery/day2/56.JPG';
import day2_57 from '../../assets/Gallery/day2/57.JPG';
import day2_58 from '../../assets/Gallery/day2/58.JPG';

import backgroundImage from '../../assets/Gallery/gallerybg.jpg';

const Gallery = () => {
    const [selectedDay, setSelectedDay] = useState('day1');
    const [selectedImage, setSelectedImage] = useState(null);
    const [progress, setProgress] = useState(50);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const carouselRef = useRef(null);

    const speedWheel = 0.02;
    const speedDrag = -0.1;

    const day1Images = [
        { id: 1, src: day1_1, title: 'APRATIM 2025', number: '01' },
        { id: 2, src: day1_2, title: 'APRATIM 2025', number: '02' },
        { id: 3, src: day1_3, title: 'APRATIM 2025', number: '03' },
        { id: 4, src: day1_4, title: 'APRATIM 2025', number: '04' },
        { id: 5, src: day1_5, title: 'APRATIM 2025', number: '05' },
        { id: 6, src: day1_6, title: 'APRATIM 2025', number: '06' },
        { id: 7, src: day1_7, title: 'APRATIM 2025', number: '07' },
        { id: 8, src: day1_8, title: 'APRATIM 2025', number: '08' },
        { id: 9, src: day1_9, title: 'APRATIM 2025', number: '09' },
        { id: 10, src: day1_10, title: 'APRATIM 2025', number: '10' },
        { id: 11, src: day1_11, title: 'APRATIM 2025', number: '11' },
        { id: 12, src: day1_12, title: 'APRATIM 2025', number: '12' },
        { id: 13, src: day1_13, title: 'APRATIM 2025', number: '13' },
        { id: 14, src: day1_14, title: 'APRATIM 2025', number: '14' },
        { id: 15, src: day1_15, title: 'APRATIM 2025', number: '15' },
        { id: 16, src: day1_16, title: 'APRATIM 2025', number: '16' },
        { id: 17, src: day1_17, title: 'APRATIM 2025', number: '17' },
        { id: 18, src: day1_18, title: 'APRATIM 2025', number: '18' },
        { id: 19, src: day1_19, title: 'APRATIM 2025', number: '19' },
        { id: 20, src: day1_20, title: 'APRATIM 2025', number: '20' },
        { id: 21, src: day1_21, title: 'APRATIM 2025', number: '21' },
    ];

    const day2Images = [
        { id: 22, src: day2_22, title: 'APRATIM 2025', number: '22' },
        { id: 23, src: day2_23, title: 'APRATIM 2025', number: '23' },
        { id: 24, src: day2_24, title: 'APRATIM 2025', number: '24' },
        { id: 25, src: day2_25, title: 'APRATIM 2025', number: '25' },
        { id: 26, src: day2_26, title: 'APRATIM 2025', number: '26' },
        { id: 27, src: day2_27, title: 'APRATIM 2025', number: '27' },
        { id: 28, src: day2_28, title: 'APRATIM 2025', number: '28' },
        { id: 29, src: day2_29, title: 'APRATIM 2025', number: '29' },
        { id: 30, src: day2_30, title: 'APRATIM 2025', number: '30' },
        { id: 31, src: day2_31, title: 'APRATIM 2025', number: '31' },
        { id: 32, src: day2_32, title: 'APRATIM 2025', number: '32' },
        { id: 34, src: day2_34, title: 'APRATIM 2025', number: '34' },
        { id: 35, src: day2_35, title: 'APRATIM 2025', number: '35' },
        { id: 36, src: day2_36, title: 'APRATIM 2025', number: '36' },
        { id: 37, src: day2_37, title: 'APRATIM 2025', number: '37' },
        { id: 38, src: day2_38, title: 'APRATIM 2025', number: '38' },
        { id: 39, src: day2_39, title: 'APRATIM 2025', number: '39' },
        { id: 40, src: day2_40, title: 'APRATIM 2025', number: '40' },
        { id: 41, src: day2_41, title: 'APRATIM 2025', number: '41' },
        { id: 42, src: day2_42, title: 'APRATIM 2025', number: '42' },
        { id: 43, src: day2_43, title: 'APRATIM 2025', number: '43' },
        { id: 44, src: day2_44, title: 'APRATIM 2025', number: '44' },
        { id: 45, src: day2_45, title: 'APRATIM 2025', number: '45' },
        { id: 46, src: day2_46, title: 'APRATIM 2025', number: '46' },
        { id: 47, src: day2_47, title: 'APRATIM 2025', number: '47' },
        { id: 48, src: day2_48, title: 'APRATIM 2025', number: '48' },
        { id: 49, src: day2_49, title: 'APRATIM 2025', number: '49' },
        { id: 50, src: day2_50, title: 'APRATIM 2025', number: '50' },
        { id: 51, src: day2_51, title: 'APRATIM 2025', number: '51' },
        { id: 52, src: day2_52, title: 'APRATIM 2025', number: '52' },
        { id: 53, src: day2_53, title: 'APRATIM 2025', number: '53' },
        { id: 54, src: day2_54, title: 'APRATIM 2025', number: '54' },
        { id: 55, src: day2_55, title: 'APRATIM 2025', number: '55' },
        { id: 56, src: day2_56, title: 'APRATIM 2025', number: '56' },
        { id: 57, src: day2_57, title: 'APRATIM 2025', number: '57' },
        { id: 58, src: day2_58, title: 'APRATIM 2025', number: '58' },
    ];

    const currentImages = selectedDay === 'day1' ? day1Images : day2Images;

    const getZindex = (array, index) => {
        return array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i));
    };

    const animate = () => {
        const newProgress = Math.max(0, Math.min(progress, 100));
        const active = Math.floor(newProgress / 100 * (currentImages.length - 1));
        return active;
    };

    const activeIndex = animate();

    const displayItems = (index, active) => {
        const zIndex = getZindex(currentImages, active)[index];
        const activeValue = (index - active) / currentImages.length;

        return {
            '--zIndex': zIndex,
            '--active': activeValue,
            '--items': currentImages.length,
        };
    };

    const handleWheel = (e) => {
        e.preventDefault();
        const wheelProgress = e.deltaY * speedWheel;
        setProgress(prev => Math.max(0, Math.min(prev + wheelProgress, 100)));
    };

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        const mouseProgress = (x - startX) * speedDrag;
        setProgress(prev => Math.max(0, Math.min(prev + mouseProgress, 100)));
        setStartX(x);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleItemClick = (index) => {
        const newProgress = (index / currentImages.length) * 100 + 10;
        setProgress(newProgress);
    };

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleDayChange = (day) => {
        setSelectedDay(day);
        setProgress(50); // Reset to middle position
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        carousel.addEventListener('wheel', handleWheel, { passive: false });
        carousel.addEventListener('mousedown', handleMouseDown);
        carousel.addEventListener('mousemove', handleMouseMove);
        carousel.addEventListener('mouseup', handleMouseUp);
        carousel.addEventListener('mouseleave', handleMouseUp);
        carousel.addEventListener('touchstart', handleMouseDown);
        carousel.addEventListener('touchmove', handleMouseMove);
        carousel.addEventListener('touchend', handleMouseUp);

        return () => {
            carousel.removeEventListener('wheel', handleWheel);
            carousel.removeEventListener('mousedown', handleMouseDown);
            carousel.removeEventListener('mousemove', handleMouseMove);
            carousel.removeEventListener('mouseup', handleMouseUp);
            carousel.removeEventListener('mouseleave', handleMouseUp);
            carousel.removeEventListener('touchstart', handleMouseDown);
            carousel.removeEventListener('touchmove', handleMouseMove);
            carousel.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDown, startX, progress, currentImages]);

    return (
        <div
            className={styles.gallery}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className={styles.gallerySection}>
                <div className={styles.galleryTitle}>
                    <h1>GALLERY</h1>
                </div>

                <div className={styles.dayControls}>
                    <button
                        className={`${styles.dayBtn} ${selectedDay === 'day1' ? styles.active : ''}`}
                        onClick={() => handleDayChange('day1')}
                    >
                        Day 1
                    </button>
                    <button
                        className={`${styles.dayBtn} ${selectedDay === 'day2' ? styles.active : ''}`}
                        onClick={() => handleDayChange('day2')}
                    >
                        Day 2
                    </button>
                </div>

                <div ref={carouselRef} className={styles.carousel}>
                    {currentImages.map((image, index) => (
                        <div
                            key={image.id}
                            className={styles.carouselItem}
                            style={displayItems(index, activeIndex)}
                            onClick={() => {
                                handleItemClick(index);
                                setTimeout(() => openModal(image), 300);
                            }}
                        >
                            <div className={styles.carouselBox}>
                                <div className={styles.title}>{image.title}</div>
                                <div className={styles.num}>{image.number}</div>
                                <img src={image.src} alt={`Gallery image ${image.number}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <span className={styles.close} onClick={closeModal}>&times;</span>
                        <img src={selectedImage.src} alt={`Gallery image ${selectedImage.number}`} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;