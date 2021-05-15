import { GET_MARKET_TOKENS } from './actionTypes'
import axios from 'axios'

export const getMarketTokensCreator = (tokens) => {
    return{
        type : GET_MARKET_TOKENS,
        payload : tokens
    }
}

export const getMarketTokens = () => {
    return async dispatch => {
        const url = `http://3e2a7e2c3826.ngrok.io/myapp/tokens/issued_tokens/search`

        const res = await axios.get(url)
        
        if (res.status === 200) {
            dispatch(getMarketTokensCreator(res.data))
        } else {
            // error
        }
    }
}