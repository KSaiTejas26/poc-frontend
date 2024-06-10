import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import AdminHeader from "../VendorHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import DeleteIcon from '@mui/icons-material/Delete';
import ProductsRating from "./ProductsRating";
import CircularProgress from '@mui/material/CircularProgress';

const GetAllVendorProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState({
    productId:'',
    vendorId:''
  });
  const [loading, setLoading] = useState(true);

  const deleteFunction = async () => {
    try {
      console.log(data);
      const response = await axios.delete(`http://localhost:3000/api/vendor/products/${data.productId}`,{
        headers:{
          'auth_token':localStorage.getItem('token')
        }
      });
      if (response.status === 200) {
        setProducts(products.filter((product) => product._id!== data.productId));
        setOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/vendor/getvendorproducts',{
          headers: {
            'auth_token': localStorage.getItem('token')
          }
        }); // remove the id while testing chekc the backend url
        setProducts(response.data.products);
        console.log('heyy',response.data.products);  
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleProductClick = () => {
    navigate("/SoloProduct");
  };

  const filteredProducts = products.filter((product) => {
    return product.pname.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Transition show={open}>
        <Dialog className="relative z-6" onClose={setOpen}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" style={{width:'40%'}}>
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-25 w-15  items-center justify-center rounded-full bg-red-200 sm:mx-0 sm:h-15 sm:w-15" style={{padding:'10px'}} >
                        <ExclamationTriangleIcon className="h-13 w-20 text-red-900" aria-hidden="true" />
                      </div>
                      <div className="mt-2 text-center sm:ml-2 sm:mt-0 sm:text-left">
                        <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          <h4> Delete the product?</h4>
                        </DialogTitle>
                        <div className="mt-1">
                          <p className="text-sm text-gray-500">
                            Would you like to delete the product?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2">
                    <button
type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-800 sm:mt-0  sm:w-auto"
                      onClick={() => deleteFunction()}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:opacity-75 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      data-autofocus
                    >
                        Cancel
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* <AdminHeader /> */}
      {loading? (
        <div className="flex justify-center mt-20">
          <CircularProgress />
        </div>
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 justify-center flex">
              Products
            </h1>
            <div className="flex items-center justify-center mt-3">
              Search Product
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Search"
                className="block w-80 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ml-4"
              />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {filteredProducts.length > 0? (
                filteredProducts.map((product) => (
                  <div className="flex flex-col">
                    <Link to={`/SoloProduct/${product._id}`}>
                      <div key={product._id} className="relative">
                        <div className="group">
                          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                              src={product.images[0]}
                              alt={product.pname}
                              className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:opacity-75"
                            />
                          </div>
                          <div className="mt-4 flex justify-between">
                            <div>
                              <h1 className="text-sm text-gray-700">
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.pname}
                              </h1>
                              <h3 className="text-sm text-gray-700">
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.price}
                              </h3>
                            </div>
                            <ProductsRating rating={product.rating} />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="justify-center">
                      <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-900 mt-1"
                        onClick={() => {
                          setOpen(true);
                          console.log(product._id);
                          setData({productId:product._id,vendorId:product.vid})
                        }}
                      >
                        <DeleteIcon />
                        <div className="mt-0.5">Delete</div>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500">
                  No search results found.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GetAllVendorProducts;