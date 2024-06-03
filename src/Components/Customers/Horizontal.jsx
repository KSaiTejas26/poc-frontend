import React, { useState, useRef } from "react";
import img2 from "./Images/img5.jpg";
import Prod from "./Prod";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sofa1 from './Images/sofa1.jpg';
import sofa2 from './Images/sofa2.jpg';
import sofa3 from './Images/sofa3.jpg';
import sofa4 from './Images/sofa4.jpg';
import sofa5 from './Images/sofa5.jpg';
import fridge1 from './Images/fridge.jpg';
import fridge2 from './Images/fridge2.jpg';
import fridge3 from './Images/fridge3.jpg';
import fridge4 from './Images/fridge4.jpg';
import fridge5 from './Images/fridge5.jpg';


function Horizontal(props) {
  const data = [
    {
      img: sofa1,
      name: "Product1",
      category: "sofa",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: sofa2,
      name: "Product1",
      category: "sofa",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: sofa3,
      name: "Product1",
      category: "sofa",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: sofa4,
      name: "Product1",
      category: "sofa",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: sofa5,
      name: "Product1",
      category: "sofa",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: sofa1,
      name: "Product1",
      category: "sofa",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: fridge1,
      name: "Product1",
      category: "fridge",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: fridge2,
      name: "Product1",
      category: "fridge",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: fridge3,
      name: "Product1",
      category: "fridge",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: fridge4,
      name: "Product1",
      category: "fridge",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    {
      img: fridge5,
      name: "Product1",
      category: "fridge",
      desc: "Generating random paragraphs...",
      brand: "Realpage",
      price: "18000",
    },
    // Add more product objects as needed
  ];
  console.log(props.category);
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

// import React from 'react'

// const Horizontal = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Horizontal
