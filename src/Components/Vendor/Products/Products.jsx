import ProductsRating from "./ProductsRating";
import { Link, useNavigate } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import AdminHeader from "../VendorHeader";
// import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import DeleteIcon from '@mui/icons-material/Delete';
const products = [
  {
    id: 1,
    name: "Product Name",
    href: "#",
    imageSrc:
      "https://mobilecontent.costco.com/live/resource/img/24w08080/24w08080-graber.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    //   price: '$35',
    color: "Black",
  },
  {
    id: 2,
    name: "Product Name",
    href: "#",
    imageSrc:
      "https://mobilecontent.costco.com/live/resource/img/24w08080/24w08080-graber-starts.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Product Name",
    href: "#",
    imageSrc:
      "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1713398-847__1&recipeName=350",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Product Name",
    href: "#",
    imageSrc:
      "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1752769-847__1&recipeName=350",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Product Name",
    href: "#",
    imageSrc:
      "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1695559-847__1&recipeName=350",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "Product Name",
    href: "#",
    imageSrc:
      "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=4000223078-847__1&recipeName=350",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 7,
    name: "Product Name",
    href: "#",
    imageSrc:
      "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1695448-847__1&recipeName=350",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 8,
    name: "Product Name",
    href: "#",
    imageSrc:
      "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1713398-847__1&recipeName=350",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 9,
    name: "Product Name",
    href: "#",
    imageSrc:
      "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=2670948-847__1&recipeName=350",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 10,
    name: "Product Name",
    href: "#",
    imageSrc:
      "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=2127653-847__1&recipeName=350",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];
export default function Products() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const handleProductClick = () => {
    navigate("/SoloProduct");
  };

  return (
    <>
    <Transition show={open}>
      <Dialog className="relative z-10" onClose={setOpen}>
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
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Delete the product?
                      </DialogTitle>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Would you like to delete the product?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 justify-center flex">
            Products
          </h1>
          <div className="flex items-center justify-center mt-3">
            Search Product
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              placeholder="Search"
              className="block w-80 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ml-4"
            />
          </div>
          
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
              <div className="flex flex-col">
                <Link to="/SoloProduct">
                <div key={product.id} className="relative ">
                  <div className="group">

                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" >
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </h3>
                      </div>
                      <ProductsRating />
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
                      console.log(product.id);
                    }}
                    >
                  <DeleteIcon/>
                    <div className="mt-0.5">Delete</div> 
                  </button>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
