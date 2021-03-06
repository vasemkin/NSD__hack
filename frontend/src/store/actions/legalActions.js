import axios from 'axios'
import { GET_ISSUED_TOKENS, SWITCH_TABLE_TYPE, POST_ISSUED_TOKEN, GET_PURCHASED_TOKENS } from './actionTypes'

export const switchTableType = (type) => {
    return{
        type : SWITCH_TABLE_TYPE,
        payload : type
    }
}

export const getIssuedTokensCreator = (tokens) => {
    return{
        type : GET_ISSUED_TOKENS,
        payload : tokens
    }
}

export const getIssuedTokens = (uuid) => {
    return async dispatch => {
        const url = `http://87823f79f571.ngrok.io/myapp/tokens/issued_tokens/${uuid}`

        const res = await axios.get(url)
        
        if (res.status === 200) {
            dispatch(getIssuedTokensCreator(res.data))
        } else {
            // error
        }
    }
}

export const getPurchasedTokensCreator = (tokens) => {
    return{
        type : GET_PURCHASED_TOKENS,
        payload : tokens
    }
}

export const getPurchasedTokens = (uuid) => {
    return async dispatch => {
        const url = `http://87823f79f571.ngrok.io/myapp/tokens/purchased_tokens/${uuid}`

        const res = await axios.get(url)
        
        if (res.status === 200) {
            dispatch(getPurchasedTokensCreator(res.data))
        } else {
            // error
        }
    }
}

export const postIssuedTokenCreator = (token) => { 
    return{
        type : POST_ISSUED_TOKEN,
        payload : token
    }
}

export const postIssuedToken = (token) => {
    return async dispatch => {
        const url = `http://87823f79f571.ngrok.io/myapp/tokens/issued_tokens/`

        try {
            await axios({
                method: 'post',
                url: url,
                data: token
            })
            
            dispatch(postIssuedTokenCreator(token))
        } catch (error) {
            // fail
        }
    }
}

export const getAwaitingPurchaseTokens = (uuid) => {
    return async dispatch => {
        const url = `http://87823f79f571.ngrok.io/myapp/tokens/issued_tokens/${uuid}`

        const res = await axios.get(url)
        
        if (res.status === 200) {
            dispatch(getIssuedTokensCreator(res.data))
        } else {
            // error
        }
    }
}