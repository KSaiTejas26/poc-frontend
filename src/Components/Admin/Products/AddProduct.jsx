
import { useState, useEffect } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import AdminHeader from '../AdminHeader';
import DropDown from './Dropdown';
import CancelIcon from '@mui/icons-material/Cancel';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress from Material-UI
import axios from 'axios';
import {toast} from 'react-toastify'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function AddProduct() {
  const [loading, setLoading] = useState(false); // Add loading state

  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [imageSize, setImageSize] = useState('');
  const [data, setData] = useState([]);

  const [selectedImages, setSelectedImages] = useState([]);
  const [mainimage,setMainImage]=useState("");

 

  
  const [product, setProduct] = useState({
    pname: '',
    brand: '',
    vid: '',
    vname: '',
    category: '',
    subcategory: '',
    main_image:'',
    images: [],
    productDetails: {
      description: '',
      designerName: '',
      countryOfOrigin: '',
      material: '',
      dimensions: '',
    },
    price: 0,
  });

  const [productImages, setProductImages] = useState([]);

  const ver = ()=>{
    if(product.pname==='' || product.brand==='' || product.category==='Select Category' || product.category==='' || product.subcategory==='Select Subcategory' || product.subcategory==='' ||
    product.main_image==='' || product.images.length==0 || product.productDetails.description==='' || product.productDetails.designerName==='' || product.productDetails.countryOfOrigin===''
    || product.productDetails.material==='' || product.productDetails.dimensions==='' || product.price==0)
    {
      return 2;
    }
    return 1;
  } 
  const verify = ()=>{
  
    if(ver()==2 && images.length<4)
    {
      return 2;
    }
    else if(ver==1 && images.length<4) return 1;
    return 0;
  }
  async function fetchData() {
    axios.get('http://localhost:3000/api/category/getCategory')
     .then(response => {

        setData(response.data); // Set the fetched data into state
        console.log(response.data);
      })
     .catch(error => {
        console.log('Error while fetching data from backend:', error);
      });
  }
 
  const [vendor,setVendor] = useState([]);
  const [curr,setCurr] = useState('Vendors');
  useEffect(()=>{
    const getAllVendors = async ()=>{
      const data = await axios.get('http://localhost:3000/api/admin/vendors');
      console.log(data.data.data);
      setVendor(data.data.data);
    }
    getAllVendors();
  },[])

  const handleClick = (f,l)=>{
    setCurr(f+" "+l);
  }
  // const [images, setImages] = useState([]);
 
 
  // Function to handle file upload to Cloudinary
  async function handleFile(event) {
    loader();
    console.log(loading);
    console.log('in file handle')
    setLoading(true);
    const files = event.target.files;
    const filesArray = Array.from(files);
  
    // Iterate over each file and upload it to Cloudinary
    filesArray.forEach(async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'newpreset'); // Use your preset key here
  
      try {
        const res = await axios.post(`https://api.cloudinary.com/v1_1/dxjgbjvx3/image/upload`, formData);
        const imageUrl = res.data.secure_url;
  
        setImages((prevImages) => [...prevImages, imageUrl]); // Update images array with URL
        setProductImages((prevImages) => [...prevImages, imageUrl]); // Update productImages array with URL
        setProduct((prevProduct) => ({
          ...prevProduct,
          images: [...prevProduct.images, imageUrl], // Update product state with new image URL
        }));
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    });
  
    setLoading(false); // Stop the loader when the process is complete
  }
  

async function loader ()
{
  await setLoading(true);
  console.log('hi alive')
}

const handleRemoveImageM = () => {
  setProduct(prevProduct => ({
    ...prevProduct,
    main_image: null
  }));
  setImage(null);
  setImageName('');
  setImageSize('');
};

 
  // Function to remove an image from the images list
  // Function to remove an image from the images list
