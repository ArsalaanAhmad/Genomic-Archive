"use client";

import React, { useState } from "react";
import Modal from "./Modal.js"; // Import the Modal Component
import Image from "next/image";
import DNAImage from "/public/DNAHelix.png"; // Replace with your DNA image file path

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const openModal = () => setIsModalOpen(true); // Function to open modal
  const closeModal = () => setIsModalOpen(false); // Function to close modal

  return (
    <div>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center mx-auto gap-6 lg:max-w-none">
            <div className="self-center w-full lg:w-[70%]">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                The Genomic Archive
              </h1>
              <p className="mt-2 text-xl font-semibold text-gray-700">
                Your Genomic Encyclopedia.
              </p>
              <p className="mt-5 text-base font-normal leading-7 text-gray-600">
                Explore, compare, and analyze genomic data with ease. {" "}
                <span className="text-gray-800 font-medium">
                  The Genomic Archive
                </span>{" "}
                provides researchers and enthusiasts with a centralized platform
                to make genomic research more accessible, insightful, and
                collaborative.
              </p>
              <div className="relative inline-flex mt-8 group">
                <div className="absolute inset-0 transition-all duration-1000 opacity-70 bg-gradient-to-r from-[#44BCFF] via-[#32C3FF] to-[#0ACFFF] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <button
                  onClick={openModal} // Open the modal on button click
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Join Us Now
                </button>
              </div>
            </div>

            <div className="self-end w-full lg:w-1/2">
              <Image
                className="rounded-sm"
                src={DNAImage} // Add your DNA image here
                alt="DNA Representation"
                width={600}
                height={400}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      {isModalOpen && <Modal closeModal={closeModal} />} {/* Pass closeModal */}
    </div>
  );
};

export default HeroSection;
