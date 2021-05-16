import { BLOCK_USER, CREATE_ADMIN, APPROVE_USER, DECLINE_USER, GET_REGISTRATION_REQUESTS} from '../actions/actionTypes'

const defaultStore = {
    blockedUsers : [],
    admins : [],
    approvedUsers : [],
    registrationRequests : []
}

export default function legalReducer (store = defaultStore, action) {

    switch (action.type) {

        case BLOCK_USER:
            return {
                ...store, 
                blockedUsers : [...store.blockedUsers, action.payload]
            }

        case APPROVE_USER:
            const regReqApp = store.registrationRequests.filter(function(value, index, arr){ 
                return value !== action.payload;
            });
            return {
                ...store, 
                approvedUsers : [...store.approvedUsers, action.payload],
                registrationRequests : regReqApp
            }

        case DECLINE_USER:
            const regReqDec = store.registrationRequests.filter(function(value, index, arr){ 
                return value !== action.payload;
            });
            return {
                ...store, 
                registrationRequests : regReqDec
            }

        case GET_REGISTRATION_REQUESTS:
            return {
                ...store, 
                registrationRequests : action.payload
            }

        case CREATE_ADMIN:
            return {
                ...store, 
                admins : [...store.admins, action.payload]
            }

        default:
            return store
    }

}