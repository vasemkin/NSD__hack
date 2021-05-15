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

export const authenticateUserCreator = (uuid, userAuthenticated) => {
    return {
        type : AUTHENTICATE_USER,
        payload : {
            uuid : uuid,
            userAuthenticated : userAuthenticated
        }
    }
}

export const authenticateUser = (body) => {
    const fakeServerResponse = (req) => {
        const fakeData = {
            id : 'tadzhik',
            passHash : 'тут типа хешануло мой запрос',
            data : 'приколы'
        }

        if (req.uuid == fakeData.id) {
            return {
                status : 200
            }
        } else {
            return {
                status : 401
            }
        }

    }

    return async dispatch => {
        const url = 'tbd'
        const fakeRequest = fakeServerResponse(body)
        if (fakeRequest.status === 200) {
            dispatch(authenticateUserCreator(body.uuid, true))
            dispatch(showGreeting())
        } else {
            dispatch(authenticateUserCreator(body.uuid, false))
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
    const fakeServerResponse = () => {
        return {
            status : 200
        }
    }

    return async dispatch => {
        const url = 'tbd'
        const fakeRequest = fakeServerResponse(body)
        if (fakeRequest.status === 200) {
            dispatch(registerUserCreator(body.uuid, body.type, true))
            dispatch(showGreeting())
        } else {
            dispatch(registerUserCreator(body.uuid, body.type, false))
        }
    }
}

// export const getTodosCreator = (todos) => {
//     return {
//         type: GET_TODOS,
//         payload: todos
//     }
// }

// export const getTodos = () => {
//     return async dispatch => {
//         const baseURL = `https://jsonplaceholder.typicode.com/todos/`
//         const response = await axios.get(baseURL)
//         dispatch(getTodosCreator(response.data))
//     }
// }