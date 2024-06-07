import React, { useState } from 'react'
import Products from './Products'
import ProductData from '../jsonviewer.json'
import HorizontalFilter from './HorizontalFilter'
import SubCategories from './SubCategories'
export default function RightView() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirsttItem = indexOfLastItem - itemsPerPage;

  const currentItems = ProductData.arrayOfProducts.slice(indexOfFirsttItem, indexOfLastItem);

  const totalPages = Math.ceil(ProductData.arrayOfProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  }

  const index=(number)=>{
    if(number>ProductData.arrayOfProducts.length){
      return ProductData.arrayOfProducts.length
    }
    else return number;
  }
  return (
    <div style={{marginRight:'40px',marginLeft:'40px'}}>
      <h1  style={{ fontSize: '300%',textAlign:'Center'}}>Sofas</h1>
      <p style={{ fontSize: '20px',textAlign:'center' }}>Our collection of Sofas makes it easy for you to spend your time with comfort.
       
      </p>
      <SubCategories/>
      <HorizontalFilter />
      <div className="view" style={{backgroundColor:'#FAFAFA'}}>

      <p style={{fontSize:'20px',color:"#848484"}}>Showing {indexOfFirsttItem+1}-{indexOfLastItem>ProductData.arrayOfProducts.length?ProductData.arrayOfProducts.length:indexOfLastItem} of {ProductData.arrayOfProducts.length}</p>
      <div className='row d-flex' >

        {currentItems.map((element, index) => (
          <div className='col-md-3'>
            <Products
              price={element.price}
              title={element.name}
              description={element.imgUrl}
              />
          </div>
        ))}
      </div>
      <Pagination 
      totalPages={totalPages}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      />
      </div>
    </div>

  )
}
function Pagination({ totalPages, currentPage, handlePageChange }) {
  const pageNumbers = [];


  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination justify-content-center'>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <button onClick={() => handlePageChange(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}

      </ul>
    </nav>
  )
}
