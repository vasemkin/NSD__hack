import { combineReducers } from 'redux'
import userReducer from './userReducer'
import legalReducer from './legalReducer'
import marketReducer from './marketReducer'
import adminReducer from './adminReducer'


export default combineReducers({
    user : userReducer,
    legal : legalReducer,
    market : marketReducer,
    admin : adminReducer
})