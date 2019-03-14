import { combineReducers } from 'redux';
import editProductReducer from './editProductReducer';
import loginReducer from './loginReducer'

export default combineReducers({
    editProductReducer,
    loginReducer
});