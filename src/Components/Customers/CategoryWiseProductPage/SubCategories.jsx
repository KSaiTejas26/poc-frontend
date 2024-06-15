import React, { useContext, useRef } from 'react';
import SubCategoryProduct from './SubCategoryProduct';
import prodcontext from '../Context/ProductContext';
 
export default function SubCategories(props) {
  const context = useContext(prodcontext);
  const { category } = context;
  const temp=(check)=>{
    console.log(`in subcategory ${check}`);
    props.func(check);
  }
 
  let subCat;
  const containerRef = useRef(null);
 
  category.forEach(ele => {
    if (ele.name === props.value) {
      subCat = ele.sub_categories_list;
    }
  });
 
  const scrollLeft = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: -200, // Adjust the scroll distance as needed
      behavior: 'smooth'
    });
  };
 
  const scrollRight = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: 200, // Adjust the scroll distance as needed
      behavior: 'smooth'
    });
  };
 
  return (
    <>
      <style>
        {`
          .sub-categories-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;
          }
 
          .sub-categories-container {
            display: flex;
            align-items: center;
            width: 100%;
            overflow-x: hidden;
            scroll-behavior: smooth;
            padding-left: 40px;
            padding-right: 40px;
          }
 
          .scroll-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(255, 255, 255, 0.7);
            border: none;
            padding: 10px;
            cursor: pointer;
            z-index: 1;
          }
 
          .scroll-button.left {
            left: 10px;
          }
 
          .scroll-button.right {
            right: 10px;
          }
 
          .scroll-button:hover {
            background-color: rgba(255, 255, 255, 0.9);
          }
        `}
      </style>
      <div className='sub-categories-wrapper'>
        <button className='scroll-button left' onClick={scrollLeft}>&lt;</button>
        <div className='sub-categories-container' ref={containerRef}>
          {subCat && subCat.map((ele, index) => (
            <SubCategoryProduct key={index} type={ele.name} img={ele.image} func={temp}/>
          ))}
        </div>
        <button className='scroll-button right' onClick={scrollRight}>&gt;</button>
      </div>
    </>
  );
}