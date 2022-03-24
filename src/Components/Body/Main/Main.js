import React, { useEffect, useState } from 'react';
import Order from './Order-summary/Order';
import Cardbox from './Product-Card/Cardbox';
import './Main.css'
import { addToDb, getStoreCard } from '../../../utilities/fakedb';






const Main = () => {

    const [carts, setcart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setcart(data))
    },[])

    const [card, setcard]= useState([])
    let newcart =[]
    const btnClick = (cart)=>{
       const product = card.find(pd => pd.id === cart.id)

      if (!product) {
        cart.quantity = 1
        newcart = [...card,cart]
      }else{
          const rest = card.filter(pd => pd.id !== cart.id)
          product.quantity = product.quantity + 1
          newcart =[...rest , product]
      }
        setcard(newcart)
        addToDb(cart.id)
    }
    useEffect(()=>{
        const storeCard =getStoreCard()
        const savedcard =[]
        for (const id in storeCard) {
            const addedproduct = carts.find(pd => pd.id === id)
            if (addedproduct) {
                const quantity = storeCard[id]
                addedproduct.quantity = quantity;
                savedcard.push(addedproduct)
            }
        }
        setcard(savedcard)
    },[carts])

    return (
        <div className='main-section'>
            <Cardbox carts ={carts} btnClick ={btnClick}></Cardbox>
            <div>
            <Order card = {card}></Order>
            </div>
        </div>
    );
};

export default Main;