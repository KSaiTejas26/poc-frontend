

import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import {toast} from 'react-toastify'
import { useEffect } from 'react';


const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  const [vendor,setVendor] = useState([]);
  const [curr,setCurr] = useState('Vendors');
  const [vid, setVid] = useState('');

  useEffect(()=>{
    const getAllVendors = async ()=>{
      const data = await axios.get('http://localhost:3000/api/admin/vendors');
      console.log(data.data.data);
      setVendor(data.data.data);
    }
    getAllVendors();
  },[])




const findVendorId = (firstName, lastName) => {
    const foundVendor = vendor.find(v => 
      v.vendor_first_name === firstName && v.vendor_last_name === lastName
    );
    if (foundVendor) {
      return foundVendor._id;
    } else {
      console.log(`Vendor with first name ${firstName} and last name ${lastName} not found.`);
      // Handle case where vendor is not found, perhaps return a default ID or handle the situation accordingly
      return null; // Example: return null when vendor is not found
    }
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    if(true)
    {
      console.log('in handle submit ',jsonData)
      await axios.post(`http://localhost:3000/api/admin/addProductThroughExcel`, jsonData)
       .then((response) => {
          console.log(response);
         toast.success('product added succesfully');
        })
       .catch((error) => {
          console.log(error);
          toast.error('error while adding a product');
        });
      console.log(jsonData);
    }
   };




 
const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
        if (rows.length > 1) {
          const headers = rows[0];
          const data = rows.slice(1).map(row => {
            const rowData = {};
            const images = [];
            const productDetails = {};
            let vendorName = '';
  
            headers.forEach((header, index) => {
              if (header === 'vendor first name') {
                vendorName += row[index];
              } else if (header === 'vendor last name') {
                vendorName += ' ' + row[index];
              } else if (header.startsWith('image')) {
                if (row[index]) {
                  images.push(row[index]);
                }
              } else if (['material', 'dimensions', 'designerName', 'countryOfOrigin', 'description'].includes(header)) {
                productDetails[header] = row[index];
              } else if (header === 'price') {
                rowData[header] = parseFloat(row[index]);
              } else {
                rowData[header] = row[index];
              }
            });
  
            if (images.length > 0) {
              rowData['images'] = images;
            }
            if (Object.keys(productDetails).length > 0) {
              rowData['productDetails'] = productDetails;
            }
            if (vendorName.trim() !== '') {
              rowData['vname'] = vendorName.trim();
              // Extract first and last name from vendorName
              const names = vendorName.trim().split(' ');
              const firstName = names[0];
              const lastName = names.slice(1).join(' ');
              // Call findVendorId function to get vid
              const vid=findVendorId(firstName, lastName);
              console.log(vid);
              rowData['vid'] = vid;
            }
  
            return rowData;
          });
  
          setJsonData(data);
        }
      };
      reader.readAsArrayBuffer(selectedFile);
    } else {
      alert("Please upload a valid .xlsx file");
    }
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-2xl p-4 relative overflow-y-auto max-h-full">
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Add Multiple Products By Uploading an Excel file
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* Modal body */}
        <div className="p-4 md:p-5 space-y-4">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Add the list of multiple products directly by uploading an excel file. To add products in excel file download the template below. To better understand the attributes of the excel file, following is the explanation given below:
          </p>
          <ol className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <li>pname: Product Name</li>
            <li>brand: Company Brand Name</li>
            <li>category: Category must be from one of the list of categories in dropdown in manually add product page</li>
            <li>subcategory: Subcategory must be related to the respective category and from one of the list of subcategories in dropdown.</li>
          </ol>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Download The Template
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <a
              href="/templateAdmin.xlsx"
              download
              className="inline-block text-white no-underline bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2 hover:no-underline"
            >
              Download Template
            </a>
          </p>
        </div>
        {/* Modal footer */}
        <div className="p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
            Upload File and click on Add Products
          </p>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              Upload .xlsx file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              accept=".xlsx"
              onChange={handleFileChange}
            />
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              Only .xlsx files are allowed.
            </p>
            {file && <p className="mt-2 text-sm text-green-500">File: {file.name}</p>}
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Products
          </button>

          {jsonData && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">File Content:</h4>
              <pre className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 text-sm text-gray-900 dark:text-white rounded">
                {JSON.stringify(jsonData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
