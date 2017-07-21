/**
 * Created by chep on 21.07.17.
 */

import {SET_PARAMETERS_DEPENDENCIES} from '../constants/ActionTypes'

const initialState = [];

const parametersDependencies = (state = initialState, action)=>{
    switch (action.type){
        case SET_PARAMETERS_DEPENDENCIES: return action.deps;
        default:
            return state;
    }
};

export default parametersDependencies