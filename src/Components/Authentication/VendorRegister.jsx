
 


import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

export default function AddProduct() {

  const initialVendorState = {
    vendor_first_name: '',
    vendor_last_name: '',
    email: '',
    phone_number: '',
    password: '',
    repeatPassword: '',
    business_name: '',
    gst_number: '',
    business_registration_number: '',
    company_website_url: '',
    country: '',
    street_address: '',
    city: '',
    state: '',
    zip_code: '',
    categories_list: [],
    bank_account_number: '',
    bank_account_name: '',
    ifsc_code: '',
    account_holder_name: '',
    expected_order_processing_time: '',
    average_shipping_time: '',
  };

  const [vendor, setVendor] = useState({
    vendor_first_name: '',
    vendor_last_name: '',
    email: '',
    phone_number: '',
    password: '',
    repeatPassword: '',
    business_name:'',
    gst_number:'',
    business_registration_number:'',
    company_website_url:'',
    country:'United States',
    street_address:'',
    city:'',
    state:'',
    zip_code:'',
    categories_list:[],
    bank_account_number:'',
    bank_account_name:'',
    ifsc_code:'',
    account_holder_name:'',
    expected_order_processing_time:'',
    average_shipping_time:'',
  });

  const handleCategoriesChange = (event) => {
    const { value } = event.target;
    // Split the input value by newline character to create an array of categories
    const categories = value.split('\n').map((category) => category.trim());
    setVendor({
      ...vendor,
      categories_list: categories,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleCancel = () => {
    setVendor(initialVendorState); // Reset state to initial empty values
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post request using axios
    axios.post('http://localhost:3000/api/auth/vendor/signup', vendor)
      .then((response) => {
        console.log(response);
        // Handle success, maybe show a success message
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error, maybe show an error message
      });
    console.log(vendor);
  };

  return (
    <>
      <Header />
      <form className="flex justify-center mt-10" onSubmit={handleSubmit}>
        <div className="space-y-12"> 
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-xl font-bold leading-7 text-gray-900">Vendor Application Form</h1>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* Business Name */}
              <div className="sm:col-span-4">
                <label htmlFor="business_name" className="block text-sm font-medium leading-6 text-gray-900">
                  Business Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="business_name"
                    value={vendor.business_name}
                    onChange={handleChange}
                    autoComplete="business_name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Business Name"
                  />
                </div>
              </div>

              {/* GST Number */}
              <div className="sm:col-span-4">
                <label htmlFor="gst_number" className="block text-sm font-medium leading-6 text-gray-900">
                  GST Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="gst_number"
                    value={vendor.gst_number}
                    onChange={handleChange}
                    autoComplete="gst_number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="GST Number"
                  />
                </div>
              </div>

              {/* Business Registration Number */}
              <div className="sm:col-span-4">
                <label htmlFor="business_registration_number" className="block text-sm font-medium leading-6 text-gray-900">
                  Business Registration Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="business_registration_number"
                    value={vendor.business_registration_number}
                    onChange={handleChange}
                    autoComplete="business_registration_number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Business Registration Number"
                  />
                </div>
              </div>

              {/* Company Website URL */}
              <div className="sm:col-span-4">
                <label htmlFor="company_website_url" className="block text-sm font-medium leading-6 text-gray-900">
                  Company Website URL
                </label>
                <div className="mt-2">
                  <input
                    type="url"
                    name="company_website_url"
                    value={vendor.company_website_url}
                    onChange={handleChange}
                    autoComplete="company_website_url"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Company Website URL"
                  />
                </div>
              </div>

              {/* First Name */}
              <div className="sm:col-span-3">
                <label htmlFor="vendor_first_name" className="block text-sm font-medium leading-6 text-gray-900">
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="vendor_first_name"
                    value={vendor.vendor_first_name}
                    onChange={handleChange}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="sm:col-span-3">
                <label htmlFor="vendor_last_name" className="block text-sm font-medium leading-6 text-gray-900">
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="vendor_last_name"
                    value={vendor.vendor_last_name}
                    onChange={handleChange}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={vendor.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


              {/* Phone Number */}
              <div className="sm:col-span-4">
                <label htmlFor="phone_number" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone_number"
                    name="phone_number"
                    type="tel"
                    value={vendor.phone_number}
                    onChange={handleChange}
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Country */}
              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Country
                </label>
                <div className="mt-2">
                  <select
                    name="country"
                    value={vendor.country}
                    onChange={handleChange}
                    autoComplete="country"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                  </select>
                </div>
              </div>

              {/* Street Address */}
              <div className="col-span-full">
                <label htmlFor="street_address" className="block text-sm font-medium leading-6 text-gray-900">
                  Street Address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street_address"
                    value={vendor.street_address}
                    onChange={handleChange}
                    autoComplete="street_address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Street Address"
                  />
                </div>
              </div>

              {/* City */}
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    value={vendor.city}
                    onChange={handleChange}
                    autoComplete="city"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="City"
                  />
                </div>
              </div>

              {/* State */}
              <div className="sm:col-span-2">
                <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="state"
                    value={vendor.state}
                    onChange={handleChange}
                    autoComplete="state"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="State / Province"
                  />
                </div>
              </div>

              {/* ZIP / Postal code */}
              <div className="sm:col-span-2">
                <label htmlFor="zip_code" className="block text-sm font-medium leading-6 text-gray-900">
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="zip_code"
                    value={vendor.zip_code}
                    onChange={handleChange}
                    autoComplete="zip_code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="ZIP / Postal code"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="sm:col-span-4">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={vendor.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="sm:col-span-4">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Product Information</h2>
          </div>

          <div className="col-span-full">
          <label htmlFor="categories" className="block text-sm font-medium leading-6 text-gray-900">
            Product Categories
          </label>
          <div className="mt-2">
            <textarea
              id="categories"
              name="categories"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={vendor.categories_list.join('\n')} // Join categories array with newline character
              onChange={handleCategoriesChange}
            />
          </div>
        </div>

          {/* Bank Account Name */}
          <div className="sm:col-span-4">
            <label htmlFor="bank_account_name" className="block text-sm font-medium leading-6 text-gray-900">
              Bank Account Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="bank_account_name"
                value={vendor.bank_account_name}
                onChange={handleChange}
                autoComplete="bank_account_name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Bank Account Name"
              />
            </div>
          </div>

          {/* Bank Account Number */}
          <div className="sm:col-span-4">
            <label htmlFor="bank_account_number" className="block text-sm font-medium leading-6 text-gray-900">
              Bank Account Number
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="bank_account_number"
                value={vendor.bank_account_number}
                onChange={handleChange}
                autoComplete="bank_account_number"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Bank Account Number"
              />
            </div>
          </div>

          {/* IFSC Code */}
          <div className="sm:col-span-4">
            <label htmlFor="ifsc_code" className="block text-sm font-medium leading-6 text-gray-900">
              IFSC Code
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="ifsc_code"
                value={vendor.ifsc_code}
                onChange={handleChange}
                autoComplete="ifsc_code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="IFSC Code"
              />
            </div>
          </div>

          {/* Account Holder Name */}
          <div className="sm:col-span-4">
            <label htmlFor="account_holder_name" className="block text-sm font-medium leading-6 text-gray-900">
              Account Holder Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="account_holder_name"
                value={vendor.account_holder_name}
                onChange={handleChange}
                autoComplete="account_holder_name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Account Holder Name"
              />
            </div>
          </div>

          {/* Logistic and Operation Information */}
          <div className="sm:col-span-4">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Logistic and Operation Information</h2>
          </div>

          {/* Expected Order Processing Time */}
          <div className="sm:col-span-4">
            <label htmlFor="expected_order_processing_time" className="block text-sm font-medium leading-6 text-gray-900">
              Expected Order Processing Time
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="expected_order_processing_time"
                value={vendor.expected_order_processing_time}
                onChange={handleChange}
                autoComplete="expected_order_processing_time"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Expected Order Processing Time"
              />
            </div>
          </div>

          {/* Average Shipping Time */}
          <div className="sm:col-span-4">
            <label htmlFor="average_shipping_time" className="block text-sm font-medium leading-6 text-gray-900">
              Average Shipping Time
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="average_shipping_time"
                value={vendor.average_shipping_time}
                onChange={handleChange}
                autoComplete="average_shipping_time"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Average Shipping Time"
              />
            </div>
          </div>
        </div>

         {/* Submit button */}
         <div className="mt-auto flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={handleCancel}>
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
