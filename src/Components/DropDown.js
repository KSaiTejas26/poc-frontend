// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Multiselect from "multiselect-react-dropdown";
// import LineBar from './linebar'; // Assuming LineBar.js is in the same directory
// import Mttr from './MttrLine';
// import WarningsTable from './WarningsTable';
// import SreNonSreTable from './SreNonSreTable';

// function BasicExample() {
//   const [products, setProducts] = useState([]); // Initialize with an empty array
//   const [selectedValue, setSelectedValue] = useState([]);

//   const options = [
//     { name: "RealPage Exchange", id: 1 },
//     { name: "On-Site", id: 2 },
//     { name: "YieldStar", id: 3 },
//     { name: "PropertyWare", id: 4 },
//     { name: "RealpagePayments", id: 5 },
//     { name: "UPP", id: 6 },
//     { name: "ClickPay", id: 7 },
//   ];

//   const fetchProductDetails = async (selectedList) => {
//     try {
//       const response = await axios.post("http://localhost:5000/search", {
//         products: selectedList,
//       });
//       setProducts(response.data);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const onSelect = (selectedList, selectedItem) => {
//     // Check if the item is already selected
//     if (!selectedValue.includes(selectedItem.name)) {
//       const updatedSelectedValue = [...selectedValue, selectedItem.name];
//       setSelectedValue(updatedSelectedValue);
//       fetchProductDetails(updatedSelectedValue);
//     }
//   };

//   const onRemove = (selectedList, removedItem) => {
//     const updatedSelectedValue = selectedList.map(item => item.name);
//     setSelectedValue(updatedSelectedValue);

//     // Remove the product details corresponding to the removed item
//     const updatedProducts = products.filter(
//       product => product.product_name !== removedItem.name
//     );
//     setProducts(updatedProducts);

//     // Fetch updated details for the remaining selected items
//     fetchProductDetails(updatedSelectedValue);
//   };

//   useEffect(() => {
//     // This will log whenever products state changes
//     console.log("Products updated:", products);
//   }, [products]);

//   return (
//     <div>
//       <h2>MultiSelect Dropdown Example</h2>
//       <Multiselect
//         options={options}
//         selectedValues={options.filter(option => selectedValue.includes(option.name))}
//         onSelect={onSelect}
//         onRemove={onRemove}
//         displayValue="name"
//       />
//       {/* Render the components for LineBar and Mttr */}
//       {products.length > 0 && <LineBar data1={products} />}
//       {products.length > 0 && <Mttr data1={products} />}
//       {products.length > 0 && <WarningsTable data1={products} />}
//       {products.length>0 && <SreNonSreTable data1={products}/>}
//     </div>
//   );
// }

// export default BasicExample;



import React, { useState, useEffect } from "react";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import LineBar from './linebar'; // Assuming LineBar.js is in the same directory
import Mttr from './MttrLine';
import Infra from './mttrchart';
import WarningsTable from './WarningsTable';
import SreNonSreTable from './SreNonSreTable';
import CritsBar from './CritsBar'
import Avgmttr from './Avgmttr';
 
function BasicExample() {
  const [products, setProducts] = useState([]); // Initialize with an empty array
  const [selectedValue, setSelectedValue] = useState([]);
 
  const options = [
    { name: "All", id: 0 }, // Add All option
    { name: "RealPage Exchange", id: 1 },
    { name: "On-Site", id: 2 },
    { name: "YieldStar", id: 3 },
    { name: "PropertyWare", id: 4 },
    { name: "RealpagePayments", id: 5 },
    { name: "UPP", id: 6 },
    { name: "ClickPay", id: 7 },
  ];
 
  const fetchProductDetails = async (selectedList, isAllSelected = false) => {
    try {
      const url = "http://localhost:5000/search";
 
      const productsToSend = isAllSelected
        ? options.filter(option => option.name !== "All").map(option => option.name)
        : selectedList;
 
      const response = await axios.post(url, {
        products: productsToSend,
      });
      setProducts(response.data);
    } catch (e) {
      console.error(e);
    }
  };
 
  const onSelect = (selectedList, selectedItem) => {
    if (selectedItem.name === "All") {
      const allProducts = options.map(option => option.name).filter(name => name !== "All");
      setSelectedValue(allProducts);
      fetchProductDetails(allProducts, true);
    } else {
      if (!selectedValue.includes(selectedItem.name)) {
        const updatedSelectedValue = [...selectedValue, selectedItem.name];
        setSelectedValue(updatedSelectedValue);
        fetchProductDetails(updatedSelectedValue);
      }
    }
  };
 
  const onRemove = (selectedList, removedItem) => {
    if (removedItem.name === "All") {
      setSelectedValue([]);
      setProducts([]);
    } else {
      const updatedSelectedValue = selectedList.map(item => item.name);
      setSelectedValue(updatedSelectedValue);
 
      // Remove the product details corresponding to the removed item
      const updatedProducts = products.filter(
        product => product.product_name !== removedItem.name
      );
      setProducts(updatedProducts);
 
      // Fetch updated details for the remaining selected items
      fetchProductDetails(updatedSelectedValue);
    }
  };
 
  useEffect(() => {
    // This will log whenever products state changes
    console.log("Products updated:", products);
  }, [products]);
 
  return (
    <div>
      {/* <h2>MultiSelect Dropdown Example</h2> */}
      <Multiselect
        options={options}
        selectedValues={options.filter(option => selectedValue.includes(option.name))}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue="name"
      />
      {/* Render the components for LineBar and Mttr */}
      
      {/* {products.length > 0 && <Mttr data1={products} />}
      {products.length > 0 && <Infra data1={products} />}
      {products.length > 0 && <WarningsTable data1={products} />} */}
      {/* {products.length>0 && <SreNonSreTable data1={products}/>} */}

      <div className="row my-5">
        <div className="col-md-6" >
       
        {products.length > 0 && <Infra data1={products} />}
        </div>
        <div className="col-md-6">
        {/* {products.length > 0 && <LineBar data1={products} />} */}
        {products.length > 0 && <LineBar data1={products} />}
 
 
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
        {products.length > 0 && <Avgmttr data1={products} />}
       
        </div>
        <div className="col-md-6">
        {products.length > 0 && <CritsBar data1={products} />}
        </div>
      </div>
      <div className="mx-5">
      {products.length > 0 && <WarningsTable data1={products} />}
      </div>
    
    </div>
  );
}
 
export default BasicExample;