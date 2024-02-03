"use client";

import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-200 rounded-full px-6 py-3 max-w-3xl shadow-lg"
    >
      <div className="flex flex-grow items-center">
        <input
          type="text"
          className="focus:outline-none w-full"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <RxCross2
          className="sm:mr-2 text-2xl text-gray-500 cursor-pointer"
          onClick={() => setTerm("")}
        />
        <BsFillMicFill className="border-l-2  border-gray-300 mr-3 pl-4 hidden sm:inline-flex text-4xl text-blue-500 cursor-pointer" />
        <AiOutlineSearch
          className="hidden sm:inline-flex text-2xl text-blue-500 cursor-pointer"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}
