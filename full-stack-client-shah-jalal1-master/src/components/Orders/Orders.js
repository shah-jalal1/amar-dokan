import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // fetch('https://apricot-custard-54808.herokuapp.com/orders?email='+loggedInUser)
    // fetch('https://apricot-custard-54808.herokuapp.com/orders')
    useEffect(() => {
        fetch('https://apricot-custard-54808.herokuapp.com/orders?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    console.log(order);
    return (
        <div className="pl-5 pr-5 pt-2">
            <h3 className="text-center">Order Details</h3>
            <h6>User Name: {loggedInUser.gName}</h6>
            <h6>User Email: {loggedInUser.email}</h6>
            <Table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Order Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{order.map(or => <p>{or.name}</p>)}</td>
                        <td>{order.map(or => <p>{or.price}</p>)}</td>
                        <td>{order.map(or => <p>{or.orderTime}</p>)}</td>
                    </tr>
                </tbody>
                {/* {
                order.map(or => <OrderDetails order={or}></OrderDetails>)
                } */}
            </Table>
            
        </div>
    );
};

export default Orders;