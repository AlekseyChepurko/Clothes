/**
 * Created by Алексей on 18.07.2017.
 */
import * as actions from '../constants/ActionTypes'

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

export const setActiveItemParameter=(param) =>({
    type: actions.SET_ACTIVE_ITEM_PARAMETER,
    param
});