import React from 'react';

const LocationSection = () => {
  return (
    <div className="w-full bg-[#0E1F1C] text-white pt-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[43px] font-bold mb-4">Our Location</h2>
        <p className="mb-1 text-[28px] font-semibold">234 Ihama road, off Airport road,</p>
        <p className="mb-4 text-[28px] font-semibold">Benin city, Edo state.</p>
        <p className="mb-6 text-[28px] font-semibold">V80 5342</p>
        
        {/* Google Map Embed */}
        <div className="w-full  mx-auto h-124 bg-gray-300">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d5.6174!3d6.3397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjAnMjMuMCJOIDXCsDM3JzAyLjYiRQ!5e0!3m2!1sen!2sng!4v1619104752446!5m2!1sen!2sng" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="SafeBox Energy Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;