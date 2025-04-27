import React, { useState, useRef } from 'react';
import solarPanelImage from '../../assets/Solarhouse.png';
import powerPlantImage from '../../assets/refinery1.png';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const SolutionsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Assuming we have 3 slides for this example
  
  const solutions = [
    {
      id: 1,
      title: 'Solar Generators',
      image: solarPanelImage,
      features: [
        'Reliable',
        'Scalable power output',
        'Backup Reliability',
        'Load Management'
      ]
    },
    {
      id: 2,
      title: 'Solar - Powered Inverters',
      image: powerPlantImage,
      features: [
        'Energy Efficient',
        'Eco-friendly',
        'Low maintenance',
        'Cost effective'
      ]
    },
    {
      id: 3,
      title: 'Charge Controllers',
      image: solarPanelImage, // Replace with actual image
      features: [
        'Smart monitoring',
        'Overcharge protection',
        'Temperature compensation',
        'Multiple charging algorithms'
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Calculate which slides to display (current and next)
  const displayedSlides = [
    solutions[currentSlide],
    solutions[(currentSlide + 1) % totalSlides]
  ];

  return (
    <div className="w-full bg-[#0E1F1C] py-16 px-4 overflow-hidden">
      <div className="container mx-auto text-white">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-2">The Solutions</h2>
          <p className="text-4xl font-light">"What we Innovate"</p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Slides Container */}
          <div className="flex gap-6 transition-transform duration-500">
            {/* First Slide (Full Width) */}
            <div className="flex-shrink-0 w-full lg:w-[calc(100%-450px)] lg:max-h-[700px] p-10 bg-[#19302B] rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <img 
                    src={displayedSlides[0].image} 
                    alt={displayedSlides[0].title} 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="w-full md:w-1/2 pl-8 pr-8 pt-8 flex flex-col justify-center">
                  <h3 className="text-4xl font-bold mb-6">{displayedSlides[0].title}</h3>
                  <ul className="space-y-6 text-2xl font-semibold">
                    {displayedSlides[0].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 text-[#B3D335]">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-20 flex justify-end">
                    <button className="bg-[#B3D335] text-black font-bold  px-10 py-2 rounded-md hover:bg-black hover:text-[#B3D335] transition-colors">
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second Slide (Partial Width) - Only visible on larger screens */}
            <div className="hidden lg:block flex-shrink-0 w-[430px] bg-[#19302B] rounded-lg overflow-hidden">
              <div className="w-full">
                <img 
                  src={displayedSlides[1].image} 
                  alt={displayedSlides[1].title} 
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-3">{displayedSlides[1].title}</h3>
                {/* Partial content for the second slide */}
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-end mt-6 space-x-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#B3D335] text-black hover:bg-[#a3c325] transition-colors"
            >
              <FaAngleLeft className="text-3xl"/>
            </button>
            <button 
              onClick={nextSlide}
              className="w-32 h-12 flex items-center justify-end pr-4 rounded-xl bg-[#B3D335] text-black hover:bg-[#a3c325] transition-colors"
            >
              <FaAngleRight className="text-3xl"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsCarousel;