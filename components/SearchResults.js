import PaginationsButton from "./PaginationsButton";
function SearchResults({ result }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-300 text-md mb-5 mt-3">
        About {result.searchInformation?.formattedTotalResults} results (
        {result.searchInformation?.formattedSearchTime} Seconds)
      </p>
      {/* body */}
      {result.items?.map((res) => (
        <div key={res.link} className="max-w-xl mb-8">
          <div className="group flex flex-col">
            <a href={res.link} className="text-gray-500 line-clamp-3">
              {res.formattedUrl}
            </a>
            <a
              className="truncate text-xl text-blue-500 font-medium group-hover:underline"
              href={res.link}
            >
              {res.title}
            </a>
          </div>
          <p className="line-clamp-3 text-gray-400">{res.snippet}</p>
        </div>
      ))}
      <PaginationsButton />
    </div>
  );
}

export default SearchResults;
