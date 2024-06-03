import React from 'react'
import SubCategoryProduct from './SubCategoryProduct'
export default function SubCategories() {
  return (
    <div className='mt-3 mb-3'  style={{display:'flex', justifyContent:'center' } }>
       
        <SubCategoryProduct type={"Fabric Sofas"} img={"https://www.ikea.com/ext/ingkadam/m/3d3b0ae691dcba7d/original/PH184813.jpg?f=xs"}/>
        <SubCategoryProduct type={"Wooden Sofas"} img={"https://www.ikea.com/in/en/images/products/naemmaroe-3-seat-modular-sofa-outdoor-armrests-light-brown-stained-froesoen-duvholmen-beige__1213450_pe911153_s5.jpg?f=xl"}/>
        <SubCategoryProduct type={"Recliners"} img={"https://www.ikea.com/in/en/images/products/muren-recliner-remmarn-dark-grey__0908535_pe783268_s5.jpg?f=xl"}/>
        <SubCategoryProduct type={"Modular Sofas"} img={"https://www.ikea.com/in/en/images/products/vimle-4-seat-sofa-with-chaise-longue-hallarp-grey__0949536_pe799797_s5.jpg?f=xxs"}/>
        <SubCategoryProduct type={"Chaise Lounges"} img={"https://www.ikea.com/in/en/images/products/soederhamn-chaise-longue-viarp-beige-brown__0802368_pe768434_s5.jpg?f=xxs"}/>
        
    </div>
  )
}
