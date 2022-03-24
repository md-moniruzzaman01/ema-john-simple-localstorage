import React from 'react';
import './Order-summary.css'

const Order = (props) => {
   
    const {card} = props;
    let price = 0;
    let shipping= 0;
    let quantity = 0
    for (const item of card) {
        quantity = quantity + item.quantity
        price = price + item.price*item.quantity
        shipping =shipping + item.shipping
    }
    const tex =parseFloat((price * 10/100).toFixed(2));
    const grandTotal = price + shipping + tex

  
    return (
        <div className='order-summary'>
            <h3 className='heading'>Order Summary </h3>
            <div className='summary-info'>
            <p> Selected Items : {quantity}</p>
            <p> Total Price: $ {price}</p>
            <p> Total Shipping: $ {shipping}</p>
            <p> Tax: $ {tex}</p>
            <h3 className='grand-total'>Grand Total: $ {grandTotal}</h3>
            </div>
        
           
        </div>
    );
};

export default Order;