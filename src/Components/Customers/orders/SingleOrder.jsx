import React, { useContext, useEffect } from 'react';
import NavBar from '../Navbar';
import prodcontext from '../Context/ProductContext';
import { useParams } from 'react-router-dom';
import SingleOrderProduct from './SingleOrderProduct';
 
export default function SingleOrder() {
    const context = useContext(prodcontext);
    const { orders } = context;
    const { id } = useParams();
    const allProducts = [];
 
    const order = orders.find(order => order._id === id);
 
    if (order) {
        order.vendorproducts.forEach(vendor => {
            allProducts.push(...vendor.products);
        });
    }
 
    useEffect(() => {
        console.log('Order ID:', id);
        console.log('Aggregated products:', allProducts);
    }, [id, allProducts]);
 
    return (
        <div>
            <div style={{ marginBottom: '100px' }}>
                <NavBar />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '0 auto',
                width: '70%'
            }}>
                <div style={{ display: 'flex' }}>
                    <h3>Order Id:</h3>
                    <p style={{ fontSize: '24px' }}>{id}</p>
                </div>
                <hr />
            </div>
            <SingleOrderProduct products={allProducts} />
        </div>
    );
}