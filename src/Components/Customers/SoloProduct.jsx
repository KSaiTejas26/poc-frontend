
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'
 
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
 
const SoloProduct = ({ product }) => {
 
  if (!product) {
    return <div>Loading...</div>;
  }
  const [material, setMaterial] = useState(product.productDetails.material);
  const [dimensions, setDimensions] = useState(product.productDetails.dimensions);
  const [designerName, setDesignerName] = useState(product.productDetails.designerName);
  const [countryOfOrigin, setCountryOfOrigin] = useState(product.productDetails.countryOfOrigin);
  const [productDetails,setproductdetails]=useState([product.productDetails]);
 
  const [updatedFeatures, setUpdatedFeatures] = useState({
    material,
    dimensions,
    designerName,
    countryOfOrigin,
    description:product.productDetails.description,
  });
 
  useEffect(() => {
    console.log('hey', product.productDetails);
  }, []);
 
  const [isEditing, setIsEditing] = useState(false);
 
    const handleCancel = ()=>{
      setIsEditing(!isEditing);
    }
  const handleFeatureChange = (key, value) => {
    setUpdatedFeatures({
      ...updatedFeatures,
      [key]: value,
    });
  };
 
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };
 
//   const handleSave = () => {
//     // Send updatedFeatures data to the backend
 
//     axios.put(`http://localhost:3000/api/vendor/soloproduct/update/${product._id}`, {
//       productDetails: updatedFeatures
//     })
//       .then(data => {
//         console.log('Success:', data);
//         // Optionally, update the original features state with the updatedFeatures
//         setMaterial(updatedFeatures.material);
//         setDimensions(updatedFeatures.dimensions);
//         setDesignerName(updatedFeatures.designerName);
//         setCountryOfOrigin(updatedFeatures.countryOfOrigin);
//         setIsEditing(false); // Exit edit mode
//         toast.success('Details of the product updated succesfully')
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         // Handle error
//         toast.success('error while updating the product details')
//       });
//   };
 
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 items-start gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div>
         
          <h2 className="text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
 
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
  <div className="border-t border-gray-200 pt-4">
    <dt className="font-medium text-gray-900">
      <span style={{ fontSize: '20px', fontWeight: '700', color: '#333' }}>Material</span>
    </dt>
    <dd className="mt-2 text-sm text-gray-500">
      {isEditing? (
        <textarea
          value={updatedFeatures.material}
          onChange={(e) => handleFeatureChange('material', e.target.value)}
          className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
          style={{
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        />
      ) : (
        <span style={{ fontSize: '18px', color: '#666' }}>{material}</span>
      )}
    </dd>
  </div>
  <div className="border-t border-gray-200 pt-4">
    <dt className="font-medium text-gray-900">
      <span style={{ fontSize: '20px', fontWeight: '700', color: '#333' }}>Dimensions</span>
    </dt>
    <dd className="mt-2 text-sm text-gray-500">
      {isEditing? (
        <textarea
          value={updatedFeatures.dimensions}
          onChange={(e) => handleFeatureChange('dimensions', e.target.value)}
          className="bg-white focus:outline-none w-full"
          style={{
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        />
      ) : (
        <span style={{ fontSize: '18px', color: '#666' }}>{dimensions}</span>
      )}
    </dd>
  </div>
  <div className="border-t border-gray-200 pt-4">
    <dt className="font-medium text-gray-900">
      <span style={{ fontSize: '20px', fontWeight: '700', color: '#333' }}>Designer</span>
    </dt>
    <dd className="mt-2 text-sm text-gray-500">
      {isEditing? (
        <textarea
          value={updatedFeatures.designerName}
          onChange={(e) => handleFeatureChange('designerName', e.target.value)}
          className="bg-white focus:outline-none w-full"
          style={{
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        />
      ) : (
        <span style={{ fontSize: '18px', color: '#666' }}>{designerName}</span>
      )}
    </dd>
  </div>
  <div className="border-t border-gray-200 pt-4">
    <dt className="font-medium text-gray-900">
      <span style={{ fontSize: '20px', fontWeight: '700', color: '#333' }}>Country of Origin</span>
    </dt>
    <dd className="mt-2 text-sm text-gray-500">
      {isEditing? (
        <textarea
          value={updatedFeatures.countryOfOrigin}
          onChange={(e) => handleFeatureChange('countryOfOrigin', e.target.value)}
          className="bg-white focus:outline-none w-full"
          style={{
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        />
      ) : (
        <span style={{ fontSize: '18px', color: '#666' }}>{countryOfOrigin}</span>
      )}
    </dd>
  </div>
</dl>
          {/* <button
            onClick={isEditing ? handleSave : handleEditToggle} // Change onClick behavior based on editing mode
            className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {isEditing ? 'Save' : 'Edit'}
          </button> */}
          {isEditing && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
              )}
        </div>
        {product.images && product.images.length > 0 && (
  <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
    <Zoom>
    {/* Image 1 */}
    {product.images[3] && (
 
      <img
        src={product.images[3]}
        alt="Description 1"
        className="rounded-lg bg-gray-100 w-100 h-100 object-cover"
        />
    )}
      </Zoom>
    {/* Image 2 */}
    <Zoom>
    {product.images[4] && (
 
      <img
        src={product.images[4]}
        alt="Description 2"
        className="rounded-lg bg-gray-100 w-100 h-100 object-cover"
      />
     
    )}
    </Zoom>
    {/* Image 3 */}
    <Zoom>
    {product.images[5] && (
 
      <img
        src={product.images[5]}
        alt="Description 3"
        className="rounded-lg bg-gray-100 w-100 h-100 object-cover"
      />
     
    )}
    </Zoom>
    {/* Image 4 */}
    <Zoom>
    {product.images[6] && (
 
      <img
        src={product.images[6]}
        alt="Description 4"
        className="rounded-lg bg-gray-100 w-100 h-100 object-cover"
      />
     
    )}
    </Zoom>
  </div>
)}
 
 
 
      </div>
    </div>
  );
};
 
export default SoloProduct;