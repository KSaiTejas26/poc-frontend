import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import Navbar from './Navbar';
import prodcontext from './Context/ProductContext';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const CheckoutStep = ({ stepNumber, title, active, body, onClick }) => (
  <div className="checkoutStep">
    <div onClick={onClick} className={`checkoutHeader ${active && "active"}`}>
      <div className="flex items-center">
        <span className="stepNumber mr-2">{stepNumber}</span>
        <span className="stepTitle">{title}</span>
      </div>
    </div>
    {active && body && (
      <div className="stepBody bg-gray-100 rounded-lg shadow-md p-4 text-base font-medium">
        {body}
      </div>
    )}
  </div>
);

const Address = ({ adr, selectAddress, enableAddressEditForm, confirmDeliveryAddress, onAddressSubmit }) => (
  <div className="addressContainer">
    <div className="radioContainer">
      <input
        name="address"
        onClick={() => selectAddress(adr)}
        type="radio"
        checked={adr.selected}
        className="addressRadio"
      />
    </div>
    <div className="addressInfo">
      {!adr.edit ? (
        <div className="addressDetailsContainer">
          <div className="addressDetail">
            <div className="addressHeader">
              <span className="addressName">{adr.name}</span>
              <span className="addressType">{adr.addressType}</span>
              <span className="addressMobileNumber">{adr.mobileNumber}</span>
            </div>
            {adr.selected && (
              <span onClick={() => enableAddressEditForm(adr)} className="editAddress">
                EDIT
              </span>
            )}
          </div>
          <div className="fullAddress">
            {adr.address} <br /> {`${adr.city}, ${adr.state} - ${adr.pinCode}`}
          </div>
          {adr.selected && (
            <button onClick={() => confirmDeliveryAddress(adr)} className="deliveryButton">
              DELIVERY HERE
            </button>
          )}
        </div>
      ) : (
        <AddressForm
          withoutLayout={true}
          onSubmitForm={onAddressSubmit}
          initialData={adr}
          onCancel={() => enableAddressEditForm({ ...adr, edit: false })}
        />
      )}
    </div>
  </div>
);

