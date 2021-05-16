import { GET_MARKET_TOKENS, CREATE_BUY_REQUEST } from '../actions/actionTypes'

const defaultStore = {
    marketTokens : [],
    buyRequests : []
}

export default function marketReducer (store = defaultStore, action) {

    switch (action.type) {

        case GET_MARKET_TOKENS:
            return {
                ...store, 
                marketTokens : action.payload
            }

        case CREATE_BUY_REQUEST:
            return {
                ...store, 
                buyRequests : [...store.buyRequests, action.payload]
            }

        default:
            return store
    }

}