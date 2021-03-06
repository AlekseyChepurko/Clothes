/**
 * Created by Алексей on 18.07.2017.
 */
import * as actions from '../constants/ActionTypes'

// Order
export const addItem = (item) => ({
    type: actions.ADD_ITEM,
    item
});

export const removeItem = (item) => ({
    type: actions.REMOVE_ITEM,
    item
});

export const setOrder=(order) => ({
    type: actions.SET_ORDER,
    order
});

export const initOrderStructure = structure => ({
    type: actions.INIT_ORDER_STRUCTURE,
    structure
});

export const setItemParameterValue = (payload)=>({
    type: actions.SET_ITEM_PARAMETER_VALUE,
    payload
});