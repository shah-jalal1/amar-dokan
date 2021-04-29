import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        }
        // console.log(eventData); 
        const url = `https://apricot-custard-54808.herokuapp.com/addFood`;

        if(imageURL == null) {
            alert('Image not uploaded. submit after some second.');
        } 
        else {
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(eventData)
            })
                .then(res => {
                    alert('successfully add product');
                    console.log('server side response', res);
                    
                })
        };
        }

   
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'faf7bd2701b22405a3e2b4852831c4d7');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="w-50 p-3 addProductSection">
            <h3 className="text-center">Add Product</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Product name</Form.Label>
                    <Form.Control name="name" ref={register} type="text" placeholder="Product name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control name="weight" ref={register} type="number" placeholder="Weight" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Add Price</Form.Label>
                    <Form.Control name="price" ref={register} type="number" placeholder="Add Price" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Image Upload</Form.Label>
                    <Form.Control name="image" ref={register} type="file" placeholder="Add Price" onChange={handleImageUpload} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddProduct;