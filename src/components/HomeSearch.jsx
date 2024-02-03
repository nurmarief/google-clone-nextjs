"use client";

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const handleRandomSearch = async (e) => {
    try {
      setRandomSearchLoading(true);
      const response = await fetch("https://random-word-api.herokuapp.com/word")
        .then((res) => res.json())
        .then((data) => data[0]);
      if (!response) return;
      router.push(`/search/web?searchTerm=${response}`);
    } catch(error) {
      console.log(error);
    } finally {
      setRandomSearchLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="border rounded-full border-gray-200 mt-5 mx-auto px-5 py-3 w-full max-w-[90%] sm:max-w-xl lg:max-w-2xl hover:shadow-md focus-within:shadow-md transition-shadow duration-300"
      >
        <div className="w-full grid grid-cols-12 items-center">
          <AiOutlineSearch className="mr-3 text-xl text-gray-500" />
          <input
            type="text"
            className="focus:outline-none col-span-10"
            onChange={(e) => setInput(e.target.value)}
          />
          <BsFillMicFill className="justify-self-end text-lg" />
        </div>
      </form>
      <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
        <button
          className="rounded-md p-2 bg-gray-100 hover:shadow-md disabled:shadow-sm text-sm text-gray-800 disabled:opacity-80 transition-shadow duration-300"
          onClick={handleSubmit}
        >
          Google Search
        </button>
        <button
          className="rounded-md p-2 bg-gray-100 hover:shadow-md disabled:shadow-sm text-sm text-gray-800 disabled:opacity-80 transition-shadow duration-300"
          onClick={handleRandomSearch}
          disabled={randomSearchLoading}
        >
          {randomSearchLoading ? "Loading..." : "I am feeling lucky"}
        </button>
      </div>
    </>
  );
}