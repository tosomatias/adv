import {combineReducers}  from 'redux';
import brutosReducer from './brutosReducer';

export default combineReducers({
    brutos:brutosReducer
});