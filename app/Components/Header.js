"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Logo from "/public/DnaLogo.png"; // Replace with your logo file path
import Modal from "./Modal" // Import the Modal Component"

const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 backdrop-blur-md shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4 sm:py-5">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image src={Logo} alt="Genomic Archive Logo" width={40} height={40} />
            <span className="text-2xl color-black font-semibold ml-2">Genomic Archive</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:space-x-10 md:items-center">
  <a
    href="#Features"
    className="text-xs font-bold tracking-widest text-gray-900 uppercase hover:text-indigo-600"
  >
    Features
  </a>
  <a
    href="#Roadmap"
    className="text-xs font-bold tracking-widest text-gray-900 uppercase hover:text-indigo-600"
  >
    Roadmap
  </a>
  <a
    href="#FAQ"
    className="text-xs font-bold tracking-widest text-gray-900 uppercase hover:text-indigo-600"
  >
    FAQ
  </a>
</div>

          {/* Call-to-Action */}
            {/* Modal Trigger Button */}
            <div className="hidden md:flex">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center px-6 py-2 text-base font-semibold text-white bg-gray-900 hover:bg-gray-700 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Join Email List
            </button>
            </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-900"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-md transform transition-transform duration-300 ${
            isExpanded ? "translate-y-0" : "-translate-y-full"
          } md:hidden`}
        >
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                href="#"
                className="text-xs font-bold tracking-widest text-gray-900 uppercase hover:text-indigo-600"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xs font-bold tracking-widest text-gray-900 uppercase hover:text-indigo-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xs font-bold tracking-widest text-gray-900 uppercase hover:text-indigo-600"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-2 text-base font-semibold text-white bg-gray-900 hover:bg-gray-700 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Join Email List
              </a>
            </li>
          </ul>
        </div>
         {/* Modal Component */}
      {isModalOpen && <Modal closeModal={closeModal} />} {/* Pass closeModal */}
      </div>
    </header>
  );
}

export default Header;

