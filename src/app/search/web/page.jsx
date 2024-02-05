import WebSearchResults from "@/components/WebSearchResults";

export default async function WebSearchPage({searchParams}) {
  const startPage = searchParams.start || "1";
  const response = await fetch(`
    https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_DEV_G_CLONE_NEXT_JS_API_KEY}&cx=${process.env.GOOGLE_DEV_G_CLONE_NEXT_JS_CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startPage}
  `);

  if(!response.ok) throw new Error("Something went wrong!");
  
  const data = await response.json();
  const results = data.items;

  if(!results) {
    return (
      <main className="pt-12 space-y-8 text-center">
        <h1 className="text-3xl">
          {`No result found for "${searchParams.searchTerm}"`}
        </h1>
        <p className="text-lg">Try search something else</p>
      </main>
    )
  }
  
  return (
    <main className="pb-40 sm:pb-24 pr-6 pl-6 sm:pl-10 lg:pl-40 w-full">
      {results && <WebSearchResults results={data} />}
    </main>
  );
}
