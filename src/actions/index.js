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

export const changeLanguage = (lang) =>({
    type: actions.CHANGE_LANGUAGE,
    lang
});

export const toggleItemsSelectMenu = () => ({
    type: actions.TOGGLE_ITEMS_SELECT_MENU
});

export const closeItemsSelectMenu = () => ({
    type: actions.CLOSE_ITEMS_SELECT_MENU
});

export const setActiveItem = (item) => ({
    type: actions.SET_ACTIVE_ITEM,
    item
});