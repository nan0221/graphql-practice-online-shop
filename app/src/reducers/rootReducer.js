import { combineReducers } from 'redux';
import editProductReducer from './editProductReducer';
import loginReducer from './loginReducer'
import shoppingCartReducer from './shoppingCartReducer'

export default combineReducers({
    editProductReducer,
    loginReducer,
    shoppingCartReducer
});