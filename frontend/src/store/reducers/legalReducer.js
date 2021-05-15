import { GET_ISSUED_TOKENS } from '../actions/actionTypes'

const defaultStore = {
    issuedTokens : null
}

export default function legalReducer (store = defaultStore, action) {

    switch (action.type) {

        case GET_ISSUED_TOKENS:
            return {
                ...store, 
                issuedTokens : action.payload
            }
        
            default:
                return store
    }

}