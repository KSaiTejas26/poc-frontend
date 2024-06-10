import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
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
 
  const handleFeatureChange = (key, value) => {
    setUpdatedFeatures({
      ...updatedFeatures,
      [key]: value,
    });
  };
 
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };
 
  const handleSave = () => {
    // Send updatedFeatures data to the backend
 
    axios.put(`http://localhost:3000/api/vendor/soloproduct/update/${product._id}`, {
      productDetails: updatedFeatures
    })
      .then(data => {
        console.log('Success:', data);
        // Optionally, update the original features state with the updatedFeatures
        setMaterial(updatedFeatures.material);
        setDimensions(updatedFeatures.dimensions);
        setDesignerName(updatedFeatures.designerName);
        setCountryOfOrigin(updatedFeatures.countryOfOrigin);
        setIsEditing(false); // Exit edit mode
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error
      });
  };
 
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 items-start gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div>
         
          <h2 className="text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
 
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">
                Material
              </dt>
              <dd className="mt-2 text-sm text-gray-500">
                {isEditing ? (
                  <textarea
                    value={updatedFeatures.material}
                    onChange={(e) => handleFeatureChange('material', e.target.value)}
                    className="bg-transparent focus:outline-none w-full"
                  />
                ) : (
                  material
                )}
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">
                Dimensions
              </dt>
              <dd className="mt-2 text-sm text-gray-500">
                {isEditing ? (
                  <textarea
                    value={updatedFeatures.dimensions}
                    onChange={(e) => handleFeatureChange('dimensions', e.target.value)}
                    className="bg-transparent focus:outline-none w-full"
                  />
                ) : (
                  dimensions
                )}
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">
                Designer
              </dt>
              <dd className="mt-2 text-sm text-gray-500">
                {isEditing ? (
                  <textarea
                    value={updatedFeatures.designerName}
                    onChange={(e) => handleFeatureChange('designerName', e.target.value)}
                    className="bg-transparent focus:outline-none w-full"
                  />
                ) : (
                  designerName
                )}
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">
                Country of Origin
              </dt>
              <dd className="mt-2 text-sm text-gray-500">
                {isEditing ? (
                  <textarea
                    value={updatedFeatures.countryOfOrigin}
                    onChange={(e) => handleFeatureChange('countryOfOrigin', e.target.value)}
                    className="bg-transparent focus:outline-none w-full"
                  />
                ) : (
                  countryOfOrigin
                )}
              </dd>
            </div>
          </dl>
          <button
            onClick={isEditing ? handleSave : handleEditToggle} // Change onClick behavior based on editing mode
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
        {product.images && product.images.length > 0 && (
  <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
    {/* Image 1 */}
    {product.images[3] && (
      <img
        src={product.images[3]}
        alt="Description 1"
        className="rounded-lg bg-gray-100"
      />
    )}
    {/* Image 2 */}
    {product.images[4] && (
      <img
        src={product.images[4]}
        alt="Description 2"
        className="rounded-lg bg-gray-100"
      />
    )}
    {/* Image 3 */}
    {product.images[5] && (
      <img
        src={product.images[5]}
        alt="Description 3"
        className="rounded-lg bg-gray-100"
      />
    )}
    {/* Image 4 */}
    {product.images[6] && (
      <img
        src={product.images[6]}
        alt="Description 4"
        className="rounded-lg bg-gray-100"
      />
    )}
  </div>
)}
 
 
 
      </div>
    </div>
  );
};
 
export default SoloProduct;