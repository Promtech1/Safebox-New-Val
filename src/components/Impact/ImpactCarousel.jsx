import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/pagination";
import flow1 from "../../assets/flow1.png";
import flow2 from "../../assets/flow2.png";
import flow3 from "../../assets/flow3.png";
import flow4 from "../../assets/flow4.png";
import flow5 from "../../assets/flow5.png";
import Ellipsedot from "../../assets/Ellipsedot.png";

const impactData = [
  {
    image: flow1,
    caption: "“770 Million People still live without electricity”",
  },
  {
    image: flow2,
    caption: "“Access to energy fuels education and healthcare.”",
  },
  {
    image: flow3,
    caption: "“Renewables are the key to a sustainable future.”",
  },
  {
    image: flow4,
    caption: "“Access to energy fuels education and healthcare.”",
  },
  {
    image: flow5,
    caption: "“Renewables are the key to a sustainable future.”",
  },
];

const ImpactCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % impactData.length;
      fadeToNext(nextIndex);
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const fadeToNext = (nextIndex) => {
    gsap.to([imageRef.current, textRef.current], {
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => {
        setActiveIndex(nextIndex);
        gsap.fromTo(
          [imageRef.current, textRef.current],
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power3.inOut" }
        );
      },
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#B7DC38]/30 via-transparent to-[#0C1B18]/70">
      <div className="w-full mx-auto max-w-3xl text-center py-12 px-4">
        <h2 className="text-3xl font-bold text-white mb-4">
          Why Energy Access Matters
        </h2>
        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          Energy is more than power — it’s the foundation for health, education,
          and opportunity.
        </p>

        <div className="relative">
          <img
            ref={imageRef}
            key={impactData[activeIndex].image}
            src={impactData[activeIndex].image}
            className="w-full h-96 object-cover rounded-xl mx-auto transition-opacity"
          />
          <p ref={textRef} className="text-white text-3xl font-medium mt-6">
            {impactData[activeIndex].caption}
          </p>

          {/* Pagination dots */}
          <div className="flex justify-center space-x-0.5  mt-10">
            {impactData.map((_, idx) => (
              <span
                key={idx}
                className={clsx(
                  "w-2 h-2 rounded-full",
                  idx === activeIndex ? "bg-green-400" : "bg-gray-500"
                )}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <Marquee speed={100} className="mb-6">
          <p className="flex items-center gap-2 font-semibold text-3xl">
            <img src={Ellipsedot} alt="" />
            This is Our Reality, One innovation at a time.
          </p>
          <p className="flex items-center gap-2 font-normal text-4xl">
            <img src={Ellipsedot} alt="" />
            <span className="text-lime-400">
              This is Our Reality, One innovation at a time.
            </span>
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default ImpactCarousel;
