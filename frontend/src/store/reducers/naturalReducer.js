import { SWITCH_NATURAL_TABLE_TYPE } from '../actions/actionTypes'

const defaultStore = {
    tableType : 'purchased_tokens'
}

export default function legalReducer (store = defaultStore, action) {

    switch (action.type) {

        case SWITCH_NATURAL_TABLE_TYPE:
            return {
                ...store, 
                tableType : action.payload
            }
        
        default:
            return store
    }

}