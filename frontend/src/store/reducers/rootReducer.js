import { combineReducers } from 'redux'
import userReducer from './userReducer'
import legalReducer from './legalReducer'

export default combineReducers({
    user : userReducer,
    legal : legalReducer
})