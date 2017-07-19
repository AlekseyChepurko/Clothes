/**
 * Created by chep on 19.07.17.
 */

import {
    INIT_ORDER_STRUCTURE
} from '../constants/ActionTypes'

const initialState =  [];

const orderStructure = (state = initialState, action)=>{
    switch (action.type){
            case INIT_ORDER_STRUCTURE: return action.structure;
        default:
            return state;
    }
};
export default orderStructure