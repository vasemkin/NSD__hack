import { BLOCK_USER, CREATE_ADMIN } from '../actions/actionTypes'

const defaultStore = {
    blockedUsers : [],
    admins : []
}

export default function legalReducer (store = defaultStore, action) {

    switch (action.type) {

        case BLOCK_USER:
            return {
                ...store, 
                blockedUsers : [...store.blockedUsers, action.payload]
            }

        case CREATE_ADMIN:
            return {
                ...store, 
                admins : [...store.admins, action.payload]
            }

        default:
            return store
    }

}