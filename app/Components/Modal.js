"use client";

import React from "react";
import BrevoForm from "./BrevoForm"; // Import Brevo Form Component

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={closeModal} // Close the modal
        >
          ✕
        </button>
        
        <h2 className="text-lg font-semibold text-gray-900 text-center mb-4">
          Join Our Email List
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Stay updated with the latest insights and developments!
        </p>
        
        {/* Embed the Brevo Form */}
        <BrevoForm />
      </div>
    </div>
  );
};

export default Modal;