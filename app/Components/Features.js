"use client";

import React from "react";
import { FaDna, FaSearch, FaDatabase, FaUserShield, FaMicroscope } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaDna className="text-blue-600 w-7 h-7" />,
    title: "Explore Genetic Data",
    description:
      "Access a comprehensive database of genetic information, allowing researchers and enthusiasts to explore data related to genes, traits, and diseases.",
  },
  {
    icon: <FaSearch className="text-green-600 w-7 h-7" />,
    title: "Advanced Search",
    description:
      "Quickly find specific genomic data using our powerful search tools, designed to filter by genes, diseases, populations, or regions.",
  },
  {
    icon: <FaDatabase className="text-purple-600 w-8 h-8" />,
    title: "Centralized Repository",
    description:
      "A secure and centralized platform to store and share genetic datasets, ensuring data integrity and accessibility.",
  },
  {
    icon: <GiBookmarklet className="text-yellow-600 w-8 h-8" />,
    title: "Bookmark and Compare",
    description:
      "Bookmark genes or datasets and use our interactive comparison tools to analyze differences and correlations across various data points.",
  },
  {
    icon: <FaUserShield className="text-red-600 w-8 h-8" />,
    title: "Privacy-Focused Design",
    description:
      "Protect sensitive data with cutting-edge security protocols and anonymized datasets, prioritizing user privacy and compliance.",
  },
  {
    icon: <FaMicroscope className="text-indigo-600 w-8 h-8" />,
    title: "Integrative Tools",
    description:
      "Utilize built-in genomic analysis tools for cross-referencing, visualizations, and identifying novel patterns in genetic data.",
  },
];

const Features = () => {
  const commonStyle = "relative flex items-center justify-center mx-auto";

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              custom={index}
              variants={containerVariants}
            >
              <div className={commonStyle}>
                <div className="bg-gray-100 w-16 h-16 flex items-center justify-center rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="mt-8 text-xl font-semibold text-black leading-tight group-hover:scale-105 transition-transform">
                {feature.title}
              </h3>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;