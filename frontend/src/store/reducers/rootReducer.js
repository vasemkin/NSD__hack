import { combineReducers } from 'redux'
import userReducer from './userReducer'
import legalReducer from './legalReducer'
import marketReducer from './marketReducer'


export default combineReducers({
    user : userReducer,
    legal : legalReducer,
    market : marketReducer
})