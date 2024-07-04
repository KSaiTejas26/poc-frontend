import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Criticals from './Criticals';
import Mttr from './mttr';
import Pie from './pie';
import Pie1 from './pie1';
function BasicExample() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [submittedProduct, setSubmittedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/onlydata');
        console.log(response);
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

  const handleChange = async (e) => {
    setSelectedProduct(e.target.value);
    const url = `http://localhost:5000/getCritics/${e.target.value}`;
    const res = await axios.get(url);
    console.log('sssssssssssssssssss ', res.data[0]);
    setSubmittedProduct(res.data[0]);
  }
  return (
    <div className="sm:col-span-3 flex flex-col" style={{ background: '#0b1826' }}>
      <label htmlFor="product" className="block text-sm font-medium leading-6 text-gray-900">
        Select Product
      </label>
      <div className="my-5">
        <div className='flex justify-center'>

          <select
            id="product"
            name="product"
            autoComplete="product-name"
            className="block flex jsutify-center items-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            value={selectedProduct}
            onChange={(e) => handleChange(e)}
          >
            <option value="" disabled>Select a product</option>
            {products.map((product) => (
              <option key={product.id} value={product}>
                {product}
              </option>
            ))}
          </select>

        </div>
      </div>
      {/* <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
      >
        Submit
      </button> */}
      <div className='row my-6 d-flex'>
        <div className='col-md-6 d-flex justify-content-center'>
          {submittedProduct && <Criticals key={submittedProduct} data1={submittedProduct} />}
        </div>
        <div className='col-md-6 justify-content-center'>
          {submittedProduct && <Mttr key={submittedProduct} data1={submittedProduct} />}
        </div>
      </div>
      <div className='row my-6 d-flex'>
        <div className='col-md-6 d-flex justify-content-center'>
          {submittedProduct && <Pie key={submittedProduct} data1={submittedProduct} />}
        </div>
        <div className='col-md-6 d-flex justify-content-center'>
          {submittedProduct && <Pie1 key={submittedProduct} data1={submittedProduct} />}
        </div>
      </div>
    </div>
  );
}

export default BasicExample;
