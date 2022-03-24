import React from 'react';
import './SingleCard.css';

const SingleCard = (props) => {
    const {name,img,price,ratings,seller,id} = props.cart;
    const {btnClick}=props
    
    return (
        <div className='cart'>
            <div className='cart-img'>
              
                    <img src={img} alt="" />
                    
                
            </div>
            <div className='cart-info'>
               <div>
               <h2>{name}</h2>
                <p className='price'>Price: {price}</p>
               </div>
               <div className='cart-info-details'>
                   <p>Manufacturer : {seller}</p>
                   <p>Rating : {ratings}</p>
               </div>

            </div>
               <button onClick={()=>btnClick(props.cart)} className='btn'>Add to card</button>
        </div>
    );
};

export default SingleCard;