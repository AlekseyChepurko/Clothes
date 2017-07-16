/**
 * Created by Алексей on 09.07.2017.
 */
import {OPEN_SIDE_MENU, CLOSE_SIDE_MENU, TOGGLE_AFTER_ANIMATION} from '../constants/ActionTypes'

const initialState = {
    isOpen: false,
    isOpenAfterAnimation: false
};

const sideMenu = (state = initialState, action)=>{
    switch (action.type){
        case OPEN_SIDE_MENU: return {
            ...state,
            isOpen: true
        };
        case CLOSE_SIDE_MENU: return {
            ...state,
            isOpen: false
        };
        case TOGGLE_AFTER_ANIMATION: return{
            ...state,
            isOpenAfterAnimation: state.isOpen
        };
        default:
            return state;
    }
};

export default sideMenu