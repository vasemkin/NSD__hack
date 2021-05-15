import { GET_MARKET_TOKENS } from '../actions/actionTypes'

const defaultStore = {
    marketTokens : []
}

export default function legalReducer (store = defaultStore, action) {

    switch (action.type) {

        case GET_MARKET_TOKENS:
            return {
                ...store, 
                marketTokens : action.payload
            }

        default:
            return store
    }

}