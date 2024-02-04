export default async function WebSearchPage({searchParams}) {
  const response = await fetch(`
    https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_DEV_G_CLONE_NEXT_JS_API_KEY}&cx=${process.env.GOOGLE_DEV_G_CLONE_NEXT_JS_CONTEXT_KEY}&q=${searchParams.searchTerm}
  `);

  if(!response.ok) throw new Error("Something went wrong!");
  
  const data = await response.json();
  const results = data.items;

  if(!results) {
    return (
      <div className="pt-12 space-y-8 text-center">
        <h1 className="text-3xl">
          {`No result found for "${searchParams.searchTerm}"`}
        </h1>
        <p className="text-lg">Try search something else</p>
      </div>
    )
  }
  
  return (
    <div className="">
      { results && results.map(result => (
          <h1>{result.title}</h1>
        ))
      }
    </div>
  );
}
