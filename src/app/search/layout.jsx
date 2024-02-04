import SearchHeader from "@/components/SearchHeader";

export default function layout({children}) {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  );
}
