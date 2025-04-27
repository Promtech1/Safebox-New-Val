import React, { useState, useEffect } from 'react';
import product1 from "../../assets/product1.png"
import product2 from "../../assets/product2.png"
import product3 from "../../assets/product3.png"
import product4 from "../../assets/product4.png"
import product5 from "../../assets/product5.png"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const AboutUsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  
  // Images to be imported from public/about-us folder
  const images = [
    product1,
    product2,
    product3,
    product4,
    product5,
  ];
  
  // Check if screen size is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Auto-slide functionality
  useEffect(() => {
    let interval;
    
    if (autoPlay) {
      interval = setInterval(() => {
        goToNext();
      }, 3000); // Change slide every 3 seconds
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentIndex, autoPlay]);

  // Pause auto-slide when user interacts with buttons
  const handleInteraction = (callback) => {
    setAutoPlay(false); // Pause auto-play
    callback(); // Execute the navigation function
    
    // Resume auto-play after 5 seconds of inactivity
    const timer = setTimeout(() => {
      setAutoPlay(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  };
  
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  // Get the indexes of visible slides
  const getVisibleSlides = () => {
    if (isMobile) {
      return [currentIndex];
    } else {
      return [
        currentIndex % images.length,
        (currentIndex + 1) % images.length,
        (currentIndex + 2) % images.length,
        (currentIndex + 3) % images.length // Add fourth image
      ];
    }
  };
  
  const visibleSlides = getVisibleSlides();
  
  // Calculate sizes for the progressive sizing effect
  const getSlideSize = (index) => {
    if (isMobile) return 'w-full h-96';
    
    const position = visibleSlides.indexOf(index);
    switch (position) {
      case 0: return 'w-82 h-80';
      case 1: return 'w-90 h-110';
      case 2: return 'w-106 h-132';
      case 3: return 'w-82 h-80'; // Fourth image same size as first
      default: return 'w-72 h-80';
    }
  };
  
  // Get the visibility class for the fourth image
  const getVisibilityClass = (index) => {
    const position = visibleSlides.indexOf(index);
    if (position === 3) {
      return 'opacity-100 overflow-hidden'; // Show only 30% of the fourth image
    }
    return 'opacity-100';
  };
  
  return (
    <div className="relative bg-[#17352F] p-6 min-h-screen flex flex-col justify-start">
      <div className="text-center w-[770px] mx-auto text-[18px] my-20">
        <h1 className="font-bold mb-6">Our Products</h1>
        <p>At Safebox Energy, our commitment goes beyond delivering exceptional products. We prioritize the seamless journey of our stakeholders, ranging from distributors to end-users, ensuring unparalleled service and support at every step.</p>
      </div>
      <div className="flex justify-start items-start h-auto gap-4 overflow-hidden">
        {isMobile ? (
          <div className="w-full h-96 relative">
            <img 
              src={images[visibleSlides[0]]} 
              alt={`Slide ${visibleSlides[0] + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ) : (
          <>
            {visibleSlides.slice(0, 3).map((imageIndex) => (
              <div 
                key={imageIndex} 
                className={`${getSlideSize(imageIndex)} transition-all duration-300 ease-in-out relative`}
              >
                <img 
                  src={images[imageIndex]} 
                  alt={`Slide ${imageIndex + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
            {/* Partial fourth image */}
            <div className="relative w-24 h-80 overflow-hidden">
              <div className="absolute top-0 left-0 w-82 h-80">
                <img 
                  src={images[visibleSlides[3]]} 
                  alt={`Slide ${visibleSlides[3] + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </>
        )}
      </div>
      
      <div className="flex justify-end mt-8 gap-4 mr-18">
        <button 
          onClick={() => handleInteraction(goToPrevious)} 
          className="bg-lime-300 hover:bg-lime-400 text-gray-800 font-bold py-2 px-4 rounded-lg w-12 h-12 flex items-center justify-center"
        >
          <FaAngleLeft className="text-3xl"/>
        </button>
        <button 
          onClick={() => handleInteraction(goToNext)} 
          className="bg-lime-300 hover:bg-lime-400 text-gray-800 font-bold py-2 px-4 rounded-lg w-32 h-12 flex items-center justify-center"
        >
          <FaAngleRight className="text-3xl"/>
        </button>
      </div>
    </div>
  );
};

export default AboutUsCarousel;