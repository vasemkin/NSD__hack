import { 
    BLOCK_USER, CREATE_ADMIN, APPROVE_USER, 
    DECLINE_USER, GET_REGISTRATION_REQUESTS, GET_TOKEN_APPROVE_REQUESTS, 
    ALLOW_TOKEN_ISSUE
} from '../actions/actionTypes'

const defaultStore = {
    blockedUsers : [],
    admins : [],
    approvedUsers : [],
    registrationRequests : [],
    tokenApproveRequests : [],
    permittedTokens : []
}

export default function legalReducer (store = defaultStore, action) {

    switch (action.type) {

        case BLOCK_USER:
            return {
                ...store, 
                blockedUsers : [...store.blockedUsers, action.payload]
            }

        case ALLOW_TOKEN_ISSUE:
            const tokApp = store.registrationRequests.filter(function(value, index, arr){ 
                return value.name !== action.payload.name
            });
            return {
                ...store, 
                permittedTokens : [...store.blockedUsers, action.payload],
                tokenApproveRequests : tokApp
            }

        case APPROVE_USER:
            const regReqApp = store.registrationRequests.filter(function(value, index, arr){ 
                return value !== action.payload
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

        case GET_TOKEN_APPROVE_REQUESTS:
            return {
                ...store, 
                tokenApproveRequests : action.payload
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