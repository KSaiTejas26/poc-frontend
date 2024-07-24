import Header from '../../Header';
import { React, useContext } from 'react';
import OrderCard from './OrderCard';
import OrderTab from './OrderTab';
import prodcontext from '../Context/ProductContext';
import { useNavigate } from 'react-router-dom';
export default function CustomerOrders() {
  const context = useContext(prodcontext);
  const { orders } = context;
  console.log("Oracle",orders);
 
  return (
    <div>
      <Header />
      <div style={{ padding: '20px' }}>
 
        <OrderTab />
        {orders.map((order, index) => (
          <div >
            <OrderCard order={order} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}