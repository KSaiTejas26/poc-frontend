import React, { useState, useEffect } from "react";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import LineBar from './linebar'; // Assuming LineBar.js is in the same directory
import Mttr from './MttrLine';

function BasicExample() {
  const [products, setProducts] = useState([]); // Initialize with an empty array
  const [selectedValue, setSelectedValue] = useState([]);

  const options = [
    { name: "RealPage Exchange", id: 1 },
    { name: "On-Site", id: 2 },
    { name: "YieldStar", id: 3 },
    { name: "PropertyWare", id: 4 },
    { name: "RealpagePayments", id: 5 },
    { name: "UPP", id: 6 },
    { name: "ClickPay", id: 7 },
  ];

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
    // Check if the item is already selected
    if (!selectedValue.includes(selectedItem.name)) {
      const updatedSelectedValue = [...selectedValue, selectedItem.name];
      setSelectedValue(updatedSelectedValue);
      fetchProductDetails(updatedSelectedValue);
    }
  };

  const onRemove = (selectedList, removedItem) => {
    const updatedSelectedValue = selectedList.map(item => item.name);
    setSelectedValue(updatedSelectedValue);

    // Remove the product details corresponding to the removed item
    const updatedProducts = products.filter(
      product => product.product_name !== removedItem.name
    );
    setProducts(updatedProducts);

    // Fetch updated details for the remaining selected items
    fetchProductDetails(updatedSelectedValue);
  };

  useEffect(() => {
    // This will log whenever products state changes
    console.log("Products updated:", products);
  }, [products]);

  return (
    <div>
      <h2>MultiSelect Dropdown Example</h2>
      <Multiselect
        options={options}
        selectedValues={options.filter(option => selectedValue.includes(option.name))}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue="name"
      />
      {/* Render the components for LineBar and Mttr */}
      {products.length > 0 && <LineBar data1={products} />}
      {products.length > 0 && <Mttr data1={products} />}
    </div>
  );
}

export default BasicExample;
