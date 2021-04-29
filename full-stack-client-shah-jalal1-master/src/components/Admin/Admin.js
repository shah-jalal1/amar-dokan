import React from 'react';
import AdminMenu from '../AdminMenu/AdminMenu';
import ManageProducts from '../ManageProducts/ManageProducts';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';


const Admin = () => {
    return (
        <div>

            <Router>
                <AdminMenu></AdminMenu>
                <Switch>
                    <Route path="/manageProducts">
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path="/addProduct">
                        <AddProduct></AddProduct>
                    </Route>

                    <Route exact path="/admin">
                        <AddProduct></AddProduct>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Admin;