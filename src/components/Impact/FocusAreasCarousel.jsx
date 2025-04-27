import React, { useState, useEffect, useRef } from 'react';
import { FaAngleLeft, FaAngleRight, FaPause, FaPlay } from 'react-icons/fa';
import cireco from "../../assets/cireco.png"
import enerpo from "../../assets/enerpo.png"
import impactBG from "../../assets/impactBG.png"
import footerBG from "../../assets/footerBG.png"

const FocusAreasCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  const cardWidth = isMobile ? 300 : 470; // Width of card in pixels
  const slideGap = 24; // Gap between slides in pixels
  const autoPlayInterval = 5000; // Autoplay interval in milliseconds (5 seconds)
  
  // Focus areas data
  const focusAreas = [
    {
      title: "Energy poverty",
      description: "Deploying solar generators to undeserved communities.",
      image: cireco
    },
    {
      title: "Circular Economy",
      description: "Innovating with solar-powered incinerators and waste-to-energy solutions.",
      image: enerpo
    },
    {
      title: "Charging Stations",
      description: "Sustainable charging solutions for homes and businesses.",
      image: enerpo
    },
    {
      title: "Solar Solutions",
      description: "Providing renewable energy options for all.",
      image: cireco
    },
    {
      title: "Circular Economy",
      description: "Innovating with solar-powered incinerators and waste-to-energy solutions.",
      image: enerpo
    },
    {
      title: "Charging Stations",
      description: "Sustainable charging solutions for homes and businesses.",
      image: enerpo
    },
    {
      title: "Solar Solutions",
      description: "Providing renewable energy options for all.",
      image: cireco
    }
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

  // Autoplay functionality
  useEffect(() => {
    if (isAutoPlaying && !isDragging && !isAnimating) {
      autoPlayRef.current = setTimeout(() => {
        goToNext();
      }, autoPlayInterval);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying, isDragging, isAnimating]);
  
  // Pause autoplay when user hovers over carousel
  const handleMouseEnter = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
    }
  };
  
  // Resume autoplay when user leaves carousel
  const handleMouseLeave = () => {
    if (!isDragging && !isAnimating) {
      setIsAutoPlaying(true);
    }
  };
  
  // Toggle autoplay on/off
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Calculate the position for smooth sliding
  const getSlidePosition = (index) => {
    return -(index * (cardWidth + slideGap));
  };

  // Update translation when current index changes
  useEffect(() => {
    if (!isDragging) {
      setCurrentTranslate(getSlidePosition(currentIndex));
    }
  }, [currentIndex, isDragging, cardWidth, slideGap]);
  
  const goToPrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? focusAreas.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const isLastSlide = currentIndex === focusAreas.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  // Touch and mouse event handlers
  const handleDragStart = (e) => {
    if (isAnimating) return;
    
    // Pause autoplay when user starts interacting
    setIsAutoPlaying(false);
    setIsDragging(true);
    setStartX(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    e.preventDefault();
    const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    const basePosition = getSlidePosition(currentIndex);
    
    // Calculate drag position with resistance at edges
    let newTranslate = basePosition + diff;
    
    // Add resistance at the edges
    if (newTranslate > 0) {
      newTranslate = newTranslate * 0.3; // Reduced movement at start
    } else if (newTranslate < getSlidePosition(focusAreas.length - 1)) {
      const overscroll = newTranslate - getSlidePosition(focusAreas.length - 1);
      newTranslate = getSlidePosition(focusAreas.length - 1) + (overscroll * 0.3);
    }
    
    setCurrentTranslate(newTranslate);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    
    const currentX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
    const diff = currentX - startX;
    const threshold = cardWidth / 3; // Distance required to trigger slide change
    
    // Determine if we should change slides based on drag distance
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    } else {
      // Reset to current slide if drag wasn't far enough
      setCurrentTranslate(getSlidePosition(currentIndex));
    }
    
    setIsDragging(false);
    
    // Resume autoplay after a short delay
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 2000);
  };
  
  // Prevent default click events when dragging
  const handleClick = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Get all cards to render (including extra for smooth transitions)
  const getAllCards = () => {
    // When sliding or swiping, we want to render all cards for smoother transitions
    return Array.from({ length: focusAreas.length }, (_, i) => i);
  };
  
  // Get only the visible cards for static display
  const getVisibleCards = () => {
    if (isMobile) {
      return [currentIndex % focusAreas.length];
    } else {
      const cards = [];
      for (let i = 0; i < 3; i++) {
        cards.push((currentIndex + i) % focusAreas.length);
      }
      return cards;
    }
  };
  
  const cardsToRender = isDragging || isAnimating ? getAllCards() : getAllCards();
  const visibleCards = getVisibleCards();
  
  return (
    <div className="relative bg-[#17352F] min-h-screen py-30 overflow-hidden">
      {/* Background pattern elements */}
      <div className="absolute bottom-0">
        <img src={impactBG} alt="" />
      </div>
      <div className="absolute top-0 right-0">
        <img src={footerBG} alt="" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">Our Focus Areas</h1>
        
        <div 
          className="pl-4 md:pl-16 lg:pl-24 overflow-hidden"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseOut={handleMouseLeave}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          onClick={handleClick}
        >
          <div 
            ref={carouselRef}
            className="flex gap-6 mb-16 transition-transform cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateX(${currentTranslate}px)`,
              transition: isDragging ? 'none' : 'transform 500ms ease-out'
            }}
          >
            {cardsToRender.map((index) => {
              const isThirdCard = !isMobile && index === (currentIndex + 2) % focusAreas.length;
              const isVisible = visibleCards.includes(index);
              
              return (
                <div 
                  key={index}
                  className={`${isVisible ? 'opacity-100' : 'opacity-0'} ${isThirdCard ? 'w-[185px]' : 'w-full md:w-[470px]'} 
                    bg-[#0E2822] rounded-lg overflow-hidden text-white flex-shrink-0 transition-opacity duration-500`}
                  style={{
                    width: isThirdCard ? '185px' : isMobile ? '300px' : '470px',
                  }}
                >
                  {isThirdCard ? (
                    <div className="relative overflow-hidden w-[470px]">
                      <div className="p-6 h-[20vh]">
                        <h2 className="text-2xl font-bold mb-2">{focusAreas[index].title}</h2>
                        <p className="text-gray-300">{focusAreas[index].description}</p>
                      </div>
                      <div className="h-80 overflow-hidden">
                        <img 
                          src={focusAreas[index].image}
                          alt={focusAreas[index].title}
                          className="w-full h-full object-cover"
                          draggable="false"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="p-6 h-[20vh]">
                        <h2 className="text-2xl font-bold mb-2">{focusAreas[index].title}</h2>
                        <p className="text-gray-300">{focusAreas[index].description}</p>
                      </div>
                      <div className="h-80 overflow-hidden">
                        <img 
                          src={focusAreas[index].image}
                          alt={focusAreas[index].title}
                          className="w-full h-full object-cover"
                          draggable="false"
                        />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-end gap-4 mt-8 mr-4 md:mr-8 lg:mr-16">
          <button 
            onClick={goToPrevious} 
            className={`bg-[#BFDC35] hover:bg-[#a8c42d] text-gray-800 font-bold py-2 px-4 rounded-lg w-12 h-12 flex items-center justify-center ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Previous slide"
            disabled={isAnimating}
          >
            <FaAngleLeft className="text-3xl" />
          </button>
          <button 
            onClick={goToNext} 
            className={`bg-[#BFDC35] hover:bg-[#a8c42d] text-gray-800 font-bold py-2 px-4 rounded-lg w-32 h-12 flex items-center justify-end ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Next slide"
            disabled={isAnimating}
          >
            <FaAngleRight className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FocusAreasCarousel;