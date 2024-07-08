import React, { useState, useEffect } from "react";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import LineBar from './linebar'; // Assuming LineBar.js is in the same directory
import Mttr from './mttrchart'
function BasicExample() {
  const [products, setProducts] = useState(null); // Initialize with null or []
  const [options] = useState([
    { name: "RealPage Exchange", id: 1 },
    { name: "On-Site", id: 2 },
    { name: "YieldStar", id: 3 },
    { name: "PropertyWare", id: 4 },
    { name: "RealpagePayments", id: 5 },
    { name: "UPP", id: 6 },
    { name: "ClickPay", id: 7 },
  ]);
  const [selectedValue, setSelectedValue] = useState([]);

  const fetchProductDetails = async (selectedList) => {
    try {
      const response = await axios.post("http://localhost:5000/search", {
        products: selectedList,
      });
      setProducts(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const onSelect = (selectedList, selectedItem) => {
    const updatedSelectedValue = [...selectedValue, selectedItem.name];
    setSelectedValue(updatedSelectedValue);
    fetchProductDetails(updatedSelectedValue);
  };

  const onRemove = (selectedList, removedItem) => {
    const updatedSelectedValue = selectedList.filter(item => item.name !== removedItem.name);
    setSelectedValue(updatedSelectedValue);
    fetchProductDetails(updatedSelectedValue);
  };

  // Use useEffect to trigger updates whenever products state changes
  useEffect(() => {
    // This function will execute whenever products state changes
    console.log("Products updated:", products);
  }, [products]);

  return (
    <div>
      <h2>MultiSelect Dropdown Example</h2>
      <Multiselect
        options={options}
        selectedValues={selectedValue}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue="name"
      />
      {/* Render product details or other components as needed */}
      {products && <LineBar data1={products}/>}
      {/* {products && <Mttr data1={products}/>} */}
    </div>
  );
}

export default BasicExample;
