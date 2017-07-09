/**
 * Created by Алексей on 09.07.2017.
 */
import * as actions from '../constants/ActionTypes'

export const openSideMenu =()=>({
    type: actions.OPEN_SIDE_MENU
});

export const closeSideMenu =()=>({
    type: actions.CLOSE_SIDE_MENU
});