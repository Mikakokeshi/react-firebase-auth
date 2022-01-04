
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import {push} from 'connected-react-router';
import "./Register.css";
import { registerInitiate } from "../redux/action";
const Register = () => {
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })

    const {currentUser} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        if(currentUser){
            history.push('/')
        }
    },[currentUser, history])

    const {email, password, displayName, passwordConfirm} = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordConfirm){
            return;
        }
        dispatch(registerInitiate(email, password, displayName));
        setState({email: "", displayName: "", password: "", passwordConfirm: ""});
    };
    const handleChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value})
    };
        return(
            <div id="register-form">
                <form className="form-signup" onSubmit={handleSubmit}>
                <h1 style={{textAlign: "center"}}>Sign up</h1>

                    <input 
                        type="text" 
                        id="displayName" 
                        placeholder="Full Name"
                        className="form-control"
                        name="displayName"
                        onChange={handleChange}
                        value={displayName}
                        required
                    />
                    <input 
                        type="email" 
                        id="user-email " 
                        placeholder="email adress"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />
                    <input 
                        type="password" 
                        id="passwordConfirm" 
                        placeholder="Repeat password"
                        className="form-control"
                        name="passwordConfirm"
                        onChange={handleChange}
                        value={passwordConfirm}
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
                    <button type="submit" className="btn btn-submit btn-block btn-secondary">
                        <i className="fas fa-user-plus"></i> Sign Up
                    </button>
                    <Link to="/login">
                        <button className="btn btn-submit btn-primary" type="button" id="btn-signup" >
                            <i className="fas fa-angle-left"></i> Back
                        </button>
                        
                    </Link>
                </form>    

            </div>
        )

}

export default  Register