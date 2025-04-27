// src/components/CleanEnergyHub.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import learnMore from "../../assets/learnMore.jpeg"

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'concepts', label: 'Renewable Energy Concepts' },
  { key: 'research', label: 'Research & Articles' },
  { key: 'cases', label: 'Problem Cases & Solutions' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: 'easeOut', duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { ease: 'easeOut' } },
};

const LearnMore = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${learnMore})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 text-center">
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 0.8 }}
        >
          <span className="text-lime-400">Clean</span>{' '}
          Energy Knowledge Hub
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Learn about renewable energy, sustainability, and community solutions through curated content.
        </motion.p>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;
            return (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-8 py-2 rounded font-medium hover:bg-lime-300 transition
                  ${isActive
                    ? 'bg-lime-400 text-black'
                    : 'border border-lime-400 hover:text-lime-700 text-lime-400'}
                `}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Search Input */}
        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <input
            type="text"
            placeholder="Search topics, keywords, or articles..."
            className="w-full rounded py-3 px-5 bg-white text-black placeholder-gray-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LearnMore;
