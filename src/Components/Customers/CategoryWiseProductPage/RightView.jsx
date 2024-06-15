import React, { useState ,useContext}  from 'react'
import Products from './Products'
import HorizontalFilter from './HorizontalFilter'
import SubCategories from './SubCategories'
import prodcontext from '../Context/ProductContext'
import { useEffect } from 'react'
export default function RightView(props) {
  // useEffect(() => {
  //   setfiltered(data);
  // }, [data]);
 
  const context=useContext(prodcontext);
 
  const temp=(val)=>{
    console.log(`in right view ${val}`)
    props.func(val)
  }
  console.log(props.value+" "+props.check)
 
 
  const filtered=context.data
  console.log("Filtered"+filtered);
  let ProductData;
  if(props.check==null){
    ProductData=filtered.filter(element=>element.category==props.value);
  }
  else {
    ProductData = filtered.filter((element) => {
        return element.category == props.value && element.subcategory== props.check;
    });
}
  const size=Object.keys(ProductData).length;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
 
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirsttItem = (indexOfLastItem - itemsPerPage)>0?indexOfLastItem-itemsPerPage:0;
  console.log(indexOfFirsttItem)
  const currentItems = ProductData.slice(indexOfFirsttItem, indexOfLastItem);
  console.log(currentItems);
 
  const totalPages = Math.ceil( size / itemsPerPage);
 
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  }
 
  const index=(number)=>{
    if(number> size){
      return  size
    }
    else return number;
  }
  return (
    <div style={{marginRight:'40px',marginLeft:'40px'}}>
      <h1  style={{ fontSize: '300%',textAlign:'Center'}}>{props.value}</h1>
      <p style={{ fontSize: '20px',textAlign:'center' }}>Our collection of {props.value} makes it easy for you to spend your time with comfort.
       
      </p>
      <SubCategories value={props.value} func={temp}/>
      <HorizontalFilter />
      <div className="view" style={{backgroundColor:'#FAFAFA'}}>
 
      <p style={{fontSize:'20px',color:"#848484"}}>Showing {currentItems.length==0?0:indexOfFirsttItem+1}-{indexOfLastItem> size? size:indexOfLastItem} of { size}</p>
      <div className='row d-flex' >
 
        {currentItems.map((element, index) => (
         
 
            <div className='col-md-3'>
            <Products
            id={element._id}
            price={element.price}
            title={element.pname}
            description={element.productDetails.description}
            brand={element.brand}
            image={element.main_image}
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