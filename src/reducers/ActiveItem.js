/**
 * Created by chep on 20.07.17.
 */

import {SET_ACTIVE_ITEM, SET_ACTIVE_ITEM_PARAMETER} from '../constants/ActionTypes'


const initialState={
    name: 'jacket',
    type: 1,
    parameter: 'material'
};

const activeItem = (state = initialState, action)=>{
    switch (action.type){
        case SET_ACTIVE_ITEM: return {
            ...state,
            name: action.item.name,
            type: action.item.type,
            parameter: initialState.parameter
        };
        case SET_ACTIVE_ITEM_PARAMETER: {
            return {
                ...state,
                parameter: action.param.name
            }
        };
        default:
            return state;
    }
};

export default activeItem