import React from 'react'
import logo from './pngegg.png'
export default function VendorInfo() {
    return (
        <div >
            {/* <div className="info" style={{
                display: 'flex',
                justifyContent: 'center',
                // alignItems: 'center',
            }}>
                <div className="logo" >
                    <img src={logo} style={{ height: '200px', margin: 'auto' }} alt="hi" />
                </div>
                <div className="title">
                    <h1 style={{ marginTop: '70px' }}>Trevi Furniture</h1>

                    <p style={{ fontSize: '20px' }}>Your one-stop shop for classy and comfy Furniture.</p>
                </div>

            </div> */}
            <img  width="100%" src='https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/5/AmazonStores/A21TJRUUN4KGV/9eb5046d5e34cb1a71ed3508d2fecb25.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.png'></img>
            <h1 style={{marginTop:'20px',fontSize:'50px', textAlign:'center'}}>Our Collection</h1>
        </div>
    )
}
