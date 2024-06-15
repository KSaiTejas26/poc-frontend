import React, { useState, useRef } from "react";
import img2 from "./Images/img5.jpg";
import Prod from "./Prod";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import prodcontext from "./Context/ProductContext";
import { useContext } from "react";

function Horizontal(props) {
  const context=useContext(prodcontext);
  const {data}=context;
  
const info=data.filter((e)=>e.category==props.category);

  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    
    <div className="mx-auto">
    <Slider {...settings}>
      {info.map((product, index) => (
        <div className="d-flex justify-content-center"><div className="flex flex-row md:mx-auto" key={index}>
          <Prod {...product} />
        </div>
        </div>
      ))}
    </Slider>
  </div>
            
   
  );
}

export default Horizontal;