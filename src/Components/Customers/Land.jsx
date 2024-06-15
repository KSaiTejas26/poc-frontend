import React, { useState, useEffect, useContext } from "react";
import DarkVariantExample from "./corousel";
import PrimarySearchAppBar from "./Navbar";
import BasicExample from "./Category";
import Horizontal from "./Horizontal";
import Footer from "../Footer";
import prodcontext from "./Context/ProductContext";
import Spinner from "./Spinner"; // Assuming you have a spinner component for loading

import img3 from "./Images/img3.webp";
import img1 from "./Images/img1.jpg";
import img4 from "./Images/img4.jpg";
import banner from "./Images/banner.avif";
import banner1 from "./Images/banner1.avif";
import banner2 from "./Images/banner2.avif";
import { useNavigate } from "react-router";
import { styled } from '@mui/material/styles';

const HoverImage = styled('img')(({ theme }) => ({
  width: '100%',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const Land = () => {
  const navigate = useNavigate();
  const context = useContext(prodcontext);
  const { data, category } = context;

  // Check if context values are loading
  if (!data || !category || category.length === 0) {
    return <Spinner />; // Show loading spinner while data is being fetched
  }

  const handleimageClick = () => {
    navigate(`/category/Appliances`);
  }

  return (
    <>
      <PrimarySearchAppBar />
      <DarkVariantExample />
      <div className="row h-100">
        <div className="col-md-6 my-3">
          <div className="d-flex justify-content-center h-100 mx-5">
            <div className="ui netboard test ad flex-grow-1">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: `url(${img3})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  transition: "transform 0.3s ease",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center w-100 my-3">
            <div style={{ width: "95%" }} className="ui medium rectangle test ad">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: `url(${img4})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  transition: "transform 0.3s ease",
                }}
              ></div>
            </div>
          </div>
          <div className="d-flex justify-content-center w-100 mt-2">
            <div style={{ width: "95%" }} className="ui panorama test ad">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: `url(${img1})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  transition: "transform 0.3s ease",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 d-flex justify-content-center">
        <h1><strong>Explore Different Categories</strong></h1>
      </div>
      
      <div className="row my-5 mx-3 d-flex justify-content-center">
        {category.slice(0, 3).map((cat, index) => (
          <div key={index} className="col-md-4 d-flex justify-content-center mb-5">
            {cat && <BasicExample img={cat.image} title={cat.name} />}
          </div>
        ))}
      </div>
      
      <div className="row my-5 mx-3 d-flex justify-content-center">
        {category.slice(3, 6).map((cat, index) => (
          <div key={index} className="col-md-4 d-flex justify-content-center mb-5">
            {cat && <BasicExample img={cat.image} title={cat.name} />}
          </div>
        ))}
      </div>

      <img src={banner} className="w-100" alt="advertisement" />
      
      <div className="row d-flex my-5">
        <div className="col-md-6 d-flex justify-content-center">
          <HoverImage onClick={handleimageClick} src={banner1} alt="advertisement" />
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img className="w-100" src={banner2} alt="advertisement" />
        </div>
      </div>

      <h1 style={{ fontSize: "30px" }} className="d-flex justify-content-center my-3">New launches in Appliances</h1>
      <div className="my-3">
        <Horizontal category="Appliances" />
      </div>
      
      <div className="my-10">
        <h1 style={{ fontSize: "30px" }} className="d-flex justify-content-center">New launches in Doors</h1>
        <div className="my-3">
          <Horizontal category="Doors & Windows" />
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Land;
