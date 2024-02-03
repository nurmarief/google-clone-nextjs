"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

export default function SearchHeaderOptions() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const pathname = usePathname();
  const selectTab = (tab) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  };
  return (
    <div className="border-b w-full flex gap-2 justify-start text-gray-700 text-sm select-none">
      <div onClick={()=>selectTab("All")} className={`border-b-4 border-transparent pb-3 px-2 space-x-1 flex items-center active:text-blue-500 cursor-pointer ${pathname === "/search/web" && "!text-blue-600 !border-blue-600"}`}>
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div onClick={()=>selectTab("Images")} className={`border-b-4 border-transparent pb-3 px-2 space-x-1 flex items-center active:text-blue-500 cursor-pointer ${pathname === "/search/image" && "!text-blue-600 !border-blue-600"}`}>
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}