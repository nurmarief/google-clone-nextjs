import Link from "next/link";
import {TbGridDots} from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="p-5 flex justify-end text-sm"> 
      <div className="flex items-center space-x-4">
        <Link className="hover:underline" href="https://mail.google.com">
          Gmail
        </Link>
        <Link className="hover:underline" href="https://image.google.com">
          Image
        </Link>
        <TbGridDots className="rounded-full p-2 bg-transparent hover:bg-gray-200 text-4xl cursor-pointer" />
        <button className="rounded-md px-6 py-2 bg-blue-500 hover:shadow-md font-medium text-white whitespace-nowrap hover:brightness-105 transition-all duration-300">
          Sign In
        </button>
      </div>
    </header>
  )
}
