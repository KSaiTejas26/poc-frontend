import ProfileImage from "./ProfileImage";
import AdminHeader from './VendorHeader';
import { useEffect, useState } from 'react';
import axios from 'axios';

function VendorProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    vendor_first_name: '',
    vendor_last_name: '',
    email: '',
    phone_number: '',
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
    vendor_image:''
    // products: []
  });



  const handleCoverPhotoChange = async (event) => {
    const file = event.target.files[0];
    setLoading(true)
    const imageUrl = await handleCloudinaryUpload(file);
   
    if (imageUrl) {
      // Update the product state with the main image URL
      setProfile(...profile,{vendor_image:imageUrl})
      setLoading(false)
      console.log(imageUrl);
    } else {
      // Handle the case when main image upload fails
      console.error("Cover photo upload failed");
    }
  };
 
  
  const handleCloudinaryUpload = async (file) => {
    console.log(image);
    if (file) {
      // setLoading(true);
      console.log('in clodinatyy')
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'newpreset'); // Replace 'your_upload_preset' with your actual upload preset
 
      try {
        const response = await axios.post('https://api.cloudinary.com/v1_1/dxjgbjvx3/image/upload', formData);
       
        // Replace 'your_cloud_name' with your Cloudinary cloud name
       
        // setLoading(false);
        // console.log("this is response.secure_url",response.data.secure_url);
       
        return response.data.secure_url;
      } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        // setLoading(false);
        return null;
      }
    }
    return null;
  };
 
 
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
     ...profile,
      [name]: value,
    });
  };

  const handleSave = () => {

    console.log('prooooooooo ',profile)
    axios.put('http://localhost:3000/api/vendor/editprofile', profile,{
      headers:{
        'auth_token':localStorage.getItem('token')
      }
    })
     .then(response => {
        console.log(response);
        console.log(profile);
        setIsEditing(false);
      })
     .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/vendor/vendorprofile`,{
          headers:{
            'auth_token':localStorage.getItem('token')  
          }
        })
        setProfile(response.data.data);
        console.log(response.data.data);
        // setVid(localStorage.getItem('vid'));
      } catch (e) {
        console.log('error while fetching the data ', e);
      }
    }
    fetchDetails();
  }, []);

  const handleImageUpload = (imageUrl) => {
    setProfile({...profile, vendor_image: imageUrl });
  };

  return (
    <>
      <AdminHeader />
      <ProfileImage profile={profile} onImageUpload={handleImageUpload}/>
      <div className='max-w-2xl mx-auto' style={{ marginTop: '5%' }}>
        <div className="px-4 sm:px-0 text-center">
          <h1 className="text-base font-bold leading-7 text-gray-900" style={{ fontSize: '40px' }}>Profile</h1>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 mt-5">Personal details and application.</p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">First Name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="vendor_first_name"
                    value={profile.vendor_first_name}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.vendor_first_name
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Last Name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="vendor_last_name"
                    value={profile.vendor_last_name}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.vendor_last_name
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.email
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Phone Number</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="phone_number"
                    value={profile.phone_number}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.phone_number
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Business Name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="business_name"
                    value={profile.business_name}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.business_name
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">GST Number</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="gst_number"
                    value={profile.gst_number}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.gst_number
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Business Registration Number</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="business_registration_number"
                    value={profile.business_registration_number}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.business_registration_number
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Company Website URL</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="company_website_url"
                    value={profile.company_website_url}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.company_website_url
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Country</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="country"
                    value={profile.country}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.country
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Street Address</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="street_address"
                    value={profile.street_address}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.street_address
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">City</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.city
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">State</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="state"
                    value={profile.state}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.state
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Zip Code</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="zip_code"
                    value={profile.zip_code}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.zip_code
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Categories List</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="categories_list"
                    value={profile.categories_list}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.categories_list
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Bank Account Number</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="bank_account_number"
                    value={profile.bank_account_number}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.bank_account_number
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Bank Account Name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="bank_account_name"
                    value={profile.bank_account_name}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.bank_account_name
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">IFSC Code</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="ifsc_code"
                    value={profile.ifsc_code}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.ifsc_code
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Account Holder Name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="account_holder_name"
                    value={profile.account_holder_name}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.account_holder_name
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Expected Order Processing Time</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="expected_order_processing_time"
                    value={profile.expected_order_processing_time}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.expected_order_processing_time
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Average Shipping Time</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="average_shipping_time"
                    value={profile.average_shipping_time}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.average_shipping_time
                )}
              </dd>
            </div>
            {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Products</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {isEditing? (
                  <input
                    type="text"
                    name="products"
                    value={profile.products}
                    onChange={handleChange}
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded"
                  />
                ) : (
                  profile.products
                )}
              </dd>
            </div> */}
          </dl>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center">
          {isEditing? (
            <button
              onClick={handleSave}
              className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEditToggle}
              className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default VendorProfile;