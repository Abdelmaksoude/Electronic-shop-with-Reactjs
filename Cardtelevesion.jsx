import React from "react";
import { MyCard } from "../componant/MyCard";
import { products } from "../module/Prducts";
export function CardTele()
{
    return(
        <div className="container mt-2 mb-2 p-4 ">
        <div className="row">
            <MyCard productInfo={products[8]}/>
            <MyCard productInfo={products[9]}/>
            <MyCard productInfo={products[10]}/>
            <MyCard productInfo={products[11]}/>
        </div>
    </div>
        // <div className="col-sm-6 col-md-3 col-lg-4 text-center">
        //     <div>
        //         <img src={theImage9} />
        //         <h3>Televesion 1</h3>
        //         <p>Price :&nbsp;<del>2500$</del>&nbsp;<ins>2300$</ins></p>
        //     </div>
        //     <div>
        //         <img src={theImage10} />
        //         <h3>Televesion 2</h3>
        //         <p>Price :&nbsp;<del>2500$</del>&nbsp;<ins>2300$</ins></p>
        //         </div>
        //     <div>
        //         <img src={theImage11} />
        //         <h3>Televesion 3</h3>
        //         <p>Price :&nbsp;<del>2500$</del>&nbsp;<ins>2300$</ins></p>
        //         </div>
        //     <div>
        //         <img src={theImage12} />
        //         <h3>Televesion 4</h3>
        //         <p>Price :&nbsp;<del>2500$</del>&nbsp;<ins>2300$</ins></p>
        //     </div>
        // </div>
    );
}