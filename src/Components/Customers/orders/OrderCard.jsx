import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
export default function OrderCard({ order, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const bgcolor = index % 2 === 0 ? 'white' : '#f0f2f2';
  const buttonStyle = {
    marginRight: '5px',
    borderRadius: '5px',
    border: '1px solid black',
    color: 'black',
    padding: '2px 12px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
   
  };
  const printButtonStyle = {
    ...buttonStyle,
   
  };
 
  const trimDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
 
    return `${year}-${month}-${day}`;
  };
 
  const prodNames = (ele) => {
    let str = '';
    ele.vendorproducts.forEach((element) => {
      element.products.forEach((temp) => {
        str += temp.id.pname.substr(0, 20) + ',  ';
        // console.log(temp.id.pname);
      });
    });
    return str.substr(0, 30);
  };
 
  const totalPrice = (ele) => {
    let total = 0;
    ele.vendorproducts.forEach((element) => {
      element.products.forEach((temp) => {
        total += temp.id.price;
      });
    });
    return total;
  };
 
  const handlePrint = () => {
    window.print();
  };
  const navigate = useNavigate();
  const handleclick=(order_id)=>{
    navigate(`/Orders/${order_id}`)
  }
 
  return (
    <div onClick={()=>handleclick(order._id)}
      style={{
        border: '2px solid #ddd',
        borderRadius: '10px',
        maxWidth: '70%',
        margin: '10px auto',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          color: 'black',
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: bgcolor,
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '10px',
          }}
        >
          <div style={{ display: 'flex', gap: '20px' }}>
            <div>
              <strong>ORDER PLACED</strong>
              <br />
              {trimDate(order.order_date)}
            </div>
            <div>
              <strong>TOTAL</strong>
              <br />
              ${totalPrice(order)}
            </div>
            <div>
              <strong>Products</strong>
              <br />
              {prodNames(order)}
            </div>
          </div>
          <button style={buttonStyle} onClick={(e) =>{
            e.stopPropagation();
            setIsModalOpen(true)}}>
            Invoice
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
            <div>
              <strong>ORDER #</strong>
              <br />
              {order._id}
            </div>
          </div>
        </div>
      </div>
 
      {isModalOpen && (
        <div onClick={(e)=>{
          e.stopPropagation();
        }}
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex:1,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '50%',
              height: '80%',
              overflowY: 'auto',
              position: 'relative',
            }}
          >
            <button
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
              }}
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 style={{ textAlign: 'center' }}>Invoice</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <h3>Billed To:</h3>
                <p>{order.customerName}</p>
                <p>{order.customerAddress}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <h3>Date</h3>
                <p>{trimDate(order.order_date)}</p>
              </div>
            </div>
            <hr />
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Item</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Quantity</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Unit Price</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.vendorproducts.map((vendor) =>
                  vendor.products.map((product) => (
                    <tr key={product.id._id}>
                      <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.id.pname}</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.quantity}</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px' }}>${product.id.price}</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                        ${1 * product.id.price}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div style={{ textAlign: 'right', marginTop: '20px' }}>
              <p><strong>Subtotal:</strong> ${totalPrice(order)}</p>
              <p><strong>Tax:</strong> ${(totalPrice(order) * 0.1).toFixed(2)}</p>
              <p><strong>Total:</strong> ${(totalPrice(order) * 1.1).toFixed(2)}</p>
            </div>
            <h3 style={{ textAlign: 'center', marginTop: '40px' }}>Thank You!
             
            </h3>
            <button style={printButtonStyle} onClick={handlePrint}>
              Print
            </button>
          </div>
        </div>
      )}
    </div>
  );
}