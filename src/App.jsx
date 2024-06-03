import React from 'react'
import Login from './Components/Authentication/Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LandingRegister from './Components/Authentication/LandingRegister'
import CustomerRegister from './Components/Authentication/CustomerRegister'
import VendorRegister from './Components/Authentication/VendorRegister';
// import Temp from './Components/Authentication/Temp';

//Vendor 
import SoloProductMain from "./Components/Vendor/Products/SoloProductMain"; // solo product page
import VendorsProduct from "./Components/Vendor/VendorsProduct"; // all vendor related products
import AddProduct from "./Components/Vendor/Products/AddProduct"; // add product
import VendorProfile from "./Components/Vendor/VendorProfile"; // vendor profile
// Admin
import AllVendors from './Components/Admin/Vendors/GetAllVendors'; // get all vendors
import ReqTable from './Components/Admin/Requests/Req'; // vendor requests
import AdminAddProduct from "./Components/Admin/Products/AddProduct"; // add product
import GetAllProducts from "./Components/Admin/Products/GetAllProducts"; // get all products
import AdminProfile from './Components/Admin/AdminProfile'; // admin profile
import AddVendors from './Components/Admin/Vendors/AddVendors'; // add vendor

import Land from './Components/Customers/Land';
import Category from './Components/Customers/CategoryWiseProductPage/category'
import Vendorspecific from './Components/VendorSpecific/VendorStore'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Register" element={<LandingRegister />} />
        <Route path="/Register/CustomerRegister" element={<CustomerRegister />} />
        <Route path="/Register/VendorRegister" element={<VendorRegister/>} />

        {/*Vendor Routes*/}
        <Route path="/vendorsproduct" Component={VendorsProduct}></Route>
        <Route path="/soloproduct" Component={SoloProductMain}></Route>
        <Route path="/addproduct" Component={AddProduct}></Route>
        <Route path="/vendorprofile" Component={VendorProfile}></Route>
        {/*Admin Routes*/}
        <Route path="/allvendors" Component={AllVendors}></Route>
        <Route path="/request" Component={ReqTable}></Route>
        <Route path='/getadminaddproducts' Component={AdminAddProduct}></Route>
        <Route path='/getallproducts' Component={GetAllProducts}></Route>
        <Route path='/adminprofile' Component={AdminProfile}></Route>
        <Route path='/addvendor' Component={AddVendors}></Route>
        {/* customer routes */}
        <Route path='/customer' Component={Land}></Route>
        <Route path="/vendorspecific" element={<Vendorspecific/>} />
        <Route path="/category" element={<Category/>} />
      </Routes>
    </Router>
  );
}

export default App