const AddressForm = ({ onSubmitForm, initialData = {}, onCancel }) => {
  const [formData, setFormData] = useState(initialData || {
    name: "",
    mobileNumber: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitForm(formData);
  };

  return (
    <div className="addressFormContainer">
      <h2>Address Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label>Pin Code</label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
          />
        </div>
        <div className="formActions">
          <button type="submit">Submit</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

const CartPage = () => {
  const context = useContext(prodcontext);
  const { cart } = context;

  const handleDeleteClick = (productId) => {
    // Implement delete functionality here
    console.log(`Deleting product with ID: ${productId}`);
  };

  return (
    <div className="mt-6">
      <ul className="divide-y divide-gray-200">
        {cart.map((product) => (
          <li key={product.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3 className="text-xl font-bold">
                    <a href={product.href}>{product.product_name}</a>
                  </h3>
                  <p className="ml-4">{product.price}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.product_brand}</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Qty {product.quantity}</p>
                <div className="flex">
                  <button
                    onClick={() => handleDeleteClick(product._id)}
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PriceDetails = ({ totalItem, totalPrice }) => {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg" style={{ width: "100%" }}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Price Details</div>
        <div className="flex justify-between mb-4">
          <div className="text-gray-700">Price ({totalItem} items)</div>
          <div className="font-bold">${totalPrice}</div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="text-gray-700">Delivery Charges</div>
          <div className="font-bold">FREE</div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-700">Total Amount</div>
          <div className="font-bold">${totalPrice}</div>
        </div>
      </div>
    </div>
  );
};

const CheckoutPage = () => {
  const navigate=useNavigate();
  const context = useContext(prodcontext);
  const {makeOrder,cart}=context;
  const [newAddress, setNewAddress] = useState(false);
  const [address, setAddress] = useState([
    {
      _id: 1,
      name: "John Doe",
      mobileNumber: "1234567890",
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      pinCode: "12345",
      addressType: "Home",
      selected: false,
      edit: false,
    },
    {
      _id: 2,
      name: "Jane Smith",
      mobileNumber: "0987654321",
      address: "456 Elm St",
      city: "Othertown",
      state: "NY",
      pinCode: "67890",
      addressType: "Office",
      selected: false,
      edit: false,
    },
  ]);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // Track current step

  const user = {
    address: {
      address: "123 Main St",
      emailAddress: "john.doe@example.com",
    },
  };

  const onAddressSubmit = (addressData) => {
    
    const updatedAddress = [...address];
    const index = updatedAddress.findIndex((adr) => adr._id === addressData._id);
    if (index !== -1) {
      updatedAddress[index] = { ...addressData, edit: false };
    } else {
      updatedAddress.push({ ...addressData, _id: Date.now(), selected: false, edit: false });
    }
    setAddress(updatedAddress);
    setNewAddress(false); // Hide the form after submitting
  };

  const enableAddressEditForm = (selectedAddress) => {
    const updatedAddress = address.map((adr) =>
      adr._id === selectedAddress._id ? { ...adr, edit: true } : adr
    );
    setAddress(updatedAddress);
  };

  const selectAddress = (adr) => {
    const updatedAddress = address.map((item) =>
      item._id === adr._id ? { ...item, selected: true } : { ...item, selected: false }
    );
    setAddress(updatedAddress);
    setSelectedAddress(adr);
  };

  const confirmDeliveryAddress = (adr) => {
    selectAddress(adr);
    setConfirmAddress(true);
    setCurrentStep(2);
  };

  const handleOrderSummary =async () => {
    
    setOrderSummary(true);
    setCurrentStep(3);
    console.log(selectedAddress);
    console.log(cart);
    const response=await makeOrder(cart,selectedAddress);
    console.log(response);
    toast.success("Order Placed Successfully");
    navigate('/customer');


  };

  


  
  const [sum, setsum] = useState(0)
  const calculateTotal=()=>{
    let total=0;
    cart.map((prod)=>{
      total+=Number(prod.price);
    });
    setsum(total);
  }
 useEffect(() => {
   calculateTotal();
 
   
 }, [])
 
  const steps = [
    {
      id: 1,
      title: "Select Delivery Address",
      active: currentStep === 1,
      body: currentStep === 1 ? (
        <div>
          {address.map((adr) => (
            <Address
              key={adr._id}
              adr={adr}
              selectAddress={selectAddress}
              enableAddressEditForm={enableAddressEditForm}
              confirmDeliveryAddress={confirmDeliveryAddress}
              onAddressSubmit={onAddressSubmit}
            />
          ))}
          <button onClick={() => setNewAddress(!newAddress)} className="addNewAddress">
            Add New Address
          </button>
          {newAddress && (
            <AddressForm
              onSubmitForm={onAddressSubmit}
              onCancel={() => setNewAddress(false)}
            />
          )}
        </div>
      ) : (
        <div className="stepCompleted p-4 bg-green-100 rounded-lg shadow-md">
          {`${selectedAddress.address}, ${selectedAddress.city}, ${selectedAddress.state} - ${selectedAddress.pinCode}`}
        </div>
      )
    },
    {
      id: 2,
      title: "Order Summary",
      active: currentStep === 2,
      body: (
        <>
          <CartPage />
          {selectedAddress && (
            <div className="selectedAddressContainer bg-white p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-lg font-semibold mb-2">Selected Address:</h3>
            <p className="mb-1"><span className="font-medium">Name:</span> {selectedAddress.name}</p>
            <p className="mb-1"><span className="font-medium">Address:</span> {selectedAddress.address}</p>
            <p className="mb-1"><span className="font-medium">City:</span> {selectedAddress.city}, {selectedAddress.state} - {selectedAddress.pinCode}</p>
            <button
              onClick={handleOrderSummary}
              className="proceedButton mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Proceed to Order Confirmation
            </button>
          </div>
          )}
        </>
      ),
    },
    {
      id: 3,
      title: "Confirm Order",
      active: currentStep === 3,
      body: orderConfirmation && (
        <div className="orderConfirmContainer">
          <div className="orderConfirmWrapper">
            <span className="orderConfirmTitle">Order Confirmed Successfully!</span>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <>
    <div className="my-20">
    <Navbar/>
    </div>
    <div className="checkoutPageContainer flex justify-center mt-10">
      <div className="checkoutContainer flex flex-wrap justify-between" style={{ width: '80%' }}>
        <div className="stepsContainer w-full sm:w-3/4 px-4 mb-8 sm:mb-0">
          {/* Updated width for steps container */}
          {steps.map((step) => (
            <CheckoutStep
              key={step.id}
              stepNumber={step.id}
              title={step.title}
              active={step.active}
              body={step.body}
              onClick={() => setCurrentStep(step.id)}
            />
          ))}
        </div>
        {console.log(selectedAddress)}
        <div className="priceContainer w-full sm:w-1/4 px-4">
          {/* Updated width for price container */}
          <PriceDetails totalItem={cart.length} totalPrice={sum} />
        </div>
      </div>
    </div>
    </>
  );
};

export default CheckoutPage;
