import { SWITCH_NATURAL_TABLE_TYPE, GET_PURCHASED_TOKENS_NATURAL } from '../actions/actionTypes'

const defaultStore = {
    purchasedTokens : [],
    tableType : 'purchased_tokens'
}

export default function legalReducer (store = defaultStore, action) {

    switch (action.type) {

        case GET_PURCHASED_TOKENS_NATURAL:
            return {
                ...store, 
                purchasedTokens : action.payload
            }

        case SWITCH_NATURAL_TABLE_TYPE:
            return {
                ...store, 
                tableType : action.payload
            }
        
        default:
            return store
    }

}