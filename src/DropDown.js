import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Criticals from './Criticals';

function BasicExample() {
  const [products, setProducts] = useState([]); // State to hold products data
  const [selectedProduct, setSelectedProduct] = useState(''); // State to hold the selected product
  const [submittedProduct, setSubmittedProduct] = useState(null); // State to hold the submitted product data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/onlydata');
        setProducts(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = () => {
    setSubmittedProduct(selectedProduct);
  };

  return (
    <div className="sm:col-span-3 w-50 items-center justify-center">
      <label htmlFor="product" className="block text-sm font-medium leading-6 text-gray-900">
        Select Product
      </label>
      <div className="mt-2">
        <select
          id="product"
          name="product"
          autoComplete="product-name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          <option value="" disabled>Select a product</option>
          {products.map((product) => (
            <option key={product.id} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
      >
        Submit
      </button>
      {submittedProduct && <Criticals key={submittedProduct} data1={submittedProduct} />}
    </div>
  );
}

export default BasicExample;
