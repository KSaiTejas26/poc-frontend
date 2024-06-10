 
import { useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import SoloProduct from './SoloProduct'
import Header from '../../Customers/Navbar'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AdminHeader from '../AdminHeader'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
 
// export default function SoloProductMain({ productId }) {
  export default function SoloProductMain({productId}) {
    const {id} = useParams();
 
  const [productName, setProductName] = useState('');
const [productDescription, setProductDescription] = useState('');
const [productPrice, setProductPrice] = useState(0);
const [productRating, setProductRating] = useState(0);
  const [product, setProduct] = useState(null)
  const [vendordata, setvendordata] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [editing,setEditing] = useState(false);
 
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`http://localhost:3000/api/vendor/getsoloproduct/${id}`)
        setProduct(response.data);
        console.log('data ',response.data);
       
      } catch (err) {
        console.error('Failed to fetch product:', err)
      }
    }
    fetchProduct()
  }, [editing,productId])
 
  const handleEditClick = () => {
    console.log(productId);
    setEditing(true);
    setProductName(product.pname);
    setProductDescription(product.productDetails.description);
    setProductPrice(product.price);
    setProductRating(product.rating)
  };
 
 
  const handleSaveClick = async () => {
    try {
      console.log(productId);
      const updatedProduct = {
        pname: productName,
        productDetails: {
          material:product.productDetails.material,
          dimensions:product.productDetails.dimensions,
          designerName:product.productDetails.designerName,
          countryOfOrigin:product.productDetails.countryOfOrigin,
          description: productDescription },
        price: productPrice,
        // price: productPrice,
        images: product.images,
        rating:productRating
      };
      const response = await axios.put(`http://localhost:3000/api/vendor/soloproduct/update/${product._id}`, updatedProduct);
      console.log("kaushi",response.data);
      // setProduct(response.data);
      setEditing(false);  
    } catch (err) {
      console.error('Failed to update product:', err);
    }
  };
 
 
 
 
 
  if (!product) return <div><h1>Loading...</h1></div>
 
  return (
    <div className="bg-white">
 
      <AdminHeader/>
     
      <div className="pt-1">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs && product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {/* {product.pname} */}
              </a>
            </li>
          </ol>
        </nav>
 
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.main_image}
              alt={`Image 3`}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8" hidden={!product ||!product.images}>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product?.images?.[1]}
                alt={`Image 1`}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product?.images?.[2]}
                alt={`Image 2`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product?.images?.[0]}
              alt={`Image 0`}
              className="h-full w-full object-cover object-center"
            />
          </div>
         
        </div>
 
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          {editing ? (
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full p-2 pl-10 text-sm text-gray-700"
              />
            ) : (
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product?.pname}</h1>
            )}
            {/* company name will be fetched from vendor table */}
            {editing ? (
              <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="w-full p-2 pl-10 text-sm text-gray-700"
              />
            ) : (
              <p>{product.productDetails.description}</p>
            )}
          </div>
 
          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            {editing ? (
              <input
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="w-full p-2 pl-10 text-sm text-gray-700"
              />
            ) : (
              <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>
            )}
 
            {/* Reviews */}
            <div className="mt-6">
  <h3 className="sr-only">Reviews</h3>
  <div className="flex items-center">
    {editing ? (
      <input
        type="number"
        value={productRating}
        onChange={(e) => setProductRating(e.target.value)}
        className="w-full p-2 pl-10 text-sm text-gray-700"
      />
    ) : (
      <div className="flex items-center">
        {[0, 1, 2, 3, 4].map((rating) => (
          <StarIcon
            key={rating}
            className={classNames(
              productRating > rating ? 'text-amber-200' : 'text-slate-200',
              'h-5 w-5 flex-shrink-0'
            )}
            aria-hidden="true"
          />
        ))}
      </div>
    )}
    <p className="sr-only">{productRating} out of 5 stars</p>
  </div>
</div>
 
            <form className="mt-10">
             
              {/* Sizes */}
              {product.sizes && (
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Size guide
                    </a>
                  </div>
 
                  <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                              active ? 'ring-2 ring-indigo-500' : '',
                              'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? 'border' : 'border-2',
                                    checked ? 'border-indigo-500' : 'border-transparent',
                                    'pointer-events-none absolute -inset-px rounded-md'
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}
 
              {/* Edit button */}
              {!editing && (<button
                type="button"
                onClick={handleEditClick}
                className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Edit
              </button>)}
 
              {/* Save button (only visible when editing) */}
              {editing && (
                <button
                  type="button"
                  onClick={handleSaveClick}
                  className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              )}
            </form>
          </div>
 
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
           
            <div>
 
              <div className="space-y-6">
                {/* <p className="text-base text-gray-900">{product.productDetails.description}</p> */}
              </div>
            </div>
 
          </div>
        </div>
      </div>
      <SoloProduct product={product}/>
    </div>
  )
}
 