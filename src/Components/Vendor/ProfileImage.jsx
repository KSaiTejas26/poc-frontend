import React, { useEffect, useState } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "/elliot.jpg";
import Rp from "/rp.jpg";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const preset_key = "newpreset";
const cloud_name = "dxjgbjvx3";

const ProfileImage = ({ profile }) => {
  const [newProfile, setNewProfile] = useState({}); // Initialize with an empty object
  const [uploading, setUploading] = useState(false); // Add a state variable to track upload status

  useEffect(() => {
    setNewProfile({...profile }); // Update newProfile whenever profile prop changes
  }, [profile]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    handleFile(event);
  };

  const handleFile = (event) => {
    setUploading(true); // Set uploading to true when the file is selected
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append("upload_preset", preset_key);
    axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
     .then((res) => {
        const secureUrl = res.data.secure_url;
        setNewProfile({...newProfile, vendor_image: secureUrl }); // Update only the vendor_image field
        console.log('nen batike unna ', res.data.secure_url);
        console.log(newProfile)
        axios.put('http://localhost:3000/api/vendor/profile/665ed2dbf4e120a00e034486', {...newProfile, vendor_image: res.data.secure_url })
         .then(response => {
            console.log(response);
            setUploading(false); // Set uploading to false when the upload is complete
          })
         .catch(error => {
            console.log(error);
            setUploading(false); // Set uploading to false when there's an error
          });
      })
     .catch((err) => {
        console.error(err);
        setUploading(false); // Set uploading to false when there's an error
      });
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{ zIndex: '0' }}>
        <img
          src={Rp}
          alt=""
          style={{ height: "40vh", width: "100%" }}
        />
      </div>
      {uploading && (
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
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "-20%",
          transform: "translateX(-50%)",
          zIndex: '1',
          border: '10px solid white',
          borderRadius: "100%",
        }}
      >
        {!uploading && (
          <ReactRoundedImage image={newProfile.vendor_image} roundedSize="1" />
        )}
      </div>
      <div
        className="cam"
        style={{
          zIndex: '2',
          position: 'absolute',
          left: '53%',
          transform: 'translateX(-20%)',
          border: '5px solid white',
          borderRadius: '100%',
          background: 'white',
          marginTop: '20px',
        }}
      >
        <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>
          <AddAPhotoIcon fontSize="large" />
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </label>
      </div>
    </div>
  );
};

export default ProfileImage;