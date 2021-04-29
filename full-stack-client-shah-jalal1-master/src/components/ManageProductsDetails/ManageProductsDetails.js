import React from 'react';

const ManageProductsDetails = (props) => {
    const {name, weight, price} = props.food;
    return (
        <div>
            <tr>
           <td>{name}</td>
           <td>{price}</td>
           <td><button>delete</button></td>
           </tr>
        </div>
    );
};

export default ManageProductsDetails;