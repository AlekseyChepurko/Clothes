/**
 * Created by Алексей on 11.07.2017.
 */

import {
    SET_ACTIVE_ITEM,
    TOGGLE_AFTER_ANIMATION,
    TOGGLE_ITEMS_SELECT_MENU,
    CLOSE_ITEMS_SELECT_MENU} from '../constants/ActionTypes'

const initialState = {
    isOpen: true,
    activeItem: {},
    isOpenAfterAnimation: true,
};

const itemSelectMenu = (state = initialState, action)=>{
    switch (action.type){
        case TOGGLE_ITEMS_SELECT_MENU: return {
            ...state,
            isOpen: !state.isOpen};
        case CLOSE_ITEMS_SELECT_MENU: return {
            ...state,
            isOpen: false};
        case TOGGLE_AFTER_ANIMATION: {
            return {
                ...state,
                isOpenAfterAnimation: state.isOpen
            }
        }
        default:
            return state;
    }
};

export default itemSelectMenu