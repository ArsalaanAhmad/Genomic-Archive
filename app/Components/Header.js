"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Logo from "/public/DnaLogo.png"; // Replace with your logo file path

const commonStyles =
  "text-xs font-bold tracking-widest text-gray-900 uppercase hover:text-indigo-600";
const commonButtonStyles =
  "inline-flex items-center justify-center px-6 py-2 text-base font-semibold text-white bg-gray-900 hover:bg-gray-700 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-gray-900";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Added state for menu toggle

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-opacity duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-80 backdrop-blur-md shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4 sm:py-5">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image src={Logo} alt="Genomic Archive Logo" width={40} height={40} />
            <span className="text-2xl font-semibold ml-2">Genomic Archive</span>
          </div>

          {/* Links Section */}
          <div className="hidden md:flex md:space-x-10 md:items-center">
            <a href="#" className={commonStyles}>
              Services
            </a>
            <a href="#" className={commonStyles}>
              About
            </a>
            <a href="#" className={commonStyles}>
              Blog
            </a>
          </div>

          {/* Call-to-Action */}
          <div className="hidden md:flex">
            <a href="#" className={commonButtonStyles}>
              Join Email List
            </a>
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
        {isExpanded && (
          <nav className="md:hidden">
            <ul className="flex flex-col space-y-4 mt-4">
              <li>
                <a href="#" className={commonStyles}>
                  Services
                </a>
              </li>
              <li>
                <a href="#" className={commonStyles}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className={commonStyles}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className={commonButtonStyles}>
                  Join Email List
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;