"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function PaginationButtons({prevPage, nextPage}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startPage = +searchParams.get("start") || 1;

  return (
    <div className="px-10 sm:px-0 pb-4 flex justify-between sm:justify-start sm:space-x-44 text-blue-700">
      <Link
        href={`${pathname}?searchTerm=${searchTerm}&start=${startPage - 1}`}
        className={`${!prevPage || startPage <= 1 && "hidden"}`}
      >
        <div className="flex flex-col items-center hover:underline">
          <BsChevronLeft className="h-5" />
          <p>Previous</p>
        </div>
      </Link>
      <Link
        href={`${pathname}?searchTerm=${searchTerm}&start=${startPage + 1}`}
        className={`${!nextPage && "hidden"}`}
      >
        <div className="flex flex-col items-center hover:underline">
          <BsChevronRight className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}