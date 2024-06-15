import React, { useState, useEffect } from 'react';
import prodcontext from './ProductContext';
import axios from 'axios';
import Spinner from '../Spinner';
import { useNavigate } from 'react-router-dom';

function ProductState(props) {
  const navigate=useNavigate();
    const initialproducts = [];
    const initialcategory = [];
    const initialcart = [];
    const [data, setData] = useState(initialproducts);
    const [category, setCat] = useState(initialcategory);
    const [cart, setCart] = useState(initialcategory);
    // localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lciI6eyJpZCI6IjY2NWQ2OTA4MWJkNDdiODZiZGMwN2ExNCJ9LCJpYXQiOjE3MTgwODg3Nzl9.cVGl7KFHiOZE2e4E8hokr65nLS_oKa-99tG-dq-rrA8");
    
    const getProds = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/product/getProducts", {
          headers: {
            "Content-Type": "application/json",
            auth_token:localStorage.getItem("token"),
          }
        });
        const responseData = await response.data;
        setData(responseData);
      } catch (error) {
        console.log("Error in axios getProds");
      }
    }

    const getCategory = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/customer/getCategory", {
          headers: {
            "Content-Type": "application/json",
            auth_token:localStorage.getItem("token"),
           
          }
        });
        const responseData = await response.data;
        setCat(responseData);
      } catch (error) {
        console.log("Error in axios getCategory");
      }
    }
    const getCart=async()=>{
      const token=localStorage.getItem('token');
      if(!token)
      {
        navigate('/');
      }
      try {
        const response = await axios.get("http://localhost:3000/api/auth/customer/getCart/", {
          headers: {
            "Content-Type": "application/json",
            auth_token:localStorage.getItem("token"),
          }
        });
        const responseData = await response.data;
        setCart(responseData);
        console.log(cart);
      } catch (error) {
        console.log(error);
      }
    }
    const deleteCart=async(id)=>{
      const token=localStorage.getItem('token');
      if(!token)
      {
        navigate('/');
        
      }
      try {
        const response = await axios.delete(`http://localhost:3000/api/auth/customer/deleteCart/${id}`, {
          headers: {
            "Content-Type": "application/json",
            // "auth_token":token
            auth_token:localStorage.getItem("token"),
          }
        });
        const newcart=cart.filter((ele)=>{
          return ele._id!=id
        })
        setCart(newcart);
      } catch (error) {
        console.log(error);
      }

    }
    const addCart=async(obj)=>{
      const token=localStorage.getItem('token');
      try{
        const response = await axios.post(
          "http://localhost:3000/api/auth/customer/addToCart/",
          obj,{
            headers: {
              "Content-Type": "application/json",
              // "auth_token":token
              auth_token:localStorage.getItem("token"),
            }
          }
        );
      }
      catch(error){
        console.log(error);
      }
      getCart();
      
    }
    useEffect(() => {
      getProds();
      getCategory();
      getCart();
    }, []);

    useEffect(() => {
      console.log('Category state updated:', category);
      console.log('Product state updated:', data);

    }, [category,data]);

    if (data.length === 0) {
      return <div className="container"><Spinner /></div>; // You can display a loading indicator or any other UI while waiting for the data
    }

    return (
      <prodcontext.Provider value={{ data, getProds, cart, category,deleteCart,setCart,addCart }}>
        {props.children}
      </prodcontext.Provider>
    );
}

export default ProductState;
