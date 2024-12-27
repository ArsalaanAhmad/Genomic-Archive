"use client";

import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "Q. Who can benefit from The Genomic Archive?",
      answer:
        "Our platform is designed for researchers, geneticists, educators, and enthusiasts who want to explore and analyze genomic data in an accessible, collaborative environment.",
    },
    {
      id: 2,
      question: "Q. How do you ensure the accuracy of the data?",
      answer:
        "The Genomic Archive aggregates data from verified genomic databases and APIs, ensuring the information provided is accurate, up-to-date, and reliable for research purposes.",
    },
    {
      id: 3,
      question: "Q. Can I integrate The Genomic Archive into my own project?",
      answer:
        "Yes, we offer API access for developers looking to integrate our data and tools into their applications. Reach out to us to learn more about integration options.",
    },
  ];

  const [activeIds, setActiveIds] = useState([]);

  const toggleAccordion = (id) => {
    if (activeIds.includes(id)) {
      setActiveIds(activeIds.filter((activeId) => activeId !== id));
    } else {
      setActiveIds([...activeIds, id]);
    }
  };

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            Ask everything you need to know about our products and services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 overflow-hidden border border-gray-200 divide-y divide-gray-200 sm:mt-16 rounded-xl">
          {faqs.map((faq) => (
            <div key={faq.id} role="region">
              <h3>
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={activeIds.includes(faq.id)}
                  className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-left text-gray-900 sm:p-6"
                >
                  <span>{faq.question}</span>
                  <span className="ml-4">
                    {activeIds.includes(faq.id) ? (
                      <FaMinus className="w-6 h-6 text-gray-900" />
                    ) : (
                      <FaPlus className="w-6 h-6 text-gray-900" />
                    )}
                  </span>
                </button>
              </h3>
              <motion.div
                initial={false}
                animate={{
                  height: activeIds.includes(faq.id) ? "auto" : 0,
                  opacity: activeIds.includes(faq.id) ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <div className="px-6 pb-6">
                  <p className="text-base text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;