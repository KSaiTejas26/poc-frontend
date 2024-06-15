import "./SearchResult.css";
import { Link } from "react-router-dom";
import VendorStore from "../Components/VendorSpecific/VendorStore"
import { useNavigate } from "react-router-dom";
import { useContext,useEffect } from "react";
import prodcontext from "./Customers/Context/ProductContext";
 const SearchResult = ({ result, type }) => {
  const navigate=useNavigate();
  const context=useContext(prodcontext);
  const {filtered}=context;
  let num=false;
 
  return (
    <div
      className="search-result"
      onClick={
        (e) => {
          if(type=="vendor")
          {
            navigate(`/vendorspecific/`)
          }
          else
          {
           
            navigate(`/category/${result}`);
           
           
          }
         
        }
      }
    >
      {result}
    </div>
  );
};
 
export default SearchResult;