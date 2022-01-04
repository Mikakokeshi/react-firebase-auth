import { combineReducers } from "redux";
import userReducer from "./reducer";

const rootRreducer = combineReducers( {
    user: userReducer
})

export default rootRreducer;