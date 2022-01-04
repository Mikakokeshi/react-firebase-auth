import React from "react"
import {Link} from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { logoutInitiate } from "../redux/action";


const Home = () => {
    const {currentUser} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleAuth = () => {
        if(currentUser){
            dispatch(logoutInitiate())
            console.log(logoutInitiate)
        }
    }
    return (
        <>  
            <h2>Welcome to Our Site</h2>
            <br />
            <button className="btn btn-danger" onClick={handleAuth}>Logout</button>
        </>
    )
}

export default  Home