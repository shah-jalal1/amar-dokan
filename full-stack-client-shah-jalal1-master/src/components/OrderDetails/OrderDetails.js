import React from 'react';
import { Table } from 'react-bootstrap';

const OrderDetails = (props) => {
    const { name, orderTime, price, weight, imageURL } = props.order;
    console.log(props.order);
    return (
        <div>
            {/* <Table>
            <tbody>
            <tr>
                <td>{name}</td>
                <td>{orderTime}</td>
                <td>{price}</td>
            </tr>
            </tbody>
            </Table> */}
        </div>
    );
};

export default OrderDetails;