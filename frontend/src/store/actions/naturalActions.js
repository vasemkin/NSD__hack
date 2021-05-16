import { SWITCH_NATURAL_TABLE_TYPE, GET_PURCHASED_TOKENS_NATURAL } from '../actions/actionTypes'
import axios from 'axios'

export const switchNaturalTableType = (type) => {
    return{
        type : SWITCH_NATURAL_TABLE_TYPE,
        payload : type
    }
}

export const getPurchasedTokensNaturalCreator = (tokens) => {
    return{
        type : GET_PURCHASED_TOKENS_NATURAL,
        payload : tokens
    }
}

export const getPurchasedTokensNatural = (uuid) => {
    return async dispatch => {
        const url = `http://87823f79f571.ngrok.io/myapp/tokens/purchased_tokens/${uuid}`

        const res = await axios.get(url)
        
        if (res.status === 200) {
            dispatch(getPurchasedTokensNaturalCreator(res.data))
        } else {
            // error
        }
    }
}