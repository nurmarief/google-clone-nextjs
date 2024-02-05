import ImageSearchResults from "@/components/ImageSearchResults";

export default async function ImageSearchPage({searchParams}) {
  const startPage = searchParams.start || "1";
  
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`
    https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_DEV_G_CLONE_NEXT_JS_API_KEY}&cx=${process.env.GOOGLE_DEV_G_CLONE_NEXT_JS_CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startPage}
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
    <main className="pb-40 sm:pb-24 px-6 w-full">
      {results && <ImageSearchResults results={data} />}
    </main>
  );
}
