import React from 'react'
import Navbar from '../Customers/Navbar'
import Footer from '../Footer'
import VendorInfo from './VendorInfo'
import SubCategories from './SubCategories'
import jsonviewer from "./jsonviewer.json"
import Products from "../Customers/CategoryWiseProductPage/Products"


export default function VendorStore() {
  return (
    <div>
      <Navbar/>
      <VendorInfo/>
      <SubCategories/>
      <div className='row d-flex mx-2'  >

        {jsonviewer.arrayOfProducts.map((element, index) => (
          <div className='col-md-3'>
            <Products
              price={element.price}
              title={element.name}
              description={element.imgUrl}
              />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}