function handleRemoveImage(e,index) {
  // Remove the URL from the images array
  e.preventDefault();
  const updatedImages = [...images];
  updatedImages.splice(index, 1); // Remove the image URL at the specified index
  setImages(updatedImages); // Update the images state array
  // Also remove the corresponding URL from the productImages array within the product state
  setProduct((prevProduct) => ({
    ...prevProduct,
    images: prevProduct.images.filter((_, i) => i !== index)
  }));
}

  
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // If the input field is within productDetails, update the nested state
    if (name.startsWith("productDetails")) {
      const field = name.split(".")[1]; // Get the field name (e.g., description)
      setProduct((prevProduct) => ({
        ...prevProduct,
        productDetails: {
          ...prevProduct.productDetails,
          [field]: value,
        },
      }));
    } else {
      // Otherwise, update the top-level state
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleCloudinaryUpload = async (file) => {
    console.log(image);
    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'newpreset'); // Replace 'your_upload_preset' with your actual upload preset

      try {
        const response = await axios.post('https://api.cloudinary.com/v1_1/dxjgbjvx3/image/upload', formData);
        
        // Replace 'your_cloud_name' with your Cloudinary cloud name
        
        setLoading(false);
        // console.log("this is response.secure_url",response.data.secure_url);
        
        return response.data.secure_url;
      } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        setLoading(false);
        return null;
      }
    }
    return null;
  };



