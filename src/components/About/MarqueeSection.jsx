import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import volks from "../../assets/volks.png"
import infiniti from "../../assets/infiniti.png"
import apple from "../../assets/apple.png"
import mcdonalds from "../../assets/mcdonalds.png"
import bonton from "../../assets/bonton.png"
import chats from "../../assets/chats.png"
import charity from "../../assets/charity.png"
import elecar from "../../assets/elecar.png"
import bgPartners from "../../assets/bgPartners.png"

const MarqueeSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
    // Reset form
    setEmail('');
  };

  const logos = [
    { id: 1, name: 'Volkswagen', src: volks },
    { id: 2, name: 'Meta', src: infiniti },
    { id: 3, name: 'Tesla', src: elecar },
    { id: 4, name: 'Apple', src: apple },
    { id: 5, name: 'Bon Ton', src: bonton },
    { id: 6, name: 'McDonalds', src: mcdonalds },
    { id: 7, name: 'WhatsApp', src: chats },
    { id: 8, name: 'Brand', src: charity },
    
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Marquee section with logos */}
      <div className="bg-[#0E1F1C] py-10" style={{
                backgroundImage: `url(${bgPartners})`,
                          
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
            }}>
        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover={true}
        >
          {logos.map((logo) => (
            <div key={logo.id} className="mx-8">
             
                <img 
                  src={logo.src} 
                  alt={`${logo.name} logo`} 
                  className="w-30 h-30 object-contain"
                />
              
            </div>
          ))}
        </Marquee>
      </div>

      {/* Green CTA section */}
      <div className="bg-[#B3D335] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-base text-black mb-4">
            Take your first step towards Green Energy
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-10 leading-tight">
            Take your first step towards<br />Green Energy
          </h2>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <div className="w-full">
                <input
                  type="email"
                  className="w-full py-4 bg-transparent border-b border-black/30 text-xl text-black placeholder-black/60 focus:outline-none"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg min-w-[180px]  hover:text-[#B7DC38] hover:bg-black transition-all"
              >
                Get Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;