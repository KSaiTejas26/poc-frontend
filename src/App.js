import DropDown from './DropDown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pie from './pie'
import Header from './Header';
function App() {
  return (
    <div className="App"  style={{background:'#0b1826'}}>
      <Header/>
      <DropDown />
      <Pie/>
    </div>
  );
}

export default App;
