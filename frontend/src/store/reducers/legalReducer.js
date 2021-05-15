import { GET_ISSUED_TOKENS, SWITCH_TABLE_TYPE, POST_ISSUED_TOKEN } from '../actions/actionTypes'

const defaultStore = {
    issuedTokens : [],
    tableType : 'issued_tokens'
}

export default function legalReducer (store = defaultStore, action) {

    switch (action.type) {

        case GET_ISSUED_TOKENS:
            return {
                ...store, 
                issuedTokens : action.payload
            }

        case POST_ISSUED_TOKEN:
            return {
                ...store, 
                issuedTokens : [...store.issuedTokens, action.payload]
            }

        case SWITCH_TABLE_TYPE:
            return {
                ...store, 
                tableType : action.payload
            }
        
        default:
            return store
    }

}