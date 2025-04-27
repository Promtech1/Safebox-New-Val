import React from 'react';
import contactHero from "../../assets/contactHero.png"
import checkvec from "../../assets/checkvec.png"

const ContactHero = () => {
  return (
    <div className="relative w-full bg-[#0E1F1C] text-white">
      {/* Hero background with solar panel image */}
      <div 
        className="w-full h-[800px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${contactHero})` }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-[150vw]">
            <h1 className="text-[60px] font-bold mb-8">Reach out to Us</h1>
            
            <div className='flex items-end justify-end'>
            <div className="flex flex-col text-[32px] font-bold  space-y-8">
              {/* Address */}
              <div className="flex items-start">
                <div className="mr-3  p-1">
                  <img src={checkvec} alt="" />
                </div>
                <p>234 Ihama road, off Airport road,<br />Benin city, Edo state.</p>
              </div>
              
              {/* Email */}
              <div className="flex items-start">
                <div className="mr-3   p-1">
                <img src={checkvec} alt="" />
                </div>
                <p>Safebox@gmail.com</p>
              </div>
              
              {/* Phone */}
              <div className="flex items-start">
                <div className="mr-3   p-1">
                <img src={checkvec} alt="" />
                </div>
                <p>908-645-8903</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;