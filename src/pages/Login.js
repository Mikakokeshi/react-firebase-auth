
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import {push} from 'connected-react-router';
import "./Login.css";
import { googleSignInitiate, fbSignInitiate , loginInitiate } from "../redux/action";
const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
    })
    const {email, password} = state

    const {currentUser} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const history = useHistory();
    
    useEffect(() => {
        if(currentUser){
            history.push('/')
        }
    },[currentUser, history])


    const handleGoogleSignIn = () => {
        dispatch(googleSignInitiate());
    };

    const handleFBSignIn = () => { 
        dispatch(fbSignInitiate());
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password){
            return;
        }
        dispatch(loginInitiate(email, password));

        setState({email: "", password: ""})
    };
    const handleChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value})
    };
        return(
            <div id="logreg-forms">
                <form className="form-signin" onSubmit={handleSubmit}>
                <h1 style={{textAlign: "center"}}>Sign in</h1>
                <div className="social-login">
                    <button 
                        className="btn google-btn social-btn" 
                        onClick={handleGoogleSignIn} 
                        type="button"
                    >
                        <span>
                            <i className="fab fa-google-plus-g">Signin width Google+</i>
                        </span>
                    </button> 
                    <button 
                        className="btn facebook-btn social-btn" 
                        onClick={handleFBSignIn} 
                        type="button"
                    >
                        <span>
                            <i className="fab fa-facebook-f">Signin width facebook+</i>
                        </span>
                    </button>
                </div>
                    <p style={{textAlign: "center"}}>OR</p>
                    <input 
                        type="email" 
                        id="inputEmail" 
                        placeholder="email adress"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />
                    <input 
                        type="password" 
                        id="inputPassword" 
                        placeholder="password"
                        className="form-control"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <button type="submit" className="btn btn-submit btn-secondary">
                        <i className="fas fa-sign-in-alt"></i> Sign In
                    </button>
                    <hr />
                    <p>Don't have an account</p>
                    <Link to="/register">
                        <button className="btn btn-submit btn-primary" type="button" id="btn-signup">
                            <i className="fas fa-user-plus"></i> Sign Up New Account
                        </button>
                        
                    </Link>
                </form>    

            </div>
        )

}

export default  Login