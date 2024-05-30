import React, { useState } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "/elliot.jpg";
import Rp from "/rp.jpg";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const ProfileImage = () => {
  const [userImage, setUserImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setUserImage(e.target.result);
    };

    reader.readAsDataURL(file);
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
        <ReactRoundedImage image={userImage || MyPhoto} roundedSize="1" />
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