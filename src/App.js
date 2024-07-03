import logo from './logo.svg';
import './App.css';
import Horizontalchart from './chart-horizontal'
// import LineChart from './LineChart';
import DropDown from './DropDown';
import {
  Routes,Route,
  BrowserRouter 
} from "react-router-dom";
import Form from './form'
import FlowBiteForm from './flowBiteForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import LineChart from './Criticals';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <DropDown/>
        <Routes>
          <Route path='/form' Component={Form}/>
          <Route path='/graph' Component={Horizontalchart}/>
          <Route path='/line' Component={LineChart}/>
          <Route path='/flowform' Component={FlowBiteForm}/>

          {/* <Route path='/dropdown' Component={DropDown}/> */}
        </Routes>
      </BrowserRouter>
      {/* <Horizontalchart/> */}
      {/* <LineChart/> */}
    </div>
  );
}

export default App;
