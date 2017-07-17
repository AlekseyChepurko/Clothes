/**
 * Created by Алексей on 18.07.2017.
 */
import * as actions from '../constants/ActionTypes'

// Side Menu
export const openSideMenu =()=>({
    type: actions.OPEN_SIDE_MENU
});

export const closeSideMenu =()=>({
    type: actions.CLOSE_SIDE_MENU
});
