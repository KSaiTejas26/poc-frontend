import React,{useContext,useState} from 'react'
import Header from '../Navbar'
import RightView from './RightView'
import Footer from "../../Footer"
import prodcontext from '../Context/ProductContext'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
 
function category(props) {
  const context=useContext(prodcontext);
  const {category,filtered,setfilter}=context;
  const {data}=context;
  const {value} = useParams();
  // console.log(category);
  useEffect(() => {
    setCheck(null);
  }, [value]);
 
  const [check,setCheck]=useState(null);
  const changeCheck=(temp)=>{
    setCheck(temp)
    console.log(`in catogory ${temp}`);
  }
  return (
    <div>
      {window.scrollTo(0, 0)}
      <Header func={changeCheck}/>
      <div className="container-fluid">
 
        <div className="row">
          <div style={{margin:'20px 0px'}} ><RightView value={value} func={changeCheck} check={check}/></div>
        </div>
 
      </div>
      <Footer/>
    </div>
  )
}
 
export default category