import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaRegFileAlt, FaQuoteLeft } from "react-icons/fa";

// Example placeholder avatar – replace with your own
import Ellipse from "../../assets/Ellipse.png";

const caseStudies = [
  {
    id: "001",
    label: "Case Study",
    icon: <FaRegFileAlt size={20} />,
    title: `"Case Study"`,
    text: "From Darkness to hope, Solar Energy saves lives in remote clinics.",
    authorName: "James B.",
    authorAvatar: Ellipse,
  },
  {
    id: "002",
    label: "Reviews",
    icon: <FaQuoteLeft size={20} />,
    title: `"Reviews"`,
    text: "Before Safebox, our school had no power. Now we study into the night.",
    authorName: "Esther.A",
    authorAvatar: Ellipse,
  },
  {
    id: "003",
    label: "Case Study",
    icon: <FaRegFileAlt size={20} />,
    title: `"Case Study"`,
    text: "Local farmers double their output using solar-driven irrigation solutions.",
    authorName: "Olu F.",
    authorAvatar: Ellipse,
  },
];

export default function CaseStudiesTestimonials() {
  const swiperRef = useRef(null);

  return (
    <section className="bg-[#0d1f1c] w-full py-16 px-4 md:px-20 text-white font-sans overflow-x-hidden">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Case Studies &amp; Testimonials
        </h2>
      </div>

      {/* Swiper Container */}
      <div className="max-w-[1300px] mx-auto">
        {/* <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1.5, 
            },
            1024: {
              slidesPerView: 2,   
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full pb-8"
        >
          {caseStudies.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
            
              <div className="bg-[#58AD7D] text-black rounded-xl p-6 flex flex-col gap-4 h-full shadow-lg">
               
                <div className="flex items-start justify-between">
                  <p className="text-sm font-bold">{item.id}</p>
                  <div className="text-black opacity-80">{item.icon}</div>
                </div>

               
                <h3 className="text-xl font-bold">{item.title}</h3>

               
                <p className="text-sm md:text-base leading-relaxed">{item.text}</p>

                
                <div className="flex items-center gap-2 mt-auto">
                  <img
                    src={item.authorAvatar}
                    alt={item.authorName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <p className="text-sm font-semibold">{item.authorName}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}

        {/* Custom Navigation Buttons */}
        <div className="flex items-center gap-4 justify-end mt-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-lime-400 text-black w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center hover:bg-lime-500 transition"
          >
            &larr;
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-lime-400 text-black w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center hover:bg-lime-500 transition"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
