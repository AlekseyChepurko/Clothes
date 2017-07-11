/**
 * Created by Алексей on 11.07.2017.
 */

import {TOGGLE_ITEMS_SELECT_MENU} from '../constants/ActionTypes'

const initialState = {
    isOpen: true
};

const itemSelectMenu = (state = initialState, action)=>{
    switch (action.type){
        case TOGGLE_ITEMS_SELECT_MENU: return {isOpen: !state.isOpen};
        default:
            return state;
    }
};

export default itemSelectMenu