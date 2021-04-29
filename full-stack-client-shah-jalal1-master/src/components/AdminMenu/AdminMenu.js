import React from 'react';
import { Link } from 'react-router-dom';
import './AdminMenu.css';

const AdminMenu = () => {
    return (
        <div className="admin-header">
            <nav>
                <Link to="/manageProducts">Manage Order</Link>
                <Link to="/addProduct">Add Product</Link>
            </nav>
        </div>
    );
};

export default AdminMenu;