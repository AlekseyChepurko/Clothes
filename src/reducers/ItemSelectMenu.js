/**
 * Created by Алексей on 11.07.2017.
 */

import {
    SET_ACTIVE_ITEM,
    TOGGLE_ITEMS_SELECT_MENU,
    CLOSE_ITEMS_SELECT_MENU} from '../constants/ActionTypes'

const initialState = {
    isOpen: true,
    activeItem: {}
};

const itemSelectMenu = (state = initialState, action)=>{
    switch (action.type){
        case TOGGLE_ITEMS_SELECT_MENU: return {
            ...state,
            isOpen: !state.isOpen};
        case CLOSE_ITEMS_SELECT_MENU: return {
            ...state,
            isOpen: false};
        case SET_ACTIVE_ITEM: return {
            ...state,
            activeItem: action.item};

        default:
            return state;
    }
};

export default itemSelectMenu