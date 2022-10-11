import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button,Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { products } from '../module/Prducts';

export  function MyCard(props) {
    let navigate = useNavigate();
    let {productInfo} = props;
    let[count , setCount]=useState(0);
    let increase = ()=>{
        setCount(count+1);
    }
    let showDetails = ()=>{
        navigate(`/products/${productInfo.id}`)
    }
return (
    <div className="col-sm-6 col-md-3" onClick={showDetails}>
            <Card className='img'>           
            <Card.Img className='test' variant="top" src={productInfo?.imgSrc} />
                <Card.Body>
                <Card.Title>
                    <h4>{productInfo?.productName}</h4> 
                </Card.Title>
                <Card.Title>
                    <main><h5>Price&nbsp;:&nbsp;</h5><p>{productInfo?.price}</p></main>
                </Card.Title>
                <div className="container">
                    <div className="row g-2">
                        <div className="col-5">
                        {" "}
                        </div>
                        <div className="col-6">
                        <Button className='btnn' variant="warning" onClick={increase}>Buy</Button>
                        </div>
                    </div>
                </div>
            </Card.Body> 
            </Card>
        </div>
)
}