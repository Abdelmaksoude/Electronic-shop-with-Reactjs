import React from "react";
import { MyCard } from "../componant/MyCard";
import { products } from "../module/Prducts";
export function CardLab()
{
    return(
        <div className="container mt-2 mb-2 p-4 ">
        <div className="row">
            <MyCard productInfo={products[0]}/>
            <MyCard productInfo={products[1]}/>
            <MyCard productInfo={products[2]}/>
            <MyCard productInfo={products[3]}/>
        </div>
    </div>

        // <div className="col-sm-6 col-md-3 col-lg-4 text-center">
        //     <div className="col g-2">
        //         <img src={theImage1} />
        //         <h3>Mac</h3>
        //         <p>Price :&nbsp;<del>2500$</del>&nbsp;<ins>2300$</ins></p>
        //     </div>
        //     <div className="col g-2">
        //         <img src={theImage2} />
        //         <h3>Mac</h3>
        //         <p>Price :&nbsp;<del>2500$</del>&nbsp;<ins>2300$</ins></p>                
        //     </div>
        //     <div className="col g-2">
        //         <img src={theImage3} />
        //         <h3>Mac</h3>
        //         <p>Price :&nbsp;<del>2500$</del>&nbsp;<ins>2300$</ins></p>
        //     </div>
        //     <div className="col g-2">
        //         <img src={theImage4} />
        //         <h3>Mac</h3>
        //         <p>Price :&nbsp;<del>2500$</del>&nbsp;<ins>2300$</ins></p>
        //     </div>
        // </div>
    );
}