const handleCoverPhotoChange = async (event) => {
  const file = event.target.files[0];

  const imageUrl = await handleCloudinaryUpload(file);

  if (imageUrl) {
    // Update the product state with the main image URL
    setProduct((prevProduct) => ({
      ...prevProduct,
      main_image: imageUrl
    }));

    console.log(imageUrl);
  } else {
    // Handle the case when main image upload fails
    console.error("Cover photo upload failed");
  }
};
  

  const handleSubmit =  async (e) => {
    e.preventDefault();
    console.log(product)
    if(verify==0)
    {
      axios.post(`http://localhost:3000/api/admin/addproduct/${product.vid}`, product)
       .then((response) => {
          console.log(response);
          toast.success('product added succesfully');
        })
       .catch((error) => {
          console.log(error);
          toast.error('error while adding a product');
        });
      console.log(product);
    }
    else if(verify==1)
    {
      toast.warn('Please enter atleast 4 images of the product')
    }
    else
    {
      toast.warn('Please enter all the details of the product')
    }
   };
 
  const [images, setImages] = useState([]);
 
  const handleImageChange = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(files);
    const newImages = filesArray.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages,...newImages]);
  };

  useEffect(()  => {
    fetchData();
  },[]);
 

  const handleVendorSelect = (id, firstName, lastName) => {
    setCurr(`${firstName} ${lastName}`);
    setProduct(prevProduct => ({
      ...prevProduct,
      vid: id,
      vname: `${firstName} ${lastName}`
    }));
  };

 
  return (
    <>
      <AdminHeader />
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </div>
      )}
      <form className="flex item-center justify-center mt-10 mb-5">
        <div className="space-y-12 ">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Add Product</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="pname" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="pname"
                    id="pname"
                    autoComplete="pname"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={product.pname}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
 
              <div className="sm:col-span-4">
                <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">
                  Brand
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    autoComplete="brand"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={product.brand}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
 
             
 
              <div className="sm:col-span-4">
                {/* <label htmlFor="vname" className="block text-sm font-medium leading-6 text-gray-900">
                  Vendor Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="vname"
                    id="vname"
                    autoComplete="vname"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={product.vname}
                    onChange={handleInputChange}
                  />
                </div> */}
                <div className='mt-5 block text-sm font-medium leading-6 text-gray-900'>
                   <span>Select Vendor</span> <br />
                 </div>
                 <DropDown onVendorSelect={handleVendorSelect}/>
              </div>
 
             
 
              <div className="sm:col-span-4 mt-4">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Product Specification</h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                  <div className="sm:col-span-3">
                    <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                      Category
                    </label>
                    <div className="mt-2">
                      <select
                        id="category"
                        name="category"
                        autoComplete="category-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                        value={product.category}
                      >
                        
                        <option value="">Select Category</option>
                          {data.map(category => (
                            <option key={category._id} value={category.name}>{category.name}</option>
                          ))}
                      </select>
                    </div>
                  </div>
 
                  {/* Add the subcategory dropdown here */}
                  <div className="sm:col-span-3">
                    <label htmlFor="subcategory" className="block text-sm font-medium leading-6 text-gray-900">
                      Subcategory
                    </label>
                    <div className="mt-2">
                      <select
                        id="subcategory"
                        name="subcategory"
                        autoComplete="subcategory-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                        value={product.subcategory}
                      >
                        {/* Adding the default option */}
                        <option value="">Select Subcategory</option>

                        {/* Mapping through the data to populate the subcategory options */}
                        {data.map(category => (
                          category.name === product.category && category.sub_categories_list.map(subcategory => (
                            <option key={subcategory.name} value={subcategory.name}>
                              {subcategory.name} 
                            </option>
                          ))
                        ))}
                      </select>
                    </div>
                  </div>

                </div>
              </div>
              </div>
 
              
 
              <div className="flex flex-col">
                <label htmlFor="photos" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Images
                </label>
                <div className="flex items-center gap-x-3 mb-2">
                  <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                  <input
                    type="file"
                    id="photos"
                    name="photos"
                    multiple
                    accept=".jpg,.jpeg,.png"
                    min={4}
                    max={7}
                    className="hidden"
                    onChange={(e)=>{loader(),handleFile(e)}}
                    disabled={images.length >= 7}
                  />
                  <label
                    htmlFor="photos"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer"
                    style={{ opacity: images.length >= 7 ? '0.5' : '1' }}
                    onMouseOver={(event) => event.target.style.cursor = images.length >= 7 ? 'not-allowed' : 'pointer'}
                  >
                    Upload Photos (4-7)
                  </label>
                </div>
                <div className="grid grid-cols-3 gap-2">
                {images.map((imageUrl, index) => (
                <div key={index} className="relative h-12 w-12 rounded-md object-cover" style={{ height: '80px', width: '80px' }}>
                  <img src={imageUrl} alt={`Uploaded image ${index + 1}`} className="object-cover" style={{ height: '80px', width: '80px' }} />
                  <button
                    onClick={(e) => handleRemoveImage(e,index)} // Pass the index to the handleRemoveImage function
                    className="absolute top-0 right-0 text-red-500 hover:text-red-700"
                  >
                    <CancelIcon className="h-4 w-4" />
                  </button>
                </div>
              ))}

              </div>
              </div>


        {/* Add the Cover photo section here */}
        <div className="col-span-full">
          <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
            Cover photo
          </label>
          {product.main_image ? (
            <div className="mt-2 flex justify-center rounded-lg border border-solid border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <img src={image} alt="Uploaded image" className="mx-auto h-12 w-12 object-cover" />
                <p className="text-sm leading-6 text-gray-600">{imageName}</p>
                <p className="text-xs leading-5 text-gray-600">{imageSize}</p>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleRemoveImageM}
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setImage(reader.result);
                          setImageName(file.name);
                          setImageSize(`${(file.size / 1024).toFixed(2)} KB`);
                          
                        };
                        reader.readAsDataURL(file);
                        handleCoverPhotoChange(e);
                      }}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          )}
        </div>
        {/* Cover photo section ends */}
              
 
 
 
              <div className="col-span-full">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="productDetails.description"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={product.productDetails.description}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
 
              <div className="sm:col-span-4">
                <label htmlFor="designerName" className="block text-sm font-medium leading-6 text-gray-900">
                  Designer Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="productDetails.designerName"
                    id="designerName"
                    autoComplete="designerName"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                    value={product.productDetails.designerName}
                  />
                </div>
              </div>
 
              <div className="sm:col-span-4">
                <label htmlFor="countryOfOrigin" className="block text-sm font-medium leading-6 text-gray-900">
                  Country of Origin
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="productDetails.countryOfOrigin"
                    id="countryOfOrigin"
                    autoComplete="countryOfOrigin"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={product.productDetails.countryOfOrigin}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
 
              <div className="sm:col-span-4">
                <label htmlFor="material" className="block text-sm font-medium leading-6 text-gray-900">
                  Material
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="productDetails.material"
                    id="material"
                    autoComplete="material"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={product.productDetails.material}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
 
              <div className="sm:col-span-4">
                <label htmlFor="dimensions" className="block text-sm font-medium leading-6 text-gray-900">
                  Dimensions
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="productDetails.dimensions"
                    id="dimensions"
                    autoComplete="dimensions"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={product.productDetails.dimensions}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
 
              <div className="sm:col-span-4">
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                  Price
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    autoComplete="price"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={product.price}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
 
           
            </div>
          </div>
 
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
 
 