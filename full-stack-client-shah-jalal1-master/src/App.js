import './App.css';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Details from './components/Details/Details';
import ManageProducts from './components/ManageProducts/ManageProducts';
import AddProduct from './components/AddProduct/AddProduct';
import Checkout from './components/Checkout/Checkout';
import { createContext, useState } from 'react';
import PrivateRout from './components/PrivateRoute/PrivateRout';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      {/* <h3>email: {loggedInUser.email}</h3> */}
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRout path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRout>
          <PrivateRout path="/orders">
            <Orders></Orders>
          </PrivateRout>
          <PrivateRout path="/admin">
            <Admin></Admin>
          </PrivateRout>
          <Route path="/Details">
            <Details></Details>
          </Route>
          <PrivateRout path="/manageProducts">
            <ManageProducts></ManageProducts>
          </PrivateRout>
          <PrivateRout path="/addProduct">
            <AddProduct></AddProduct>
          </PrivateRout>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
