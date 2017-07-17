/**
 * Created by Алексей on 11.07.2017.
 */

import {
    SET_ACTIVE_ITEM,
    ADD_ITEM,
    REMOVE_ITEM,
    TOGGLE_AFTER_ANIMATION,
    TOGGLE_ITEMS_SELECT_MENU,
    CLOSE_ITEMS_SELECT_MENU} from '../constants/ActionTypes'

const initialState = {
    isOpen: true,
    activeItem: {},
    isOpenAfterAnimation: true,
    addedItems: []
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
            addedItems: addItem(state.addedItems, action.item),
            activeItem: action.item};
        case ADD_ITEM: return {
            ...state,
            addedItems: addItem(state.addedItems, action.item)
        };
        case REMOVE_ITEM: return {
                    ...state,
                    addedItems: state.addedItems.filter((elem)=>!(elem.name === action.item.name))
                };
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

const addItem = (items, item)=>{
    if (items.find((elem)=>elem.name === item.name))
    {return items;} else
    {return [...items, item];}
};

export default itemSelectMenu