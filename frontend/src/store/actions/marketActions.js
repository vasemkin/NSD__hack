import { GET_MARKET_TOKENS, CREATE_BUY_REQUEST } from './actionTypes'
import axios from 'axios'

export const getMarketTokensCreator = (tokens) => {
    return{
        type : GET_MARKET_TOKENS,
        payload : tokens
    }
}

export const getMarketTokens = () => {
    return async dispatch => {
        const url = `http://87823f79f571.ngrok.io/myapp/tokens/issued_tokens/search`

        const res = await axios.get(url)
        
        if (res.status === 200) {
            dispatch(getMarketTokensCreator(res.data))
        } else {
            // error
        }
    }
}

export const createBuyRequestCreator = (buyRequest) => {
    return{
        type : CREATE_BUY_REQUEST,
        payload :buyRequest
    }
}

export const createBuyRequest = (body) => {
    return async dispatch => {
        const url = `http://87823f79f571.ngrok.io/myapp/tokens/awaiting_purchase_tokens`

        try {
            await axios({
                method: 'post',
                url: url,
                data: body
            })
            
            dispatch(createBuyRequestCreator(body))
        } catch (error) {
            // fail
        }
    }
}