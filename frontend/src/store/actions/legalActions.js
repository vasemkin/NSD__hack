import axios from 'axios'
import { GET_ISSUED_TOKENS } from './actionTypes'

export const getIssuedTokensCreator = (tokens) => {
    return{
        type : GET_ISSUED_TOKENS,
        payload : tokens
    }
}

export const getIssuedTokens = (uuid) => {
    return async dispatch => {
        const url = `http://58c8ac3ea8fe.ngrok.io/myapp/tokens/issued_tokens/${uuid}`

        const res = await axios.get(url)
        
        if (res.status === 200) {
            dispatch(getIssuedTokensCreator(res.data))
        } else {
            // error
        }
    }
}