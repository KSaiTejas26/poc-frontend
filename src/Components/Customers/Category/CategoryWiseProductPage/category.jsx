import React from 'react'
import Header from "../../../Header"
import RightView from './RightView'
import Footer from "../../../Footer"
function category() {
  return (
    <div>
      <Header />
      <div className="container-fluid">

        <div className="row">
          <div style={{margin:'20px 0px'}} ><RightView /></div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default category
