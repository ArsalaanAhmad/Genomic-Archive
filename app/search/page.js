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
        flex to fill remaining screen, flex-col to stack,
        justify-center/items-center to center.
      */}
      <main className="
        bg-white dark:bg-gray-900 
        flex flex-col justify-center items-center h-screen
        px-4 py-8
        ">
        {/* Page‐level title */}
      <h1 className="text-3xl font-bold text-black dark:text-white mb-2 underline">
        The Genomic Archive
      </h1>
      <div className="text-gray-600 mt-2 mb-4">search &quot;text&quot;</div>

        {/* existing label & bar */}
        <div className="bg-white border-2 border-black rounded-xl">
             <SearchBar 
          onSearch={doSearch} 
          label="" 
          placeholder="Type your query…" 
        />
        </div>

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