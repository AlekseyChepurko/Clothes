/**
 * Created by Алексей on 09.07.2017.
 */
import {OPEN_SIDE_MENU, CLOSE_SIDE_MENU} from '../constants/ActionTypes'

const initialState = {
    isOpen: false
};

const sideMenu = (state = initialState, action)=>{
    switch (action.type){
        case OPEN_SIDE_MENU: return {isOpen: true};
        case CLOSE_SIDE_MENU: return {isOpen: false};
        default:
            return state;
    }
};

export default sideMenu