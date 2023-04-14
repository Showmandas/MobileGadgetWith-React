import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../utilities/fakeDB';
import CartItem from './CartItem';

const CartPage = () => {
    // const[cart,setCart]=useState()
    const {cartArray}=useLoaderData()
    // console.log(cartArray);
    let total=0
    if(cartArray.length>0){
        for(const product of cartArray){
            total=total + product.price * product.quantity
        }
    }
    return (
        <div>
            <h2>{cartArray.length ? 'Review Cart Item' : "Cart is empty"}</h2>
            <div className='d-flex flex-column'>
{
    cartArray.map(product=><CartItem product={product} key={product.id}/>)
}
            </div>
            <div className='m-auto my-5'>
                <p>In total : {total}</p>
                <div className='d-flex justify-content-center align-items-center gap-3'>
               {
                cartArray.length>0 ?
                <button className='btn bg-info-subtle'>Clear Cart</button>:
                <Link to={'/mobile'} ><button className="btn text-info">Back to shop</button></Link>
               }
      <button className='btn bg-info-subtle'>Place order</button>
                </div>
                
            </div>
        </div>
    );
};

export default CartPage;