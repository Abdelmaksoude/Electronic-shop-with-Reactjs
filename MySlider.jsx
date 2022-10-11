import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import theImage1 from "./lab2.jpg";
import theImage2 from "./phone4.webp";
import theImage3 from "./tv1.png";
export function MySlider()
{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='slider'>
        <img
            className="d-block w-100"
            src={theImage1}
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>Laptob</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  className='slider'>
        <img
            className="d-block w-100"
            src={theImage2}
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3>Iphone</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  className='slider'>
        <img
            className="d-block w-100"
            src={theImage3}
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3>Television</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}