/**
 * Created by Алексей on 09.07.2017.
 */
import * as actions from '../constants/ActionTypes'

// Side Menu
export const openSideMenu =()=>({
    type: actions.OPEN_SIDE_MENU
});

export const closeSideMenu =()=>({
    type: actions.CLOSE_SIDE_MENU
});


// Language
export const changeLanguage = (lang) =>({
    type: actions.CHANGE_LANGUAGE,
    lang
});


// ItemSelectMenu
export const toggleItemsSelectMenu = () => ({
    type: actions.TOGGLE_ITEMS_SELECT_MENU
});

export const toggleIsOpenAfterAnimation = ()=>({
    type: actions.TOGGLE_AFTER_ANIMATION
});

export const closeItemsSelectMenu = () => ({
    type: actions.CLOSE_ITEMS_SELECT_MENU
});

export const setActiveItem = (item) => ({
    type: actions.SET_ACTIVE_ITEM,
    item
});

export const addItem = (item) => ({
    type: actions.ADD_ITEM,
    item
});

export const removeItem = (item) => ({
    type: actions.REMOVE_ITEM,
    item
});
