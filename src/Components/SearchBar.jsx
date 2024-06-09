import { useState } from "react";
// import { FaSearch } from "react-icons/fa";
import productsdata from "../Components/Customers/CategoryWiseProductPage/spendproducts.json"
import "./SearchBar.css";
import SearchResultsList from "./SearchResultsList";
export default function SearchBar(){
  const [input, setInput] = useState("");
  const [results, setResults] = useState(new Set());
  
  const fetchData = (value) => {
    const results = productsdata.filter((data) => {
      return (
        value &&
        data &&
        data.pname &&
        data.pname.toLowerCase().includes(value)
      );
    });
    const tempSet = new Set(results)
    console.log(tempSet);
    setResults(Array.from(tempSet))
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper" style={{maxWidth:"20%"}}>
      <input
        className="searchBar"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        />
        {results && results.length > 0 && <SearchResultsList results={results} />}
    </div>
  );
};

