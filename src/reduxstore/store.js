
import root from './Reducer/combineReducer'
import { createStore } from 'redux';

const store=createStore(root)

export default store;