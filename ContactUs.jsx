import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export function ContactUs(props)
{
    let { getChildData } = props;
    const myRef = useRef();
    const [errors , setErrors] = useState({});
    const [formValues , setFormValues] = useState({
        username:"",
        password:"",
        email:"",
        country:"",
        address:"",
    });

    const operationHandelar = (e)=>{
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(()=>{
        myRef.current.focus();
    }, []);

    // useEffect(()=>{
    //     getChildData(formValues.username);
    // }, [formValues]);

    const submitHandler = (e)=>{
        e.preventDefault();
        if(formValues.username.length <= 3)
        {
            setErrors({
                ...errors,
                username: "Name must be grater than 3 character",
            });
        }
        else
        {
            setErrors({
                ...errors,
                name: "This correct input Name",
            });
        };
        if(formValues.password.length > 5)
        {
            setErrors({
                ...errors,
                password: "Password must be less than 5 or equal 5",
            })
        }
        else
        {
            setErrors({
                ...errors,
                password: "This correct input Password",
            });
        };
        console.log(errors)
    }
    return(
        <div className="bg-dark p-5 text-center">
            <div className="container">
                <h1 className="text-light">Welcome With You</h1>
            <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-muted">Name</Form.Label>
            <Form.Control 
            ref={myRef}
            name="username"
            type="text" 
            placeholder="Enter Your Name" 
            defaultValue={formValues.username}
            onChange={operationHandelar}
            />
            <Form.Text className="fs-3 text-success d-block">{formValues.username}</Form.Text>
            {errors.name && (<Form.Text className="text-danger">{errors.name}</Form.Text>)}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-muted">Email</Form.Label>
            <Form.Control 
            name="email"
            type="email" 
            placeholder="Enter Your Email" 
            defaultValue={formValues.email}
            onChange={operationHandelar}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-muted">Address</Form.Label>
            <Form.Control 
            name="address"
            type="text" 
            placeholder="Enter Your Address" 
            defaultValue={formValues.address}
            onChange={operationHandelar}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-muted">Country</Form.Label>
            <Form.Control 
            name="country"
            type="text" 
            placeholder="Enter Your Country" 
            defaultValue={formValues.country}
            onChange={operationHandelar}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-muted">Password</Form.Label>
            <Form.Control
            name="password"
            onChange={operationHandelar} 
            defaultValue={formValues.password} 
            type="password" 
            placeholder="Enter Your Password" 
            />
            {errors.password && (<Form.Text className="text-danger">{errors.password}</Form.Text>)}
            </Form.Group>
            <Button className="submit" variant="primary" type="submit">
            Submit
            </Button>
        </Form>
            </div>
        </div>
    );
}