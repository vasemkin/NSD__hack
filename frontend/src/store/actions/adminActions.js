import { 
    BLOCK_USER, APPROVE_USER, DECLINE_USER, 
    GET_REGISTRATION_REQUESTS, GET_TOKEN_APPROVE_REQUESTS, ALLOW_TOKEN_ISSUE 
} from './actionTypes'

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

const allowTokenIssueDispatcher = (uuid, name) => {
    return{
        type : ALLOW_TOKEN_ISSUE,
        payload : {
            uuid : uuid,
            name : name
        }
    }
}

export const allowTokenIssue = (uuid, name) => {
    return async dispatch => {
        const url = `http://b9a882142e40.ngrok.io/myapp/issued_tokens/${uuid}/${name}/accept`

        try {
            await axios({
                method: 'post',
                url: url
            })
            
            dispatch(allowTokenIssueDispatcher(uuid, name))
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

export const getTokenApproveRequestsCreator = (tokens) => {
    return{
        type : GET_TOKEN_APPROVE_REQUESTS,
        payload : tokens
    }
}

export const getTokenApproveRequests = () => {
    return async dispatch => {
        const url = `http://b9a882142e40.ngrok.io/myapp/tokens/issued_tokens/pending`

        const res = await axios.get(url)
        console.log(res)
        
        if (res.status === 200) {
            dispatch(getTokenApproveRequestsCreator(res.data))
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