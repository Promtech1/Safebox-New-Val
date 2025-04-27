import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';

import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProductsSection.css';

gsap.registerPlugin(ScrollTrigger);

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Your product images
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import product4 from '../../assets/product4.png';

const products = [product1, product2, product3, product4];

const ProductsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-up', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-green-900 text-white py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12 fade-up"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4">Our Products</h2>
        <p className="text-lg">
          At Safebox Energy, our commitment goes beyond delivering exceptional products.
          We prioritize the seamless journey of our stakeholders, ranging from distributors to
          end‑users, ensuring unparalleled service and support at every step.
        </p>
      </motion.div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          navigation={true}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate:       50,    // slide rotation
            stretch:      -30,   // bring slides closer
            depth:        200,   // deeper perspective
            modifier:     1.2,   // intensity
            slideShadows: true,
          }}
          className="py-10"
        >
          {products.map((src, idx) => (
            <SwiperSlide
              key={idx}
              className="swiper-slide-custom flex justify-center items-center w-[18rem]"
            >
              <img
                src={src}
                alt={`Product ${idx + 1}`}
                className="rounded-lg shadow-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev/Next buttons */}
        <button className="swiper-button-prev bg-lime-500 hover:bg-lime-600 text-green-900 p-4 rounded-full shadow-lg">
          &larr;
        </button>
        <button className="swiper-button-next bg-lime-500 hover:bg-lime-600 text-green-900 p-4 rounded-full shadow-lg">
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default ProductsSection;
