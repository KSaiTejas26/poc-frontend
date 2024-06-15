import "./SearchResultsList.css";
import SearchResult from "./SearchResult";
 
const SearchResultsList = ({ results, vendordata }) => {
  return (
    <div className="results-list">
      {/* {console.log("In search list", results)}
      {console.log("In search list", vendordata)} */}
 
      {results.map((result, id) => (
        <SearchResult result={result} key={id} type={"category"} />
      ))}
 
      {vendordata.map((vendor, id) => (
        <SearchResult result={vendor} key={id} type={"vendor"} />
      ))}
    </div>
  );
};
 
export default SearchResultsList;