import React, { useEffect,useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MobileCard from './MobileCard';

const Mobiles = () => {
    const [mobileData,setMobileData]=useState([])

    useEffect(()=>{
        fetch('Mobiles.json')
        .then(res=>res.json())
        .then(data=>setMobileData(data))
    },[])
    return (
        <div className='row gy-5 mt-5'>
            {
                mobileData.map(mobile=><MobileCard mobile={mobile} key={mobile.id}/>)
            }
        </div>
    );
};

export default Mobiles;