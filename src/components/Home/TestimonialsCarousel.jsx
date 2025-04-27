import React, { useState } from 'react';
// Import your icon images

import esther from "../../assets/esther.png"
import comment from "../../assets/comment.png"
import letter from "../../assets/letter.png"
import bgBlackCircle from "../../assets/bgBlackCircle.png"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: '001',
      type: 'case',
      icon: letter,
      title: 'Case Study:',
      content: 'From Darkness to hope, Solar Energy saves lives in remote clinics.'
    },
    {
      id: '002',
      type: 'review',
      icon: comment,
      title: '"Reviews"',
      content: 'Before Safebox, our school had no power. Now we study into the night.',
      author: {
        name: 'Esther.A',
        avatar: esther // Using imported esther image
      }
    },
    {
      id: '003',
      type: 'case',
      icon: letter,
      title: 'Case Study:',
      content: 'How solar energy transformed farming in rural communities.'
    },
    {
      id: '004',
      type: 'review',
      icon: comment,
      title: '"Testimonial"',
      content: `The reliability of Safebox's solar system has been extraordinary for our business.`,
      author: {
        name: 'Michael.T',
        avatar: '/avatars/michael.jpg' // Add actual path to avatar image
      }
    }
  ];

  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Get the current visible slides (2 at a time on desktop)
  const visibleSlides = [
    testimonials[currentSlide % totalSlides],
    testimonials[(currentSlide + 1) % totalSlides]
  ];

  return (
    <div className="w-full  bg-black py-16 px-4 overflow-hidden relative">
      {/* Background image positioned at the left */}
      <div className="absolute left-0 top-0 h-full">
        <img 
          src={bgBlackCircle} 
          alt="Background decoration" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="container mx-auto text-white relative z-10 ">
        {/* Left section with title */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <h2 className="text-5xl font-bold leading-tight">
              Case Studies & 
              <br />
              Testimonials
            </h2>
          </div>
          
          {/* Right section with carousel */}
          <div className="w-full md:w-2/3">
            <div className="flex gap-6  overflow-hidden">
              {visibleSlides.map((item, index) => (
                <div 
                  key={item.id}
                  className="flex-shrink-0 w-full md:w-1/2 bg-[#3A9278]  rounded-lg p-8 flex flex-col h-[450px]"
                >
                  {/* Card header with ID */}
                  <div className="text-lg mb-8">
                    {item.id}
                  </div>
                  
                  {/* Icon - Now using imported image */}
                  <div className="mb-8">
                    <img 
                      src={item.icon} 
                      alt={`${item.type} icon`} 
                      className="w-16 h-16 mb-8 object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col grow">
                    <h3 className="text-2xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg mb-6">
                      {item.content}
                    </p>
                    
                    {/* Author (if available) */}
                    {item.author && (
                      <div className="mt-auto flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                          <img 
                            src={item.author.avatar} 
                            alt={item.author.name} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                        <span className="font-medium">{item.author.name}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center md:justify-start mt-8 space-x-4">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#B3D335] text-black  transition-colors  hover:text-[#B3D335] hover:bg-black"
                aria-label="Previous slide"
              >
                <FaAngleLeft className="text-3xl" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-34 h-12 flex items-center justify-end pr-4 rounded-xl hover:text-[#B3D335] hover:bg-black bg-[#B3D335] text-black h transition-colors"
                aria-label="Next slide"
              >
                <FaAngleRight className="text-3xl " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;