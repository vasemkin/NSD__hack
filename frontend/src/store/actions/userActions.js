import axios from 'axios'
import { SWITCH_LOGIN_REGISTER, AUTHENTICATE_USER, 
        REGISTER_USER, SHOW_GREETING, WRONG_AUTH_DATA, TOGGLE_MARKET } from './actionTypes'

export const switchLoginRegister = () => {
    return {
        type : SWITCH_LOGIN_REGISTER
    }
}

export const toggleMarket = () => {
    return{
        type : TOGGLE_MARKET
    }
}

export const showGreeting = () => {
    return {
        type : SHOW_GREETING
    }
}

export const wrongAuthData = () => {
    return {
        type : WRONG_AUTH_DATA
    }
}

export const authenticateUserCreator = (uuid, type, userAuthenticated) => {
    return {
        type : AUTHENTICATE_USER,
        payload : {
            uuid : uuid,
            type : type,
            userAuthenticated : userAuthenticated
        }
    }
}

export const authenticateUser = (body) => {
    return async dispatch => {
        const url = `http://b9a882142e40.ngrok.io/myapp/user/login`
        
        try {
            const res = await axios({
                method: 'post',
                url: url,
                data: body
            })

            dispatch(authenticateUserCreator(body.id, res.data.entityType, true))
            dispatch(showGreeting())
        } catch (error) {
            dispatch(authenticateUserCreator(body.id, null, false))
            dispatch(wrongAuthData())
        }
    }
}

export const registerUserCreator = (uuid, type, userAuthenticated) => {
    return {
        type : REGISTER_USER,
        payload : {
            uuid : uuid,
            type : type,
            userAuthenticated : userAuthenticated
        }
    }
}

export const registerUser = (body) => {
    return async dispatch => {
        const url = `http://b9a882142e40.ngrok.io/myapp/user/register`
        try {
            await axios({
                method: 'post',
                url: url,
                data: body
            })
            
            dispatch(registerUserCreator(body.id, body.entity_type, true))
            dispatch(showGreeting())
        } catch (error) {
            dispatch(registerUserCreator(body.id, body.entity_type, false))
            dispatch(wrongAuthData())
        }
    }
}