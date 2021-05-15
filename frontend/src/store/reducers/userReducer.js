import { SWITCH_LOGIN_REGISTER, AUTHENTICATE_USER, REGISTER_USER, SHOW_GREETING } from '../actions/actionTypes'

const defaultStore = {
    uuid : null,
    type : null,
    loginTriggered : true,
    userAuthenticated : false,
    greetingShown : false
}

export default function testReducer (store = defaultStore, action) {

    switch (action.type) {

        case SWITCH_LOGIN_REGISTER:
            const switchLoginRegisterNew = !store.loginTriggered
            return {
                ...store, 
                loginTriggered : switchLoginRegisterNew
            }

        case SHOW_GREETING:
            const switchGreetingShown = !store.greetingShown
            return {
                ...store, 
                greetingShown : switchGreetingShown
            }

        case AUTHENTICATE_USER:
            if (action.payload.userAuthenticated) {
                return {
                    ...store, 
                    uuid : action.payload.uuid,
                    userAuthenticated : action.payload.userAuthenticated
                }
            } else {
                return {
                    ...store, 
                    uuid : action.payload.uuid
                }
            }

        case REGISTER_USER:
            if (action.payload.userAuthenticated) {
                return {
                    ...store, 
                    uuid : action.payload.uuid,
                    type : action.payload.type,
                    userAuthenticated : action.payload.userAuthenticated
                }
            } else {
                return {
                    ...store, 
                    uuid : action.payload.uuid,
                    type : action.payload.type,
                }
            }
    
        default:
            return store
    }

}