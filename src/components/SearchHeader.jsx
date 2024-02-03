import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="bg-white">
      <div className="py-6 px-2 sm:px-6 w-full flex flex-wrap gap-4 items-center justify-between">
        <div className="w-full sm:w-auto flex gap-4 justify-between items-center">
          <Link href="/">
            <Image
              className="px-4"
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google Logo"
              width={120 }
              height={40}
              priority
              style={{ height: "auto" }}
            />
          </Link>
          <button className="rounded-md px-6 py-2 bg-blue-500 hover:shadow-md sm:hidden font-medium text-white whitespace-nowrap hover:brightness-105 transition-all duration-300">
            Sign In
          </button>
        </div>
        <div className="w-full flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className="rounded-full p-2 bg-transparent hover:bg-gray-200 text-4xl cursor-pointer" />
          <TbGridDots className="rounded-full p-2 bg-transparent hover:bg-gray-200 text-4xl cursor-pointer" />
        </div>
        <button className="rounded-md px-6 py-2 bg-blue-500 hover:shadow-md font-medium hidden sm:inline text-white whitespace-nowrap hover:brightness-105 transition-all duration-300">
          Sign In
        </button>
      </div>
      <div className="px-2 sm:px-6">
        <SearchHeaderOptions />
      </div>
    </header>
  );
}
