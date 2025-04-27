// src/components/KnowledgeCardGrid.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const KnowledgeCardGrid = ({ cards }) => (
    <section className="bg-[#0f1f1c] py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.slug}
            className="bg-[#184338] rounded-lg overflow-hidden shadow-md flex flex-col"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-5 flex flex-col justify-between text-start flex-1">
              <div>
                <h3 className="text-white font-bold text-xl mb-4">
                  {card.title}
                </h3>
                <p className="text-white text-[16px] mb-4">
                  {card.description}
                </p>
              </div>
              <div className="flex justify-between items-center text-sm font-semibold text-lime-400">
                {/* ← here’s the Link ↓ */}
                <Link to={`/blog/${card.slug}`} className="hover:underline">
                  Read More
                </Link>
                <span className="text-xs text-lime-300">{card.tag}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
  
export default KnowledgeCardGrid;
