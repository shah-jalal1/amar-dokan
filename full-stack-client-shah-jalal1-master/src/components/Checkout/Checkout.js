import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../../App';

const Checkout = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [singleFood, setSingleFood] = useState({});
    useEffect(() => {
        fetch(`https://apricot-custard-54808.herokuapp.com/food/${id}`)
            .then(res => res.json())
            .then(data => setSingleFood(data))
    }, [])

    const checkoutHandler = () => {
        const orderDetails = { ...singleFood, ...loggedInUser, orderTime: new Date() }
        console.log(orderDetails);

        fetch('https://apricot-custard-54808.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your order placed successfully');
                }
            })
    }

    return (
        <div className="pl-5 pr-5 pt-5">
            <h1 className="text-center">Checkout</h1>
            <Table bordered >
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{singleFood.name}</td>
                        <td>1</td>
                        <td>{singleFood.price}</td>
                    </tr>
                </tbody>
            </Table>
            <Button className="float-right" variant="info" onClick={checkoutHandler}>Checkout</Button>
        </div>
    );
};

export default Checkout;