import { combineReducers } from 'redux'
import userReducer from './userReducer'
import legalReducer from './legalReducer'
import marketReducer from './marketReducer'
import adminReducer from './adminReducer'
import naturalReducer from './naturalReducer'

export default combineReducers({
    user : userReducer,
    legal : legalReducer,
    market : marketReducer,
    admin : adminReducer,
    natural : naturalReducer
})