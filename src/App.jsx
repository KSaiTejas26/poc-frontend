import React from 'react'
import Login from './Components/Authentication/Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LandingRegister from './Components/Authentication/LandingRegister'
import CustomerRegister from './Components/Authentication/CustomerRegister'
import VendorRegister from './Components/Authentication/VendorRegister';
// import Temp from './Components/Authentication/Temp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Vendor 
import SoloProductMain from "./Components/Vendor/Products/SoloProductMain"; // solo product page
import VendorsProduct from "./Components/Vendor/VendorsProduct"; // all vendor related products
import AddProduct from "./Components/Vendor/Products/AddProduct"; // add product
import VendorProfile from "./Components/Vendor/VendorProfile"; // vendor profile
import OrderPage from './Components/Vendor/ProductTracking/OrderPage';
import OrderReciept from './Components/Vendor/ProductTracking/ProductReciept';


// Admin
import AllVendors from './Components/Admin/Vendors/GetAllVendors'; // get all vendors
import ReqTable from './Components/Admin/Requests/Req'; // vendor requests
import AdminAddProduct from "./Components/Admin/Products/AddProduct"; // add product
import GetAllProducts from "./Components/Admin/Products/GetAllProducts"; // get all products
import AdminProfile from './Components/Admin/AdminProfile'; // admin profile
import AddVendors from './Components/Admin/Vendors/AddVendors'; // add vendor
import SoloProductMainAdmin from './Components/Admin/Products/SoloProductMain';
import VendorSpecific from './Components/Admin/VendorSepcificProducts/VendorSpecific';
import AllOrders from './Components/Admin/Orders/AdminOrders';
import AdminOrderPage from './Components/Admin/Orders/OrderPage';
import ProductReciept from './Components/Admin/Orders/OrderReceipt';

import Land from './Components/Customers/Land';
import Category from './Components/Customers/CategoryWiseProductPage/category'
import Vendorspecific from './Components/VendorSpecific/VendorStore'
import ProductState from './Components/Customers/Context/ProductState';
import SoloProductPage from'./Components/Customers/SoloproductPage';
import  OrderTable  from './Components/Vendor/ProductTracking/OrderTable';



function App() {
  return (
    <>
         
         
    <Router>
    {/* <ProductState> */}
    <ToastContainer />
      <Routes>
        {/* <Route path="/" Component={Login} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/Register" Component={LandingRegister } />
        <Route path="/Register/CustomerRegister" Component={CustomerRegister } />
        <Route path="/Register/VendorRegister" Component={VendorRegister} />

        {/*Vendor Routes*/}
        <Route path="/vendorsproduct" Component={VendorsProduct}></Route>
        <Route path="/soloproduct/:id" Component={SoloProductMain}></Route>
        <Route path="/addproduct" Component={AddProduct}></Route>
        <Route path="/vendorprofile" Component={VendorProfile}></Route>
        <Route path="/orderreciept" element={<OrderReciept/>}></Route>
        <Route path="/ordertable" element={<OrderTable/>}></Route>
        <Route path="/orderpage" element={<OrderPage/>}></Route>
        
        {/*Admin Routes*/}
        <Route path="/allvendors" Component={AllVendors}></Route>
        <Route path="/request" Component={ReqTable}></Route>
        <Route path='/getadminaddproducts' Component={AdminAddProduct}></Route>
        <Route path='/getallproducts' Component={GetAllProducts}></Route>
        <Route path='/adminprofile' Component={AdminProfile}></Route>
        <Route path='/addvendor' Component={AddVendors}></Route>
        <Route path="/soloproduct/:id/admin" Component={SoloProductMainAdmin}></Route>
        <Route path="/vendorspecific/:id/admin" Component={VendorSpecific}></Route>
        <Route path="/orderpage/admin" element={<AdminOrderPage/>}></Route>
        <Route path="/ordertable/admin" element={<AllOrders/>}></Route>
        <Route path="/admin/orderreciept" element={<ProductReciept/>}></Route>
        
        {/* customer routes */}
        
        <Route path='/customer' Component={Land}></Route>
        <Route path="/vendorspecific" element={<Vendorspecific/>} />
        <Route path="/category/:value" element={<Category/>} />
        <Route path="/SoloProduct/:id/customer" element={<SoloProductPage/>} />
        
      </Routes>
      {/* </ProductState> */}
      
    </Router>
    
   
   
    </>

  );
}

export default App

