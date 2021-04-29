import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageProductsDetails from '../ManageProductsDetails/ManageProductsDetails';
import { FaTrashAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import './ManageProducts.css'
import { useHistory } from 'react-router';

const ManageProducts = () => {
    const [food, setFood] = useState([]);
    // let history = useHistory();
    useEffect(() => {
        fetch('https://apricot-custard-54808.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFood(data))
    }, []);
    console.log(food);

    const deleteProduct = (id) => {
        console.log("delete product", id);
        // fetch(`/delete/${id}`, {
         fetch("https://apricot-custard-54808.herokuapp.com/delete/"+id, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
         //    console.log("deleted successfully");
             if(result) {
                //  event.target.parentNode.style.display = "none";
                alert("successfully delete product")
                // history.push("/manageProducts")
             }
        })
        
        
    }
    return (
        <div className="pl-5 pr-5 pt-2">
            <h3 className="text-center">Manage Product</h3>
            <Table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{food.map(fd => <p>{fd.name}</p>)}</td>
                        <td>{food.map(fd => <p>{fd.weight}</p>)}</td>
                        <td>{food.map(fd => <p>{fd.price}</p>)}</td>
                        <td>{food.map(fd => <p className="pDelete"><FaTrashAlt onClick={() => deleteProduct( fd._id)} size={15} className="icon" /></p>)}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProducts;