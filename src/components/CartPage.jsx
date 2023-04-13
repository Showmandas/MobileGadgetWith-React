import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../utilities/fakeDB';
import CartItem from './CartItem';

const CartPage = () => {
    // const[cart,setCart]=useState()
    const {cartArray,products}=useLoaderData()
    console.log(cartArray);
    return (
        <div>
            <h2>{cartArray.length ? 'Review Cart Item' : "Cart is empty"}</h2>
            <div>
{
    cartArray.map(product=><CartItem product={product} key={product.id}/>)
}
            </div>
        </div>
    );
};

export default CartPage;