import { BLOCK_USER } from './actionTypes'
import axios from 'axios'

export const blockUserCreator = (token) => { 
    return{
        type : BLOCK_USER,
        payload : token
    }
}

export const blockUser = (uuid) => {
    return async dispatch => {
        const url = `http://b9a882142e40.ngrok.io/myapp/ban_user/${uuid}`

        try {
            await axios({
                method: 'post',
                url: url
            })
            
            dispatch(blockUserCreator(token))
        } catch (error) {
            // fail
        }
    }
}