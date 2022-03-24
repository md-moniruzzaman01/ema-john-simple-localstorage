import React, { useEffect, useState } from 'react';
import './Prodact-card.css'
import SingleCard from './SingleCard';

const Cardbox = (props) => {
   const {carts} =props;
   
    return (
        <div className='card-container'>
            
            {
                carts.map(cart => <SingleCard btnClick ={props.btnClick} cart = {cart} key ={cart.id}></SingleCard>)
            }
        </div>
    );
};

export default Cardbox;