import SearchHeader from "@/components/SearchHeader";
import SearchHeaderOptions from "@/components/SearchHeaderOptions";

export default function layout({children}) {
  return (
    <>
      <SearchHeader />
      <main className="pb-40 sm:pb-24 pr-6 pl-6 sm:pl-10 lg:pl-40 w-full">
        <SearchHeaderOptions />
        {children}
      </main>
    </>
  );
}
