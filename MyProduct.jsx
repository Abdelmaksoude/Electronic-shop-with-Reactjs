import React from 'react'
import {MyCard} from "./MyCard";
import {products} from '../module/Prducts';
export function MyProduct() {
    return (
        <div className="p-5 bg-light text-center">
            <h1 className="text-secondary" id="p2">Abdelmaksoud Gomaa Eid</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, deleniti.</p>

        <div className="container  ">
                <div className="row g-3">
                    {products.map((product)=>{
                        return <MyCard productInfo={product} key={product.id}/>;
                    })}
                </div> 
            </div>
        </div>
        );
}