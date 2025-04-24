// app/Components/SearchBar.js
"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ onSearch, placeholder = "Type your query…" }) {
  const [q, setQ] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const submit = () => {
    if (q.trim()) onSearch(q.trim());
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  return (
    <div className="w-full max-w-2xl flex items-center">
        <input
          ref={inputRef}
          id="genome-search"
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={handleKey}
          placeholder={placeholder}
          className="flex-grow h-12 px-4 border-none text-black rounded-full focus:outline-none placeholder-gray-500"
        />

        <button
          onClick={submit}
          className="h-12 w-12 flex items-center justify-center pr-4 absolute right-0 cursor-pointer"
        >
          <FiSearch className="w-6 h-6" />
        </button>
    </div>
  );
}