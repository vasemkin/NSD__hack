import { BLOCK_USER, APPROVE_USER, DECLINE_USER, GET_REGISTRATION_REQUESTS } from './actionTypes'
import axios from 'axios'

export const blockUserCreator = (token) => { 
    return{
        type : BLOCK_USER,
        payload : token
    }
}

export const approveUserCreator = (uuid) => {
    return{
        type : APPROVE_USER,
        payload : uuid
    }
}

export const approveUser = (uuid) => {
    return async dispatch => {
        const url = `http://b9a882142e40.ngrok.io/myapp/admin/user/${uuid}/approve`

        try {
            await axios({
                method: 'post',
                url: url
            })
            
            dispatch(approveUserCreator(uuid))
        } catch (error) {
            // fail
        }
    }
}

export const declineUserCreator = (uuid) => {
    return{
        type : DECLINE_USER,
        payload : uuid
    }
}

export const declineUser = (uuid) => {
    return async dispatch => {
        const url = `http://b9a882142e40.ngrok.io/myapp/admin/user/${uuid}/deny`

        try {
            await axios({
                method: 'post',
                url: url
            })
            
            dispatch(declineUserCreator(uuid))
        } catch (error) {
            // fail
        }
    }

}

export const getRegistrationRequestsCreator = (requests) => {
    return{
        type : GET_REGISTRATION_REQUESTS,
        payload : requests.pendingUsers
    }
}

export const getRegistrationRequests = () => {
    return async dispatch => {
        const url = `http://b9a882142e40.ngrok.io/myapp/admin/user/pending/list`

        const res = await axios.get(url)
        
        if (res.status === 200) {
            dispatch(getRegistrationRequestsCreator(res.data))
        } else {
            // error
        }
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
            
            dispatch(blockUserCreator(uuid))
        } catch (error) {
            // fail
        }
    }
}