import Link from "next/link";

export default function ImageSearchResults({ results }) {
  return (
    <div className="mt-4 sm:pb-24 pb-40">
      <div className="px-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-4">
        {results.items.map((result) => (
          <div className="mb-8" key={result.link}>
            <div className="group/img-result">
              <Link href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className="h-60 w-full group/img-result-hover:shadow-xl object-contain transition-shadow duration-300"
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="group-hover/img-result:underline truncate text-xl">
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="group-hover/img-result:underline truncate text-gray-600">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}