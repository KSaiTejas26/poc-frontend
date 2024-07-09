import DropDown from "./DropDown";
import "bootstrap/dist/css/bootstrap.min.css";
import Pie from "./pie";
import Header from "./Header";
import LineBar from "./linebar";
import Scom from './scom';
import Mttr from './mttrchart';
import WarningsTable from "./WarningsTable";
function App() {
  return (
    <div className="App" style={{ background: "#0b1826" }}>
      {/* <Header/>
      <Pie/> */}
      <DropDown />
      {/* <WarningsTable></WarningsTable> */}
      {/* <div className="w-50">
        <LineBar />
      </div>
      <div className="w-50">
        <Scom />
      </div> */}
      {/* <Mttr/> */}
    </div>
  );
}

export default App;
