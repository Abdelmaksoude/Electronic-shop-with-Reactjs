import React from "react";
import { useEffect } from "react";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { products } from "../module/Prducts";
export default function ProductDetails(props) {
    let { id } = useParams();
    let { getCounterValue } = props;
    let {productInfo} = props;
    let[count , setCount]=useState(0);
    let increase = ()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        getCounterValue(count);
    },[count]);

    let product = products.find((product) => product.id === id);
    console.log(product);

return product ? (
    <div className="alert p-5 mt-5 mb-5 text-center">
        <h1 className="details">Product Deatils</h1>
        <div className="name">
        <img style={{ width: "300px"}} src={product?.imgSrc} alt="" />
        <p className="text-danger fs-2 mt-2" >{product?.productName}</p>
        <p className="text-success fs-2 mt-3" >price:&nbsp;{product?.price}</p>
        <button className="btn btn-warning thebtn" onClick={increase}>{product?.btnTitle}</button>
        </div>
    </div>
    ) : (
    <h1 className="mt-5 text-warning text-center bg-light mb-1">Product Not Found</h1>
    );
}