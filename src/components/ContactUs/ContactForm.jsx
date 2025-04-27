import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="w-full bg-[#B3D335] py-30 px-4">
      <div className="container mx-auto text-[1.2rem] max-w-md">
        <form onSubmit={handleSubmit}>
          {/* First Name Field with floating label */}
          <div className="mb-12 relative">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="peer w-full border-b border-black bg-transparent py-2 px-0 text-black focus:outline-none focus:border-black"
              placeholder=" "
              required
            />
            <label 
              htmlFor="firstName" 
              className="absolute left-0 -top-3.5 text-black/70 text-sm transition-all 
                        peer-placeholder-shown:text-base peer-placeholder-shown:text-black/70 peer-placeholder-shown:top-2 
                        peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black"
            >
              First Name*
            </label>
          </div>
          
          {/* Last Name Field with floating label */}
          <div className="mb-12 relative">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="peer w-full border-b border-black bg-transparent py-2 px-0 text-black focus:outline-none focus:border-black"
              placeholder=" "
              required
            />
            <label 
              htmlFor="lastName" 
              className="absolute left-0 -top-3.5 text-black text-sm transition-all 
                        peer-placeholder-shown:text-base peer-placeholder-shown:text-black/70 peer-placeholder-shown:top-2 
                        peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black"
            >
              Last Name*
            </label>
          </div>
          
          {/* Email Field with floating label */}
          <div className="mb-12 relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="peer w-full border-b border-black bg-transparent py-2 px-0 text-black focus:outline-none focus:border-black"
              placeholder=" "
              required
            />
            <label 
              htmlFor="email" 
              className="absolute left-0 -top-3.5 text-black text-sm transition-all 
                        peer-placeholder-shown:text-base peer-placeholder-shown:text-black/70 peer-placeholder-shown:top-2 
                        peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black"
            >
              Email*
            </label>
          </div>
          
          {/* Message Field with floating label */}
          <div className="mb-12 relative">
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="peer w-full border-b border-black bg-transparent py-2 px-0 text-black focus:outline-none focus:border-black"
              placeholder=" "
            />
            <label 
              htmlFor="message" 
              className="absolute left-0 -top-3.5 text-black text-sm transition-all 
                        peer-placeholder-shown:text-base peer-placeholder-shown:text-black/70 peer-placeholder-shown:top-2 
                        peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black"
            >
              Message
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded hover:bg-black hover:text-[#B7DC38] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;