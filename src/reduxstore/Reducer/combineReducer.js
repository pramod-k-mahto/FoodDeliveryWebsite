
import changeCartItem from "./reducer";
import product from "./reducer2";

import { combineReducers } from 'redux';

const root=combineReducers({
    changeCartItem,
    product

})

export default root;