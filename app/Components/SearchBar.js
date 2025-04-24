// app/Components/SearchBar.js
"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ onSearch, label = "Search the genome", placeholder = "Type your query…" }) {
  const [q, setQ] = useState("");

  const submit = () => {
    if (q.trim()) onSearch(q.trim());
  };

  const handleKey = (e) => {
    if (e.key === "Enter") submit();
  };

  return (
    <div className="w-full flex flex-col items-center space-y-2">
      {/* label above the bar */}
      <label htmlFor="genome-search" className="text-lg font-medium text-gray-900 dark:text-gray-100">
        {label}
      </label>

      {/* bar wrapper */}
      <div className="w-full max-w-2xl flex">
        {/* input */}
        <input
          id="genome-search"
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={handleKey}
          placeholder={placeholder}
          className="
            flex-grow
            h-12
            px-4
            border border-gray-300 dark:border-gray-700
            bg-white dark:bg-gray-800
            text-gray-900 dark:text-gray-100
            placeholder-gray-500 dark:placeholder-gray-400
            rounded-l-full
            focus:outline-none focus:ring-2 focus:ring-indigo-500
          "
        />

        {/* search button */}
        <button
          onClick={submit}
          className="
            w-12 h-12
            flex items-center justify-center
            bg-indigo-600 hover:bg-indigo-700
            text-white
            rounded-r-full
            focus:outline-none focus:ring-2 focus:ring-indigo-500
          "
        >
          <FiSearch className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}