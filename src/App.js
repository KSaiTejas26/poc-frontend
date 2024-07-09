import DropDown from "./Components/DropDown";
import Header from "./Components/Header"
import "bootstrap/dist/css/bootstrap.min.css";
import Pie from './Components/Excel Data/piechart23';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DropDown1 from './Components/Excel Data/DropDown';
function App() {
  return (
    <div className="App" style={{ background: "#0b1826" }}>
      <Header/>
      {/* <DropDown /> */}
      {/* <WarningsTable></WarningsTable> */}
      {/* <div className="w-50">
        <LineBar />
      </div>
      <div className="w-50">
        <Scom />
      </div> */}
      {/* <Mttr/> */}
      {/* <Pie/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/excel' Component={DropDown1 } />
          <Route path='/normal' Component={DropDown} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
