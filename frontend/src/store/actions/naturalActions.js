import { SWITCH_NATURAL_TABLE_TYPE } from '../actions/actionTypes'

export const switchNaturalTableType = (type) => {
    return{
        type : SWITCH_NATURAL_TABLE_TYPE,
        payload : type
    }
}