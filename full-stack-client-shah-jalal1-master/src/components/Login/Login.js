import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Button } from 'react-bootstrap';
import { FaBeer, FaGoogle } from 'react-icons/fa';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

const provider = new firebase.auth.GoogleAuthProvider();


const Login = () => {
    const [loggedInUser, setLoggedInUser]  = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSiginedIn: false,
        gName:'',
        email: '',
        photo: ''
    })

    const handleSignIn = () => {
        
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName, photoURL, email} = result.user;
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                const signedInUser = {
                    isSiginedIn: true,
                    gName:displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
                console.log(signedInUser);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        // <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="d-flex justify-content-md-center align-items-center vh-100">
            {/* <h1>Login</h1><br/> */}
            <Button onClick={handleSignIn}><FaGoogle size={30} color="red"/> Sign In with google</Button>
        </div>
    );
};

export default Login;