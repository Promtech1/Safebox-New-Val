import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";


import Solarhouse from "../../assets/Solarhouse.png";
import refinery1 from "../../assets/refinery1.png";

const solutions = [
  {
    id: 1,
    title: "Solar Generators",
    points: [
      "Reliable",
      "Scalable power output",
      "Backup Reliability",
      "Load Management",
    ],
    img: refinery1,
  },
  {
    id: 2,
    title: "Nuclear Power",
    points: [
      "High Energy Density",
      "Zero Emissions",
      "24/7 Power Supply",
      "Low Operating Costs",
    ],
    img: Solarhouse,
  },
  {
    id: 3,
    title: "Solar Generators",
    points: [
      "Reliable",
      "Scalable power output",
      "Backup Reliability",
      "Load Management",
    ],
    img: refinery1,
  },
  {
    id: 4,
    title: "Nuclear Power",
    points: [
      "High Energy Density",
      "Zero Emissions",
      "24/7 Power Supply",
      "Low Operating Costs",
    ],
    img: Solarhouse,
  },
];

export default function InnovateSolutions() {
  const swiperRef = useRef(null);

  return (
    <div className="bg-[#0d1f1c] py-16 px-4 md:px-20 text-white font-sans overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        The Solutions
      </h2>
      <p className="text-center text-xl font-semibold mb-10">
        “What we Innovate”
      </p>

      {/* Container to constrain overall width */}
      <div className="max-w-[1300px] mx-auto overflow-hidden">
        {/* <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 1.7,
            },
            1024: {
              slidesPerView: 1.7,
            },
            1280: {
              slidesPerView: 2,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="!overflow-hidden w-full"
        >
          {solutions.map((item, index) => (
            <SwiperSlide key={index} className="overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#112c28] rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 shadow-xl h-full"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl object-cover w-[clamp(100px,100%,762px)] h-auto"
                />
                <div className="flex flex-col justify-between h-full w-full md:w-1/2 py-4">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm md:text-base"
                      >
                        <FaCheck className="text-lime-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-lime-400 text-black py-2 px-4 rounded font-semibold hover:bg-lime-500 transition mt-auto">
                    More Info
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <Swiper 
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 1.7 },
          1024: { slidesPerView: 1.7 },
        }}
        className="w-[1160px] h-[500px]"
        >
            {solutions.map((solutions) => (
                <SwiperSlide key={solutions.id} className="">
                    <div className="group relative flex">
                        <img src={solutions.img} alt={solutions.title} className="w-[clamp(100px,100%,762px)]" />
                        <div>
                            <h3 className="text-2xl font-bold mb-3">{solutions.title}</h3>
                        </div>
                    </div>
                </SwiperSlide>
            ))}


        </Swiper>

        {/* Custom Navigation Buttons Positioned at the Bottom Right */}
        <div className="flex gap-4 justify-end mt-8">
          {/* Previous Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex items-center justify-center w-[80px] h-[62px]
                       bg-lime-400 text-black text-xl font-semibold
                       rounded-[16px] shadow-md hover:bg-lime-500 transition-colors"
          >
            <FaAngleLeft size={38} />
          </button>

          {/* Next Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex items-center justify-end pr-3 w-[170px] h-[62px]
                       bg-lime-400 text-black text-xl font-semibold
                       rounded-[16px] shadow-md hover:bg-lime-500 transition-colors"
          >
            <FaAngleRight size={38} />
          </button>
        </div>
      </div>
    </div>
  );
}
