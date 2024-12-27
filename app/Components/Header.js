"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const images = {
  logo: "https://www.auraui.com/logo-light.png", // Replace with your logo
};

const commonStyles =
  "text-xs font-bold tracking-widest text-gray-900 uppercase hover:text-indigo-600";
const commonButtonStyles =
  "inline-flex items-center justify-center px-6 py-2 text-base font-semibold text-white bg-gray-900 hover:bg-gray-700 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-gray-900";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4 sm:py-5">
          <div className="flex shrink-0">
            <a href="#" title="Auraui" className="flex">
              <Image
                className="w-24"
                src={images.logo}
                alt="Auraui Logo"
                width={96}
                height={24}
              />
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-900"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <FiX className="w-7 h-7" />
              ) : (
                <FiMenu className="w-7 h-7" />
              )}
            </button>
          </div>

          <div className="hidden md:flex md:space-x-10 md:items-center">
            <a href="#" className={commonStyles}>
              Services
            </a>
            <a href="#" className={commonStyles}>
              Latest Collections
            </a>
            <a href="#" className={commonStyles}>
              Blog
            </a>
          </div>

          <div className="hidden md:flex">
            <a href="#" className={commonButtonStyles}>
              Join Email List
            </a>
          </div>
        </nav>

        {expanded && (
          <nav>
            <div className="px-1 pt-8 pb-4">
              <div className="grid gap-y-6">
                <a href="#" className={commonStyles}>
                  Services
                </a>
                <a href="#" className={commonStyles}>
                  Latest Collections
                </a>
                <a href="#" className={commonStyles}>
                  Blog
                </a>
                <a href="#" className={commonButtonStyles}>
                  Join Email List
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;