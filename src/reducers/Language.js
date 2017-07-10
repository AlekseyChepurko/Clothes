/**
 * Created by Алексей on 10.07.2017.
 */
import {CHANGE_LANGUAGE} from '../constants/ActionTypes'

const initialState = {
    lang: "en"
};

const language = (state = initialState, action)=>{
    switch (action.type){
        case CHANGE_LANGUAGE: return {lang: action.lang};
        default:
            return state;
    }
};

export default language