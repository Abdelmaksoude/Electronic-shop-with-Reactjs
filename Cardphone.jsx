import React from "react";
import { MyCard } from "../componant/MyCard";
import { products } from "../module/Prducts";
export function CardPhone()
{
    return(
        <div className="container mt-2 mb-2 p-4 ">
        <div className="row">
            <MyCard productInfo={products[4]}/>
            <MyCard productInfo={products[5]}/>
            <MyCard productInfo={products[6]}/>
            <MyCard productInfo={products[7]}/>
        </div>
    </div>
        // <div className="col-sm-6 col-md-3 col-lg-4 text-center">
        //     <div className="col g-2">
        //         <img src={theImage5} />
        //         <h3>Iphone</h3>
        //         <p>Price :&nbsp;<del>2500$</del>&nbsp;<ins>2300$</ins></p>
        //     </div>
        //     <div className="col g-2">
        //         <img src={theImage6} />
        //         <h3>Samsung</h3>
        //         <p>Price :&nbsp;<del>2500$</del>&nbsp;<ins>2300$</ins></p>                
        //     </div>
        //     <div className="col g-2">
        //         <img src={theImage7} />
        //         <h3>Oppo</h3>
        //         <p>Price :&nbsp;<del>2500$</del>&nbsp;<ins>2300$</ins></p>
        //     </div>
        //     <div className="col g-2">
        //         <img src={theImage8} />
        //         <h3>Huawei</h3>
        //         <p>Price :&nbsp;<del>2500$</del>&nbsp;<ins>2300$</ins></p>
        //     </div>
        // </div>
    );
}