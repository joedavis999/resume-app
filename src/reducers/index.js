import { combineReducers } from 'redux';
import HomeReducer from './reducer';
//combineReducers can combine all the reducer files
const Reducers = combineReducers({
    homeReducer: HomeReducer //HomeReducer file can be accessed in the term homeReducer
});

export default Reducers;