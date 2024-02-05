import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

export default function WebSearchResults({ results }) {
  const prevPage = results.queries.previousPage;
  const nextPage = results.queries.nextPage;
  return (
    <div>
      <p className="mb-5 mt-3 text-gray-600 text-sm">
        {`About ${results.searchInformation?.formattedTotalResults} results (
        ${results.searchInformation?.formattedSearchTime} seconds)`}
      </p>
      {results.items?.map((result) => (
        <div className="mb-8 max-w-xl" key={result.link}>
          <div className="group/result-card flex flex-col">
            <Link href={result.link}>{result.formattedUrl}</Link>
            <Link
              href={result.link}
              className="group-hover/result-card:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons prevPage={prevPage} nextPage={nextPage} />
    </div>
  );
}