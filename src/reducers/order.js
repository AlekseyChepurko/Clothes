/**
 * Created by Алексей on 17.07.2017.
 */
import {
    ADD_ITEM,
    REMOVE_ITEM,
    SET_ACTIVE_ITEM,
    SET_ORDER
    } from '../constants/ActionTypes'

const initialState =  [];

const order = (state = initialState, action)=>{
    switch (action.type){
        case ADD_ITEM: return addItem(state, action.item);

        case REMOVE_ITEM: return state.filter((elem)=>!(elem.name === action.item.name));

        case SET_ACTIVE_ITEM: return addItem(state, action.item);

        case SET_ORDER: return action.order;
        default:
            return state;
    }
};

const addItem = (items, item)=>{
    return items.find((elem)=>elem.name === item.name)
        ? items
        : [...items, item]
};
export default order