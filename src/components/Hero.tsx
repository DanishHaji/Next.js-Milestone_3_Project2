'use client'

import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Hero.module.css'

const Hero = () => {
  const images = [
    { src: "/hero/1.jpg", alt: "picture 1", link: "/" },
    { src: "/hero/2.jpg", alt: "picture 2", link: "/" },
    { src: "/hero/3.jpg", alt: "picture 3", link: "/" },
    { src: "/hero/4.jpg", alt: "picture 4", link: "/" },
    { src: "/hero/5.jpg", alt: "picture 5", link: "/" },
    { src: "/hero/6.jpg", alt: "picture 6", link: "/" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slider every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles["hero-container"]}>
      {/* Images */}
      <div
        className={styles["hero-images"]}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <Link key={index} href={image.link}>
            <Image
              src={image.src}
              alt={`Slide ${index + 1}`}
              width={1500}
              height={500}
              className={styles["hero-image"]}
            />
          </Link>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        aria-label="before"
        type="submit"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition left-arrow"
      >
        <FiArrowLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        aria-label="after"
        type="submit"
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition right-arrow"
      >
        <FiArrowRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 indicators">
        {images.map((_, index) => (
          <button
            aria-label={`slide to ${index + 1}`}
            type="submit"
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-red-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
