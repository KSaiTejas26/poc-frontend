import React, { useState, useContext, useEffect, useRef } from "react";
import "./SearchBar.css";
import SearchResultsList from "./SearchResultsList";
import prodcontext from '../Components/Customers/Context/ProductContext';
 
export default function SearchBar() {
  const context = useContext(prodcontext);
  const productsdata = context.category;
  const vendorsdata=context.data;
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);
 
  const fetchData = (value) => {
    const lowercasedValue = value.toLowerCase();
 
    const filteredResults = productsdata.filter((data) =>
      data.name && data.name.toLowerCase().includes(lowercasedValue)
    );
    const filteredVendors = vendorsdata.filter((data) =>
      data.brand && data.brand.toLowerCase().includes(lowercasedValue)
    );
 
    const uniqueVendors = Array.from(new Set(filteredVendors.map((data) => data.brand)));
    const uniqueCategories = Array.from(new Set(filteredResults.map((data) => data.name)));
 
    setVendors(uniqueVendors);
    setResults(uniqueCategories);
  };
 
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
    setShowSuggestions(true);
  };
 
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };
 
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
 
  return (
    <div className="input-wrapper" style={{ maxWidth: "20%" }} ref={wrapperRef}>
      <input
        className="searchBar"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
      />
      {input && showSuggestions && (results.length > 0 || vendors.length > 0) && (
        <SearchResultsList results={results} vendordata={vendors} />
      )}
    </div>
  );
}