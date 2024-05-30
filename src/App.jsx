import { Route,Routes } from 'react-router-dom';
//Vendor 
import SoloProductMain from "./Components/Vendor/Products/SoloProductMain"; // solo product page
import VendorsProduct from "./Components/Vendor/VendorsProduct"; // all vendor related products
import AddProduct from "./Components/Vendor/Products/AddProduct"; // add product
import VendorProfile from "./Components/Vendor/VendorProfile"; // vendor profile
//Admin
import AllVendors from './Components/Admin/Vendors/GetAllVendors'; // get all vendors
import ReqTable from './Components/Admin/Requests/Req'; // vendor requests
import AdminAddProduct from "./Components/Admin/Products/AddProduct"; // add product
import GetAllProducts from "./Components/Admin/Products/GetAllProducts"; // get all products
import AdminProfile from './Components/Admin/AdminProfile'; // admin profile
import AddVendors from './Components/Admin/Vendors/AddVendors'; // add vendor
export default function App() {
  return (
    <>
      <Routes>
        {/*Vendor Routes*/}
        <Route path="/" Component={VendorsProduct}></Route>
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
      </Routes>
      {/* <Products/> */}
    </>
  )
}
