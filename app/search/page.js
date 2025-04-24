// This code defines a search page in a Next.js application. It imports necessary components and hooks, sets up a state for search results, and defines a function to fetch search results from an API based on user input. The page includes a header, a search bar, and displays the results in a list format.
// The search bar allows users to input their queries, and the results are displayed as a list of items with their names and descriptions. The page is styled using Tailwind CSS classes for a clean and modern look.
// app/search/page.js
"use client";

import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";

export default function SearchPage() {
  const [results, setResults] = useState([]);

  const doSearch = async (q) => {
    // your API call…
    const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
    setResults(await res.json());
  };

  return (
    <>
      <Header />

      {/* 
        flex-1 so that this main area takes
        full remaining height beneath the fixed header 
      */}
      <main className="
        bg-white dark:bg-gray-900 
        flex-1 flex flex-col justify-center items-center 
        px-4 py-8
      ">
        {/* Page‐level title */}
        <h1 className="
          text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100
          mb-4
        ">
          The Genomic Archive
        </h1>

        {/* existing label & bar */}
        <SearchBar 
          onSearch={doSearch} 
          label="Search the genome" 
          placeholder="Type your query…" 
        />

        {/* dummy results below, you can style these however */}
        <ul className="w-full max-w-2xl mt-8 space-y-4">
          {results.map((r) => (
            <li key={r.id} className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
              <strong className="text-gray-900 dark:text-gray-100">{r.name}</strong>
              <p className="text-gray-700 dark:text-gray-300">{r.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}