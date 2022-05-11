import { createStore } from "redux";
import {combineReducers } from "redux";
import configureReducer from "../reducer/configureReducer";
const configureStore = () => {
    const store = createStore(combineReducers(
        {
           tasks:configureReducer
        } 
    ))
    console.log(store)
   return store;
   }
   export default configureStore;